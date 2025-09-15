# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the root of the project using pnpm:

### Development
- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview build locally
- `pnpm astro` - Run Astro CLI commands (e.g., `pnpm astro add`, `pnpm astro check`)

### Quality & Testing
- `pnpm lint` - Run ESLint on .js, .ts, .astro files
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm typecheck` - Run Astro type checking
- `pnpm test` - Run Vitest tests
- `pnpm test:watch` - Run Vitest in watch mode
- `pnpm quality` - Run typecheck, lint, and format check

### Claude Commands
- `/implement-feature [name] [type]` - Structured feature implementation
- `/create-content [type] [title]` - Content creation workflow
- `/commit-push-smart [message?]` - Smart commit and push
- `/bootstrap-quality` - Setup quality tools and configs
- `/debug-issue` - Debug workflow with inputs analysis

## Architecture Overview

This is a modern Astro blog with TypeScript strict configuration, following component-based architecture with design tokens and mobile-first responsive design.

### Layout Architecture (Composable Design)

**Base Layout System**:
- `BaseLayout.astro` - Core HTML structure, shared head/body/footer
- `BlogLayout.astro` - Blog post layout with hero image, metadata, tags
- `BlogListLayout.astro` - Layout component
- `FormationsLayout.astro` - Layout component
- `HomeLayout.astro` - Homepage-specific layout extending BaseLayout
- `PageLayout.astro` - Static page layout for content pages

**Component System**:
```
src/components/
│   ├── layout/
│   │   ├── FooterNew.astro
│   │   ├── Header.astro # Site header
│   │   ├── Navigation.astro # Navigation menu
│   ├── ui/
│   │   ├── Badge.astro
│   │   ├── BaseHead.astro
│   │   ├── Button.astro # Button variants
```

### Routing

- `src/pages/[...slug].astro` - Dynamic pages from content collections
- `src/pages/about.astro` - About page
- `src/pages/contact.astro` - contact page
- `src/pages/index.astro` - Homepage
- `src/pages/meilleures-formations-seo-business.astro` - meilleures-formations-seo-business page
- `src/pages/blog/index.astro` - Blog listing page
- `src/pages/blog/[...slug].astro` - Individual blog posts
- `src/pages/rss.xml.js` - RSS feed generation

### Configuration

**Core Stack**:
- **Astro 5.13.3** with TypeScript strict mode and null checks
- **Tailwind CSS 4.1.13** with Vite plugin for performance
- **Vitest** for unit testing with @testing-library/dom
- **ESLint** flat config with TypeScript support
- **Husky + lint-staged** for pre-commit quality control

## Development Best Practices

### Code Quality & Standards

**Automated Quality Control**:
- **ESLint**: Static analysis with auto-fix (`pnpm lint:fix`)
- **Prettier**: Code formatting with consistent style
- **TypeScript**: Strict mode with null checks enabled
- **Pre-commit Hooks**: Husky + lint-staged (validates only modified files)
- **Quality Command**: `pnpm quality` runs typecheck + lint + format check

**Architecture Principles**:
- **DRY (Don't Repeat Yourself)**: Shared components and layouts
- **Component-Based**: Reusable, configurable components
- **Mobile-First**: Progressive enhancement from mobile to desktop
- **Design System**: Centralized tokens for consistency
- **Semantic HTML**: Proper markup with accessibility in mind

### Core Standards Summary

**Clean Code**:
- Write no comments
- Use strict types only
- Max 30 lines per function, 5 params max
- Use explicit constants, no magic numbers
- Long, readable variable names

**TypeScript**:
- Strict configuration enabled
- Explicit interfaces over implicit types
- Prefer `type` for unions, `interface` for objects
- Avoid `any`, prefer `unknown`

**Astro Patterns**:
- Props interface at component top
- Semantic HTML structure
- Scoped styles when needed
- Performance-first approach

### Performance & UX

**Technical Stack**:
- **Package Manager**: pnpm with Node.js 24+ support
- **Testing**: Vitest with @testing-library/dom for component testing
- **Build**: Optimized production builds with Astro's static generation
- **Assets**: WebP images with responsive sizing and lazy loading

**Core Web Vitals Targets**:
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## Context Organization & Loading Strategy

The `.claude/` directory is organized for optimal context loading and performance:

### **Core Context (Always Loaded)**
- **`core/generic-standards.mdx`** - TypeScript, testing, accessibility, security standards
- **`core/astro-patterns.mdx`** - Astro-specific patterns, components, CSS architecture
- **`CLAUDE.md`** (this file) - Central orchestration and project context

### **Specialized Rules (Contextual Loading)**
- **`rules/generic/`** - Reusable across projects
  - `typescript-naming.mdx` - Naming conventions
  - `testing-frontend.mdx` - Frontend testing patterns
  - `package-installation.mdx` - Dependency management
- **`rules/astro/`** - Framework-specific patterns
  - `tailwind-config.mdx` - Tailwind CSS v4 configuration
  - `testing-standards.mdx` - Astro testing patterns
  - `component-architecture.mdx` - Component design patterns
- **`rules/workflows/`** - Process and methodology
  - `feature-implementation.md` - Feature development process
  - `content-creation.md` - Content creation workflow
  - `performance-optimization.mdx` - Performance optimization strategies

### **Code Generation**
- **`templates/generic/`** - Universal templates
  - `command-template.mdx` - Command structure template
  - `test-template.spec.ts.mdx` - Unit test template
- **`templates/astro/`** - Astro-specific templates
  - `component-template.astro.mdx` - Astro component template
  - `page-template.astro.mdx` - Astro page template
- **`templates/content/`** - Content templates
  - `blog-post-template.md` - Blog post structure

### **Code Fragments & Configs**
- **`snippets/generic/`** - Universal code snippets
  - `typescript-types.md` - Common TypeScript patterns
  - `vitest.config.ts` + `vitest-config-guide.md` - Testing configuration & aliases
  - `settings.local.json` - Claude Code permissions
  - `prettier.json`, `tsconfig.json` - Configuration files
- **`snippets/astro/`** - Astro-specific snippets
  - `component-patterns.md` - Astro component fragments
  - `frontmatter-schemas.md` - Content Collection schemas
- **`snippets/css/`** - CSS and styling snippets
  - `responsive-patterns.md` - Mobile-first responsive patterns

### **Operational Commands**
- **`commands/`** - Essential Claude operations (5 max for performance)
  - `implement-feature.md` - Structured feature development
  - `create-content.md` - Content creation with SEO optimization
  - `commit-push-smart.md` - Smart git operations
  - `bootstrap-quality.md` - Quality tooling setup
  - `debug-issue.md` - Systematic debugging workflow

### **Debug & Analysis**
- **`inputs/`** - Temporary files for debugging
  - `screenshots/` - Visual debugging captures
  - `logs/` - Error logs and system output
  - `configs/` - Configuration files for analysis
  - Auto-cleanup after 7 days to prevent repo pollution

### **Context Loading Optimization**
- **Level 1 (Always)**: `core/` + `CLAUDE.md` (~800 lines)
- **Level 2 (On Demand)**: `rules/` + relevant `templates/` (~400 lines)
- **Level 3 (As Needed)**: `snippets/` + `inputs/` (~200 lines)
- **Total Optimized**: ~1,400 lines vs. previous 2,163 lines (35% reduction)

## Claude Code Workflow Integration

### **Command Usage Patterns**
```bash
# Feature Development
/implement-feature search-component component
# → References: core/astro-patterns.mdx, templates/astro/component-template.astro.mdx

