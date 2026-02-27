import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
  ],
  
  // =============================================================================
  // DEPLOYMENT CONFIGURATION
  // =============================================================================
  // 
  // For GitHub Pages (username.github.io/repo-name):
  //   site: 'https://username.github.io'
  //   base: '/repo-name'
  //
  // For custom domain (e.g., bornaismusic.com):
  //   site: 'https://bornaismusic.com'
  //   base: '/'  (or remove the base property entirely)
  //
  // For local development, these settings don't affect `npm run dev`.
  // =============================================================================
  
  site: 'https://justinbornais.github.io',
  base: '/bornais-music-site',
});
