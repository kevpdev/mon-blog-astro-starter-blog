# Project Brief: Blog Astro

**Last Updated**: 2025-12-31

---

## What

Blog moderne construit avec Astro 5, TypeScript strict et Tailwind CSS 4. Application statique optimisée pour la performance, le SEO et l'accessibilité, suivant une architecture basée sur les composants et les Content Collections.

## For Whom

**Audience cible**:

- Développeurs et professionnels techniques
- Lecteurs intéressés par le développement web, les frameworks modernes et les bonnes pratiques
- Public francophone recherchant du contenu technique de qualité

**Objectif du contenu**:

- Partager des connaissances techniques et des tutoriels pratiques
- Documenter des expériences et des solutions de développement
- Créer une ressource de référence pour la communauté francophone

## Key Features

### Content Management

- **Static Site Generation** avec Astro pour performances maximales
- **Content Collections** pour gérer blog posts et pages statiques
- **Frontmatter Validation** avec schémas Zod TypeScript
- **Tag System** pour organisation et filtrage du contenu
- **RSS Feed** auto-généré pour abonnés

### User Experience

- **Responsive Design** mobile-first avec breakpoints adaptés
- **Dark Mode** avec détection des préférences système
- **Accessibilité** WCAG 2.2 AA compliant
- **Navigation Intuitive** avec menu, tags, et pages liées
- **Error Handling** robuste avec pages 404/500 personnalisées

### Performance & SEO

- **Core Web Vitals** optimisés (LCP <2.5s, FID <100ms, CLS <0.1)
- **Images Optimisées** WebP/AVIF avec lazy loading
- **SEO Meta Tags** structurés et validés
- **Lighthouse Score** >90 sur toutes les métriques

### Developer Experience

- **TypeScript Strict** mode avec null checks
- **Quality Control** automatisé (ESLint + Prettier + Vitest)
- **Pre-commit Hooks** avec Husky et lint-staged
- **Hot Reload** rapide en développement

## Tech Stack

| Layer               | Technology          | Version | Purpose                                    |
| ------------------- | ------------------- | ------- | ------------------------------------------ |
| **Framework**       | Astro               | 5.13.3  | Static Site Generation, file-based routing |
| **Language**        | TypeScript          | Latest  | Type safety, strict mode, null checks      |
| **Styling**         | Tailwind CSS        | 4.1.13  | Utility-first CSS, design tokens           |
| **Testing**         | Vitest              | Latest  | Unit testing, @testing-library/dom         |
| **Quality**         | ESLint + Prettier   | Latest  | Linting, formatting, code quality          |
| **Git Hooks**       | Husky + lint-staged | Latest  | Pre-commit validation                      |
| **Package Manager** | pnpm                | Latest  | Fast, efficient dependency management      |

**Node.js**: 24+ required

## Architecture

### Project Structure

```
src/
├── components/
│   ├── layout/              # Structural components
│   │   ├── Header.astro     # Site header with navigation
│   │   ├── Navigation.astro # Main navigation menu
│   │   └── FooterNew.astro  # Site footer
│   └── ui/                  # Reusable UI components
│       ├── Button.astro     # Button variants
│       ├── Badge.astro      # Tag badges
│       ├── BaseHead.astro   # SEO meta tags
│       ├── ErrorBoundary.astro # Error wrapper
│       └── ErrorMessage.astro  # Error display
├── layouts/                 # Page templates
│   ├── BaseLayout.astro     # Core HTML structure
│   ├── BlogLayout.astro     # Blog post layout
│   ├── BlogListLayout.astro # Blog listing
│   ├── HomeLayout.astro     # Homepage
│   ├── PageLayout.astro     # Static pages
│   └── FormationsLayout.astro # Formations page
├── pages/                   # File-based routing
│   ├── index.astro          # Homepage
│   ├── about.astro          # About page
│   ├── contact.astro        # Contact page
│   ├── 404.astro            # Not found
│   ├── 500.astro            # Server error
│   ├── blog/
│   │   ├── index.astro      # Blog listing
│   │   ├── [...slug].astro  # Individual posts
│   │   └── tag/[tag].astro  # Tag filtering
│   ├── [...slug].astro      # Dynamic pages
│   └── rss.xml.js           # RSS generation
├── content/                 # Markdown content
│   ├── blog/                # Blog posts
│   └── pages/               # Static pages
├── styles/                  # CSS files
│   ├── tailwind.css         # Tailwind imports
│   ├── design-tokens.css    # CSS variables (RGB format)
│   └── prose.css            # Typography
└── utils/                   # Utility functions
    ├── error-handler.ts     # Error handling
    ├── tags.ts              # Tag utilities
    ├── theme.ts             # Theme management
    └── related-posts.ts     # Related posts logic
```

