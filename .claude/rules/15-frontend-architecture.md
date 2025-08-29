# Frontend Architecture Rules

This document defines the architectural rules, patterns, and constraints for frontend development in this Astro project.

## 🏗️ Layout Architecture Rules

### Layout Hierarchy (MUST FOLLOW)
```
BaseLayout.astro                    ← Core HTML structure (required)
├── HomeLayout.astro               ← Homepage specific
├── BlogLayout.astro               ← Blog posts with metadata  
├── PageLayout.astro               ← Static content pages
└── [Custom]Layout.astro           ← New layouts extend BaseLayout
```

**Rules:**
- ✅ **MUST**: All layouts extend `BaseLayout.astro`
- ✅ **MUST**: Use slots for content injection (`<slot />`, `<slot name="head" />`)
- ❌ **NEVER**: Duplicate HTML structure between layouts
- ❌ **NEVER**: Put CSS directly in layouts - use design tokens

### Component Architecture

**Component Categories:**
```
src/components/
├── UI/                            # Pure UI components (Button, Input, Card)
├── Navigation/                    # Navigation-specific components
├── Content/                       # Content display components
└── Layout/                        # Layout helper components
```

**Component Rules:**
- ✅ **MUST**: Define TypeScript interfaces for all props
- ✅ **MUST**: Support both mobile and desktop by default
- ✅ **MUST**: Include accessibility attributes (ARIA, alt, labels)
- ✅ **SHOULD**: Be configurable via props and slots
- ❌ **NEVER**: Hardcode colors, spacing, or breakpoints

## 🎨 CSS & Styling Rules

### CSS Architecture (ENFORCED)
```
src/styles/
├── design-tokens.css              # Design system variables (colors, spacing, typography)
├── global.css                     # Global styles + all imports
├── layouts.css                    # Layout-specific styles  
├── components.css                 # Component-specific styles
└── tokens.css                     # Legacy compatibility tokens
```

**CSS Rules:**
- ✅ **MUST**: Use design tokens instead of hardcoded values
- ✅ **MUST**: Follow mobile-first approach (`@media (min-width: ...)`)
- ✅ **MUST**: Use semantic color variables (`--color-text-primary` not `--gray-900`)
- ✅ **SHOULD**: Prefer `clamp()` for responsive typography
- ❌ **NEVER**: Use `max-width` media queries (desktop-first)
- ❌ **NEVER**: Inline styles except for dynamic values

### Design Token Usage

**Semantic Colors (USE THESE):**
```css
/* ✅ Correct */
color: var(--color-text-primary);
background: var(--color-bg-secondary);
border: 1px solid var(--color-border-primary);

/* ❌ Wrong */
color: #333;
background: #f5f5f5;
border: 1px solid #ddd;
```

**Spacing System:**
```css
/* ✅ Correct */
margin: var(--space-4) var(--space-8);
padding: var(--space-2);

/* ❌ Wrong */  
margin: 16px 32px;
padding: 8px;
```

**Typography:**
```css
/* ✅ Correct */
font-size: var(--font-size-lg);
font-size: clamp(1.5rem, 3.5vw, 2.441rem);

/* ❌ Wrong */
font-size: 24px;
font-size: 1.5em;
```

## 📱 Responsive Design Rules

### Breakpoint System (MANDATORY)
```css
/* Mobile First - Base styles (no media query) */
.component { /* mobile styles */ }

/* Tablet */
@media (min-width: 640px) { /* tablet enhancements */ }

/* Desktop */  
@media (min-width: 768px) { /* desktop enhancements */ }

/* Large Desktop */
@media (min-width: 1024px) { /* large screen enhancements */ }
```

**Responsive Rules:**
- ✅ **MUST**: Start with mobile styles as base
- ✅ **MUST**: Use progressive enhancement
- ✅ **MUST**: Test on mobile, tablet, desktop
- ✅ **MUST**: Make navigation mobile-friendly (hamburger menu)
- ❌ **NEVER**: Use `max-width` media queries
- ❌ **NEVER**: Assume desktop-first usage

### Layout Constraints
```css
/* ✅ Correct container pattern */
.container {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem;
}

/* Mobile adjustments */
@media (min-width: 640px) {
  .container { padding: 2rem; }
}
```

