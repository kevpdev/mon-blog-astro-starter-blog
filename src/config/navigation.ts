import type { NavigationConfig } from '../types/navigation';

// Utilise les liens communs définis dans site.ts
export const navigationConfig: NavigationConfig = [
  {
    label: 'Accueil',
    href: '/',
    enabled: true,
  },
  {
    label: 'À propos',
    href: '/about',
    enabled: true,
  },
  {
    label: 'Services',
    href: '/services',
    enabled: true,
  },
  {
    label: 'Blog',
    href: '/blog',
    enabled: true,
  },
  {
    label: 'Contact',
    href: '/contact',
    enabled: true,
  },
];
