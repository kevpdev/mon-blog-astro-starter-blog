# Story CONTENT-001: Blog Post Creation Workflow

**ID**: CONTENT-001
**Type**: Workflow Documentation
**Status**: ✅ Active
**Effort**: N/A (documentation)
**Dependencies**: None

---

## Goal

Document the complete end-to-end workflow for creating, optimizing, and publishing high-quality blog content on the Astro blog. This workflow ensures consistency, SEO optimization, accessibility compliance, and performance excellence for every published article.

---

## Workflow Overview

```
Planning → Research → Creation → Optimization → Validation → Publication → Tracking
   ↓          ↓           ↓            ↓            ↓              ↓           ↓
Content    Structure   File +    Images +SEO   Tests +       Git Commit   Analytics
Analysis   Design      Frontmatter            Accessibility   & Push
```

---

## Phase 1: Content Planning

### 1.1 Analyze Existing Content

```bash
# Count existing posts
find src/content/blog -name "*.md" -o -name "*.mdx" | wc -l

# List recent posts
ls -la src/content/blog/ | head -10

# Analyze popular tags
grep -r "tags:" src/content/blog/ | grep -o '\[.*\]' | sort | uniq -c | sort -nr | head -10
```

### 1.2 Planning Questions

- [ ] What is the objective of this content? (educate, solve problem, share experience)
- [ ] Who is the target audience? (beginners, intermediate, advanced)
- [ ] What keywords to target for SEO?
- [ ] How does it fit into the editorial strategy?
- [ ] What related content exists to link to?

### 1.3 Content Plan Template

```markdown
# Content Plan: [TITLE]

## Objective

[Define the content objective]

## Audience

[Describe target audience and their needs]

## Primary Keywords

- [keyword1]
- [keyword2]
- [keyword3]

## Structure

1. Introduction (hook, problem statement)
2. [Main Section 1]
3. [Main Section 2]
4. [Main Section 3]
5. Conclusion (recap, call-to-action)

## Sources & References

- [Source 1]
- [Source 2]
```

---

## Phase 2: Content Creation

### 2.1 Create File with Frontmatter

```bash
# Generate file with date prefix
touch "src/content/blog/$(date +%Y-%m-%d)-[SLUG].md"

# Auto-generate slug from title
echo "[TITLE]" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$//g'
```

### 2.2 Blog Post Template

````markdown
---
title: '[TITLE]'
description: '[META_DESCRIPTION_120-160_CHARS]'
pubDate: '2025-12-31T10:00:00Z'
updatedDate: '2025-12-31T15:30:00Z' # Optional, remove if not updated
heroImage: './hero-image.webp' # Optional, remove if no hero image
tags: ['tag1', 'tag2', 'tag3'] # 2-5 tags recommended
draft: false # Set to true for drafts
author: 'Author Name' # Optional, uses default if omitted
category: 'tutorial' # Optional: tutorial, guide, news, review
---

## Introduction

[Engaging hook + problem presentation]

**What you'll learn:**

- Key point 1
- Key point 2
- Key point 3

## [Main Section 1]

[Content with concrete examples]

### Subsection

[Details and explanations]

```typescript
// Code examples with proper syntax highlighting
function example() {
  return 'Hello World!';
}
```
````

## [Main Section 2]

[Continue content with images if needed]

![Descriptive alt text](./image.webp)

## Conclusion

[Recap + call-to-action]

**Key Takeaways:**

- Point 1
- Point 2
- Point 3

---

_Published on [DATE] • Last updated on [DATE]_

````

### 2.3 Specialized Templates

**Technical Tutorial**:
```markdown
---
title: 'How to [TASK] with [TECHNOLOGY]: Practical Guide'
description: 'Learn to [TASK] step-by-step with [TECHNOLOGY]. Complete guide with code examples and best practices.'
tags: ['tutorial', 'technology', 'development']
category: 'tutorial'
---

## The Problem
[Contextualize the problem to solve]

## Prerequisites
- [Skill 1]
- [Tool 1] installed
- [Knowledge 1]

## Step-by-Step Solution

### Step 1: [ACTION]
[Explanation + code example]

### Step 2: [ACTION]
[Explanation + code example]

## Results & Performance
[Metrics, before/after, benchmarks]

## Conclusion & Recommendations
[Recap + next steps]
```

