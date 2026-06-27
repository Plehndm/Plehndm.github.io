# Plehndm.github.io

Personal portfolio of **David Plehn** — software, AI/ML projects, and research.
Built with [Jekyll](https://jekyllrb.com/) and the **Forty** theme ([HTML5 UP](https://html5up.net/), Jekyll port by [Andrew Banchich](https://github.com/andrewbanchich/forty-jekyll-theme)). Deployed to GitHub Pages via GitHub Actions.

Live: https://plehndm.github.io

## Editing content

| What | Where |
|------|-------|
| Site title / tagline / socials / email | `_config.yml` |
| Homepage hero + about text | `index.md` (`landing-title` + body) |
| Projects (tiles + detail pages) | `_posts/YYYY-MM-DD-slug.md` — **tile order = post date, newest first** |
| Project tile image | `image:` front matter (e.g. `assets/images/pic01.jpg`) |
| Résumé PDF | `assets/pdf/David_Plehn_Resume.pdf` |
| Tile images / banner | `assets/images/` |

### Add or reorder a project
Create `_posts/YYYY-MM-DD-slug.md` with `layout: post`, `title`, `description` (tile caption), and `image`. Give it a **date** that places it where you want in the tile grid (later date = earlier tile). Keep `tiles-count` in `_config.yml` ≥ the number of projects.

## Local preview

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

## Deployment

GitHub Pages' native builder can't run Jekyll 4.x, so `.github/workflows/deploy.yml` builds the site in CI and publishes it via the official `actions/deploy-pages` flow.

**One-time setup:** Settings → Pages → Source → **GitHub Actions**. Then every push to `main` redeploys automatically.

## To-do
- Replace the stock tile images in `assets/images/` with real project screenshots/GIFs.
- Add live-demo links (FinSight AI on Vercel, SceneCheck via Expo/TestFlight) as they come online.

---
Theme: *Forty* by HTML5 UP (CCA 3.0). Jekyll port by Andrew Banchich (MIT).
