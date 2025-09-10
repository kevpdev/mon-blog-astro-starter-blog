# Workflow — Repo Audit

Audit complet d'un dépôt pour identifier les écarts par rapport aux standards de qualité et générer un plan de remédiation priorisé.

## Objectifs
- Diagnostiquer les écarts vs règles (lint, TS strict, a11y, SEO, perf)
- Prioriser les corrections par impact (P0/P1/P2)
- Générer un plan de remédiation actionnable
- Fournir des diffs ciblés et une checklist exécutable

## Étapes détaillées

### 1. Audit technique global
```bash
# État du dépôt
git status --porcelain | wc -l
git log --oneline -10

# Analyse de la structure
find . -type f -name "*.ts" -o -name "*.js" -o -name "*.astro" | wc -l
find . -type f -name "*.test.*" -o -name "*.spec.*" | wc -l

# Taille du projet
du -sh . --exclude=node_modules --exclude=.git
```

### 2. Audit qualité du code

#### TypeScript et types
```bash
# Configuration TypeScript
echo "=== TYPESCRIPT CONFIG ==="
cat tsconfig.json | jq '.compilerOptions | {strict, strictNullChecks, noImplicitAny}'

# Vérification des erreurs TypeScript
echo "=== TYPESCRIPT ERRORS ==="
pnpm typecheck 2>&1 | grep -E "error|Error" | wc -l
```

#### Linting et formatting
```bash
# Erreurs ESLint
echo "=== ESLINT AUDIT ==="
pnpm lint 2>&1 | grep -E "error|warning" | head -20

# Problèmes de formatage
echo "=== PRETTIER AUDIT ==="
pnpm format:check 2>&1 | grep -v "Checking formatting"
```

#### Tests et couverture
```bash
# État des tests
echo "=== TESTS AUDIT ==="
pnpm test --reporter=verbose 2>&1 | grep -E "pass|fail|skip"
```

### 3. Audit architecture et performance

#### Structure des fichiers
```bash
# Fichiers volumineux (>500 lignes)
echo "=== LARGE FILES ==="
find src -name "*.ts" -o -name "*.js" -o -name "*.astro" | xargs wc -l | sort -nr | head -10

# Composants sans tests
echo "=== UNTESTED COMPONENTS ==="
find src/components -name "*.astro" -not -path "*/test*" | while read component; do
  basename=$(basename "$component" .astro)
  if ! find . -name "*${basename}*test*" -o -name "*${basename}*spec*" | grep -q .; then
    echo "$component"
  fi
done
```

#### Dépendances et sécurité
```bash
# Audit des dépendances
echo "=== DEPENDENCIES AUDIT ==="
pnpm audit --audit-level moderate

# Packages obsolètes
echo "=== OUTDATED PACKAGES ==="
pnpm outdated | head -10
```

### 4. Audit SEO et accessibilité

#### Configuration SEO
```bash
# Vérifier la configuration SEO
echo "=== SEO AUDIT ==="
grep -r "title\|description\|meta" src/layouts/ | head -5

# Images sans alt
echo "=== MISSING ALT TAGS ==="
grep -r "<img" src/ --include="*.astro" | grep -v "alt=" | head -5
```

#### Standards web
```bash
# Vérifier les bonnes pratiques HTML
echo "=== HTML STANDARDS ==="
grep -r "role=\|aria-" src/ --include="*.astro" | wc -l
```

### 5. Matrice de priorisation

**Grille d'évaluation :**

| Critère | P0 (Critique) | P1 (Important) | P2 (Amélioration) |
|---------|---------------|----------------|-------------------|
| **Build/Deploy** | Échec build/tests | Warnings TS/Lint | Formatage |
| **Sécurité** | Vulnérabilités critiques | Vulnérabilités modérées | Packages obsolètes |
| **Performance** | Erreurs Core Web Vitals | Fichiers >1MB | Optimisations mineures |
| **Accessibilité** | Violations WCAG AA | Images sans alt | Labels manquants |
| **SEO** | Méta manquants | Sitemap absent | Schema.org manquant |

### 6. Plan de remédiation

#### Template de rapport
```markdown
# Audit Repo - [DATE]

## 🚨 P0 - Critiques (à corriger immédiatement)
- [ ] [Issue] - Impact: [description] - Effort: [XS/S/M/L/XL]
- [ ] [Issue] - Impact: [description] - Effort: [XS/S/M/L/XL]

## ⚠️ P1 - Importantes (cette semaine)
- [ ] [Issue] - Impact: [description] - Effort: [XS/S/M/L/XL]
- [ ] [Issue] - Impact: [description] - Effort: [XS/S/M/L/XL]

## 💡 P2 - Améliorations (quand possible)
- [ ] [Issue] - Impact: [description] - Effort: [XS/S/M/L/XL]
- [ ] [Issue] - Impact: [description] - Effort: [XS/S/M/L/XL]

## Métriques
- **Erreurs TS:** [X]
- **Warnings Lint:** [Y] 
- **Couverture tests:** [Z]%
- **Vulnérabilités:** [W]
- **Score qualité:** [A]/10
```

### 7. Commandes de remédiation

#### Scripts automatisés
```bash
# Correction automatique basique
echo "=== AUTO-FIX ==="
pnpm lint:fix
pnpm format

# Mise à jour des dépendances sûres
echo "=== SAFE UPDATES ==="
pnpm update --latest

# Génération de rapports
echo "=== REPORTS ==="
pnpm typecheck > typecheck-report.txt
pnpm lint > lint-report.txt 2>&1
pnpm audit > security-report.txt 2>&1
```

### 8. Checklist post-audit
- [ ] Rapport d'audit généré avec priorisation
- [ ] Issues critiques (P0) identifiées et planifiées
- [ ] Plan de remédiation avec estimations d'effort
- [ ] Scripts de correction automatique préparés
- [ ] Métriques baseline établies
- [ ] Suivi des progrès configuré

### 9. Validation finale
```bash
# Vérifier les améliorations
echo "=== POST-AUDIT VALIDATION ==="
pnpm quality
pnpm build
pnpm test

# Comparer les métriques
echo "Erreurs TS avant: [X] | après: [Y]"
echo "Warnings Lint avant: [A] | après: [B]" 
echo "Score qualité avant: [C]/10 | après: [D]/10"
```

## Sortie attendue
- **Rapport d'audit complet** avec priorisation P0/P1/P2
- **Plan de remédiation actionnable** avec effort estimé
- **Diffs ciblés** pour les corrections principales
- **Checklist exécutable** de commandes de correction
- **Métriques before/after** pour mesurer l'amélioration
