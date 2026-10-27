# Portfolio review — 26 October 2026

Scope: local Angular portfolio, existing CV, supplied project briefs, and the earlier read-only project inventory. No changes to the nine source project repositories; no deployment; no project screenshot collection.

## Findings in the previous version

| Issue                                           | Evidence                                                               | Resolution                                                                         |
| ----------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Dark was the forced default                     | `index.html` and navbar both defaulted to dark                         | Light-first startup and an explicit persistent theme choice                        |
| Work was difficult to assess                    | Text-only cards, minor links for client work, no project detail routes | A filterable collection and 13 project pages, including the nine supplied projects |
| Weak light-theme hierarchy                      | Muted text `#AAAAAA`, gold text on pale backgrounds                    | Separate readable text accent and action-fill tokens                               |
| Broken footer styling                           | Undefined `--bg-light`, `--glass-border`, `--text-primary`             | Shared canonical tokens and a consistent footer                                    |
| Hidden mobile links remained keyboard-focusable | Transparent, translated navigation stayed in the DOM                   | Conditional mobile navigation, expanded state, Escape handling                     |
| Content waited for visual effects               | Fixed splash, globally hidden reveal elements, nested animation timing | Immediate content and restrained CSS interaction feedback                          |
| Scroll behavior lost native semantics           | Global click listeners prevented anchor defaults                       | Angular router anchors, URL state, and history restoration                         |
| Profile copy obscured the work                  | Repeated stack lists, generic claims, infinity stat                    | Practical introduction and expertise linked to actual projects                     |
| Training credentials were overstated            | “Red Hat Certified” used for RH124/RH134 courses                       | Explicit coursework wording; retained Google certificate                           |
| Contact recovery was weak                       | Missing custom inline validation, transient feedback                   | Field errors, preserved failure state, duplicate protection, delivery timeout      |
| Metadata covered only the homepage              | No independent project routes, sitemap absent                          | Build-generated route documents, share metadata, structured data, sitemap          |
| Media process was undefined                     | No slots or reusable image pipeline                                    | Media manifest, programmatic cover frame, responsive lossless WebP preparation     |

## Content decisions

The supplied descriptions inform the project stories. Absolute security guarantees, “100% type safe means no runtime errors,” zero-loss guarantees, fixed frame rates, search rankings, and performance percentages are not used without evidence. No private credentials from the supplied brief are included.

The original Angular/ASP.NET projects and automation work remain visible. Lamsa is marked as client preview; its public action opens the launch page. Almaha explicitly has no separate public dashboard.

## Media handover

See `docs/project-images.md`. Real project captures are intentionally pending the user's images. The current project artwork is authored in SVG and CSS, preserving its crispness at any size. Generated output files are not fabricated website screenshots.

## Production constraints

Confirm `mohammadalghazo.dev` is the desired canonical production domain before deployment; it is retained from the existing configuration. Static hosts must serve directory index documents for `/projects/<slug>/`, and fall back to the application for other client routes. Build-generated metadata makes project links readable by social crawlers without depending on client-side JavaScript; the application body itself remains client-rendered. The existing EmailJS service must stay configured; unit tests simulate delivery rather than sending actual messages.

## Verification notes

- Eight Angular tests pass (including direct-route coverage for all 13 projects): URL-restored category selection, expanded catalogue, direct case-study metadata, unknown-project recovery, invalid contact input, failed delivery preservation, and duplicate-send protection with simulated successful delivery.
- The image pipeline is tested in an isolated temporary output root: unchanged source bytes, equal full-resolution decoded pixels after lossless WebP, responsive variants, and no upscaling.
- The original strict premium auditor reports false positives for Angular `(click)` event bindings because its supported literal-event detector recognizes Vue/HTML syntax rather than Angular. These controls are wired and verified in the browser. This is not recorded as a clean static-audit pass.
- The DESIGN.md format lint reports zero errors; unused-token warnings reflect descriptive tokens consumed directly by CSS rather than frontmatter component recipes.