## 🔧 Component Development Rules

### Component Structure Template
```astro
---
// Always define props interface
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const { title, variant = 'primary', className = '' } = Astro.props;
---

<div class={`component component--${variant} ${className}`}>
  <h2>{title}</h2>
  <slot />
</div>

<style>
  .component {
    /* Use design tokens */
    padding: var(--space-4);
    background: var(--color-bg-primary);
    border-radius: var(--border-radius-md);
  }
  
  .component--primary {
    color: var(--color-brand-primary);
  }
  
  .component--secondary {
    color: var(--color-brand-secondary);
  }
  
  /* Mobile-first responsive */
  @media (min-width: 768px) {
    .component {
      padding: var(--space-6);
    }
  }
</style>
```

## 📁 File Organization Rules

### Directory Structure (ENFORCED)
```
src/
├── components/
│   ├── UI/                        # Reusable UI elements
│   ├── Navigation/                # Navigation components
│   └── [FeatureName]/            # Feature-specific components
├── layouts/
│   ├── BaseLayout.astro          # Core layout
│   └── [Specific]Layout.astro    # Specialized layouts
├── pages/                        # File-based routing
├── styles/                       # CSS architecture
├── content/                      # Content collections
├── config/                       # Configuration files
├── types/                        # TypeScript definitions
└── utils/                        # Utility functions
```

### Naming Conventions
- **Components**: PascalCase (`Navigation.astro`, `SocialLinks.astro`)
- **Layouts**: PascalCase + Layout suffix (`BlogLayout.astro`)
- **Pages**: kebab-case (`about.astro`, `blog-post.astro`)
- **CSS Classes**: kebab-case (`.nav-container`, `.mobile-menu`)
- **CSS Variables**: kebab-case with semantic prefix (`--color-text-primary`)

## 🚫 Anti-Patterns (FORBIDDEN)

### CSS Anti-Patterns
```css
/* ❌ NEVER DO THIS */
@media (max-width: 767px) { /* Desktop-first */ }
position: absolute; left: -9999px; /* Use .sr-only class */
color: #333333; /* Use design tokens */
margin: 10px 5px 15px 20px; /* Inconsistent spacing */
!important; /* Indicates architecture problem */
```

### Component Anti-Patterns
```astro
<!-- ❌ NEVER DO THIS -->
<div style="color: red;">                    <!-- Inline styles -->
<div class="mt-4 mb-8 text-gray-500">      <!-- Utility classes without system -->
<img src="..." />                           <!-- Missing alt text -->
<button onclick="...">                      <!-- Inline JavaScript -->
```

### Architecture Anti-Patterns
- ❌ **NEVER**: Duplicate code between layouts
- ❌ **NEVER**: Import CSS files directly in components (use global.css)
- ❌ **NEVER**: Create components without TypeScript interfaces
- ❌ **NEVER**: Skip mobile testing
- ❌ **NEVER**: Ignore accessibility requirements

## ✅ Code Review Checklist

Before merging any frontend changes, ensure:

### Architecture
- [ ] Component extends proper base (layouts extend BaseLayout)
- [ ] No code duplication between components/layouts
- [ ] Follows established file/folder structure
- [ ] Uses TypeScript interfaces for props

### Styling  
- [ ] Uses design tokens instead of hardcoded values
- [ ] Follows mobile-first responsive approach
- [ ] Consistent with existing component styles
- [ ] No inline styles (except dynamic values)

### Responsive Design
- [ ] Tested on mobile (320px+)
- [ ] Tested on tablet (640px+)  
- [ ] Tested on desktop (768px+)
- [ ] Navigation works on all screen sizes

## 🔄 Evolution Guidelines

### Adding New Components
1. Create in appropriate category folder (`UI/`, `Navigation/`, etc.)
2. Define TypeScript interface for props
3. Use design tokens for all styling
4. Implement mobile-first responsive design
5. Add accessibility attributes
6. Test on all breakpoints
7. Update documentation if new patterns emerge

### Modifying Design System
1. Update `design-tokens.css` first
2. Test impact across all components
3. Update documentation
4. Ensure backward compatibility where possible

### Breaking Changes
1. Create deprecation path for old patterns
2. Update all affected components
3. Update documentation and examples
4. Communicate changes to team