### Layout Hierarchy

```
BaseLayout.astro (Core HTML, shared head/body/footer)
├── HomeLayout.astro (Homepage-specific layout)
├── BlogLayout.astro (Blog posts with hero, metadata, tags)
├── BlogListLayout.astro (Blog listing with filters)
├── PageLayout.astro (Static content pages)
└── FormationsLayout.astro (Formations page)
```

### Routing System

**Static Routes**:

- `/` - Homepage
- `/about` - About page
- `/contact` - Contact page
- `/blog` - Blog listing
- `/404` - Not found
- `/500` - Server error

**Dynamic Routes**:

- `/blog/[...slug]` - Individual blog posts
- `/blog/tag/[tag]` - Posts filtered by tag
- `/[...slug]` - Content collection pages

**API Routes**:

- `/rss.xml` - RSS feed generation

## Constraints

### Technical Constraints

- **Node.js 24+** required for latest Astro features
- **pnpm** as package manager (lockfile committed)
- **Static hosting** (no server-side runtime)
- **Build time** < 30s for typical content volume
- **No external databases** (content in Git)

### Performance Targets

- **Lighthouse Performance**: >90
- **LCP (Largest Contentful Paint)**: <2.5s
- **FID (First Input Delay)**: <100ms
- **CLS (Cumulative Layout Shift)**: <0.1
- **Bundle Size**: Minimal JS shipped to client

### Quality Standards

- **TypeScript Strict**: No implicit any, null checks enforced
- **Test Coverage**: >80% for critical paths
- **Accessibility**: WCAG 2.2 AA compliance
- **Code Quality**: ESLint + Prettier enforced via pre-commit
- **Git Hygiene**: Conventional commits, quality checks pass

## Success Criteria

### Performance Metrics

- Core Web Vitals pass on all pages
- Lighthouse score >90 across all categories
- Build completes without errors or warnings
- All quality checks pass (typecheck, lint, format, tests)

### Content Goals

- Original, high-quality technical content (>800 words per article)
- SEO-optimized metadata (titles 50-60 chars, descriptions 120-160 chars)
- Proper heading hierarchy (H1 → H2 → H3)
- Accessible images (descriptive alt text)
- Internal linking between related posts

### Developer Experience

- Fast hot reload in development (<1s)
- Clear error messages and debugging
- Automated quality control (pre-commit hooks)
- Simple content creation workflow
- Easy to onboard new contributors

## Design Principles

1. **Component-Based**: Reusable, configurable components
2. **Mobile-First**: Progressive enhancement from mobile to desktop
3. **Design System**: Centralized tokens for consistency
4. **Semantic HTML**: Proper markup with accessibility in mind
5. **Error-Safe**: Comprehensive error handling and fallbacks
6. **Performance-First**: Optimized for Core Web Vitals
7. **TypeScript Strict**: Full type safety with null checks

## Implementation Status

### ✅ Completed

- Core Astro setup with TypeScript strict mode
- Content Collections configuration (blog, pages)
- Layout system (BaseLayout, BlogLayout, PageLayout, etc.)
- Component library (ui, layout)
- Responsive design with Tailwind CSS 4
- SEO optimization (meta tags, structured data)
- Error handling system (custom errors, boundaries)
- Quality tooling (ESLint, Prettier, Vitest)
- Pre-commit hooks (Husky + lint-staged)
- RSS feed generation
- Tag system and filtering
- Dark mode support

### 🔄 In Progress

- Content creation workflow optimization
- Performance monitoring and optimization
- SEO tracking and analytics integration

### 🎯 Next Priorities

- Advanced search functionality
- Newsletter subscription integration
- Comment system evaluation
- Performance monitoring dashboard

## Notes

- **Global Rules**: Generic development standards referenced from `~/.claude/CLAUDE.md`
- **Local Context**: Project-specific patterns documented in this memory-bank
- **Content Strategy**: Focus on technical tutorials, guides, and best practices
- **Deployment**: Static hosting (Netlify/Vercel recommended)
