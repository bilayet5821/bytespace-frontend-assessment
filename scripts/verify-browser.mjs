import { chromium } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { readFile, stat, mkdir, writeFile } from 'node:fs/promises'
import { extname, resolve, join } from 'node:path'
import { tmpdir } from 'node:os'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'

const homeOnly = process.argv.includes('--home-only')
const root = resolve('dist')
const out = resolve('verification')
await mkdir(join(out, 'screenshots'), { recursive: true })
const types = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
}
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
    let file = resolve(root, `.${pathname}`)
    if (!file.startsWith(root + '/') && file !== root) throw Error('Invalid path')
    try {
      if (!(await stat(file)).isFile()) file = join(root, 'index.html')
    } catch {
      if (pathname.startsWith('/assets/')) {
        response.writeHead(404)
        response.end()
        return
      }
      file = join(root, 'index.html')
    }
    response.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream')
    response.end(await readFile(file))
  } catch {
    response.writeHead(404)
    response.end()
  }
})
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const origin = `http://127.0.0.1:${server.address().port}`
const browser = await chromium.launch({
  headless: true,
  ...(process.env.BYTESPACE_BROWSER_PATH
    ? { executablePath: process.env.BYTESPACE_BROWSER_PATH }
    : {}),
  ...(process.env.BYTESPACE_BROWSER_ARGS
    ? { args: JSON.parse(process.env.BYTESPACE_BROWSER_ARGS) }
    : {}),
})
const context = await browser.newContext({ reducedMotion: 'reduce' })
// This sandbox's Chromium does not trust its outbound proxy CA. Optional test-only
// transport uses system curl's certificate validation; no font files are bundled.
if (process.env.BYTESPACE_FONT_FETCH === 'system') {
  const cache = join(tmpdir(), 'bytespace-font-verification-cache')
  await mkdir(cache, { recursive: true })
  await context.route(/^https:\/\/(api|cdn)\.fontshare\.com\//, async (route) => {
    const url = route.request().url()
    const file = join(cache, createHash('sha256').update(url).digest('hex'))
    try {
      try {
        await stat(file)
      } catch {
        execFileSync('curl', ['-fsSL', '--max-time', '30', url, '-o', file])
      }
      await route.fulfill({
        body: await readFile(file),
        contentType: url.includes('.woff2')
          ? 'font/woff2'
          : url.includes('.woff')
            ? 'font/woff'
            : 'text/css',
      })
    } catch {
      await route.abort()
    }
  })
}
const page = await context.newPage()
const errors = [],
  failedRequests = [],
  mutations = [],
  assertions = [],
  viewportCases = [],
  accessibility = []
