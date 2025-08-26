# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the root of the project using pnpm:

- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview build locally
- `pnpm astro ...` - Run Astro CLI commands (e.g., `pnpm astro add`, `pnpm astro check`)

## Architecture Overview

This is an Astro blog starter using TypeScript with strict configuration. The project follows Astro's file-based routing and uses content collections for structured content management.

### Core Structure

**Content Collections**: Two main collections defined in `src/content.config.ts`:
- `blog` - Blog posts with required title, description, pubDate and optional updatedDate, heroImage, tags
- `pages` - Static pages with similar schema but all date fields optional

**Layouts**:
- `BlogPost.astro` - Blog post layout with hero image, date, tags display
- `Page.astro` - General page layout for static content

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

### Configuration

- Uses TypeScript strict mode with null checks enabled
- MDX and sitemap integrations configured
- Site URL set to 'https://example.com' in astro.config.mjs
- Language set to French (`lang="fr"`) in layout templates

### Content Schema

When creating new blog posts or pages, follow the frontmatter schema:

**Blog posts** require: title, description, pubDate
**Pages** require: title, description

Both support optional: updatedDate, heroImage, tags (blog posts default to empty array)

### Development Notes

- No linting or formatting tools configured
- Uses pnpm as package manager
- Based on Bear Blog theme
- Includes RSS feed and sitemap generation
- Optimized for performance (100/100 Lighthouse score target)