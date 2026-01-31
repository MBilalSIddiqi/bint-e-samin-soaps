# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Bint-e-Samin Soaps** - A static e-commerce website for handmade natural soaps with WhatsApp ordering integration.

- Built with pure HTML, CSS, and JavaScript (no frameworks)
- Static site - can be hosted on GitHub Pages, Netlify, Vercel, etc.
- WhatsApp-based checkout system
- Product filtering with search, price range, vegan filter, and sorting

## Project Structure

```
soap-shop/
├── index.html          # Homepage
├── products.html       # Products listing with filters
├── about.html          # About page
├── contact.html        # Contact page
├── faq.html            # FAQ with accordion
├── error.html          # Generic error page
├── 404.html            # Not found page
├── 500.html            # Server error page
├── HISTORY.md          # Complete change log (MANDATORY)
├── DEPLOYMENT.md       # Hosting instructions
├── README.md           # Project overview
├── favicon.svg         # Website favicon
└── assets/
    ├── css/
    │   └── styles.css  # Main stylesheet
    └── js/
        └── script.js   # Main JavaScript (products, cart, filters)
```

## Coding Guidelines

### HTML
- Semantic HTML5 elements (header, nav, main, section, footer, etc.)
- Proper ARIA labels for accessibility
- Skip links for keyboard navigation
- Content Security Policy meta tag for security

### CSS
- Use CSS custom properties for colors (already defined)
- Color palette:
  - Cream `#FAF9F6` - Background
  - Sage Green `#9CAF88` - Primary buttons/links
  - Olive `#6B8E23` - Headings/accents
  - Soft Brown `#8B6F47` - Footer/text
  - White `#FFFFFF` - Product cards
- Flexbox and CSS Grid for layout
- `cubic-bezier(0.4, 0, 0.2, 1)` easing for smooth animations
- Hardware acceleration with `transform: translateZ(0)` for animations

### JavaScript
- No external dependencies
- CSP-compliant event listeners (no inline `onclick`)
- Debounced search input (300ms delay)
- XSS protection with input sanitization
- Local storage for cart persistence
- Modular functions with clear names

### File Paths
- Always use relative paths (e.g., `assets/css/styles.css`, not `/assets/css/styles.css`)
- This ensures the site works correctly on any hosting platform

---

## MANDATORY: Documenting Changes

**CRITICAL:** Every change, fix, or update MUST be documented in `HISTORY.md`

### Required Documentation Format

Add new entries at the TOP of the history (after the previous version block):

```markdown
### vX.X - YYYY-MM-DD
**Change Title**

**Issue:** Description of the problem or feature request

**Solution Implemented:**
1. Detailed explanation of changes
2. Second point if needed
3. Third point if needed

**Files Modified:**
- file.ext - Description of changes
- file.ext - Description of changes

**Result:**
- Expected outcome
- Another positive result

---

## Acknowledgments

[Update the session dates and total time]
```

### Documentation Checklist

- [ ] Version number incremented
- [ ] Date format: YYYY-MM-DD
- [ ] Clear title describing the change
- [ ] Issue/problem explained
- [ ] Solution described in detail
- [ ] All modified files listed
- [ ] Expected results documented
- [ ] Acknowledgments section updated with session date
- [ ] "Last Updated" date at bottom of file changed

### Examples

**Small Bug Fix:**
```markdown
### v2.4 - January 5, 2026
**Fixed Cart Empty State Display**

**Issue:** Cart empty message wasn't showing correctly when items were removed

**Solution:**
- Added null check in renderCartItems()
- Cart now properly displays "Your cart is empty" when cart.length === 0

**Files Modified:**
- assets/js/script.js - Added conditional rendering for empty cart

**Result:**
- Empty cart state displays correctly
- No more console errors on cart operations
```

**New Feature:**
```markdown
### v2.5 - January 5, 2026
**Added Product Review System**

**Feature:** Customers can now leave star ratings on products

**Implementation:**
- Added rating property to product data
- Created renderStarRating() function
- Added star display in product cards
- Included hover effects for interactive rating selection

**Files Modified:**
- assets/js/script.js - Added rating logic (lines 150-200)
- assets/css/styles.css - Added .star-rating styles (lines 400-450)
- products.html - Added rating section to product template

**Result:**
- Products display star ratings
- Customers can click to select ratings
- Average rating calculated and shown
```

---

## Git Workflow (for deployment)

When ready to deploy:

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Version 2.3 - Added vegan product tags and filtering"

# Push to GitHub (triggers GitHub Pages deployment)
git push origin main
```

---

## Quick Commands

| Task | Command |
|------|---------|
| Start local server | `python3 -m http.server 8080` |
| View site | `http://localhost:8080` |
| Check for broken links | Manual browser testing |

---

## Accessibility Requirements

All changes must maintain:
- Keyboard navigation support
- ARIA labels where needed
- Skip to content link
- Focus visible states
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for images (or aria-hidden for decorative)
- Color contrast ratios (WCAG AA minimum)

---

## Brand Guidelines

**Brand Name:** Bint-e-Samin Soaps (previously Pure Essence)

**Tone:** Natural, gentle, trustworthy, professional yet warm

**Messaging:** Emphasize:
- 100% natural ingredients
- Handcrafted with care
- Cruelty-free
- Eco-friendly packaging
- Traditional soap-making techniques

---

## Notes

- The WhatsApp checkout uses `https://wa.me/` API
- Email contact: info@pureessencesoaps.com (update when ready)
- WhatsApp: +92 334 3601488

---

*Last Updated: January 5, 2026*
