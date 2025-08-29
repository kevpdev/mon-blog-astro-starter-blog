# PROMPT COMPLET CORRIGÉ — Setup Astro v5 + Node 24

Tu es un assistant développeur intégré à VS Code.

**TÂCHE**: Crée et remplis l'arborescence ci-dessous dans le repo courant.

**Mode opératoire**:

- Idempotent: si un fichier existe et est identique, ne rien changer; sinon écris en entier.
- Retourne à la fin:
  1. Un MANIFEST avec chemins + statut (créé/actualisé/identique).
  2. Un DIFF synthétique (unifié) par fichier modifié.
  3. Les commandes `pnpm add -D ...` exactes (compatibles Node 24 + Astro v5).
  4. Les scripts à insérer dans package.json.
  5. La config simple de pre-commit (husky + lint-staged) + commandes d'init.

---

## ARBORESCENCE À CRÉER

```
.claude/
  00-context.md
  rules/
    10-clean-code.md
    20-astro-best-practices.md
    30-a11y-wcag22.md
    40-performance-seo.md
    50-security-frontend.md
    60-typescript-node24.md
  commands/
    generate-quality-configs.md
    configure-astro.md
    add-npm-scripts.md
    setup-ci-local.md
    review-diff.md
  workflows/
    bootstrap-quality.md
    repo-audit.md
    refactor-component.md
  checklists/
    pr-review.md
    a11y-seo-perf.md
    release.md
  templates/
    CONTRIBUTING.md
    PULL_REQUEST_TEMPLATE.md
    ISSUE_BUG.md
  snippets/
    eslint-base.cjs
    prettier.json
    tsconfig.json
    astro.config.mjs
    vscode.settings.json
    gitignore.txt
  seeds/
    ask-project-scan.md
    ask-generate-configs.md
```

---

## CONTENUS À ÉCRIRE (copie exacte)

### PATH: `.claude/00-context.md`

```markdown
# Contexte projet — Astro Blog (Node.js 24)

Rôle attendu : pair-programmer + architecte qualité + code reviewer.

## Stack & versions

- Node.js 24, pnpm 9.x
- Astro ^5, TypeScript ^5.5, Vitest ^2
- ESLint, @typescript-eslint, eslint-plugin-astro, eslint-plugin-jsx-a11y, Prettier

## Objectifs

- Clean Code (SRP, DRY, KISS), DX élevée
- Accessibilité WCAG 2.2 AA
- Performance (images, CSS scoping, lazy imports, budgets)
- SEO (meta, sitemap, canonical, JSON-LD si pertinent)
- Sécurité front (0 secret en repo, deps saines)

## Contraintes

- TS strict: true, noImplicitAny, noUncheckedIndexedAccess
- ESLint + Prettier compatibles, format on save
- Scripts pnpm: lint, format, typecheck, test

## Délivrables par défaut

- Diffs complets + explications (choix/compromis)
- Plans de commits, checklists exécutable
- Pas de breaking change sans justification claire
```

### PATH: `.claude/rules/10-clean-code.md`

```markdown
# Règles Clean Code (JS/TS)

- SRP : 1 fichier/composant = 1 responsabilité.
- Fonctions ≤ 40 lignes, early returns, pas d'états cachés.
- Nommage explicite; éviter abréviations opaques.
- Éviter "god modules" → factoriser dans `src/lib`.
- Imports ordonnés (builtin/external → internal → parent/sibling/index).
- Fichiers ≤ 300 lignes (cible 150–200).
- Cas d'erreurs/branches critiques testés (Vitest).
```

### PATH: `.claude/rules/20-astro-best-practices.md`

```markdown
# Bonnes pratiques Astro

- SSG par défaut pour blog; SSR seulement si besoin.
- .astro pour markup sémantique; JS client minimal.
- Images: composant d'optimisation, tailles explicites.
- Layouts: `src/layouts`; UI réutilisable: `src/components`.
- Content Collections pour articles/pages si volumétrie.
- Head: title unique, meta description, canonical, @astrojs/sitemap.
```

