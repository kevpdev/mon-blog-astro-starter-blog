# Active Context

**Last Update**: 2025-12-31
**Current Branch**: develop
**Main Branch**: main

---

## Current Focus

Simplification de la structure `.claude` pour réduire le contexte de tokens et améliorer la maintenabilité en adoptant le modèle memory-bank.

## Recent Changes

### 2025-12-31

- **Migration .claude structure**: Adoption du modèle memory-bank pour réduire de 86% le volume de contexte (8,206 → ~1,120 lignes)
- **Suppression des slash commands**: Retrait des commandes personnalisées pour simplifier la structure
- **Consolidation documentation**: Fusion des règles spécifiques au projet dans memory-bank/

### 2024-12-14

- **CLI .claude update**: Tests et améliorations de la configuration Claude
- **Developer Resources**: Transformation de la page services en ressources développeur avec meilleur contraste
- **Pre-commit hooks**: Amélioration des hooks de qualité

### 2024-12-11

- **Documentation Claude**: Ajout de templates d'issues pour structurer la communication
- **Francisation complète**: Généralisation du starter blog en français

## Architecture Status

### Current System

```
Blog Astro - Architecture Overview

┌─────────────────────────────────────────────┐
│              User Request                   │
└──────────────────┬──────────────────────────┘
                   │
    ┌──────────────┴──────────────┐
    │   Astro File Router         │
    │   (src/pages/)              │
    └──────────────┬──────────────┘
                   │
    ┌──────────────┴──────────────┐
    │   Layout System             │
    │   (BaseLayout → Specific)   │
    └──────────────┬──────────────┘
                   │
    ┌──────────────┴──────────────┐
    │   Component Layer           │
    │   (UI + Layout components)  │
    └──────────────┬──────────────┘
                   │
    ┌──────────────┴──────────────┐
    │   Content Collections       │
    │   (blog, pages)             │
    └──────────────┬──────────────┘
                   │
    ┌──────────────┴──────────────┐
    │   Static Output             │
    │   (./dist/)                 │
    └─────────────────────────────┘
```

## Build & Test Status

✅ **TypeScript**: Strict mode, null checks enforced
✅ **ESLint**: Flat config with TypeScript support
✅ **Prettier**: Code formatting automated
✅ **Vitest**: Unit tests configured
✅ **Pre-commit Hooks**: Husky + lint-staged active
✅ **Build**: Production build successful

## Code Changes Summary (Latest)

### .claude/ Directory Restructure

- Created `memory-bank/` with projectbrief, activeContext, techContext
- Created `memory-bank/stories/` for workflow documentation
- Simplified `CLAUDE.md` to orchestrator role only
- Removed redundant directories: `core/`, `rules/`, `templates/`, `snippets/`, `commands/`

### Quality Improvements

- Pre-commit hooks ensure quality before every commit
- Automated typecheck + lint + format via `pnpm quality`
- Test coverage tracking with Vitest

## Next Steps

### Immediate

- [ ] Complete memory-bank migration and validation
- [ ] Update documentation references to new structure
- [ ] Verify all workflows still function correctly

### Short Term (1-2 weeks)

- [ ] Optimize content creation workflow
- [ ] Improve SEO monitoring and analytics
- [ ] Add performance tracking dashboard

### Medium Term (1-2 months)

- [ ] Implement advanced search functionality
- [ ] Evaluate comment system options
- [ ] Newsletter integration exploration

### Future (3+ months)

- [ ] Multi-language support evaluation
- [ ] Advanced analytics and insights
- [ ] Community contribution guidelines

## Environment Variables

**Currently**: No environment variables required for core functionality.

**Optional** (for future features):

- `ANALYTICS_ID` - Google Analytics or similar
- `NEWSLETTER_API_KEY` - Newsletter service integration
- `SEARCH_API_KEY` - Advanced search service

## Commands Reference

### Development

```bash
pnpm dev          # Start dev server (localhost:4321)
pnpm build        # Build for production
pnpm preview      # Preview production build
```

