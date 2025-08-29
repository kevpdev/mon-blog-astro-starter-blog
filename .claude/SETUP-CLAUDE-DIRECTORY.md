# Guide complet — Création de l'arborescence `.claude/`

## Objectif

Ce guide permet de recréer intégralement l'arborescence `.claude/` dans n'importe quel projet Astro, avec tous les contenus et la structure organisationnelle.

## Arborescence complète à créer

```
.claude/
├── 00-context.md                           # Contexte projet principal
├── rules/                                  # Règles de développement
│   ├── 10-clean-code.md
│   ├── 20-astro-best-practices.md
│   ├── 30-a11y-wcag22.md
│   ├── 40-performance-seo.md
│   ├── 50-security-frontend.md
│   └── 60-typescript-node24.md
├── commands/                               # Commandes exécutables
│   ├── generate-quality-configs.md
│   ├── generate-quality-configs-v2.md     # Version corrigée Astro v5
│   ├── configure-astro.md
│   ├── add-npm-scripts.md
│   ├── setup-ci-local.md
│   └── review-diff.md
├── workflows/                              # Workflows complexes
│   ├── bootstrap-quality.md
│   ├── repo-audit.md
│   └── refactor-component.md
├── checklists/                            # Checklists exécutables
│   ├── pr-review.md
│   ├── a11y-seo-perf.md
│   └── release.md
├── templates/                             # Templates prêts à l'emploi
│   ├── CONTRIBUTING.md
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── ISSUE_BUG.md
├── snippets/                              # Configurations de référence
│   ├── eslint-base.cjs
│   ├── prettier.json
│   ├── tsconfig.json
│   ├── astro.config.mjs
│   ├── vscode.settings.json
│   └── gitignore.txt
├── seeds/                                 # Prompts prêts à l'emploi
│   ├── ask-project-scan.md
│   ├── ask-generate-configs.md
│   └── SETUP-CLAUDE-DIRECTORY.md          # Ce fichier
└── SETUP-CLAUDE-DIRECTORY.md              # Guide de création (ce fichier)
```

## Commande de création automatique

### Prompt pour Claude Code

```
Tu es un assistant développeur intégré à VS Code.
TÂCHE: Crée et remplis l'arborescence .claude/ ci-dessous dans le repo courant.

Mode opératoire:
- Idempotent: si un fichier existe et est identique, ne rien changer; sinon écris en entier.
- Contenu exact: copie les contenus fournis sans modification.

ARBORESCENCE À CRÉER:
[Insérer ici l'arborescence complète avec tous les contenus]
```

## Contenus des fichiers (références)

### 📋 Fichier principal: `00-context.md`

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

### 📝 Règles de développement (`rules/`)

Chaque fichier contient des règles spécifiques :

- **10-clean-code.md** : SRP, fonctions ≤40 lignes, nommage explicite
- **20-astro-best-practices.md** : SSG par défaut, components optimisés
- **30-a11y-wcag22.md** : Sémantique HTML5, labels, contrastes
- **40-performance-seo.md** : Lazy loading, budgets, SEO meta
- **50-security-frontend.md** : 0 secrets en repo, dépendances saines
- **60-typescript-node24.md** : Config TS strict pour Node 24

### ⚡ Commandes exécutables (`commands/`)

- **generate-quality-configs-v2.md** : Commande principale de setup qualité
- **configure-astro.md** : Configuration spécifique Astro
- **add-npm-scripts.md** : Ajout scripts package.json
- **setup-ci-local.md** : Configuration CI locale
- **review-diff.md** : Revue automatique de code

### 🔄 Workflows (`workflows/`)

- **bootstrap-quality.md** : Workflow initial de mise en qualité
- **repo-audit.md** : Audit complet du repository
- **refactor-component.md** : Refactoring ciblé

### ✅ Checklists (`checklists/`)

- **pr-review.md** : Checklist de review de PR
- **a11y-seo-perf.md** : Checklist accessibilité/SEO/performance
- **release.md** : Checklist de release

### 📄 Templates (`templates/`)

Templates GitHub prêts à l'emploi pour CONTRIBUTING.md, PR template, issues.

### 🔧 Snippets (`snippets/`)

Configurations de référence pour ESLint, Prettier, TypeScript, Astro, VS Code.

### 🌱 Seeds (`seeds/`)

Prompts prêts à l'emploi pour lancer des scans ou générer des configs.

## Scripts d'automatisation

### Bash/PowerShell - Création rapide

```bash
#!/bin/bash
# create-claude-dir.sh

# Créer la structure
mkdir -p .claude/{rules,commands,workflows,checklists,templates,snippets,seeds}

# Créer les fichiers vides (puis remplir avec les contenus)
touch .claude/00-context.md
touch .claude/rules/{10-clean-code,20-astro-best-practices,30-a11y-wcag22,40-performance-seo,50-security-frontend,60-typescript-node24}.md
# ... etc pour tous les fichiers
```

### Node.js - Script de génération

```js
// scripts/setup-claude.js
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const structure = {
  '00-context.md': `# Contexte projet...`,
  'rules/10-clean-code.md': `# Règles Clean Code...`,
  // ... tous les contenus
};

Object.entries(structure).forEach(([path, content]) => {
  const fullPath = join('.claude', path);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, content);
});
```

## Commandes de vérification post-création

```bash
# Vérifier la structure
find .claude -type f -name "*.md" | wc -l  # Doit retourner 29

# Vérifier les contenus
grep -r "TÂCHE:" .claude/commands/
grep -r "Checklist" .claude/checklists/

# Test d'utilisation
# Demander à Claude: "Lis .claude/seeds/ask-project-scan.md et exécute"
```

## Utilisation après création

### 1. Scan initial du projet

```
Lis `.claude/seeds/ask-project-scan.md` et exécute la commande
```

### 2. Setup qualité complet

```
Lis `.claude/seeds/ask-generate-configs.md` et exécute la commande
```

### 3. Workflows avancés

```
Exécute le workflow défini dans `.claude/workflows/bootstrap-quality.md`
```

## Maintenance de l'arborescence

### Mise à jour des versions

- Modifier `.claude/00-context.md` pour nouvelles versions stack
- Mettre à jour `.claude/snippets/*.json` selon évolutions outils
- Adapter `.claude/rules/60-typescript-node24.md` pour nouvelles versions Node

### Ajout de nouveaux patterns

- Créer `.claude/rules/70-nouveau-pattern.md`
- Référencer dans `.claude/workflows/` appropriés
- Ajouter snippets correspondants

### Personnalisation projet

- Adapter `.claude/00-context.md` au contexte spécifique
- Modifier `.claude/templates/` selon besoins projet
- Customiser `.claude/checklists/` selon processus équipe

---

**💡 Astuce** : Ce fichier peut être copié dans n'importe quel projet Astro pour recréer la même structure organisationnelle.
