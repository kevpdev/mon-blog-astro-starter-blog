# Workflow — Bootstrap Qualité

Processus complet pour initialiser et configurer la qualité du code dans un nouveau projet ou lors de l'ajout de nouveaux standards.

## Étapes détaillées

### 1. Analyse du contexte et des règles
```bash
# Lire la configuration actuelle
cat CLAUDE.md
cat .claude/settings.local.json

# Scanner toutes les règles disponibles
find .claude/rules -name "*.md" -o -name "*.mdx" | head -20
```

### 2. Configuration des outils qualité
```bash
# Vérifier la configuration ESLint
cat eslint.config.js || echo "ESLint config manquante"

# Vérifier la configuration Prettier
cat .prettierrc || cat prettier.config.js || echo "Prettier config manquante"

# Vérifier la configuration TypeScript
cat tsconfig.json

# Vérifier les hooks Git
ls -la .husky/ || echo "Husky non configuré"
```

### 3. Installation et configuration des dépendances
```bash
# Installer les dépendances de développement si manquantes
pnpm add -D eslint prettier typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
pnpm add -D husky lint-staged

# Configurer les scripts package.json
npm pkg set scripts.lint="eslint . --ext .js,.ts,.astro"
npm pkg set scripts.lint:fix="eslint . --ext .js,.ts,.astro --fix"
npm pkg set scripts.format="prettier --write ."
npm pkg set scripts.format:check="prettier --check ."
npm pkg set scripts.typecheck="astro check"
npm pkg set scripts.quality="pnpm typecheck && pnpm lint && pnpm format:check"
```

### 4. Validation de la configuration
```bash
# Tester chaque outil
pnpm typecheck
pnpm lint
pnpm format:check
pnpm quality
```

### 5. Checklist de validation
- [ ] ESLint configuré et fonctionnel
- [ ] Prettier configuré et fonctionnel  
- [ ] TypeScript strict mode activé
- [ ] Scripts pnpm ajoutés au package.json
- [ ] Hooks pre-commit configurés (optionnel)
- [ ] Tests de qualité passent sans erreur
- [ ] Documentation CLAUDE.md mise à jour

### 6. Plan de commits recommandé
1. `feat: add eslint configuration and linting scripts`
2. `feat: add prettier configuration and formatting scripts`  
3. `feat: enable typescript strict mode and type checking`
4. `feat: add husky and lint-staged for pre-commit quality control`
5. `docs: update CLAUDE.md with quality workflow commands`

## Sortie attendue
- Configuration complète des outils de qualité
- Scripts pnpm fonctionnels
- Documentation à jour
- Premier commit de qualité prêt
