# Bornais Music Website Redesign

**Date:** 2026-02-27  
**Status:** Approved  
**Approach:** Single-Page Showcase (Approach A)

## Goal

Completely redesign the Bornais Music website from Hugo to Astro with TypeScript React components, creating an elegant classical aesthetic with expressive animations for a musician's performance services portfolio.

## Design Decisions

### Architecture

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Astro 4.x | Static-first with React islands for interactivity |
| UI Components | React 18 + TypeScript | Type safety, component reusability |
| Styling | Tailwind CSS 3 | Utility-first, rapid development |
| Animations | Framer Motion | Declarative, performant animations |
| Build | Vite (via Astro) | Fast HMR, modern bundling |

### Color Palette

```
Primary:     #1A1A1A (Rich Black)
Secondary:   #FFFFFF (White)
Accent:      #D4AF37 (Antique Gold)
Warm Cream:  #FDF8F0 (Alt backgrounds)
Soft Gold:   #F5E6C8 (Subtle accents)
```

### Typography

- Headings: Playfair Display (serif)
- Body: Lato (sans-serif)
- Accent: Cormorant Garamond (elegant serif)

### Page Structure

```
Hero → About → Services → Gallery → Audio → Testimonials → Pricing → FAQ → Contact → Footer
```

## Files Affected

### Remove (Hugo)

- `hugo.toml`
- `archetypes/`
- `content/`
- `layouts/`
- `public/` (Hugo output)

### Preserve

- `static/logo.png`
- `static/icon.png`
- `static/icon-dark.png`
- `static/images/piano-portrait.jpg`

### Create (Astro)

```
astro.config.mjs
tsconfig.json
tailwind.config.mjs
package.json
src/
  layouts/
    Layout.astro
  pages/
    index.astro
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Services.tsx
    Gallery.tsx
    AudioSamples.tsx
    Testimonials.tsx
    Pricing.tsx
    FAQ.tsx
    Contact.tsx
    Footer.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
      Card.tsx
      AnimatedSection.tsx
  styles/
    global.css
  data/
    services.ts
    testimonials.ts
    pricing.ts
    faq.ts
    audio.ts
    gallery.ts
  assets/
    (moved from static/)
public/
  (static assets)
```

## Implementation Plan

### Phase 1: Project Setup (Steps 1-5)

#### Step 1: Backup and clean Hugo files
- Move Hugo files to a backup location
- Preserve static assets (logos, images)

#### Step 2: Initialize Astro project
- Create new Astro project with React + TypeScript
- Configure Tailwind CSS
- Set up project structure

#### Step 3: Configure TypeScript and tooling
- Set up tsconfig.json
- Configure ESLint + Prettier
- Add Framer Motion dependency

#### Step 4: Create base layout
- Layout.astro with HTML boilerplate
- Google Fonts integration
- Global CSS with color variables

#### Step 5: Test base setup
- Verify dev server runs
- Verify Tailwind works
- Verify React component renders

### Phase 2: Core Components (Steps 6-10)

#### Step 6: Navbar component
- TDD: Write test for navigation links
- Implement sticky navbar with anchor links
- Add mobile hamburger menu
- Add smooth scroll behavior

#### Step 7: Hero section
- TDD: Write test for hero content
- Parallax background image
- Animated text entrance
- CTA buttons with hover effects

#### Step 8: About section
- TDD: Write test for about content
- Portrait image with elegant border
- Biography text with scroll reveal
- Floating music note decorations

#### Step 9: Services section
- TDD: Write test for service cards
- Four service cards (Wedding, Funeral, Church, Events)
- Hover animations (piano key effect)
- Icon integration

#### Step 10: AnimatedSection wrapper
- Reusable scroll-triggered animation component
- Framer Motion intersection observer
- Configurable animation variants

### Phase 3: Interactive Components (Steps 11-15)

#### Step 11: Gallery component
- TDD: Write test for gallery grid
- Responsive image grid
- Lightbox modal on click
- Video embed support

#### Step 12: Audio Samples component
- TDD: Write test for audio player
- Custom audio player with waveform visualization
- Play/pause controls
- Track listing with elegant styling

#### Step 13: Testimonials carousel
- TDD: Write test for carousel navigation
- Auto-rotating testimonials
- Manual navigation dots
- Fade transitions

#### Step 14: Pricing cards
- TDD: Write test for pricing display
- Three-tier pricing layout
- Feature lists
- CTA buttons

#### Step 15: FAQ accordion
- TDD: Write test for accordion toggle
- Expandable questions
- Animated open/close
- Only one open at a time

### Phase 4: Contact & Polish (Steps 16-20)

#### Step 16: Contact section
- Google Form embed/link
- Contact information display
- Social media links

#### Step 17: Footer component
- Logo and copyright
- Quick navigation links
- Social icons

#### Step 18: Floating decorations
- Animated music notes SVG
- Subtle background animations
- Performance optimization

#### Step 19: Mobile responsiveness
- Test all breakpoints
- Touch interactions
- Mobile menu functionality

#### Step 20: Final integration
- Assemble all sections in index.astro
- Test full page scroll
- Performance audit
- Accessibility check

### Phase 5: Data & Content (Steps 21-22)

#### Step 21: Populate dummy data
- Services descriptions
- Testimonials with names/dates
- Pricing packages
- FAQ questions/answers
- Audio track metadata
- Gallery image placeholders

#### Step 22: Final testing and commit
- Full E2E walkthrough
- Cross-browser testing
- Create PR

## Estimated Scope

**Large** (20+ files, complete rewrite)

## Risks / Open Questions

1. **Image assets**: May need placeholder images for gallery
2. **Audio files**: Will need placeholder audio or skip waveform until real files provided
3. **Google Form**: Will use placeholder URL until real form created
4. **Performance**: Many animations may impact low-end devices (will add reduced-motion support)

## Test Strategy

- Unit tests for data transformations
- Component render tests for React components
- Visual regression testing (manual)
- Lighthouse performance audit

---

## Execution Mode

Ready for agent-driven execution.
