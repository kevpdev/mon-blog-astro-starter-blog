import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// Configuration dynamique selon l'environnement
const isDev = process.env.NODE_ENV === 'development';

// Détection robuste de la plateforme de déploiement
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true';
const isNetlify = process.env.NETLIFY === 'true';

// URLs et bases selon l'environnement
let site, base;

if (isDev) {
  // Développement local
  site = 'http://localhost:4321';
  base = '/';
} else if (isGitHubPages) {
  // GitHub Pages (staging via GitHub Actions)
  site = 'https://kevpdev.github.io/mon-blog-astro-starter-blog';
  base = '/mon-blog-astro-starter-blog/';
} else if (isNetlify) {
  // Netlify (production)
  site = process.env.DEPLOY_PRIME_URL || process.env.URL || 'https://monsite.netlify.app';
  base = '/';
} else {
  // Fallback pour autres plateformes
  site = process.env.SITE_URL || 'https://monsite.com';
  base = '/';
}

export default defineConfig({
  site,
  base,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: { sourcemap: true },
  },
});
