# Implement responsive ByteSpace landing page and bonus auth screens

Implements the complete ByteSpace Home design with reusable React components, responsive CSS and genuine supplied image assets. Adds `/login` and `/register` after Home verification, with client-side validation and no backend authentication.

The landing page includes course discovery/filtering, six course cards, learning paths, learner/creator features, creator CTA, testimonials and newsletter/footer UI. Screenshots are used as visual references; UI cards and controls are reconstructed in HTML/CSS.

## Validation

- Clean dependency install, Oxlint, TypeScript, Prettier and production build.
- 18 route/viewport checks: all three routes at 320, 390, 768, 1024, 1440 and 1920 pixels.
- 35 interaction/runtime assertions, including direct route refreshes, search, category filtering, mobile navigation, auth validation and route links.
- No horizontal document overflow, broken images, console/runtime errors, failed resource requests or backend mutations in the final browser run.
- Automated WCAG A/AA scan: no violations on the three routes.
- Manual screenshot comparison and visual corrections against the supplied design.

## Review notes

Partner placeholders/icons are reconstructed because separate sources were not supplied. Course image crops exclude baked-in metadata, causing small framing differences. Satoshi uses official Fontshare hosting and is not bundled. Browser checks used system-validated Fontshare requests to accommodate the sandbox's outbound proxy certificate; no certificate validation was disabled.

Deployment is deferred. This PR is intended for review only and must not be merged without further instruction.
