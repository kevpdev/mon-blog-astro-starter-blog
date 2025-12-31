# Technical Context

**Last Updated**: 2025-12-31

---

## Tech Stack Details

### Core Framework & Language

**Astro 5.13.3**

- Static Site Generation (SSG) preferred over SSR
- File-based routing system
- Component islands architecture
- Built-in image optimization
- Content Collections with type safety

**TypeScript (Strict Mode)**

- `strict: true` in tsconfig
- Null checks enforced
- Explicit return types on public functions
- No implicit `any`
- Interface-first design for contracts

### Styling System

**Tailwind CSS 4.1.13**

- Utility-first CSS framework
- Vite plugin for optimal performance
- Design tokens in CSS variables (RGB format)
- Mobile-first responsive design
- JIT (Just-In-Time) compilation

**Design Tokens** (`src/styles/design-tokens.css`):

```css
:root {
  /* Colors in RGB format for alpha channel support */
  --color-primary: 59 130 246;
  --color-secondary: 139 92 246;
  --color-accent: 236 72 153;

  /* Spacing scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;

  /* Typography */
  --font-sans: system-ui, -apple-system, sans-serif;
  --font-mono: 'Fira Code', monospace;
}
```

### Testing & Quality

**Vitest**

- Unit testing framework
- @testing-library/dom for component testing
- Coverage tracking
- Fast HMR in watch mode

**ESLint**

- Flat config with TypeScript support
- Auto-fix on save
- Integrated with pre-commit hooks

**Prettier**

- Consistent code formatting
- Automated via pre-commit hooks
- Configuration: 2-space indent, single quotes, trailing commas

**Husky + lint-staged**

- Pre-commit hooks for quality control
- Runs only on staged files for speed
- Enforces typecheck, lint, and format

### Package Management

**pnpm**

- Fast, efficient dependency management
- Symlinked node_modules
- Strict dependency resolution
- Lockfile committed to Git

**Node.js 24+**

- Required for latest Astro features
- ESM modules support
- Performance optimizations

---

## Architecture Details

### Component System

**Organization**:

```
src/components/
├── ui/                       # Pure UI components (no business logic)
│   ├── Button.astro          # Reusable button with variants
│   ├── Badge.astro           # Tag/status badges
│   ├── BaseHead.astro        # SEO meta tags component
│   ├── ErrorBoundary.astro   # Error wrapper component
│   └── ErrorMessage.astro    # Error display component
└── layout/                   # Structural components
    ├── Header.astro          # Site header with branding
    ├── Navigation.astro      # Main navigation menu
    └── FooterNew.astro       # Site footer with links
```

**Component Standards**:

- Props interface defined at top with TypeScript
- Semantic HTML structure (proper elements, ARIA when needed)
- Scoped styles using `<style>` tag
- Mobile-first responsive design
- Accessibility attributes (alt, aria-label, etc.)

**Performance Rules**:

- Static generation preferred over SSR
- Selective hydration with `client:` directives:
  - `client:load` - High priority, load immediately
  - `client:idle` - Low priority, load when idle
  - `client:visible` - Load when component enters viewport
- Image optimization with `<Image>` component from `astro:assets`

### Layout System

**Composable Design**:

```
BaseLayout.astro (Core HTML structure)
├── slot: default content
├── props: title, description, image, noindex
└── includes: BaseHead, Header, FooterNew

Specialized Layouts (extend BaseLayout):
├── HomeLayout.astro         # Homepage-specific layout
├── BlogLayout.astro         # Blog posts with hero image, metadata
├── BlogListLayout.astro     # Blog listing with filters
├── PageLayout.astro         # Static content pages
└── FormationsLayout.astro   # Formations page
```

**Layout Props Pattern**:

```typescript
interface Props {
  title: string;
  description?: string;
  heroImage?: string;
  noindex?: boolean;
}
```

### Content Collections

**Configuration** (`src/content/config.ts`):

