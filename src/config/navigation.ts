import type { NavigationConfig } from '../types/navigation';

export const navigationConfig: NavigationConfig = [
  {
    label: 'Home',
    href: '/',
    enabled: true
  },
  {
    label: 'Meilleures formations seo / business',
    href: '/meilleures-formations-seo-business',
    enabled: true,
    dynamicChildren: {
      collection: 'blog',
      filter: (post) => post.data.tags && post.data.tags.includes('avis-formation'),
      sort: (a, b) => a.data.title.localeCompare(b.data.title),
      transform: (post) => ({
        label: post.data.title,
        href: `/blog/${post.slug}`,
        enabled: true
      })
    }
  },
  {
    label: 'Blog',
    href: '/blog',
    enabled: true
  },
  {
    label: 'About',
    href: '/about',
    enabled: true
  },
  {
    label: 'Contact',
    href: '/contact',
    enabled: true // Exemple de lien désactivé
  }
];