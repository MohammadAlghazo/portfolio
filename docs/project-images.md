# Project image handover

Keep full-quality originals in `project-images/<project-slug>/` (ignored by Git and excluded from production assets). Example:

```text
project-images/
  place-on/
    cover.png
    01-discovery.png
    02-workspace.png
    03-provider-dashboard.png
    captions.json
```

Use `cover` for the image placed inside the programmatic project cover. Other files become gallery images in filename order. Supported input types: PNG, JPEG, WebP, AVIF. Filenames use letters, numbers, and hyphens. Full-page images should be in the gallery; a desktop viewport usually works better for a cover.

Optional `captions.json` describes each image by its filename stem:

```json
{
  "cover": { "alt": "PLACE ON workspace discovery page" },
  "03-provider-dashboard": {
    "alt": "Provider dashboard showing workspace management",
    "caption": "A dedicated workspace for providers to manage their listings."
  }
}
```

Run `npm run images:prepare`, then `npm run build`. The tool uses an available Sharp runtime and creates `public/projects/<slug>/` plus `src/app/data/project-media.ts`. It preserves original files, strips output metadata by default, does not upscale, and creates lossless WebP files plus responsive variants. Set `PORTFOLIO_IMAGE_RUNTIME` to a folder containing a `node_modules/sharp` installation if the runtime is not found automatically.

The full-resolution WebP keeps the source's decoded, oriented pixel data. Resized variants reduce dimensions for smaller displays. Lossless compression does not guarantee every source becomes smaller; `tmp/image-report.json` records the actual sizes. Keep only the final selected captures in each input folder. Images and captions should contain no private client or patient information.

## Project folders and useful screens

| Folder              | Screens that explain the project                                                         |
| ------------------- | ---------------------------------------------------------------------------------------- |
| `place-on`          | Search, workspace details, corporate office wizard, provider portal, platform moderation |
| `bosala`            | Profit calculator, sample report, product radar, subscriber reports, administration      |
| `huwia`             | An actual business profile, bilingual variant, profile editor with preview, analytics    |
| `trade-nox`         | Pricing calculator, project brief, resources, meeting-minute editor, operations          |
| `clavel-dental`     | Service details, doctor profile, booking, booking management, working hours              |
| `smaa-cars`         | Inventory, car details, fleet inquiry, car editor, lead streams                          |
| `swl-lawfirm`       | Service details, team, legal article, article editor; avoid private consultation text    |
| `maha-museum`       | Collection, full-screen artwork, package section; no standalone dashboard                |
| `lamsa`             | Experience, cart dimensions, packages, booking journey, operations                       |
| `kawadir`           | Employee workflow, attendance, payroll, role-aware navigation                            |
| `stockmaster`       | Inventory, stock movement, conversational inventory assistant                            |
| `python-automation` | A real workflow or redacted output, if appropriate for publication                       |
| `budgetha`          | Mobile-oriented finance view and installable experience                                  |

With no images configured, the authored brand artwork remains intentional. Empty galleries and missing-image boxes are not shown.