```typescript
import { defineCollection, z } from 'astro:content';

// Blog Post Schema
const blogSchema = z.object({
  title: z.string().max(60, 'Title must be 60 characters or less'),
  description: z.string().min(120).max(160, 'Description must be 120-160 characters'),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  author: z.string().default('Default Author'),
  category: z.enum(['tutorial', 'guide', 'news', 'review']).optional(),
});

// Page Schema
const pageSchema = z.object({
  title: z.string().max(60),
  description: z.string().min(120).max(160),
  lastModified: z.coerce.date().optional(),
  noindex: z.boolean().default(false),
  layout: z.enum(['default', 'wide', 'minimal']).default('default'),
});

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: blogSchema,
  }),
  pages: defineCollection({
    type: 'content',
    schema: pageSchema,
  }),
};
```

**Frontmatter Examples**:

Blog Post:

```yaml
---
title: 'Guide Complet Astro : Maîtrisez les Bases'
description: 'Apprenez à créer des sites web rapides avec Astro. Guide complet avec exemples pratiques et meilleures pratiques pour développeurs.'
pubDate: '2024-12-11T10:00:00Z'
updatedDate: '2024-12-11T15:30:00Z'
heroImage: './hero-astro-guide.webp'
tags: ['astro', 'web-development', 'javascript', 'tutorial']
draft: false
author: 'John Doe'
category: 'tutorial'
---
```

Static Page:

```yaml
---
title: 'À Propos de Notre Équipe'
description: 'Découvrez notre équipe passionnée de développeurs et designers qui créent des expériences web exceptionnelles.'
lastModified: '2024-12-11T10:00:00Z'
layout: 'wide'
noindex: false
---
```

### Routing & Pages

**File-Based Routing**:

- `src/pages/index.astro` → `/`
- `src/pages/about.astro` → `/about`
- `src/pages/blog/index.astro` → `/blog`
- `src/pages/blog/[...slug].astro` → `/blog/{slug}` (dynamic)
- `src/pages/blog/tag/[tag].astro` → `/blog/tag/{tag}` (dynamic)
- `src/pages/[...slug].astro` → `/{slug}` (catch-all for content collections)

**Special Pages**:

- `404.astro` - Custom not found page
- `500.astro` - Server error page
- `rss.xml.js` - RSS feed generator

### Utility Functions

**Error Handling** (`src/utils/error-handler.ts`):

- Custom domain error types (PostNotFoundError, ValidationError, etc.)
- Centralized error handling utilities
- globalThis compatibility for SSR/client
- Fallback mechanisms and retry logic

**Tag Utilities** (`src/utils/tags.ts`):

- Extract unique tags from posts
- Filter posts by tag
- Tag frequency counting
- URL-safe tag slugs

**Theme Management** (`src/utils/theme.ts`):

- Dark mode detection and toggle
- System preference detection
- localStorage persistence
- CSS variable updates

**Related Posts** (`src/utils/related-posts.ts`):

- Find posts with similar tags
- Score by tag overlap
- Exclude current post
- Return top N related posts

---

## Build & Deployment

### Build Process

```bash
pnpm build
```

**Output**:

- Static HTML/CSS/JS in `./dist/`
- Optimized images (WebP/AVIF)
- Minified assets
- Source maps (configurable)

**Build Targets**:

- Modern browsers (ES2020+)
- No polyfills for old browsers
- Optimized for performance

### Deployment Strategy

**Static Hosting** (recommended):

- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages

**No server required**: Pure static site, no runtime dependencies

**CDN**: All assets served from CDN for global performance

---

## Design Principles

### Code Quality Standards

**TypeScript Patterns**:

- Explicit interfaces for all public APIs
- Prefer `type` for unions, `interface` for objects
- Avoid `any`, prefer `unknown` when type truly unknown
- Generic types for reusability

**Clean Code**:

