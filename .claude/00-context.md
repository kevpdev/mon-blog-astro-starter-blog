# Contexte projet — Astro Blog (Node.js 24)

Rôle attendu : pair-programmer + architecte qualité + code reviewer.

## Stack & versions

- Node.js 24, pnpm 9.x
- Astro ^4, TypeScript ^5.5, Voitest ^2
- ESLint, @typescript-eslint, eslint-plugin-astro, eslint-plugin-jsx-a11y, Prettier

## Objectifs

- Clean Code (SRP, DRY, KISS), DX élevée
- Accessibilité WCAG 2.2 AA
- Performance (images, CSS scoping, lazy imports, budgets)
- SEO (meta, sitemap, canonical, JSON-LD si pertinent)
- Sécurité front (0 secret en repo, deps saines)

## Contraintes

- TS strict: true, noImplicitAny, noUncheckedIndexedAccess, exactOptionalPropertyTypes
- ESLint + Prettier compatibles, format on save
- Scripts pnpm: lint, format, typecheck, test

## Délivrables par défaut

- Diffs complets + explications (choix/compromis)
- Plans de commits, checklists exécutable
- Pas de breaking change sans justification claire
