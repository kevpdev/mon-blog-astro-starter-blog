# Commande — Configurer Astro

Génère ou met à jour la configuration Astro complète avec optimisations SEO et performance.

## Usage

```
/configure-astro
```

Utiliser lors de l'initialisation du projet ou migration vers Astro.

## Actions

1. Générer/mettre à jour `astro.config.mjs` avec site, sitemap, sourcemap
2. Proposer Content Collections si contenu structuré détecté
3. Créer `src/layouts/BaseLayout.astro` avec head SEO/a11y optimisé
4. Optionnel: générer composant `<SEO />` réutilisable
5. Afficher diffs et guide d'utilisation

## Exemples

**Entrée :**

```
Projet Astro basique
```

**Sortie attendue :**

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
  vite: { build: { sourcemap: true } },
});
```

## Notes

- Utilise les configurations du projet (voir .claude/snippets/configs/)
- Génère uniquement les fichiers manquants
- Compatible avec les Content Collections Astro 4+
