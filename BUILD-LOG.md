# Rocky Hill Community Site — Build Log & Generated File Index

**Built by:** Frontend Developer
**Date:** 2026-10-06
**Project slug:** `rocky-hill-community-site`
**Target:** `https://springteasers.github.io/rocky-hill-community/`

---

## 1. Summary

The complete static site is built and ready for deployment. Twelve files are
present under `code/`: seven HTML pages, one stylesheet, one JavaScript file,
one SVG favicon, one `.nojekyll` marker, and this build log.

The site implements the full design system from `design/` — tokens, typography,
layout wireframes, component specifications and UI patterns — against the
finalized copy in `content/`. Every claim, address, phone number and URL in the
copy was carried across verbatim; **no fact, address or event date was invented**
during the build.

---

## 2. Generated file index

| File | Purpose |
|---|---|
| `index.html` | **Home.** Navy hero with inline SVG "river + dinosaur tracks" art, 4-item facts strip (20,845 / 1843 / 13.8 / 8), staggered "What makes Rocky Hill, Rocky Hill" narrative, 4 SVG quick-link cards, centred "Get involved" volunteer CTA. |
| `about.html` | **About.** Town history as an `<ol class="timeline">` with real `<time>` values, key-facts `<table class="table--kv">` (2020 row highlighted, 2010 row labelled historical), government `.stat-card`s, education table. |
| `things-to-do.html` | **Things to Do.** 3-up parks cards (Dinosaur State Park card is the only `.card--track`), river-themed landmark cards, undated seasonal-event cards using the `.notice--inline` date-slot pattern, CTvisit panel. |
| `businesses.html` | **Local Businesses.** Sticky category jump bar, 16 `.biz-card`s in 5 anchored sections, the `(street address not confirmed)` slot on the 5 unconfirmed cards, omitted buttons where no website exists, closing source notice. |
| `services.html` | **Town Services.** `.contact-block` Town Hall, departments table, boards/schools/library/notices panels plus schools table, utilities `.deflist`, transit panels, get-involved `.chiprow` of youth sports leagues. |
| `news.html` | **News & Events.** Sample-section notice, two undated event cards + full-width Dinosaur card, "Around town" panels, "Stay in the loop" with real, verified social URLs. |
| `contact.html` | **Contact.** Two-column `.split`, department routing table, schools / library / other-contacts panels, prominent "About this website" `.notice--prominent` disclaimer. |
| `assets/styles.css` | The design-system stylesheet (18 sections: tokens, reset, header/nav, containers, page header, buttons, cards, panels/notices, business cards, facts, timeline, tables, lists/chips/jump bar, misc compositions, footer, focus, responsive, print). Includes the required `.js` guard on the mobile-nav media query. |
| `assets/main.js` | Progressive-enhancement nav toggle (~70 lines): sets `.js` on `<html>`, toggles `aria-expanded` + `.is-open`, Escape closes, link-click closes, resize past 800 px resets state. |
| `favicon.svg` | 32×32 SVG favicon — the medallion dinosaur-track mark on the navy field with the amber accent. No raster asset. |
| `.nojekyll` | Empty marker so GitHub Pages serves the folder without Jekyll processing. |
| `BUILD-LOG.md` | This file. |

---

## 3. Design conformance

- **Colour tokens** — all values from `design/02-color-palette.md` and `06-css-design-system.md`. `#E08A2B` (`--brand`) is used **decoration only** on light surfaces (borders, rules, focus rings, brand mark); amber *text* uses `--fg-accent` / `--brand-text` (`#8A4F0B`) and amber-on-dark uses `--fg-accent-dark` (`#E08A2B` on navy), per the measured contrast audit.
- **Typography** — one system stack, no web fonts, no network request. Display headings use the serif stack (`--font-display`); fluid `clamp()` type scale. Population figures are written `20,845` with the comma and non-breaking-space rules applied (`&nbsp;`) in addresses, times and phone-adjacent text.
- **Layout** — 7 pages plus shared header/footer per `04-layout-wireframes.md`; band sequences, containers (`.container`, `.container--wide`) and responsive behaviour at 320/375/414/640/768/800/1024/1280/1440 widths.
- **Components** — header/nav, footer, skip link, notices, facts strip, stat cards, timeline, tables (incl. `.table-stack` mobile stacking), biz-card, contact-block, chips, jump bar — all as specified in `05-components.md`.

## 4. Content fidelity

- Population: **20,845** (2020 Census) everywhere; 2010 (19,709) appears only as a labelled historical comparison.
- **16 businesses** in 5 categories, all drawn from the Town of Rocky Hill's own Business Inventory. Where a street number could not be confirmed, the card shows `Rocky Hill, CT 06067` plus the "(street address not confirmed)" slot — **no invented addresses**.
- **Fallfest and Winter Wonderland carry no dates.** Where the wireframe permitted, the event cards carry a date-slot notice linking to the town's calendar instead.
- The town's own social URLs were resolved from the town site's redirects (`/facebook`, `/youtube`) and are linked as real URLs in `news.html`.
- Every page states that this is a **community information site, not an official town website**.

## 5. Hand-off to Deploy Agent

Push the entire contents of `code/` to the repository root of the target repo.
Directory layout on publish:

```
/            index.html, about.html, things-to-do.html, businesses.html,
             services.html, news.html, contact.html, favicon.svg, .nojekyll
/assets/     styles.css, main.js
```

No build step is required — the files are static and deploy as-is.

---

**Status:** complete — all twelve files present under `code/` and ready for deployment.