**News/Trends Article**:
```markdown
---
title: '[TECHNOLOGY] in 2025: New Features and Trends'
description: 'Discover the latest [TECHNOLOGY] evolutions: new features, improved performance, and innovative use cases.'
tags: ['news', 'technology', 'trends']
category: 'news'
---

## Current State
[Current state of the technology]

## Major Updates

### [Feature 1]
[Impact, examples, adoption]

### [Feature 2]
[Impact, examples, adoption]

## User Feedback
[Testimonials, case studies, metrics]

## 2025 Outlook
[Predictions, roadmap, recommendations]
```

---

## Phase 3: Image Optimization

### 3.1 Image Preparation

```bash
# Create asset directory
mkdir -p src/assets/blog/[SLUG]

# Recommended tools
echo "Tools: squoosh-cli, sharp, imagemagick"
echo "Formats: WebP (primary), AVIF (modern), JPG (fallback)"
echo "Sizes: 1200px max width, responsive variants"
```

### 3.2 Astro Image Component

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../../../assets/blog/[SLUG]/hero.jpg';
---

<Image
  src={heroImage}
  alt="Precise and accessible description"
  width={1200}
  height={600}
  format="webp"
  quality="high"
  loading="lazy"
/>
```

### 3.3 Image Checklist

- [ ] Images optimized (WebP/AVIF format)
- [ ] Max 1200px width
- [ ] Descriptive alt text
- [ ] Lazy loading enabled
- [ ] Responsive sizing with srcset

---

## Phase 4: SEO & Metadata Optimization

### 4.1 SEO Checklist

```markdown
## SEO Validation
- [ ] Title optimized (50-60 characters)
- [ ] Meta description (120-160 characters)
- [ ] URL slug optimized (keywords, hyphens)
- [ ] Relevant tags (3-5 maximum)
- [ ] Images with descriptive alt text
- [ ] Logical H1-H6 structure
- [ ] Internal links to other articles
- [ ] Original, quality content (>800 words)
```

### 4.2 SEO Best Practices Example

```yaml
---
title: "Complete Astro Guide 2025: Build Ultra-Fast Sites"
description: "Learn how to create ultra-fast websites with Astro. Practical guide with examples, optimizations, and 2025 best practices."
pubDate: "2025-12-31"
heroImage: "./hero-astro-guide.webp"
tags: ["astro", "performance", "web-development", "javascript"]
---
```

### 4.3 Content Structure

```markdown
# Complete Astro Guide 2025: Build Ultra-Fast Sites

In this guide, we explore **Astro**, the revolutionary framework that allows creating websites with exceptional performance...

