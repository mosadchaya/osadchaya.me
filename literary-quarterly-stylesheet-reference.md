# Literary Quarterly — Stylesheet Reference

---

## Typography

### Font Stack

```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,400;1,500&family=IBM+Plex+Mono:wght@400;500&display=swap
```

### Type Scale

| Role | Font | Weight | Size | Line-height | Color |
|------|------|--------|------|-------------|-------|
| Display headings | Cormorant Garamond Italic | 500 | 2.5–3rem | 1.1 | `#1A1714` |
| Section headings | Cormorant Garamond Italic | 500 | 1.5rem | 1.2 | `#1A1714` |
| Body text | Cormorant Garamond | 400 | 1.125rem | 1.65 | `#2A2522` |
| Body emphasis | Cormorant Garamond Italic | 400 | — | — | `#2A2522` |
| Pull quotes | Cormorant Garamond Italic | 400 | 1.25rem | 1.5 | `#2A2522` |
| Navigation | IBM Plex Mono | 400 | 0.75rem | 1.4 | `#6B6560` |
| Navigation (active) | IBM Plex Mono | 500 | 0.75rem | 1.4 | `#2A2522` |
| Footnote markers | IBM Plex Mono | 400 | 0.65rem | — | `#6B6560` |
| Endnotes | IBM Plex Mono | 400 | 0.8125rem | 1.5 | `#6B6560` |
| Site title | IBM Plex Mono | 500 | 0.75rem | — | `#6B6560` |

---

## Color Palette — Archival Cream

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Background (content) | Warm ivory | `#F8F5F0` | Page / content panel |
| Background (surround) | Deep umber | `#2C2724` | Desktop body; "desk" around page |
| Text primary | Warm black | `#2A2522` | Body text, active nav |
| Text display | Deep charcoal | `#1A1714` | Headings |
| Text secondary | Mid gray | `#6B6560` | Navigation, apparatus, metadata |
| Accent | Oxblood | `#8B3A3A` | Links, hover states, folio markers |
| Border / rule | Faded terra cotta | `#C4A68A` | Pull quote borders, horizontal rules |

---

## Layout & Spacing

### Content Panel (Desktop)

| Property | Value | Notes |
|----------|-------|-------|
| Max-width | 42–48rem | Comfortable measure; ~65–75 characters |
| Min-height | 100vh | Full folio feel |
| Padding (horizontal) | 3.5rem | Generous margins |
| Padding (vertical) | 4rem | Scholar's margins |
| Centering | `margin: 0 auto` | Floats in surround |

### Content Panel (Mobile ≤768px)

| Property | Value | Notes |
|----------|-------|-------|
| Max-width | 100% | Edge-to-edge |
| Padding (horizontal) | 1.25rem | Tighter but readable |
| Padding (vertical) | 2rem | |
| Surround | None | Ivory becomes full background |

### Element Spacing

| Element | Value |
|---------|-------|
| Paragraph margin | 1.5em bottom |
| Section margin | 4rem top |
| Pull quote left margin | 2rem |
| Pull quote left border | 2px solid `#C4A68A` |
| Pull quote padding-left | 1.5rem |
| Navigation item spacing | 0.5rem |

---

## Navigation Overlay

The navigation panel functions as a semi-transparent overlay that loads open by default.

| Property | Value | Notes |
|----------|-------|-------|
| Position | Fixed | Full viewport height |
| Background | `rgba(248, 245, 240, 0.92)` | Warm ivory at 92% opacity |
| Default state | Open (visible) | User sees TOC on load |
| Collapse trigger | Click outside / hamburger / scroll | Adds `.collapsed` class |
| Transition | `opacity 0.25s ease, transform 0.25s ease` | Smooth fade/slide |

### Mobile Navigation

On mobile, navigation becomes the primary interface pattern—triggered via hamburger icon (☰). Same transparency treatment applies.

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| > 768px | Deep umber surround; centered content panel with full padding; nav as sidebar or overlay |
| ≤ 768px | No surround; ivory edge-to-edge; reduced padding; nav as hamburger-triggered overlay |

---

## Additional Elements

### Pull Quotes

- Left margin indent: 2rem
- Left border: 2px solid `#C4A68A`
- Padding-left: 1.5rem
- Font: Cormorant Garamond Italic, 1.25rem

### Endnotes / Apparatus

- Positioned at section or page end
- Numbered with periods (1. 2. 3.)
- Font: IBM Plex Mono 400, 0.8125rem
- Color: `#6B6560`
- Tighter leading: 1.5

### Folio Markers

- Font: IBM Plex Mono 400
- Color: `#8B3A3A` (oxblood accent)
- Positioned as marginal notation

### Links

- Default: `#8B3A3A` (oxblood)
- Hover: Underline or slight opacity shift
- No aggressive color change

---

## Summary

A two-font system (Cormorant Garamond + IBM Plex Mono) on a warm ivory ground with deep umber surround. Typography does the work; color is restrained. The page-as-object metaphor holds on desktop; mobile prioritizes readability over theatrics. Navigation is overlay-first, semi-transparent, open by default.
