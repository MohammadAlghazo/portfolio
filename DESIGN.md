---
version: alpha
name: Mohammad Alghazo Portfolio
description: A personal engineering portfolio built around real work, clear ownership, and restrained typographic character.
colors:
  background: '#f8f8f5'
  surface: '#ffffff'
  elevated: '#eeefea'
  foreground: '#22251f'
  secondary: '#555b52'
  muted: '#62685e'
  primary: '#85621b'
  action: '#e8c547'
  border: '#dddfd6'
typography:
  display:
    fontFamily: 'Outfit, Inter, Arial, sans-serif'
  body:
    fontFamily: 'Inter, Arial, sans-serif'
rounded:
  DEFAULT: '6px'
spacing:
  page-max: '1200px'
  section: '96px'
components:
  primary-button:
    backgroundColor: '{colors.action}'
    textColor: '{colors.foreground}'
  project-cover:
    rounded: '{rounded.DEFAULT}'
---

# Mohammad Alghazo Portfolio

## Overview

This is a brand/content website for employers, engineering teams, and prospective clients. Its job is to make Mohammad's work and responsibilities easy to assess. English remains the primary language; Arabic project names retain their own direction and language metadata.

Preserve the existing identity: Outfit typography, a prominent personal name, a real portrait, and a restrained gold accent. The signature is an engineer's body of work presented as a project collection, with individual brand artwork and readable case studies. Avoid a generic dashboard hero, animated status dots, badge collections, invented metrics, and decorative code terminals.

The current user request authorizes a light-first refinement, case studies for the nine supplied projects, and programmatic cover layouts. The other project repositories remain read-only. Original project screenshots are supplied by the user later.

Runtime CSS is canonical (ownership model B). `src/styles.css` owns semantic tokens. This document mirrors the accepted values and explains their roles. Project artwork palettes belong to `src/app/data/projects.ts` and are isolated from application UI semantics.

## Colors

The light palette uses a near-white canvas, dark olive-charcoal text, and muted gold. `--accent` is a darker, readable text/focus color; `--accent-fill` is the gold button background with dark text. Do not substitute the gold fill for small foreground text.

An explicit theme choice persists in `portfolio-theme`. New visitors receive light mode regardless of operating-system preference. Dark mode remaps the same roles, never the hierarchy. Theme startup is applied before Angular boots. Forced colors retain native system behavior.

## Typography

Outfit carries the personal identity and headings; Inter carries body text and controls. The name is the loudest element. Displayed copy omits terminal periods, including headings, names, descriptions, cover labels, and form feedback; keep punctuation inside sentences, abbreviations, decimal values, email addresses, and URLs. Headings use natural sentence case and measured line lengths. Do not use arbitrary section numbering or fictional percentages of skill mastery. Arabic names use a script-capable fallback with explicit `lang="ar"` and `dir="rtl"`.

## Layout

The content width is 1200px, with fluid side margins. Desktop sections use 96px vertical spacing, reducing to 68px and 56px on smaller screens. The fixed header is 76px on desktop and 68px on mobile; Angular anchor scrolling accounts for a 96px offset.

Home order: introduction, selected work, about, applied expertise, experience, contact. The catalogue starts with six projects and offers explicit expansion. Category and expansion state are stored in URL query parameters. Case studies are real routes with breadcrumbs, a clear external website action, and next-project navigation.

## Elevation & Depth

Flat surfaces, tonal sections, and a quiet border define structure. Subtle elevation is reserved for interactive covers and buttons on hover. No fixed noise overlay, ambient glow, backdrop blur, or blocking splash screen.

## Shapes

Controls and project media use a 6px corner radius. The existing portrait receives an arched top as a deliberate personal exception. No pill section labels or stacks of colored badges.

## Components

| Visual role                         | Runtime owner                              | Consumers                              |
| ----------------------------------- | ------------------------------------------ | -------------------------------------- |
| Canvas, text, accent, border, theme | `src/styles.css` custom properties         | All components                         |
| Typography                          | `--font-display`, `--font-body`            | Titles, prose, controls                |
| Control shape                       | `--radius`                                 | Buttons, form fields, covers           |
| Shared actions                      | `.btn-primary`, `.btn-ghost`, `.text-link` | Home, catalogue, case studies, contact |
| Artwork and screenshots             | `ProjectCover`, `project-media.ts`         | Catalogue and case-study header        |
| Scrollbar                           | Global standards and WebKit fallback rules | Document and owned scroll surfaces     |

Buttons and links have visible focus, pointer, hover, and pressed behavior. Disabled submit controls remain stable. Project filters are toggle buttons, not ARIA tabs. A closed mobile menu is removed from the DOM, not just made transparent; Escape restores focus to its trigger.

The contact form owns its validation, associates errors with fields, and focuses the first invalid field. It preserves content on failure and prevents duplicate sends. EmailJS is the existing delivery provider; no messages are sent during verification. Delivery is tested using a mocked SDK.

Motion is limited to 200–250ms hover/press feedback and native anchor scrolling. Text remains visible without animation or an intersection observer. Reduced-motion preferences disable animation and smooth scrolling.

Project covers are original SVG/CSS compositions, not documentary screenshots. When photos are supplied, the same cover presents them in a restrained browser frame without inventing UI. Galleries are omitted when no real images exist. Lossless WebP preserves full-resolution decoded pixels; smaller responsive variants are selected according to rendered size. No upscaling or universal compression-percentage claim.

## Do's and Don'ts

- Show the problem, Mohammad's role, the implementation, and its actual features.
- Link expertise to relevant project evidence.
- Keep CV employment and education facts consistent with the site.
- Describe Red Hat courses as coursework; do not imply an RHCSA/RHCE exam credential.
- Never publish login details, private dashboard records, unverifiable speed claims, or invented testimonials.
- Do not add unrelated frameworks or a heavy animation dependency to this Angular application.
