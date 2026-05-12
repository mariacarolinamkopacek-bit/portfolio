# Style Guide — Technical Warmth

Visual identity for the portfolio. Every design decision should be checked against this document.

## Color Palette

| Role | Hex | Use |
|------|-----|-----|
| Background | `#1A1A1A` | Page and section backgrounds |
| Surface | `#2A2A2A` | Cards, nav bar, input fields |
| Border | `#3A3A3A` | Dividers, card borders, subtle outlines |
| Text primary | `#EFEFEF` | Headings, body text |
| Text muted | `#999999` | Labels, dates, secondary info |
| Accent (copper) | `#C87941` | Links, buttons, highlights, underlines, icons |
| Accent hover | `#E08B50` | Buttons and links on hover/focus |
| White | `#FFFFFF` | Inline on dark overlays only |

Never use pure black (`#000000`) — use `#1A1A1A` or `#0F0F0F` for depth.

## Typography

### Title font — Geometric sans-serif
- **Recommended:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (free, Google Fonts)
- Use for: name, section headings, project titles, nav items
- Weight: 600–700 for headings, 400–500 for nav

### Body font — Humanist sans-serif
- **Recommended:** [Inter](https://fonts.google.com/specimen/Inter) (free, Google Fonts)
- Use for: bio text, project descriptions, labels, buttons
- Weight: 400 regular, 500 medium

### Type scale (desktop)

| Element | Size | Weight | Font |
|---------|------|--------|------|
| Name / Hero title | 56–72px | 700 | Space Grotesk |
| Section heading | 36–44px | 600 | Space Grotesk |
| Project card title | 20–24px | 600 | Space Grotesk |
| Body paragraph | 16–18px | 400 | Inter |
| Label / caption | 13–14px | 500 | Inter |
| Button | 14–16px | 500 | Inter |

Scale down ~20% on mobile. Never go below 14px for any readable text.

## Spacing System

Base unit: `8px`. All spacing values must be multiples of 8.

| Token | Value | Use |
|-------|-------|-----|
| `--space-xs` | 8px | Inline gaps, icon padding |
| `--space-sm` | 16px | Internal card padding |
| `--space-md` | 24px | Between small elements |
| `--space-lg` | 48px | Between sections within a block |
| `--space-xl` | 80px | Between major page sections |
| `--space-2xl` | 120px | Hero top/bottom padding |

## Visual Rules

- **Copper accent is used sparingly** — underlines on the name, button borders/fills, hover states, and section divider lines only. Not on every element.
- **Cards** have a `#2A2A2A` background, `1px solid #3A3A3A` border, and a copper left border accent (`3px solid #C87941`) on hover.
- **Buttons** — primary: copper background `#C87941` + dark text. Secondary: transparent with copper border + copper text.
- **Images** — all use a subtle dark overlay on hover (semi-transparent `#1A1A1A` at 40% opacity) to reveal project title.
- **Copper line** — a `2px` copper horizontal rule appears under the hero name and under each section heading.
- **No pure white backgrounds** anywhere on the page.

## Motion

- Hover transitions: `150ms ease` for color/border changes, `200ms ease` for transforms
- Section entrance: fade-up on scroll (`opacity 0→1`, `translateY 20px→0`, `400ms ease-out`)
- Language toggle: `200ms cross-fade` on text content swap
- No bounces, springs, or decorative looping animations — purposeful only

## Breakpoints

| Name | Width | Notes |
|------|-------|-------|
| Mobile | `< 640px` | Single column, reduced font sizes |
| Tablet | `640px – 1024px` | 2-column grid for projects |
| Desktop | `> 1024px` | Full layout as designed |
