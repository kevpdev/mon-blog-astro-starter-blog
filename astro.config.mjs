import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kevpdev.github.io/mon-blog-astro-starter-blog/',
  base: '/mon-blog-astro-starter-blog/',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: { sourcemap: true },
  },
});