### Quality Control

```bash
pnpm quality      # Run typecheck + lint + format check
pnpm lint         # ESLint check
pnpm lint:fix     # ESLint with auto-fix
pnpm format       # Format with Prettier
pnpm test         # Run Vitest tests
```

### Astro CLI

```bash
pnpm astro add <integration>  # Add integration
pnpm astro check              # Type check
```

## Challenges & Resolutions

### ✅ RESOLVED - Token Context Overload

**Problem**: Original `.claude` structure contained 8,206 lines across 46 files, causing token inefficiency
**Solution**: Adopted memory-bank model, reducing to ~1,120 lines (86% reduction)

### ✅ RESOLVED - Complex Documentation Navigation

**Problem**: Multiple nested directories made it hard to find relevant context
**Solution**: Flat memory-bank structure with clear file purposes (projectbrief, activeContext, techContext, stories)

### ✅ RESOLVED - Slash Commands Maintenance

**Problem**: Custom slash commands required ongoing maintenance and added complexity
**Solution**: Removed slash commands, documented workflows in stories/ instead

## Decisions Made

### Architecture Decisions

- **Static Generation Only**: No SSR, keeps hosting simple and performance optimal
- **Content Collections**: Type-safe content management with Zod schemas
- **Component-Based Design**: Reusable components in ui/ and layout/ directories
- **Mobile-First Responsive**: Tailwind breakpoints prioritize mobile experience

### Technology Choices

- **Astro 5.13.3**: Latest stable for best performance and DX
- **TypeScript Strict**: Null checks prevent runtime errors
- **Tailwind CSS 4**: Modern CSS with design tokens in RGB format
- **Vitest**: Fast unit testing compatible with Astro
- **pnpm**: Efficient package management, faster than npm/yarn

### Documentation Strategy

- **Memory-Bank Pattern**: Adopted from newsletter-automation project
- **Global + Local Split**: Generic rules in `~/.claude`, project-specific in memory-bank
- **Story-Based Workflows**: Document processes as numbered stories (CONTENT-001, etc.)

## Story Organization

### Active Stories

- `CONTENT-001`: Content creation and publication workflow

### Planned Stories

- `FEATURE-001`: Advanced search implementation (pending)
- `FEATURE-002`: Newsletter integration (pending)
- `INFRA-001`: Performance monitoring dashboard (pending)

### Archived Stories

- None yet (new memory-bank structure)

## Key Metrics

### Performance (Latest Build)

- **Build Time**: <10s for current content volume
- **Bundle Size**: Minimal (mostly static HTML)
- **Lighthouse Score**: >90 on all pages (performance, accessibility, best practices, SEO)

### Content

- **Total Posts**: Check with `find src/content/blog -name "*.md" -o -name "*.mdx" | wc -l`
- **Total Tags**: Extracted from frontmatter analysis
- **Average Post Length**: >800 words (target)

### Code Quality

- **TypeScript Coverage**: 100% (strict mode enforced)
- **Test Coverage**: >80% target for critical paths
- **ESLint Issues**: 0 (enforced by pre-commit)
- **Prettier Violations**: 0 (automated formatting)

## Notes

### File Paths (Critical)

- **Memory-Bank**: `.claude/memory-bank/` (projectbrief, activeContext, techContext, stories/)
- **Main Config**: `.claude/CLAUDE.md` (orchestrator)
- **Global Rules**: `~/.claude/CLAUDE.md` (generic standards)
- **Content**: `src/content/blog/`, `src/content/pages/`
- **Components**: `src/components/ui/`, `src/components/layout/`
- **Layouts**: `src/layouts/`

### Links & References

- **Astro Docs**: https://docs.astro.build
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org
- **Vitest**: https://vitest.dev

### Workflow References

- Content creation: See `memory-bank/stories/CONTENT-001-creation-workflow.md`
- Feature implementation: Follow standard Astro component patterns
- Quality control: Always run `pnpm quality` before committing
