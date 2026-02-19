# Personal Website / Extended Resume — Project Spec

## Overview

A static personal website with a literary journal aesthetic, hosted on Oracle Cloud Object Storage (Always Free tier) with a custom domain.

**Timeline:** Ready to deploy by tomorrow morning
**Approach:** Pure HTML/CSS/JS — no build tools, no frameworks, maximum simplicity

---

## Design System

Using the provided stylesheet reference (`literary-quarterly-stylesheet-reference.md`):

- **Typography:** Cormorant Garamond (body/headings) + IBM Plex Mono (nav/apparatus)
- **Colors:** Warm ivory content panel (`#F8F5F0`) on deep umber surround (`#2C2724`)
- **Layout:** Centered content panel (42-48rem max-width) floating on dark background
- **Accent:** Oxblood (`#8B3A3A`) for links and interactive elements

---

## Site Structure

| Page | URL | Content |
|------|-----|---------|
| Index/TOC | `/` or `/index.html` | Navigation overlay (loads open), site title |
| About | `/about.html` | Short personal introduction |
| Resume | `/resume.html` | Formatted CV (literary journal style, not plain copy-paste) |
| Interests | `/interests.html` | Topics you're curious about |
| Manifesto | `/manifesto.html` | Things you believe in |
| Reading | `/reading.html` | Currently reading list |
| Contact | `/contact.html` | Email address (no form) |

---

## Navigation Pattern

Inspired by the Cargo site (d445-a.cargo.site):

1. **Overlay TOC** — Semi-transparent navigation panel, visible on page load
   - Fixed position, warm ivory at 92% opacity
   - Collapses on click outside or scroll
   - Lists all pages as links

2. **Bottom Pagination** — Present on every page
   - Format: `← 2 →` (prev arrow, page number, next arrow)
   - Links to previous/next pages in sequence
   - IBM Plex Mono, subtle styling

3. **Hamburger Menu** — Mobile trigger (☰) to reopen nav overlay

---

## File Structure

```
osadchaya.me/
├── index.html          # Landing with nav overlay
├── about.html
├── resume.html
├── interests.html
├── manifesto.html
├── reading.html
├── contact.html
├── css/
│   └── style.css       # All styles (single file)
├── js/
│   └── nav.js          # Navigation overlay behavior
└── assets/
    └── resume.pdf      # Downloadable PDF version
```

---

## Implementation Steps

### Phase 1: Build Structure (Claude does this)

1. **Create base HTML template**
   - Semantic HTML5 structure
   - Google Fonts link (Cormorant Garamond + IBM Plex Mono)
   - Navigation overlay component
   - Bottom pagination component

2. **Implement CSS (style.css)**
   - CSS custom properties for colors/typography from stylesheet
   - Content panel layout (desktop: centered with surround, mobile: edge-to-edge)
   - Navigation overlay styles
   - Typography scale per stylesheet reference
   - Responsive breakpoints (768px)

3. **Implement navigation (nav.js)**
   - Overlay show/hide logic
   - Click-outside-to-close behavior
   - Hamburger toggle for mobile

4. **Create all pages with placeholder content**
   - index.html (landing/nav)
   - about.html
   - resume.html
   - interests.html
   - manifesto.html
   - reading.html
   - contact.html

### Phase 2: Add Content (You do this)

5. **Export resume** from Google Docs → save to folder
6. **Replace placeholder text** in each page with your content
7. **Add contact email** to contact.html

### Phase 3: Deploy

8. **Set up Oracle Cloud Object Storage bucket**
9. **Upload all files**
10. **Configure Cloudflare** for osadchaya.me
11. **Test live site**

---

## Oracle Cloud Object Storage Setup

### Prerequisites
- Oracle Cloud account (Always Free tier)
- Custom domain with DNS access

### Steps

1. **Create a bucket**
   - Name: `osadchaya-me` (or similar)
   - Storage tier: Standard
   - Enable "Public" visibility for static hosting

2. **Configure for static website hosting**
   - Set index document: `index.html`
   - Set error document: `404.html` (optional)

3. **Upload files**
   - Use OCI Console, CLI, or API
   - Maintain folder structure (css/, js/, assets/)

4. **Get bucket URL**
   - Format: `https://objectstorage.{region}.oraclecloud.com/n/{namespace}/b/{bucket}/o/index.html`

### Custom Domain Configuration

1. **Create a CNAME record** pointing your domain to the Object Storage URL
2. **Alternative:** Use Cloudflare (free tier) as a CDN/proxy for:
   - HTTPS with your custom domain
   - Cleaner URLs (removes /o/ path)
   - Caching and performance

---

## Content Strategy

**Approach:** Build structure with placeholder text first, you fill in content after.

**Content to provide (when ready):**
- [ ] **Resume** — Export from Google Docs to `osadchaya.me/` folder (as .txt or .md)
- [ ] **About text** — A few paragraphs introducing yourself
- [ ] **Interests** — List of topics you're curious about
- [ ] **Manifesto** — Things you believe in
- [ ] **Reading list** — What you're currently reading
- [ ] **Contact email** — The email address to display

**Domain:** osadchaya.me (confirmed)
**HTTPS:** Cloudflare (free tier)

---

## Verification Plan

1. **Local testing**
   - Open `index.html` in browser
   - Test all navigation links
   - Test responsive layout (mobile/desktop)
   - Verify all pages render correctly

2. **Pre-deployment checklist**
   - All links work
   - Typography renders correctly
   - Colors match stylesheet
   - Navigation overlay functions properly
   - Bottom pagination links are correct
   - Mobile hamburger menu works

3. **Post-deployment**
   - Verify bucket URL loads site
   - Test custom domain (after DNS propagation)
   - Check HTTPS works (if using Cloudflare)

---

## Notes

- No JavaScript frameworks — vanilla JS only for nav behavior
- No build process — edit files directly, upload to bucket
- PDF resume included as downloadable option alongside formatted HTML version
- Site can be updated by re-uploading changed files to bucket