# Content Creation
/create-content tutorial "Astro Performance Guide"
# → References: templates/content/blog-post-template.md, snippets/astro/frontmatter-schemas.md

# Smart Git Operations
/commit-push-smart "feat: add search functionality"
# → Automatic analysis + conventional commits

# Debug Issues
/debug-issue css "Navigation mobile broken"
# → Uses inputs/ for screenshots/logs analysis

# Quality Bootstrap
/bootstrap-quality
# → Sets up ESLint, Prettier, Husky, Vitest configuration
```

### **Context Referencing Strategy**
- **Before editing**: Check `core/` for patterns and standards
- **During development**: Reference relevant `rules/` and `templates/`
- **For testing**: Use `snippets/generic/vitest-config-guide.md` for aliases and coverage
- **For debugging**: Utilize `inputs/` and `snippets/` for quick fixes
- **Code generation**: Use `templates/` for consistent structure

### **Performance Optimization**
- Load only relevant context based on task type
- Prefer specific snippets over full rule loading
- Use templates for rapid prototyping
- Leverage inputs/ for visual debugging workflow

## Important Instructions

**File Operations**:
- ALWAYS prefer editing existing files over creating new ones
- NEVER create documentation files unless explicitly requested
- Use existing patterns and conventions from `core/` and `rules/`
- Reference `templates/` for new file structure

**Quality Control Workflow**:
- Run `pnpm quality` before committing (enforced by pre-commit hooks)
- Follow standards defined in `core/generic-standards.mdx`
- Apply Astro patterns from `core/astro-patterns.mdx`
- Validate accessibility and performance against targets

**Architecture Compliance**:
- Follow component-based design patterns from `rules/astro/component-architecture.mdx`
- Respect layout hierarchy defined in project structure
- Use design tokens consistently (see `snippets/css/responsive-patterns.md`)
- Maintain mobile-first approach with Tailwind breakpoints
- Apply TypeScript strict patterns from `core/generic-standards.mdx`