### PATH: `.claude/rules/30-a11y-wcag22.md`

```markdown
# Accessibilité (WCAG 2.2 AA)

- Sémantique HTML5 (header/nav/main/article/section/footer).
- Un seul h1; hiérarchie h2/h3 logique.
- Labels reliés aux champs; aria-\* parcimonieux et pertinent.
- Focus visible; ordre de tab cohérent.
- <button> pour actions, <a> pour navigation.
- Contrastes conformes; no title-only liens.
```

### PATH: `.claude/rules/40-performance-seo.md`

```markdown
# Performance & SEO

- Lazy pour ressources lourdes; code-splitting si besoin.
- CSS scoped par composant; éviter global massif.
- Budgets de taille (JS/CSS/images) et images optimisées.
- SEO: titles uniques, meta desc, canonical; sitemap actif.
- Liens internes cohérents; éviter contenu dupliqué.
```

### PATH: `.claude/rules/50-security-frontend.md`

```markdown
# Sécurité Front

- Aucun secret/clé en clair; variables via env sécurisée (non commitées).
- Dépendances régulièrement mises à jour (audit).
- En-têtes/meta de base (noindex en preview, etc.).
- Validation stricte des données côté client.
```

### PATH: `.claude/rules/60-typescript-node24.md`

```markdown
# TypeScript + Node 24

- "target": "ES2022"; "moduleResolution": "Bundler".
- "strict": true, "noUncheckedIndexedAccess": true.
- Compatible Astro v5: pas de "exactOptionalPropertyTypes" sans preset strict.
- Utiliser "astro check" au lieu de "tsc --noEmit" pour Astro v5.
```

### PATH: `.claude/commands/generate-quality-configs.md`

```markdown
# Commande — Générer configs qualité

Tâche: créer/mettre à jour .editorconfig, .prettierrc.json, .eslintrc.cjs, tsconfig.json, astro.config.mjs, .vscode/settings.json, .gitignore, scripts pnpm, hook pre-commit.
Sortie:

1. Diffs par fichier, 2) explications (6–10 puces),
2. `pnpm add -D` exactes Node 24 + Astro v5,
3. config lint-staged.

Modèle de réponse:

## Install

## Files (diff)

## Scripts (package.json)

## Pre-commit

## Why (bullets)
```

### PATH: `.claude/commands/configure-astro.md`

```markdown
# Commande — Configurer Astro

- Générer/maj `astro.config.mjs` (site, sitemap, sourcemap, options images).
- Proposer Content Collections si pertinent.
- Créer `src/layouts/BaseLayout.astro` avec head SEO/a11y.
- Option: composant <SEO />.
- Rendre diffs + mode d'emploi.
```

### PATH: `.claude/commands/add-npm-scripts.md`

```markdown
# Commande — Ajouter scripts pnpm

Ajouter dans package.json:

- "lint": "eslint . --ext .js,.ts,.astro"
- "lint:fix": "eslint . --ext .js,.ts,.astro --fix"
- "format": "prettier --write ."
- "format:check": "prettier --check ."
- "typecheck": "astro check"
- "test": "vitest run"
- "test:watch": "vitest"
- "quality": "pnpm typecheck && pnpm lint && pnpm format:check"
- "prepare": "husky"
```

### PATH: `.claude/commands/setup-ci-local.md`

```markdown
# Commande — Setup CI locale

- Vérification locale: `pnpm typecheck && pnpm lint && pnpm test`.
- Proposer simple workflow (optionnel) ou doc d'exécution.
```

### PATH: `.claude/commands/review-diff.md`

```markdown
# Commande — Revue de diff

- Bloquants: sécurité, a11y, perf.
- Dettes: duplication, fonctions longues, naming confus.
- Suggestions concrètes (snippets).
- Tests manquants & cas limites.
- Message court prêt à coller en PR.
```

