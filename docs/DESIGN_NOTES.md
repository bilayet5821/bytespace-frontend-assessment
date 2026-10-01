# Design and asset notes

## Design tokens

Headings use Poppins SemiBold at the desktop reference sizes 72, 44, 36 and 20 pixels, with a 120% line height. Body sizes are 18, 16, 14 and 12 pixels with a 160% line height. Satoshi supplies body and label text through official Fontshare hosting.

Primary blue is `#0A45FF`; the reference's deeper blue `#003BE2` supplies large blue surfaces. Lime colors are `#D4FB20` and `#CBFC01`; dark neutral is `#242528`. The desktop container is 1200 pixels with a 40-pixel grid gap and rounded cards matching the supplied design.

Some small grey text uses the supplied neutral-500 color instead of neutral-400 to improve contrast. Inline auth links are underlined to remain identifiable without color alone.

## Asset provenance

| Used assets | Supplied source | Treatment |
| --- | --- | --- |
| ByteSpace logos | `assets/logo/bytespace-logo.svg` | Original light wordmark; dark variant changes only the wordmark fill; mark-only variant changes the SVG viewport |
| Student/creator photos | `assets/people/` | Original transparent PNGs |
| Course imagery | `assets/course-thumbnails/` | CSS crop excludes the pre-rendered bottom metadata; new metadata is semantic HTML |
| Testimonial portraits | `assets/testimonials/` | Three supplied portraits |
| Floating-card portraits | `assets/raw-figma-export/Auto Layout Vertical.png` | Individual photographic portrait crops only |
| Course-card portraits | `assets/course-card-references/Course_Card_1.png` and supplied testimonial portraits | Individual photographic crops only; no card UI is embedded |
| 3D decorations | Selected files from `assets/decorations/` | Embedded source bitmap patterns retain their alpha/crop; source shading is remapped to the design's white/lime palette and optimized as WebP |
| Partner placeholders | Partner-strip reference | Five Logoipsum text/shape treatments recreated in inline SVG and HTML |
| Category/control icons | Supplied screenshots | Small inline SVG glyphs reconstructed in code |

The original decoration exports are image-filled SVG masks rather than lightweight vector geometry. Several mask-only exports flatten the source shading. The optimized assets use those same embedded image patterns, preserving the source shapes while restoring shaded white/lime appearance. The auth illustration uses a full lime ring derived from the supplied full-ring source instead of the cropped ring used in the CTA.

No full page, section, testimonial card or course-card screenshot is rendered by the application. Figma viewer controls, screenshot borders and overlays are excluded.

## Source limitations

- The desktop-only reference does not define mobile layouts; smaller layouts adapt its identity and content.
- Clean, unbadged full course photos are not supplied. Cropping out baked-in metadata changes the photo framing slightly and limits source resolution.
- Exact partner SVGs and learning-path/control icon sources are not supplied. These are approximations of the reference placeholders/glyphs.
- Some long course titles are truncated in the references. Full descriptive labels are used, with the same single-line ellipsis treatment in cards.
- No destination pages or backend behavior are supplied for course details, subscriptions, policies or social authentication. The implementation uses in-page navigation and truthful frontend-only notices within the stated assessment scope.

## Visual review

Rendered desktop Home, Login and Register screenshots were inspected against the supplied references. A correction pass adjusted headline spacing, search placement, floating-card positions, decoration layers/shading, creator illustration sizing, narrow-screen overflow, auth alignment and link contrast. The implementation is a close reconstruction, not a claim of pixel-perfect identity.