page.on('pageerror', (e) => errors.push(e.message))
page.on('console', (message) => {
  if (message.type() === 'error') errors.push(message.text())
})
page.on('requestfailed', (request) =>
  failedRequests.push({ url: request.url(), error: request.failure()?.errorText }),
)
page.on('request', (request) => {
  if (request.method() !== 'GET') mutations.push({ url: request.url(), method: request.method() })
})
function check(name, condition) {
  assert.ok(condition, name)
  assertions.push(name)
}
async function load(route, width = 1440, height = 1024) {
  await page.setViewportSize({ width, height })
  await page.goto(origin + route)
  await page.evaluate(() => document.fonts.ready)
  await page.locator('main').waitFor()
}
async function readyImages() {
  await page.evaluate(async () => {
    await Promise.all(
      [...document.images].map((image) => {
        image.loading = 'eager'
        return image.decode().catch(() => {})
      }),
    )
  })
}
try {
  const routes = homeOnly ? ['/'] : ['/', '/login', '/register']
  for (const route of routes) {
    for (const width of [320, 390, 768, 1024, 1440, 1920]) {
      await load(route, width, width < 768 ? 844 : 1024)
      await readyImages()
      const layout = await page.evaluate(() => ({
        viewport: innerWidth,
        document: document.documentElement.scrollWidth,
        broken: [...document.images]
          .filter((i) => !i.complete || !i.naturalWidth)
          .map((i) => i.getAttribute('src')),
      }))
      if (layout.document !== layout.viewport)
        console.log(
          await page.evaluate(() =>
            [...document.querySelectorAll('body *')]
              .filter((e) => e.getBoundingClientRect().right > innerWidth + 1)
              .map((e) => ({
                tag: e.tagName,
                class: e.className,
                right: e.getBoundingClientRect().right,
                width: e.getBoundingClientRect().width,
              }))
              .slice(-25),
          ),
        )
      assert.equal(layout.document, layout.viewport, `Overflow: ${route} at ${width}`)
      assert.deepEqual(layout.broken, [], `Broken images: ${route} at ${width}`)
      viewportCases.push({ route, width, horizontalOverflow: 0, brokenImages: 0 })
      const slug = route === '/' ? 'home' : route.slice(1)
      if (width === 1440 || width === 390) {
        await page.screenshot({
          path: join(out, 'screenshots', `${slug}-${width}.png`),
          fullPage: width === 1440,
        })
        if (route === '/' && width === 390) {
          for (const selector of [
            '.discover',
            '.professional-growth',
            '.creator-features',
            '.site-footer',
          ]) {
            await page.locator(selector).scrollIntoViewIfNeeded()
            await page.screenshot({
              path: join(out, 'screenshots', `${slug}-${width}-${selector.slice(1)}.png`),
            })
          }
        }
      }
    }
    await load(route)
    await readyImages()
    const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
    accessibility.push({
      route,
      violations: axe.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })),
      })),
    })
    assert.deepEqual(
      axe.violations,
      [],
      `Accessibility violations on ${route}: ${JSON.stringify(accessibility.at(-1))}`,
    )
    await page.reload()
    check(`Direct refresh ${route}`, (await page.locator('h1').count()) === 1)
  }
  if (!homeOnly) {
    await load('/')
    await page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'Sign In', exact: true })
      .click()
    check('Header Sign In reaches login', new URL(page.url()).pathname === '/login')
    await load('/')
    await page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'Join Us', exact: true })
      .click()
    check('Header Join Us reaches register', new URL(page.url()).pathname === '/register')
    await load('/')
    await page.getByRole('link', { name: 'Join as Creator' }).click()
    check('Creator CTA reaches register', new URL(page.url()).pathname === '/register')
    await load('/')
    await page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'Creators', exact: true })
      .click()
    check('Creators navigation reaches creator section', new URL(page.url()).hash === '#creators')
  }
  await load('/')
  check('Six featured cards', (await page.locator('.course-grid .course-card').count()) === 6)
  await page.getByRole('searchbox').fill('Figma')
  await page.getByRole('search').getByRole('button', { name: 'Search', exact: true }).click()
  check(
    'Search matches one course',
    (await page.locator('.course-grid .course-card').count()) === 1,
  )
  await page.getByRole('button', { name: 'Clear search' }).click()
  check(
    'Clear search restores six cards',
    (await page.locator('.course-grid .course-card').count()) === 6,
  )
  await page.getByRole('button', { name: 'UI/UX Design', exact: true }).click()
  check(
    'Category filters one course',
    (await page.locator('.course-grid .course-card').count()) === 1,
  )
  await page.getByRole('button', { name: 'Music', exact: true }).click()
  check(
    'Empty category explains results',
    await page.getByText('No courses match this selection.').isVisible(),
  )
  await page.getByRole('button', { name: 'Show featured courses' }).click()
  check(
    'Empty state reset restores cards',
    (await page.locator('.course-grid .course-card').count()) === 6,
  )
  await page.getByRole('button', { name: '+ More', exact: true }).click()
  check(
    'More categories expands',
    await page.getByRole('button', { name: 'IT & Software', exact: true }).isVisible(),
  )
  await page.getByRole('button', { name: '− Less', exact: true }).click()
  check(
    'More categories collapses',
    (await page.getByRole('button', { name: 'IT & Software', exact: true }).count()) === 0,
  )
  check(
    'Creator CTA routes to register',
    (await page.getByRole('link', { name: 'Join as Creator' }).getAttribute('href')) ===
      '/register',
  )
  await page.getByLabel('Email for newsletter').fill('bad-email')
  check(
    'Newsletter rejects invalid email',
    await page.getByLabel('Email for newsletter').evaluate((el) => !el.checkValidity()),
  )
  await page.getByLabel('Email for newsletter').fill('learner@example.com')
  await page.locator('.newsletter-form button').click()
  check(
    'Newsletter shows truthful frontend status',
    await page.getByRole('status').filter({ hasText: 'does not send or store' }).isVisible(),
  )
  await page.getByRole('button', { name: 'View course bag' }).click()
  check('Course bag dialog opens', await page.getByRole('dialog').isVisible())
  await page.keyboard.press('Escape')
  check('Dialog closes with Escape', (await page.getByRole('dialog').count()) === 0)
  await load('/', 390, 844)
  await page.getByRole('button', { name: 'Open navigation' }).click()
  check(
    'Mobile menu opens',
    (await page.getByRole('button', { name: 'Close navigation' }).getAttribute('aria-expanded')) ===
      'true',
  )
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Courses', exact: true })
    .click()
  check(
    'Mobile menu closes after navigation',
    (await page.getByRole('button', { name: 'Open navigation' }).getAttribute('aria-expanded')) ===
      'false',
  )
  check('Courses link reaches courses section', new URL(page.url()).hash === '#courses')
  if (!homeOnly) {
    for (const route of ['/login', '/register']) {
      await load(route)
      await page.locator('.auth-form button[type="submit"]').click()
      check(
        `Required fields reject blank ${route}`,
        await page.locator('.auth-form').evaluate((form) => !form.checkValidity()),
      )
      if (route === '/register')
        await page.getByLabel('Full Name', { exact: true }).fill('Jamie Davis')
      await page.getByLabel('Email', { exact: true }).fill('designer@example.com')
      await page.getByLabel('Password', { exact: true }).fill('123')
      await page.locator('.auth-form button[type="submit"]').click()
      check(
        `Short password rejected ${route}`,
        await page.getByLabel('Password', { exact: true }).evaluate((el) => !el.checkValidity()),
      )
      await page.getByLabel('Password', { exact: true }).fill('AssessmentOnly123!')
      await page.locator('.auth-form button[type="submit"]').click()
      check(
        `Client validation reports no real authentication ${route}`,
        await page.getByRole('status').filter({ hasText: 'No account' }).isVisible(),
      )
    }
    await load('/login')
    await page.getByRole('link', { name: 'Create an account' }).click()
    check('Login links to register', new URL(page.url()).pathname === '/register')
    await page.getByRole('link', { name: 'Login', exact: true }).click()
    check('Register links to login', new URL(page.url()).pathname === '/login')
    await page.getByRole('button', { name: 'Sign in with Google' }).click()
    check('Social control explains unavailable service', await page.getByRole('dialog').isVisible())
    await page.getByRole('button', { name: 'Close', exact: true }).click()
  }
  check('No browser console or runtime errors', errors.length === 0)
  check('No failed resource requests', failedRequests.length === 0)
  check('No backend mutation requests', mutations.length === 0)
  const result = {
    status: 'passed',
    scope: homeOnly ? 'required-home' : 'home-login-register',
    viewportCases,
    assertions: assertions.length,
    assertionNames: assertions,
    accessibility,
    consoleErrors: errors,
    failedRequests,
    backendMutations: mutations,
    fontTransport:
      process.env.BYTESPACE_FONT_FETCH === 'system'
        ? 'Official Fontshare resources fetched with system curl TLS validation (sandbox proxy compatibility)'
        : 'Direct browser requests',
  }
  await writeFile(
    join(out, homeOnly ? 'home-verification.json' : 'browser-verification.json'),
    JSON.stringify(result, null, 2) + '\n',
  )
  console.log(JSON.stringify(result, null, 2))
} catch (error) {
  await writeFile(
    join(out, 'failed-verification.json'),
    JSON.stringify(
      { message: error.message, viewportCases, assertions, accessibility, errors, failedRequests },
      null,
      2,
    ),
  )
  throw error
} finally {
  await browser.close()
  await new Promise((r) => server.close(r))
}