### PATH: `.claude/workflows/bootstrap-quality.md`

```markdown
# Workflow — Bootstrap Qualité

1. Lire 00-context + rules/\*.
2. Exécuter "generate-quality-configs".
3. Ajouter scripts pnpm + vérifier ESLint/Prettier.
4. Produire checklist de premier commit + plan de commits.
```

### PATH: `.claude/workflows/repo-audit.md`

```markdown
# Workflow — Repo Audit

- Diagnostiquer écarts vs règles (lint, TS strict, a11y, SEO, perf).
- Prioriser P0/P1/P2.
- Plan de remédiation + diffs ciblés.
- Checklist exécutable (commandes).
```

### PATH: `.claude/workflows/refactor-component.md`

```markdown
# Workflow — Refactor ciblé

Objectif: réduire complexité, extraire logique dans `src/lib`, types explicites, tests Vitest.
Sortie: diff + tests + explication des choix.
```

### PATH: `.claude/checklists/pr-review.md`

```markdown
# Checklist — PR Review

- [ ] Lint, typecheck, tests OK
- [ ] Fonctions < 40 lignes, noms explicites
- [ ] A11y (roles/labels/focus) OK
- [ ] SEO (title/desc/canonical) si page
- [ ] Perf: assets lourds lazy, import ordre OK
- [ ] Pas de secrets
```

### PATH: `.claude/checklists/a11y-seo-perf.md`

```markdown
# Checklist — A11y / SEO / Perf

A11y: sémantique, focus, labels, contrastes
SEO: title unique, description, canonical, liens internes
Perf: lazy, budgets, images optimisées, CSS scoping
```

### PATH: `.claude/checklists/release.md`

```markdown
# Checklist — Release

- Version bump + changelog
- Tests/Lint/Typecheck
- Sitemap & robots cohérents
- Tag git
```

### PATH: `.claude/templates/CONTRIBUTING.md`

```markdown
# Contribuer

## Nommage

- .astro: kebab-case; utilitaires TS: camelCase; composants TSX: PascalCase.

## Architecture

- pages → `src/pages`, composants → `src/components`, utils → `src/lib`, layouts → `src/layouts`.

## Qualité

- `pnpm typecheck && pnpm lint && pnpm test` avant PR.
```

### PATH: `.claude/templates/PULL_REQUEST_TEMPLATE.md`

```markdown
## Objet

## Changements

## Tests

- [ ] Lint/Typecheck/Tests OK

## Impacts

## Checklist

- [ ] A11y
- [ ] SEO (si page)
- [ ] Perf
```

### PATH: `.claude/templates/ISSUE_BUG.md`

```markdown
## Contexte

## Étapes pour reproduire

## Résultat attendu

## Résultat observé

## Logs / Captures
```

### PATH: `.claude/snippets/eslint-base.cjs`

```js
/* eslint-env node */
module.exports = {
  root: true,
  ignorePatterns: ['dist', '.astro', '.vercel', 'node_modules'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'astro', 'jsx-a11y', 'import'],
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: { parser: '@typescript-eslint/parser', extraFileExtensions: ['.astro'] },
    },
  ],
  rules: {
    'no-console': ['warn', { allow: ['error'] }],
    '@typescript-eslint/no-unused-vars': 'error',
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
      },
    ],
    'max-lines-per-function': ['warn', { max: 60 }],
    complexity: ['warn', 10],
  },
};
```

