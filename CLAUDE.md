# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site (`Plehndm.github.io`) — a static **Jekyll 4** site with a **fully custom design** (no theme, no CSS framework, no JS dependencies). Dark-indigo cyberpunk-terminal aesthetic: cyan/violet accents, Chakra Petch + IBM Plex type, a canvas particle-network hero with a typed terminal window. Emphasis is SWE / AI / data-science internship recruiting. (This replaced the earlier Forty/HTML5 UP build; all Forty files — `_sass/`, jQuery/skel JS, font-awesome, Vanta CDN — were removed.)

## Build & deploy

Jekyll 4.x, which GitHub Pages' native builder won't run, so deployment uses the **GitHub Actions → Pages** flow:

- `.github/workflows/deploy.yml` runs `bundle exec jekyll build` and publishes `_site` via `actions/upload-pages-artifact` + `actions/deploy-pages` on every push to `main`. **Pages Source must be "GitHub Actions"** (Settings → Pages).
- Local preview: `bundle install` then `bundle exec jekyll serve` → http://localhost:4000. No local Ruby? `docker run --rm -v "$PWD:/srv/site" ruby:3.3 bash -c "gem install jekyll --no-document && jekyll build --source /srv/site --destination /srv/site/_site_build"` (that output dir is gitignored).

## Content architecture (data-driven)

- **`_config.yml`** — site identity (`title`, `subtitle`, `description`, `email`, `url`), plus `resume`, `repo_url`, `og_image`, `github_username`. `permalink: /projects/:title/` gives project pages `/projects/<slug>/` URLs. `future: true` is required — post dates are in the future because **dates are ranking, not chronology**.
- **`_data/roles.yml`** — current roles; renders the "What I'm doing now" timeline AND the `[ACTIVE]` lines in the hero terminal.
- **`_data/publications.yml`** — publications; renders the homepage pub card AND the `[PUB]` terminal line.
- **`_data/research.yml`** — research experience; renders the homepage `#research` violet timeline (title, org, dates, `status` pill, bullets, optional `outcome`/`outcome_url` DOI link). Sourced from the résumé.
- **`_data/socials.yml`** — contact/footer links; `icon` must match a symbol id in `_includes/icons.html` (inline SVG sprite — no icon font).
- **Projects are posts** (`_posts/YYYY-MM-DD-slug.md`). Card order = post date, newest first; flagship gets the latest date. Front matter is structured: `status` (Active/WIP/Complete/Playable → colored pill via `status--<key>` CSS), `category`, `year`, `tags` (list → pills, cards show 4 + "+N"), `repo`, optional `demo`, optional `image`/`image_alt` (no image → styled placeholder tile), optional `image_fit: contain` (show whole image, e.g. SceneCheck) and `image_position` (crop anchor, default `top center`), `featured: true` → homepage grid. FinSight/GPT/Wine use hand-drawn palette-matched SVGs in `assets/images/projects/`. Post body = intro paragraph + `## Highlights` bullets only; buttons come from front matter via `_layouts/post.html`.
- **`index.md`** (`layout: home`) — `landing-title` is the hero H1; body markdown is the hero bio.
- **`projects.md`** / **`404.md`** — page-layout pages with their own section markup.

## Layouts & includes

- `_layouts/default.html` — HTML shell (head, icons sprite, nav, footer); other layouts chain from it.
- `_layouts/home.html` — hero (canvas `#net-canvas` + terminal `[data-terminal]`), `#now` timeline, `#projects` featured grid, `#research` timeline, `#publications`. Nav anchors `/#research`, `/#publications`, `/#contact` land here.
- `_includes/footer.html` — the `#contact` section AND the footer (renders on every page).
- `_includes/project-card.html` — card partial; takes `include.project` (a post object).
- `_includes/head.html` — meta/OG/Twitter tags, Google Fonts (Chakra Petch, IBM Plex Sans/Mono), favicon (`assets/images/favicon.svg`).

## CSS & JS

- **`assets/css/main.scss`** — the entire design system, self-contained (front-matter dashes → Jekyll compiles to `main.css`). Design tokens (palette, fonts, shadows) are CSS custom properties in `:root` at the top — change colors there. Sections are labeled with `/* ---------- */` comments. Mostly flat selectors; avoid adding specificity wars. Gotcha: the mobile nav dropdown uses an **opaque** background on purpose — `backdrop-filter` on it hit compositing bugs.
- **`assets/js/main.js`** — vanilla, no dependencies: nav scrolled-state + mobile toggle, IntersectionObserver reveals (`.reveal` → `.is-visible`, staggered via `--reveal-delay`), the terminal typing boot sequence, and the canvas particle network (pauses off-screen, DPR-aware). Everything is gated on `prefers-reduced-motion`, and reveal-hiding only applies when JS adds `html.js` — no-JS visitors see everything.

## Conventions / gotchas

- Adding a project = one `_posts/` file with structured front matter (see README for the template). Pick a date that slots it into the desired card order.
- The publication has no repo — it links to its DOI from `_data/publications.yml`.
- `sitemap.xml` is hand-rolled Liquid (no plugin, keeps Gemfile.lock-free CI happy); pages opt out with `sitemap: false`. `robots.txt` points at it.
- Statuses map to colors in CSS: active=cyan, wip=amber, complete=green, playable=violet. New status values need a matching `.status--<key>` rule.
