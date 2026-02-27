# Bornais Music Website

![Bornais Music Logo](public/logo.png)

The official website for **Bornais Music** — Justin Bornais, pianist, organist, and performer for weddings, funerals, church services, and special events.

Built with [Astro](https://astro.build/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

---

## Features

- 🎹 **Single-page showcase** with smooth scroll navigation
- ✨ **Elegant animations** powered by Framer Motion
- 📱 **Fully responsive** design for all devices
- 🎨 **Warm, classical aesthetic** with gold accents
- ⚡ **Fast loading** with Astro's islands architecture

## Sections

| Section | Description |
|---------|-------------|
| Hero | Animated entrance with parallax background |
| About | Biography and performance stats |
| Services | Wedding, funeral, church, and event performances |
| Gallery | Photo gallery with lightbox |
| Listen | Audio samples showcase |
| Testimonials | Client reviews carousel |
| Pricing | Service packages and rates |
| FAQ | Frequently asked questions accordion |
| Contact | Contact info and booking form link |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/justinbornais/bornais-music-site.git
cd bornais-music-site

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server at http://localhost:4321
npm run dev
```

### Build for Production

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

---

## Project Structure

```
bornais-music-site/
├── public/               # Static assets (images, audio, icons)
│   ├── images/
│   ├── audio/
│   ├── logo.png
│   ├── icon.png
│   └── icon-dark.png
├── src/
│   ├── components/       # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── ...
│   ├── data/             # Content data (TypeScript)
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   ├── pricing.ts
│   │   ├── faq.ts
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

---

## Customization

### Updating Content

All content is stored in TypeScript files under `src/data/`:

- **Contact info**: `src/data/navigation.ts`
- **Services**: `src/data/services.ts`
- **Testimonials**: `src/data/testimonials.ts`
- **Pricing**: `src/data/pricing.ts`
- **FAQ**: `src/data/faq.ts`
- **Audio tracks**: `src/data/audio.ts`
- **Gallery images**: `src/data/gallery.ts`

### Adding Media

- **Images**: Add to `public/images/`
- **Audio files**: Add to `public/audio/`
- **Update references** in the corresponding data file

### Deployment URL

To change the deployment URL, edit `astro.config.mjs`:

```javascript
// For GitHub Pages (username.github.io/repo-name):
site: 'https://username.github.io',
base: '/repo-name',

// For custom domain (e.g., bornaismusic.com):
site: 'https://bornaismusic.com',
base: '/',  // or remove this line entirely
```

---

## Deployment

### GitHub Pages

1. Push to your repository
2. Go to **Settings → Pages**
3. Set source to **GitHub Actions**
4. The site will deploy automatically on push to `main`

### Other Platforms

```bash
npm run build
```

The built site will be in the `dist/` folder. Deploy to any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.).

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Astro](https://astro.build/) | Static site generator |
| [React](https://react.dev/) | Interactive components |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |

---

## License

© 2026 Bornais Music. All rights reserved.