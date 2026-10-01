# ByteSpace Frontend Assessment

A responsive frontend implementation of the **ByteSpace** online learning platform, developed for the **Doin Tech Limited — Jr. Software Engineer (Frontend) Assessment** based on the provided Figma design.

The project includes the complete required landing page along with bonus Login and Register pages, responsive layouts, reusable React components, accessibility-focused interactions, and production deployment on Vercel.

## Live Demo

**Website:**  
https://bytespace-frontend-assessment-coral.vercel.app/

**GitHub Repository:**  
https://github.com/bilayet5821/bytespace-frontend-assessment

**Pull Request:**  
https://github.com/bilayet5821/bytespace-frontend-assessment/pull/1

## Pages

- Home — `/`
- Login — `/login`
- Register — `/register`

Login and Register are frontend-only demo pages with client-side validation. No backend authentication service is connected.

## Features

- Responsive Header and Navigation
- Hero section with search
- Partner section
- Course discovery and category filtering
- Reusable course cards
- Learning-path categories
- Professional Growth section
- Creator features section
- Creator CTA
- Testimonials
- Newsletter and Footer
- Bonus Login page
- Bonus Register page
- Responsive desktop, tablet and mobile layouts
- Keyboard-friendly navigation and accessible form controls

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- CSS
- Poppins
- Satoshi
- Playwright
- axe-core
- Oxlint
- Prettier

## Run Locally

Clone the repository:

```bash
git clone https://github.com/bilayet5821/bytespace-frontend-assessment.git
cd bytespace-frontend-assessment
```

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite.

## Production Build

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Verification

The implementation was verified across:

- 320px
- 390px
- 768px
- 1024px
- 1440px
- 1920px

Final verification results:

| Check | Result |
| --- | --- |
| Route / viewport cases | 18/18 Passed |
| Browser assertions | 82/82 Passed |
| Lint | Passed |
| TypeScript | Passed |
| Formatting | Passed |
| Production build | Passed |
| Horizontal overflow | 0 |
| Broken images | 0 |
| Console/runtime errors | 0 |
| Automated accessibility violations | 0 |

Direct route refreshes were also verified for:

- `/`
- `/login`
- `/register`

## Project Structure

```text
src/
├── app/
├── pages/
├── sections/
├── components/
│   ├── layout/
│   ├── ui/
│   ├── courses/
│   ├── decorative/
│   └── auth/
├── data/
└── styles/

public/
├── assets/
└── licenses/

scripts/
docs/
verification/
```

The application is built with reusable React components and data-driven rendering rather than using screenshots as webpage sections.

## Design Reference

The interface was implemented from the supplied **ByteSpace Figma design** and high-resolution reference assets.

Minor differences may exist where original standalone assets were unavailable, such as some placeholder logos, icons, and image crops.

## Git Workflow

Development was completed on:

```text
feature/bytespace-landing
```

The implementation was developed through incremental commits and submitted through a Pull Request before being merged into `main`.

## Deployment

The project is deployed publicly using **Vercel**.

**Production URL:**  
https://bytespace-frontend-assessment-coral.vercel.app/

---

Built for the **Doin Tech Limited Jr. Software Engineer (Frontend) Assessment**.