- Max 30 lines per function
- Max 5 parameters per function
- Use explicit constants (no magic numbers)
- Long, readable variable names
- Minimal comments (code should be self-documenting)

**Astro Patterns**:

- Props interface at component top
- Semantic HTML structure
- Scoped styles when needed
- Performance-first approach (static > SSR)

### Architecture Patterns

**Component-Based**:

- Reusable components in `ui/`
- Layout components in `layout/`
- Smart/dumb pattern: logic in parent, display in child

**Mobile-First**:

- Design for mobile screens first
- Progressive enhancement for tablets/desktops
- Tailwind breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)

**Design System**:

- Centralized tokens in `design-tokens.css`
- Consistent spacing, typography, colors
- Reusable patterns across components

**Error-Safe**:

- Comprehensive error handling
- Fallback UI for errors
- Custom error pages (404, 500)
- Error boundaries for components

**Performance-First**:

- Optimize for Core Web Vitals
- Lazy load images
- Minimal JavaScript shipped
- Bundle size monitoring

---

## Testing Strategy

### Unit Testing

**Vitest Configuration**:

- Test files: `*.test.ts`, `*.spec.ts`
- Coverage directory: `coverage/`
- Watch mode for development
- @testing-library/dom for component testing

**Testing Patterns**:

- Arrange-Act-Assert (AAA) pattern
- One assertion per test (ideally)
- Descriptive test names
- Test behavior, not implementation

**Coverage Targets**:

- > 80% for critical paths
- 100% for business logic
- Edge cases and error paths covered

### Integration Testing

**Critical Paths**:

- Content collection queries
- Tag filtering and search
- Related posts algorithm
- Error handling flows

### Manual Testing

**Accessibility**:

- Keyboard navigation
- Screen reader testing (NVDA/JAWS/VoiceOver)
- WCAG 2.2 AA compliance
- Color contrast validation

**Performance**:

- Lighthouse audits (>90 target)
- WebPageTest analysis
- Core Web Vitals monitoring
- Bundle size tracking

---

## Performance Optimization

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint)**: <2.5s
- **FID (First Input Delay)**: <100ms
- **CLS (Cumulative Layout Shift)**: <0.1

### Optimization Strategies

**Images**:

- WebP/AVIF formats with JPG fallback
- Responsive sizing with `srcset`
- Lazy loading for below-the-fold images
- `<Image>` component from `astro:assets`

**CSS**:

- Tailwind CSS purges unused styles
- Critical CSS inlined
- Non-critical CSS deferred
- Design tokens in RGB for alpha channel

**JavaScript**:

- Minimal JS shipped to client
- Component islands for selective hydration
- Code splitting by route
- Tree shaking unused code

**Fonts**:

- System fonts preferred
- Font subsetting if custom fonts used
- Preload critical fonts
- Font-display: swap for FOUT prevention

---

## Security Considerations

### Frontend Security

**Content Security Policy**:

- Restrict script sources
- Inline scripts hashed
- No eval() or unsafe-inline

**Input Validation**:

- Validate all user inputs
- Sanitize before rendering
- Escape HTML content
- Prevent XSS attacks

**Dependencies**:

- Regular `pnpm audit`
- Update dependencies weekly
- Review security advisories
- Minimize dependency count

### Build Security

**Pre-commit Checks**:

- TypeScript type checking
- ESLint security rules
- No secrets in code
- Lockfile integrity

---

## Notes

### File References (Critical)

- **Content Collections Config**: `src/content/config.ts`
- **Tailwind Config**: `tailwind.config.mjs`
- **TypeScript Config**: `tsconfig.json`
- **Astro Config**: `astro.config.mjs`
- **Vitest Config**: `vitest.config.ts`
- **ESLint Config**: `eslint.config.js`
- **Prettier Config**: `.prettierrc`

### External Documentation

- **Astro**: https://docs.astro.build
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Vitest**: https://vitest.dev/guide
- **Zod**: https://zod.dev (for Content Collections schemas)
