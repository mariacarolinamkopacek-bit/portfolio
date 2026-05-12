# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

Personal portfolio for **Maria Carolina Minusso Kopacek** — Mechanical Engineer (UFRGS 2022), currently at KLL SAF Holland Group. The site serves as an Instagram link-in-bio / welcome card and a freelance business showcase. The owner is a "specialist generalist": Formula SAE suspension engineer, luthier, pyrographer, motorsport figure, FEA/CAD specialist.

The audience is split: majority Brazilian clients (Portuguese speakers), some international (English speakers). The site must work for both without any friction.

A full project plan (phases, content categories, reference portfolio analysis, time estimates) lives at:
`C:\Users\Carol\.claude\plans\hi-claude-i-need-swift-sutherland.md`

## Build Approach

Two parallel plans exist. The chosen path will be recorded here once decided:

**Plan A — No-Code (Framer):** Visual drag-and-drop builder. Monthly cost ~$10-25 USD. No local build commands.

**Plan B — HTML + CSS + Vanilla JS:** Static site, no framework, no build step. Hosted free on GitHub Pages. This is the recommended path.

> Update this section when the plan is confirmed. Once Plan B is active, add: how to preview locally (e.g., VS Code Live Server extension or `npx serve .`), and the GitHub Pages deployment URL.

## Bilingual System (Plan B)

All user-facing text lives in a single `translations.js` file structured as:

```js
const translations = {
  pt: { hero_title: "Engenheira Mecânica | Inventora | Maker", ... },
  en: { hero_title: "Mechanical Engineer | Inventor | Maker", ... }
};
```

A toggle button in the nav switches `document.documentElement.lang` and re-renders all text. **Never hardcode user-facing strings directly into HTML** — always route them through the translations object. Default language is Brazilian Portuguese (`pt`).

## Site Structure

Sections in order: Hero → Sobre/About → Projetos/Projects → Habilidades/Skills → Conquistas/Achievements → Contato/Contact. Language toggle is always visible in the nav bar.

The projects grid is filterable by category. Categories split across two groups:

- **Technical:** Suspensão & Dinâmica Veicular, Simulações Estruturais, Óleo & Gás, Vibroacústica/Pesquisa
- **Maker & Creative:** Luthieria, Arte Manual, Móveis & Marcenaria, Cosplay & Props
- **Motorsport:** RS Racing UFRGS, Eventos & Bastidores
- **Lifestyle (optional):** HEMA & Esportes — include only if high-quality photos exist

Each project card links to a dedicated case study page. Build one case study page as a template, then replicate it per project.

## Media Handling

Web-optimized assets only go into the repo. Raw originals (`.psd`, `.ai`, `.indd`) are gitignored. Before committing any image or video:
- Images: compress with [Squoosh](https://squoosh.app) (target WebP, under 300 KB for cards, under 800 KB for hero)
- Videos: compress with HandBrake (H.264, CRF 23-28, web-optimized fast-start)

## Commit Conventions

All commits use this prefix scheme:

| Prefix | Use for |
|--------|---------|
| `setup:` | Environment or tooling configuration |
| `content:` | Adding or updating photos, videos, or text |
| `style:` | Visual changes — colors, fonts, layout |
| `feat:` | New section or interactive feature |
| `fix:` | Correcting something broken or wrong |
| `polish:` | Alignment, spacing, typography refinements |

Commits are in English. Push to `origin/master` after each meaningful work session.

## Key Constraints

- **No text hardcoded outside `translations.js`** (bilingual requirement)
- **No text may overlap images** on any screen size — always verify at mobile (375px), tablet (768px), desktop (1280px)
- **No raw/uncompressed media in the repo** — optimize before committing
- **Crops must capture context** — never auto-crop engineering or maker work photos without checking that the subject is fully visible
- GitHub Pages (Plan B) serves static files only — no server-side logic
