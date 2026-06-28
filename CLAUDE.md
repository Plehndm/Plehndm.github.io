# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site (`Plehndm.github.io`) — a static **Jekyll** site built on the **Forty** theme (HTML5 UP, Jekyll port by Andrew Banchich). It's an image-tile portfolio: the homepage is a grid of project tiles, each linking to a detail page. Emphasis is SWE / AI / data-science internship recruiting.

## Build & deploy

Forty needs Jekyll 4.x, which GitHub Pages' native builder won't run, so deployment uses the official **GitHub Actions → Pages** flow:

- `.github/workflows/deploy.yml` runs `bundle exec jekyll build` and publishes `_site` via `actions/upload-pages-artifact` + `actions/deploy-pages` on every push to `main`. **Pages Source must be "GitHub Actions"** (Settings → Pages), not "Deploy from a branch".
- Local preview: `bundle install` then `bundle exec jekyll serve` → http://localhost:4000.

## Content architecture

- **`_config.yml`** — site identity (`title`, `subtitle`, `description`, `email`, `url`, `baseurl: ""`), `socials` (only non-empty entries render in the footer), and tile settings: `tiles-source: posts` + `tiles-count`. `permalink: /projects/:title/` gives project pages clean `/projects/<slug>/` URLs.
- **Projects are posts.** Each project is a file in **`_posts/YYYY-MM-DD-slug.md`** with front matter `title`, `description` (the tile caption), `image` (tile thumbnail, e.g. `assets/images/picNN.jpg`), and a body (status line, description, Highlights, Tech stack, action buttons). **Tile order = post date, newest first** — dates are assigned descending by importance (flagship = latest date), NOT by real chronology. To reorder, change the dates.
- **`index.md`** (`layout: home`) — the landing page: `landing-title` is the hero heading; the body markdown renders in the "About" section. Hero subheading comes from `site.description`.
- **`_includes/tiles.html`** — renders the tile grid from `site.posts` (because `tiles-source: posts`), using each post's `image`/`title`/`description`/`url`.
- **`_includes/header.html` / `footer.html`** — nav and the contact/socials footer (customized: email + GitHub + LinkedIn, no contact form).
- **`_layouts/`** — `home.html` (landing + tiles + About), `post.html` (project detail), `page.html`.
- **`assets/`** — `images/` (mostly real project screenshots/photos, with a couple of Forty stock placeholders — `pic02.jpg`/`pic03.jpg` — for the projects without a screenshot yet), `css/main.scss` (compiles to main.css), `js/`, `fonts/`, `pdf/David_Plehn_Resume.pdf`.

### Conventions / gotchas

- Adding a project = add a `_posts/` file with a date that places it correctly in the tile order, plus an `image`. `tiles-count` in `_config.yml` must be ≥ the number of projects (currently 12 for 11 tiles).
- The research-paper tile is a post with no GitHub repo (links out to the DOI) — not all tiles are repos.
- Project tile images are stock placeholders today; swapping in real screenshots (`assets/images/`) is the biggest visual win.
- This replaced an earlier al-folio build; all al-folio files (`_bibliography`, `_data`, `_pages`, `_projects`, `_sass`, etc.) were removed in the Forty migration.
