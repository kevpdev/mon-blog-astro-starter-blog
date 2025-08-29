import type { FooterConfig } from '../types/navigation';
import { socialLinksConfig } from './social';

export const footerConfig: FooterConfig = {
  links: [
    {
      label: 'À propos',
      href: '/about',
      enabled: true
    },
    {
      label: 'Mentions légales',
      href: '/mentions-legales',
      enabled: true
    },
    {
      label: 'Politique de confidentialité',
      href: '/politique-confidentialite',
      enabled: true
    },
    {
      label: 'Conditions d\'utilisation',
      href: '/conditions-utilisation',
      enabled: true
    },
    {
      label: 'Contact',
      href: '/contact',
      enabled: true
    },
    {
      label: 'Plan du site',
      href: '/sitemap',
      enabled: false // Exemple de lien désactivé
    }
  ],
  social: {
    enabled: true,
    links: socialLinksConfig,
    size: 'medium'
  },
  copyright: {
    enabled: true,
    text: 'Tous droits réservés.',
    year: new Date().getFullYear(),
    companyName: 'Mon Blog'
  }
};