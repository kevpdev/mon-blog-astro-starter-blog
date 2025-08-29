# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the root of the project using pnpm:

### Development
- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview build locally
- `pnpm astro ...` - Run Astro CLI commands (e.g., `pnpm astro add`, `pnpm astro check`)

### Quality & Testing
- `pnpm lint` - Run ESLint on .js, .ts, .astro files
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm typecheck` - Run Astro type checking
- `pnpm test` - Run Vitest tests
- `pnpm test:watch` - Run Vitest in watch mode
- `pnpm quality` - Run typecheck, lint, and format check

## Architecture Overview

This is a modern Astro blog with TypeScript strict configuration, following component-based architecture with design tokens and mobile-first responsive design.

### Layout Architecture (Composable Design)

**Base Layout System**:
- `BaseLayout.astro` - Core HTML structure, shared head/body/footer
- `HomeLayout.astro` - Homepage-specific layout extending BaseLayout
- `BlogLayout.astro` - Blog post layout with hero image, metadata, tags
- `PageLayout.astro` - Static page layout for content pages

**Component System**:
- `Navigation.astro` - Dynamic navigation with dropdown support
- `Header.astro` - Responsive header with mobile hamburger menu
- `Footer.astro` - Configurable footer with social links
- `SocialLinks.astro` - Reusable social media links component

**Content Collections**: Two main collections defined in `src/content.config.ts`:

- `blog` - Blog posts with required title, description, pubDate and optional updatedDate, heroImage, tags
- `pages` - Static pages with similar schema but all date fields optional

**Content Management**:

- Blog posts in `src/content/blog/` (Markdown/MDX)
- Static pages in `src/content/pages/` (Markdown/MDX)
- Uses Astro's new loader system with glob patterns

### Routing

- `src/pages/index.astro` - Homepage
- `src/pages/about.astro` - About page
- `src/pages/blog/index.astro` - Blog listing page
- `src/pages/blog/[...slug].astro` - Individual blog posts
- `src/pages/[...slug].astro` - Dynamic pages from content/pages collection
- `src/pages/rss.xml.js` - RSS feed generation

### Design System & Styling

**CSS Architecture**:
```
src/styles/
├── design-tokens.css     # Design system variables (colors, spacing, typography)
├── global.css           # Global styles + imports  
├── layouts.css          # Layout-specific styles
├── components.css       # Component-specific styles
└── tokens.css          # Legacy tokens (navigation, footer, etc.)
```

**Design Tokens System**:
- **Semantic Colors**: `--color-primary-500`, `--color-text-primary`, `--color-bg-secondary`
- **Spacing Scale**: `--space-1` to `--space-32` (consistent spacing)
- **Typography**: Fluid responsive with `clamp()` functions
- **Shadows & Borders**: `--shadow-sm` to `--shadow-2xl`
- **Theme Support**: Light/dark mode with CSS classes and system preference

**Responsive Design**:
- **Mobile-First**: Base styles for mobile, progressively enhanced
- **Breakpoints**: 640px (tablet), 768px (desktop), 1024px+ (large screens)
- **Fluid Typography**: `clamp(1.8rem, 4vw, 3.052rem)` for all headings
- **Flexible Layouts**: `width: 100%; max-width: 720px; margin: 0 auto`

### Configuration

- Uses TypeScript strict mode with null checks enabled
- MDX and sitemap integrations configured
- Site URL set to 'https://example.com' in astro.config.mjs
- Language set to French (`lang="fr"`) in layout templates
- Mobile-first responsive design with hamburger navigation

### Content Schema

When creating new blog posts or pages, follow the frontmatter schema:

**Blog posts** require: title, description, pubDate
**Pages** require: title, description

Both support optional: updatedDate, heroImage, tags (blog posts default to empty array)

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

### Styling Guidelines

**CSS Best Practices**:
- **Use Design Tokens**: Prefer `var(--color-text-primary)` over hardcoded colors
- **Mobile-First Media Queries**: `@media (min-width: 640px)` not `max-width`
- **Avoid Inline Styles**: Keep styles in CSS files or component `<style>` blocks
- **Consistent Spacing**: Use `--space-*` variables for margins/padding
- **Responsive Images**: Always use `width: 100%; height: auto; max-width: 100%`

**Component Development**:
- **Props Interface**: Always define TypeScript interfaces for component props
- **Responsive by Default**: All components should work on mobile and desktop
- **Accessible**: Include proper ARIA labels, focus management, keyboard navigation
- **Configurable**: Use props and slots for customization

### Performance & UX

**Technical Stack**:
- **Package Manager**: pnpm with Node.js 24+ support
- **Testing**: Vitest with @testing-library/dom for component testing
- **Build**: Optimized production builds with Astro's static generation
- **Assets**: WebP images with responsive sizing and lazy loading

**Performance Targets**:
- **Lighthouse Score**: 100/100 target for performance, accessibility, SEO
- **Core Web Vitals**: Optimized LCP, FID, CLS metrics
- **Mobile Performance**: Fast loading on 3G networks
- **Accessibility**: WCAG 2.2 AA compliance with eslint-plugin-jsx-a11y

**Features**:
- RSS feed generation for blog content
- Automatic sitemap generation
- MDX support for rich content
- SEO-optimized meta tags and structured data
- Mobile-responsive navigation with hamburger menu