### PATH: `.claude/snippets/prettier.json`

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "arrowParens": "always"
}
```

### PATH: `.claude/snippets/tsconfig.json`

```json
{
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist", "node_modules"],
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "target": "ES2022",
    "moduleResolution": "Bundler",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### PATH: `.claude/snippets/astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  vite: {
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'],
          },
        },
      },
    },
  },
});
```

### PATH: `.claude/snippets/vscode.settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": { "source.fixAll.eslint": "explicit" },
  "eslint.validate": ["javascript", "typescript", "astro"],
  "prettier.requireConfig": true,
  "typescript.preferences.includePackageJsonAutoImports": "on"
}
```

### PATH: `.claude/snippets/gitignore.txt`

```
node_modules
dist
.astro
.vercel
*.log
.env*
!.env.example
coverage/
.vscode/settings.json.bak
```

### PATH: `.claude/seeds/ask-project-scan.md`

```markdown
Lis `.claude/00-context.md` et tout `.claude/rules/`.
Scanne le repo et liste les écarts vs règles (lint, TS strict, a11y, SEO, perf), priorise P0/P1/P2.
Propose un plan de remédiation et les diffs nécessaires.
Termine par une checklist exécutable (commandes).
```

### PATH: `.claude/seeds/ask-generate-configs.md`

```markdown
Lis `.claude/00-context.md` et `.claude/rules/*`.
Exécute la commande "Générer configs qualité" définie dans `.claude/commands/generate-quality-configs.md`
en utilisant les snippets de `.claude/snippets/` comme base, adaptés à Node 24 + Astro v5.
Rends: commandes pnpm, diffs, scripts, hook pre-commit, explications (8 puces).
```

---

## EN PLUS: Configuration projet (diffs nécessaires)

Propose maintenant (dans ta sortie finale) :

### 1. Commandes d'installation exactes (Node 24 + Astro v5):

```bash
pnpm add -D \
  eslint@^9.0.0 \
  @typescript-eslint/parser@^8.0.0 \
  @typescript-eslint/eslint-plugin@^8.0.0 \
  eslint-plugin-astro@^1.2.0 \
  astro-eslint-parser@^1.0.0 \
  eslint-plugin-jsx-a11y@^6.10.0 \
  eslint-plugin-import@^2.30.0 \
  eslint-config-prettier@^9.1.0 \
  prettier@^3.3.0 \
  vitest@^2.0.0 \
  @testing-library/dom@^10.4.0 \
  lint-staged@^15.2.0 \
  husky@^9.1.0
```

### 2. Fichiers projet à créer/modifier côté racine:

- `.editorconfig` [CRÉER]
- `.prettierrc.json` [CRÉER]
- `.eslintrc.cjs` [CRÉER]
- `.lintstagedrc.json` [CRÉER]
- `tsconfig.json` [MODIFIER selon snippet]
- `astro.config.mjs` [MODIFIER selon snippet]
- `.vscode/settings.json` [CRÉER]
- `.gitignore` [COMPLÉTER selon snippet]

### 3. Scripts package.json à ajouter:

```json
{
  "lint": "eslint . --ext .js,.ts,.astro",
  "lint:fix": "eslint . --ext .js,.ts,.astro --fix",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "typecheck": "astro check",
  "test": "vitest run",
  "test:watch": "vitest",
  "quality": "pnpm typecheck && pnpm lint && pnpm format:check",
  "prepare": "husky"
}
```

### 4. Setup husky + lint-staged:

```bash
# Après installation des deps
pnpm husky init
echo 'pnpm lint-staged' > .husky/pre-commit
# Windows: créer manuellement .husky/pre-commit si nécessaire
```

### 5. Tests de validation obligatoires:

```bash
pnpm build          # Doit réussir
pnpm typecheck      # Doit réussir (astro check)
pnpm lint           # Peut avoir warnings, pas d'erreurs
pnpm format:check   # Doit réussir
```

Veille à fournir les **DIFFS unifiés** pour ces fichiers racine aussi, en montrant AVANT/APRÈS pour chaque modification.

---

## CORRECTIONS PRINCIPALES vs version initiale

1. **Astro v5** : `astro check` au lieu de `tsc --noEmit`
2. **TypeScript** : Config compatible sans preset `strictest` inexistant
3. **ESLint** : Versions correctes et rules ajustées
4. **Dépendances** : Versions compatibles Node 24 + Astro v5
5. **Validation** : Tests obligatoires post-setup
6. **Windows** : Instructions Husky adaptées