## Table of Contents
1. [Introduction to Astro](#introduction)
2. [Installation and setup](#installation)
3. [Components and islands](#components)
4. [Advanced optimizations](#optimizations)
```

---

## Phase 5: Content Validation

### 5.1 Quality Checks

```bash
# Spell and grammar check
echo "Tools: languagetool, grammarly, hemingway app"

# Readability test
echo "Target: 8-10th grade reading level"
echo "Sentences: <20 words per sentence"
echo "Paragraphs: <4 sentences per paragraph"

# Technical validation
pnpm astro check
pnpm build
```

### 5.2 Content Quality Checklist

- [ ] Spelling and grammar verified
- [ ] Tone consistent with editorial line
- [ ] Practical and actionable examples
- [ ] External links verified and relevant
- [ ] Code examples tested and functional
- [ ] Logical and progressive structure

---

## Phase 6: Tests & Preview

### 6.1 Development Preview

```bash
# Start development server
pnpm dev

# Test URLs
echo "- http://localhost:4321/blog/[SLUG]"
echo "- http://localhost:4321/blog (list view)"
echo "- http://localhost:4321/blog/tag/[TAG] (tag pages)"
```

### 6.2 Responsive Testing

```bash
# Test breakpoints
echo "Breakpoints: mobile (default), tablet (640px), desktop (768px), large (1024px+)"
```

---

## Phase 7: Accessibility & Performance

### 7.1 Accessibility Tests

```bash
echo "=== ACCESSIBILITY TESTS ==="
echo "Tools: aXe, WAVE, Lighthouse"
echo "Standards: WCAG 2.2 AA compliance"
```

**Accessibility Checklist**:
- [ ] Images with descriptive alt text
- [ ] Sufficient color contrasts (4.5:1 minimum)
- [ ] Logical heading structure (H1 → H2 → H3...)
- [ ] Functional keyboard navigation
- [ ] Descriptive link texts (avoid "click here")

### 7.2 Performance Tests

```bash
echo "=== PERFORMANCE TESTS ==="
echo "Metrics: LCP <2.5s, FID <100ms, CLS <0.1"
echo "Tools: Lighthouse, WebPageTest"
```

**Performance Checklist**:
- [ ] Core Web Vitals pass
- [ ] Images optimized and lazy loaded
- [ ] Minimal JavaScript shipped
- [ ] CSS optimized (no unused styles)
- [ ] Fonts optimized (system fonts or preloaded)

---

## Phase 8: Publication

### 8.1 Pre-Publication Checklist

- [ ] Draft mode disabled (draft: false)
- [ ] Content reviewed and validated
- [ ] Build tests pass (pnpm build)
- [ ] Images optimized and loaded
- [ ] Internal/external links verified
- [ ] Quality checks pass (pnpm quality)

### 8.2 Git Commit

```bash
git add .
git commit -m "feat(blog): add new post - [TITLE]

- Add comprehensive guide on [TOPIC]
- Include practical examples and code snippets
- Optimize for SEO with relevant keywords
- Add responsive images and alt text"

git push origin main
```

---

## Phase 9: Post-Publication Tracking

### 9.1 Analytics & Metrics

```bash
echo "=== POST-PUBLICATION TRACKING ==="
echo "Monitor: Page views, time on page, bounce rate"
echo "SEO: Search rankings, click-through rates"
echo "Social: Shares, comments, engagement"
```

### 9.2 Content Maintenance

```bash
echo "=== CONTENT MAINTENANCE ==="
echo "Schedule: Review every 6 months"
echo "Update: Statistics, links, screenshots"
echo "Optimize: Based on search performance"
```

---

## Frontmatter Schema Reference

### Blog Post Schema

```typescript
{
  title: string (max 60 chars),
  description: string (120-160 chars),
  pubDate: Date,
  updatedDate?: Date,
  heroImage?: string,
  tags: string[] (default []),
  draft: boolean (default false),
  author?: string (default from config),
  category?: 'tutorial' | 'guide' | 'news' | 'review'
}
```

### Field Guidelines

- **title**: 50-60 characters, descriptive and catchy
- **description**: 120-160 characters for SEO
- **pubDate**: YYYY-MM-DD format required
- **updatedDate**: Only if major update
- **heroImage**: 1200x630px recommended, WebP format preferred
- **tags**: 2-5 tags, consistent with existing articles
- **author**: Optional, fallback to default config

---

## Success Metrics

```bash
echo "=== CONTENT SUCCESS METRICS ==="
echo "Word count: [X] words (target >800)"
echo "Reading time: [X] minutes"
echo "Images: [X] optimized"
echo "Internal links: [X]"
echo "External links: [X]"
echo "SEO score: [X]/100 (target >90)"
echo "Accessibility score: [X]/100 (target >90)"
echo "Performance score: [X]/100 (target >90)"
```

---

## Final Publication Checklist

- [ ] Original, quality content (>800 words)
- [ ] SEO metadata optimized
- [ ] Images optimized with alt text
- [ ] Accessible structure (headings, links)
- [ ] Code examples tested
- [ ] Links verified
- [ ] Production build successful
- [ ] Preview validation completed
- [ ] Publication scheduled and completed

---

## Expected Output

- **Published article** accessible and indexed
- **SEO optimized** for search engines
- **Excellent performance** (Core Web Vitals)
- **WCAG AA compliant** accessibility
- **Engaging and actionable** content

---

## Notes

### Tools & Resources
- **Grammar**: LanguageTool, Grammarly
- **Readability**: Hemingway App
- **SEO**: Google Search Console, Lighthouse
- **Accessibility**: aXe DevTools, WAVE
- **Performance**: Lighthouse, WebPageTest
- **Images**: Squoosh, Sharp, ImageMagick

### Related Files
- **Content Config**: `src/content/config.ts`
- **Blog Schema**: See `memory-bank/techContext.md`
- **Component Patterns**: See `memory-bank/techContext.md`

---

**Dependencies**: None
**Next Stories**: FEATURE-001 (Advanced Search), SEO-001 (Enhanced SEO Tracking)
````
