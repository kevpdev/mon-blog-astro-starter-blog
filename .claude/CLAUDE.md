# CLAUDE.md

Documentation pour Claude Code dans ce projet de blog Astro.

---

## Commands

Commandes pnpm essentielles:

### Development

- `pnpm dev` - Serveur de développement (localhost:4321)
- `pnpm build` - Build production
- `pnpm preview` - Preview du build

### Quality

- `pnpm quality` - Typecheck + lint + format check
- `pnpm lint` - ESLint check
- `pnpm lint:fix` - ESLint with auto-fix
- `pnpm format` - Format with Prettier
- `pnpm test` - Tests Vitest

### Astro CLI

- `pnpm astro add <integration>` - Add integration
- `pnpm astro check` - Type check

---

## Project Context

Ce projet utilise une structure simplifiée pour le contexte:

### Memory-Bank (Contexte Projet)

**Location**: `.claude/memory-bank/`

- **`projectbrief.md`** - Vision, objectifs, architecture, tech stack
- **`activeContext.md`** - État actuel, changements récents, prochaines étapes
- **`techContext.md`** - Stack technique détaillé, patterns, configuration
- **`stories/`** - Workflows et fonctionnalités documentées
  - `INDEX.md` - Index des stories (completed, active, planned)
  - `CONTENT-001-creation-workflow.md` - Création et publication de contenu

### Global Rules

**Location**: `~/.claude/CLAUDE.md`

Règles génériques référencées depuis le `.claude` global:

- Code Quality (TypeScript strict, clean code, naming)
- Testing standards (Vitest, coverage, patterns)
- Performance optimization (Core Web Vitals, bundle size)
- Security best practices (frontend security, dependencies)
- Accessibility (WCAG AA, screen readers, keyboard nav)
- Git workflow (conventional commits, quality gates)

### Inputs (Debug Temporaire)

**Location**: `.claude/inputs/`

Fichiers temporaires pour debugging:

- `debug/` - Logs et outputs
- `mockups/` - Captures d'écran et designs
- Auto-cleanup après 7 jours

---

## Quick Reference

### Architecture

Voir `memory-bank/techContext.md` pour:

- Structure des composants (ui/, layout/)
- Configuration des Content Collections
- Frontmatter schemas et validation
- Layout hierarchy (BaseLayout → specialized)
- Routing system (static + dynamic routes)

### Content Creation

Voir `memory-bank/stories/CONTENT-001-creation-workflow.md` pour:

- Workflow complet de création de contenu
- Templates (blog post, tutorial, news)
- SEO optimization et validation
- Image optimization (WebP/AVIF)
- Publication checklist

### Development Best Practices

Référencez les règles du `.claude` global pour:

- **Code Quality**: TypeScript strict, clean code patterns
- **Testing**: Unit tests, integration tests, coverage targets
- **Performance**: Core Web Vitals optimization strategies
- **Security**: Frontend security, dependency management
- **Accessibility**: WCAG 2.2 AA compliance, screen reader support

---

## Important Instructions

### Quality Control

**TOUJOURS exécuter `pnpm quality` après modifications**

- Enforced par pre-commit hooks (Husky + lint-staged)
- Vérifie: typecheck + lint + format
- Doit passer avant tout commit

### Architecture Compliance

**Suivre les patterns définis dans `memory-bank/techContext.md`**

- Component-based design (reusable components)
- Mobile-first responsive design
- Design system (centralized tokens)
- TypeScript strict mode (no implicit any)
- Error-safe implementation

### Content Creation

**Utiliser le workflow dans `memory-bank/stories/CONTENT-001`**

- Planning → Research → Creation → Optimization → Validation → Publication
- SEO metadata optimized (title 50-60 chars, description 120-160 chars)
- Images optimized (WebP/AVIF, lazy loading)
- Accessibility compliant (alt text, semantic HTML)
- Performance targets met (Core Web Vitals)

### Global Rules Reference

**Pour standards génériques, référencer `~/.claude/CLAUDE.md`**

- Ne pas dupliquer les règles génériques dans ce projet
- Le global contient: Git workflow, commit conventions, testing patterns, security
- Ce fichier contient uniquement: architecture Astro, workflows spécifiques, contexte projet

---

## File Operations

### File Creation

- **ALWAYS prefer editing existing files over creating new ones**
- **NEVER create documentation files unless explicitly requested**
- Use existing patterns from `memory-bank/techContext.md`

### Component Creation

Follow component patterns:

1. Props interface at top with TypeScript
2. Semantic HTML structure
3. Scoped styles when needed
4. Mobile-first responsive design
5. Accessibility attributes

### Content Creation

Follow CONTENT-001 workflow:

1. Plan content structure
2. Create file with proper frontmatter
3. Optimize images (WebP/AVIF)
4. Validate SEO and accessibility
5. Test and publish

---

## Context Loading Strategy

### Efficient Context Usage

- **Level 1 (Always)**: `memory-bank/projectbrief.md` + `memory-bank/activeContext.md` (~400 lines)
- **Level 2 (Task-specific)**: `memory-bank/techContext.md` for architecture, `memory-bank/stories/` for workflows (~200-300 lines)
- **Level 3 (As needed)**: Global `.claude` for generic rules

### When to Reference What

- **Before editing code**: Check `techContext.md` for patterns and standards
- **Creating content**: Follow `stories/CONTENT-001-creation-workflow.md`
- **For generic standards**: Reference global `~/.claude/CLAUDE.md`
- **Current project state**: See `activeContext.md`
- **Project vision**: See `projectbrief.md`

---

## Notes

### Critical Paths

- **Memory-Bank**: `.claude/memory-bank/` (all project-specific context)
- **Global Rules**: `~/.claude/CLAUDE.md` (generic development standards)
- **Content**: `src/content/blog/`, `src/content/pages/`
- **Components**: `src/components/ui/`, `src/components/layout/`
- **Layouts**: `src/layouts/`
- **Config**: `astro.config.mjs`, `tsconfig.json`, `tailwind.config.mjs`

### External Links

- **Astro Docs**: https://docs.astro.build
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Vitest**: https://vitest.dev/guide

### Maintenance

- Update `activeContext.md` after completing major work
- Add new stories to `stories/INDEX.md` when planned
- Keep `projectbrief.md` in sync with actual project state
- Archive old/completed documentation in `stories/archived/`
