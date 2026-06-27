# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site (`Plehndm.github.io`) — a static **Jekyll** site built on the [al-folio](https://github.com/alshedivat/al-folio) theme (pinned to **v0.16.3**, the last "classic" release where `_layouts`/`_includes`/`_sass` live in-repo). It showcases David Plehn's software/AI projects, publications, and CV for SWE/AI internship recruiting.

## Build & deploy

GitHub Pages **cannot** build this site directly — al-folio depends on non-allow-listed plugins (`jekyll-scholar`, `jekyll-imagemagick`, etc., see the `Gemfile`). Instead:

- **CI build/deploy:** `.github/workflows/deploy.yml` builds with the full Gemfile and publishes the compiled `_site` straight to Pages via the official `actions/upload-pages-artifact` + `actions/deploy-pages` flow on every push to `main`. **Pages source must be set to "GitHub Actions"** (Settings → Pages → Source), NOT "Deploy from a branch" — the branch-based source makes GitHub's native (allow-listed, plugin-less) builder try to rebuild the source and fail on tags like `toc`. This is the only retained workflow — the other upstream al-folio CI workflows were removed to keep the Actions tab clean.
- **Local preview** (needs Ruby + Bundler, and ImageMagick for responsive images):
  ```bash
  bundle install
  bundle exec jekyll serve   # http://localhost:4000
  ```
  Set `imagemagick.enabled: false` in `_config.yml` if ImageMagick isn't available locally.

## Content architecture

al-folio is data/collection-driven; most edits are content files, not templates:

- **`_config.yml`** — site identity (`first_name`/`last_name`), `url`/`baseurl`, `google_analytics` (`G-8YDS9ZPXM8`), `scholar.last_name`/`first_name` (controls author-name highlighting in publications), and feature flags. `enable_project_categories` is **false** so the projects grid is a single flat list sorted by `importance`. A `_config.yml` change requires restarting `jekyll serve`.
- **`_pages/`** — top-level pages. Nav order is set by `nav_order`: about (home, `permalink: /`) → projects (2) → publications (3) → cv (4). `blog.md` is `nav: false` (dormant; no posts).
- **`_projects/*.md`** — one file per project card + detail page. **Ordering is controlled by the `importance` front-matter field (lower = first).** Files are numbered `N_slug.md` to mirror that order. Card fields: `title`, `description`, `img`, `github`, optional `redirect` (external/internal link instead of a detail page — used by the research-paper card → `/publications/`).
- **`_bibliography/papers.bib`** — BibTeX, rendered by jekyll-scholar onto `/publications/`. Entries with `selected={true}` also surface on the homepage.
- **`_data/cv.yml`** — structured CV rendered by `_pages/cv.md` (layout `cv`). **Edit the YAML, not the page.**
- **`_data/socials.yml`** — social links + `cv_pdf` (résumé download path).
- **`_news/*.md`** — short homepage announcements (`inline: true`).
- **`assets/`** — `img/prof_pic.jpg` (profile photo), `img/projects/` (project covers — currently placeholders to replace), `pdf/David_Plehn_Resume.pdf` (résumé).

### Conventions / gotchas

- Project ordering = `importance`, NOT filename — but keep the `N_` filename prefix in sync for readability.
- Adding a project: create `_projects/N_slug.md` with the front matter above; it appears automatically on `/projects/`.
- Markdown is **kramdown** + **rouge**; image grids on project pages use the `{% include figure.liquid %}` helper (Bootstrap rows/cols).
- Legacy Hux Blog scaffolding (its `_config.yml`, `_layouts/`) was fully removed during the al-folio migration.
