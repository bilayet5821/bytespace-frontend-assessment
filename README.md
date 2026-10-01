# ByteSpace Frontend Assessment

A responsive implementation of the ByteSpace landing page for the Doin Tech Limited Jr. Software Engineer (Frontend) assessment, built from the supplied Figma references. The required Home page and bonus Login/Register pages are implemented as React components.

## Scope and features

- Complete Home page: header, hero and search, partner placeholder strip, course discovery/categories, six reusable course cards, learning paths, professional growth, course creator features, creator CTA, testimonials and footer.
- Responsive navigation and layouts for desktop, laptop, tablet and mobile.
- Local course search, category filtering, empty/reset states and expandable categories.
- `/login` and `/register` with labelled controls and browser/client-side validation.
- Keyboard focus indicators, skip link, accessible mobile navigation and dismissible dialogs.
- Forms explain their frontend-only behavior. They create no accounts, start no sessions and send no subscriptions. Social sign-in is not connected.

## Stack

React, Vite, TypeScript, React Router and CSS. Production dependencies are limited to React, routing and the licensed Poppins font package. Oxlint, TypeScript, Prettier, Playwright and axe-core support development checks.

## Local setup

Use Node.js 24 LTS and npm. From this directory:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. Routes: `/`, `/login`, `/register`.

## Checks and production build

```bash
npm run lint
npm run format:check
npm run typecheck
npm run build
npm run preview
```

Vite writes the production build to `dist/`. A hosting provider must serve `index.html` for the client routes `/login` and `/register` so direct refreshes work.

For reproducible browser checks, install Playwright's Chromium once and build first:

```bash
npx playwright install chromium
npm run build
npm run test:browser
```

The harness serves the actual production build locally. It checks all three routes at 320, 390, 768, 1024, 1440 and 1920 pixels; direct refreshes; interactions and validation; images; browser errors; and automated WCAG A/AA rules. Results are written to `verification/browser-verification.json`, with screenshots in the ignored `verification/screenshots/` directory. Automated accessibility checks supplement manual review; they do not certify complete accessibility compliance.

## Project structure

| Directory | Responsibility |
| --- | --- |
| `src/app/` | Application and route configuration |
| `src/pages/` | Home, Login and Register composition |
| `src/sections/` | Landing-page sections |
| `src/components/layout/` | Header and footer |
| `src/components/ui/` | Icons, chips, search, section heading and dialog |
| `src/components/courses/` | Course and learning-path cards |
| `src/components/decorative/` | Reconstructed floating stats and avatar stacks |
| `src/components/auth/` | Shared auth layout, form and field |
| `src/data/` | Course, category and testimonial content |
| `src/styles/` | Design tokens, global styles, Home, responsive and auth styles |
| `public/assets/` | Selected genuine photographs, logo and decorative assets |
| `public/licenses/` | Poppins Open Font License |
| `scripts/` | Production-browser verification harness |
| `docs/` | Asset/design notes, verification report and prepared PR description |

## Responsive approach

The desktop container is capped at 1200 pixels, matching the 1440-pixel reference with 120-pixel margins. Course cards change from three to two to one column. Learning paths use six, three or two columns. Feature content and footer stack at smaller widths, and mobile navigation opens as an accessible menu. Decorative graphics are repositioned/scaled and clipped inside their owning sections. Auth pages retain the blue grid and white form panel while removing nonessential artwork on narrow screens.

## Design implementation

[Figma design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1) and the supplied high-resolution screenshots informed the implementation. Layout, text, controls and cards are live HTML/CSS, not screenshots.

Poppins SemiBold is served through `@fontsource/poppins` under the [SIL Open Font License](https://github.com/google/fonts/blob/main/ofl/poppins/OFL.txt). Satoshi Regular/Medium/Bold is requested from the official [Fontshare API](https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap), with Arial/sans-serif fallback. No Satoshi font files are bundled or redistributed. See [asset and design notes](docs/DESIGN_NOTES.md) for source limitations and adaptation details.

## Git workflow

`main` contains the clean base commit. Application development is on `feature/bytespace-landing` with incremental commits. After local verification, the feature branch is ready for a Pull Request targeting `main`. See [prepared PR description](docs/PULL_REQUEST.md).

The public GitHub repository and PR are pending creation/push. This local implementation has not been merged.

## Deployment status

No deployment has been performed. There is no verified Vercel production URL. Deployment and employer submission are deferred until review and further instruction.

See [verification report](docs/VERIFICATION.md) for the actual local results and outstanding handoff tasks.
