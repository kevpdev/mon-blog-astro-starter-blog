# Bonnes pratiques Astro

- SSG par défaut pour blog; SSR seulement si besoin.
- .astro pour markup sémantique; JS client minimal.
- Images: composant d'optimisation, tailles explicites.
- Layouts: `src/layouts`; UI réutilisable: `src/components`.
- Content Collections pour articles/pages si volumétrie.
- Head: title unique, meta description, canonical, @astrojs/sitemap.
