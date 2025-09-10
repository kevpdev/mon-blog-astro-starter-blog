# Commande — Générer configs qualité (Astro v5 + Node 24)

## Objectif

Créer et configurer un environnement de développement professionnel pour Astro v5 avec TypeScript strict, ESLint, Prettier, et hooks pre-commit.

## Mode opératoire

- **Idempotent** : Si un fichier existe et est identique, ne rien changer; sinon écrire en entier.
- **Vérification** : Tester build/typecheck après chaque modification.
- **Retour** : Manifest avec statuts + diffs + commandes + explications.

## Arborescence à créer/modifier

### Fichiers de configuration racine

```
.editorconfig                [CRÉER si absent]
.prettierrc.json            [CRÉER si absent]
.eslintrc.cjs               [CRÉER si absent]
.lintstagedrc.json          [CRÉER si absent]
.vscode/settings.json       [CRÉER si absent]
```

### Fichiers à modifier

```
tsconfig.json               [MODIFIER selon Astro v5]
astro.config.mjs            [ENRICHIR avec sourcemaps]
package.json                [AJOUTER scripts]
.gitignore                  [COMPLÉTER patterns]
```

## Contenus exacts des fichiers

### `.editorconfig`

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

### `.prettierrc.json`

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "arrowParens": "always"
}
```

### `.eslintrc.cjs` (Astro v5 compatible)

```js
// Copy canonical ESLint configuration from .claude/snippets/configs/eslint.config.cjs
// Customize rules as needed for your specific project requirements
```

### `.lintstagedrc.json`

```json
{
  "*.{js,ts,astro}": ["eslint --fix", "prettier --write"],
  "*.{json,md,css,html}": ["prettier --write"]
}
```

### `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": { "source.fixAll.eslint": "explicit" },
  "eslint.validate": ["javascript", "typescript", "astro"],
  "prettier.requireConfig": true,
  "typescript.preferences.includePackageJsonAutoImports": "on"
}
```

### `tsconfig.json` (Astro v5 compatible)

```json
{
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist", "node_modules"],
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "target": "ES2022",
    "moduleResolution": "Bundler",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### `astro.config.mjs` (enrichissement)

```js
// Refer to canonical configuration: .claude/snippets/configs/astro.config.mjs
// Copy the standard or production variant as needed for your setup
import { defineConfig } from 'astro/config';
// ... (see snippets/configs/astro.config.mjs for complete configuration)
```

### Scripts `package.json` à ajouter

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

### Ajouts `.gitignore`

```
# Ajouter à la fin du fichier existant
# vercel
.vercel/

# testing
coverage/
*.lcov

# editor
.vscode/settings.json.bak
*.swp
*.swo

# environment variables (patterns étendus)
.env.*
!.env.example
```

## Commandes d'installation (Node 24 + Astro v5)

### Dépendances de développement

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

### Setup hooks pre-commit

```bash
# Après installation des deps
pnpm husky init
echo 'pnpm lint-staged' > .husky/pre-commit
chmod +x .husky/pre-commit  # Linux/Mac uniquement
```

### Vérifications post-installation

```bash
# Tests obligatoires après configuration
pnpm build          # Doit réussir
pnpm typecheck      # Doit réussir (astro check)
pnpm lint           # Peut avoir des warnings, pas d'erreurs
pnpm format:check   # Doit réussir
```

## Modèle de réponse attendu

### 1. Install Commands

```bash
# Commandes pnpm exactes listées ci-dessus
```

### 2. Files Created/Modified (avec diffs unifiés)

```diff
# Pour chaque fichier modifié, afficher le diff complet
```

### 3. Scripts Added (package.json)

```json
# Section scripts complète
```

### 4. Pre-commit Setup

```bash
# Commandes husky + lint-staged
```

### 5. Validation Commands

```bash
# Commandes de test post-configuration
```

### 6. Why These Changes (8 points maximum)

- **TypeScript strict Astro v5** : Configuration compatible avec les dernières versions
- **ESLint multicouche** : Support natif Astro + accessibilité + imports organisés
- **Prettier intégré** : Configuration cohérente évitant les conflits ESLint
- **Scripts granulaires** : Commandes séparées pour lint/format/test avec variantes
- **VS Code optimisé** : Auto-fix et format à la sauvegarde pour DX maximale
- **Pre-commit hooks** : Prévention commits non-conformes via lint-staged
- **Astro v5 ready** : Sourcemaps, types corrects, astro check vs tsc
- **Node 24 compatible** : ES2022 target, moduleResolution Bundler

## Troubleshooting

### Si `astro check` échoue

```bash
# Fallback vers tsc si nécessaire
pnpm add -D typescript
# Modifier script: "typecheck": "tsc --noEmit"
```

### Si ESLint Astro plugin échoue

```bash
# Vérifier version compatibilité
pnpm list eslint-plugin-astro astro-eslint-parser
```

### Si husky échoue sur Windows

```bash
# Initialisation manuelle
npx husky init
# Puis créer .husky/pre-commit manuellement
```

## Checklist finale

- [ ] Build Astro réussit sans erreur
- [ ] TypeCheck (astro check) réussit
- [ ] ESLint sans erreurs bloquantes
- [ ] Prettier format:check réussit
- [ ] VS Code format on save fonctionne
- [ ] Pre-commit hook actif (test avec commit factice)
- [ ] Dev server démarre correctement
- [ ] Scripts pnpm tous fonctionnels
