# CLAUDE.md

Personal portfolio site for **Fahad Pathan** (Software Engineer / AI researcher), hosted on GitHub Pages at `fahadPathan7.github.io`. **Static site — vanilla HTML5, CSS, and JavaScript. No frameworks, no build step, no backend.**

> This file is the always-loaded hub. The `AI/` folder holds exhaustive detail — see [“AI docs”](#ai-docs) below. Where the two disagree, **trust this file and the code** (some `AI/` docs predate recent refactors).

## Hard rules (always follow)

- **No frameworks or build tools.** HTML5 + vanilla CSS + vanilla JS only. No React/Vue/Tailwind/Bootstrap, no npm, no bundlers — unless the user explicitly asks.
- **Do not run git commands.** No commit, push, merge, rebase, branch. Don’t edit `.gitignore`/`.gitattributes`. Leave version control to the user.
- **Don’t delete or rename files** without explicit instruction. Keep changes reversible.
- **Make minimal, focused changes.** Don’t modify existing content (text, links, images, stats) unless asked. Match the surrounding code’s style.
- **Analytics: Google Analytics (gtag.js) is the ONE approved exception.** Its external loader sits in `<head>` and its init/config lives in `app.js` (never inline — see [Known gotchas](#known-gotchas-learned-the-hard-way)). **No other analytics or visitor tracking** — no Meta/Facebook Pixel, Hotjar/Clarity, Sentry, or any other script that monitors visitors. **No new external libraries/CDNs** beyond the approved ones (Google Fonts, Boxicons, devicon on jsdelivr, Google Analytics via `googletagmanager.com` — see [Tech stack & deployment](#tech-stack--deployment)). If a task seems to need a new dependency, ask first or build it with the existing vanilla CSS/JS.
- **Ask first** for major design changes, new sections, or anything ambiguous.

## Tech stack & deployment

| Area | Detail |
|------|--------|
| Stack | HTML5, vanilla CSS, vanilla JS (ES6+) |
| Hosting | GitHub Pages, served from `main` |
| Deploy | Push to `main` — Pages builds automatically. No build step. |
| Fonts | Google Fonts — `Inter` (body), `Space Grotesk` (headings) |
| Icons | Boxicons (`unpkg.com/boxicons`) for UI icons; tech logos via `cdn.jsdelivr.net/gh/devicons/devicon@latest` |
| Analytics | Google Analytics (gtag.js) — the approved exception. External loader in `<head>`, config in `app.js`. No other trackers. |

## Architecture — one source of truth per layer

This was recently consolidated. **Do not regress it:**

- **`index.html`** — page structure & content only (~1,540 lines). Head carries SEO meta, JSON-LD (`Person` + `WebSite`), font/icon preloads, and `<link rel="stylesheet" href="style.css">`. Body has the sections + `<script defer src="app.js">`.
- **`style.css`** — **the single stylesheet** (~5,000 lines). Linked once in `<head>`. Organized as: base/variables → components → section styles → media queries.
- **`app.js`** — **the single script** (`defer`’d, wraps init in `DOMContentLoaded`). All interactivity lives here.

> ⚠️ **No inline `<style>` blocks and no inline `<script>`/`onclick` in `index.html`.** Both previously caused stale-duplication bugs. Edit `style.css` / `app.js` instead. Wire DOM hooks with `data-*` attributes + `addEventListener`, not inline handlers. (Google Analytics follows this: only the external `<script src>` loader is in `<head>`; its config lives in `app.js` — never inline.)

### Page sections (in order)

`#home` · `#about` · `#skill-section` · `#education` · `#experience` · `#problem-solving` · `#projects` · `#achievements` · `#certifications` · `#research` · `#languages` · `#contact-me` (12 total). The navbar `#dropdown-menu` links to all of them.

### Interactive patterns (in `app.js`)

- **Mobile menu** — `#menu-toggle` toggles `#dropdown-menu` and `aria-expanded`; closes on link click or outside click.
- **Category tabs** — `.research-category-btn` / `.experience-category-btn` buttons carry `data-category`; clicking reveals the matching `#id` panel. Add a new tab by adding a `data-category="…"` button + a panel with that id.
- **Scroll animations** — `IntersectionObserver` reveals sections/cards (`.visible`) and animates `.stat-card` / `.highlight-box`. Prefer this + `requestAnimationFrame` for any new animation.

## Design system

```css
--primary-color:   #6366f1;  /* Indigo */
--secondary-color: #8b5cf6;  /* Violet */
--accent-color:    #06b6d4;  /* Cyan   */
--text-color:      #1e293b;
--bg-color:        #fafbff;
--surface-color:   #f1f5f9;
--muted-color:     #94a3b8;
--font-primary:    'Space Grotesk', sans-serif;  /* headings */
--font-secondary:  'Inter', sans-serif;          /* body */
```

- **Breakpoints** (max-width, desktop-down): `1200`, `992`, `768`, `576`. Reuse existing media queries; don’t invent new layout logic.
- **Class naming:** kebab-case; prefer the existing component patterns (cards, bento grid, etc.).
- **Performance conventions already in use:** `content-visibility: auto`, `contain`, `will-change`, WebP images, hero image preloaded with `srcset`. Keep these.

## Conventions (quick)

- Indentation 4 spaces in CSS/JS, 2–4 in HTML (match the file). Quote all HTML attribute values. Semantic tags (`<section>`, `<nav>`, `<main>`, `<footer>`).
- `alt` on every image; `aria-label` on icon-only buttons; visible focus states; maintain heading hierarchy.
- Full detail: [`AI/rules/conventions.md`](AI/rules/conventions.md).

## Verification (run before considering work done)

```bash
node --check app.js                                            # JS syntax
python3 -c "s=open('style.css').read();print(s.count('{')==s.count('}'))"  # CSS brace balance
grep -cE '<style>|onclick=' index.html                        # want 0 — no inline styles/handlers
grep -c 'rel="stylesheet" href="style.css"' index.html        # want 1
grep -c 'raw.githubusercontent.com' index.html                # want 0 — use jsdelivr
```

Then **visually check in a browser**: open `index.html` (or serve with `python3 -m http.server` → `localhost:8000`) and verify mobile (≤576px, 768px), the hamburger menu, and the Research/Experience tab switching.

## Resources

- `resources/images/` — WebP photos/logos + `favicon.svg`. **No** `resources/icons/` directory; tech logos are loaded from CDN, not stored locally.
- `resources/pdf/` — currently empty (no `resume.pdf`).
- When referencing images in `sitemap.xml` or new markup, use the real `.webp` extensions.

## AI docs

Exhaustive reference material in [`AI/`](AI/) (also summarized by [`AGENTS.md`](AGENTS.md)):

| Doc | Use for |
|-----|---------|
| [`AI/rules/constraints.md`](AI/rules/constraints.md) | What you can/can’t do (scope, git, safety) |
| [`AI/rules/conventions.md`](AI/rules/conventions.md) | Coding style — HTML/CSS/JS standards |
| [`AI/context/overview.md`](AI/context/overview.md) | Project background ⚠️ partly stale (references `icons/`, `pdf/resume.pdf`, `.png` images that don’t exist) |
| [`AI/context/workflow.md`](AI/context/workflow.md) | Step-by-step change/test process |
| [`AI/README.md`](AI/README.md) | Index + decision tree |

The constraints (no git, no frameworks, minimal changes, don’t delete files) in `AI/rules/constraints.md` are authoritative and match the [Hard rules](#hard-rules-always-follow) above.

## Known gotchas (learned the hard way)

- **Keep `style.css` linked and unique.** It was once duplicated as inline `<style>`, drifted out of sync, and shipped a mobile layout bug. One stylesheet, linked once.
- **`app.js` owns all behavior.** Inline handlers go stale when markup changes (it once targeted `.input` / `#sidemenu` elements that no longer existed). Use `data-*` + listeners.
- **Icon CDN:** use `cdn.jsdelivr.net/gh/...`, never `raw.githubusercontent.com/...` (no caching/wrong content-type). Pin to `@latest`/a tag, not a moving branch where avoidable.
- **`sitemap.xml` image URLs must match real file extensions** (`.webp`, not `.png`).
