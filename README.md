# Plehndm.github.io

Personal portfolio site of **David Plehn** — showcasing software, AI/ML projects, and research.
Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme (v0.16.3), deployed to GitHub Pages.

Live: https://plehndm.github.io

## Editing content

| What | Where |
|------|-------|
| Homepage bio / hero | `_pages/about.md` |
| Projects (cards + detail pages) | `_projects/*.md` — ordered by the `importance` field (lower = shown first) |
| Publications | `_bibliography/papers.bib` |
| CV / résumé page | `_data/cv.yml` (content) + `_pages/cv.md` |
| Résumé PDF | `assets/pdf/David_Plehn_Resume.pdf` |
| Social links + résumé link | `_data/socials.yml` |
| Profile photo | `assets/img/prof_pic.jpg` |
| Project images | `assets/img/projects/` (replace the placeholders) |
| Homepage news items | `_news/*.md` |

## Local preview

Requires Ruby + Bundler (and ImageMagick for responsive images):

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

If ImageMagick isn't installed, set `imagemagick.enabled: false` in `_config.yml` for local builds.
A Docker path is also available via the upstream al-folio `Dockerfile` if preferred.

## Deployment

GitHub Pages **cannot** build this site directly — al-folio uses plugins (jekyll-scholar, etc.)
that aren't on the GitHub Pages allow-list. Instead, `.github/workflows/deploy.yml` builds the
site in CI and publishes the compiled output to the **`gh-pages`** branch.

**One-time setup:** in the repo's **Settings → Pages**, set *Source* to **Deploy from a branch → `gh-pages` / root**.
After that, every push to `main` rebuilds and redeploys automatically.

## To-do / asset gaps

- Replace placeholder images in `assets/img/projects/` with real screenshots / GIFs.
- Confirm the full author list for the publication in `_bibliography/papers.bib`.
- (Optional) Embed the Time to Die WebGL build — see `_projects/5_time-to-die.md`.
