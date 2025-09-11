# Commande — Deploy Check

Checklist complète de validation avant déploiement en production avec vérifications automatisées.

## Usage

```
/deploy-check [environment]
```

Environnements : `staging`, `production` (défaut). Utiliser avant tout déploiement critique.

## Actions

1. Valider le code : tests, TypeScript, linting, formatage et build production
2. Auditer la sécurité : vulnérabilités, secrets exposés, permissions
3. Analyser les performances : taille bundle, images optimisées, Core Web Vitals
4. Tester la compatibilité navigateurs et tests manuels multi-plateformes
5. Vérifier la configuration production (variables env, HTTPS, CDN)
6. Valider SEO et accessibilité (meta tags, structure, WCAG AA)
7. Effectuer health checks automatisés sur pages critiques
8. Générer rapport de déploiement avec métriques et plan de rollback

## Exemples

**Entrée :**

```
/deploy-check production
```

**Sortie attendue :**

```bash
=== DEPLOY CHECK REPORT ===

✅ Code Validation
- Tests: 45/45 passed
- TypeScript: No errors
- Build: 2.3MB total
- Lint: Clean

⚠️  Performance Warnings
- Bundle JS: 890KB (< 1MB ✓)
- Largest image: 245KB
- LCP: 2.1s ✓, FID: 95ms ✓, CLS: 0.08 ✓

✅ Security & SEO
- No vulnerabilities found
- All meta tags present
- Accessibility: 98/100

🚀 Ready for production deployment
```

## Notes

- Génère rapport détaillé avec métriques avant/après
- Plan de rollback automatique en cas d'échec
- Compatible avec workflows CI/CD existants
- Health checks automatisés post-déploiement
- Alertes configurables pour monitoring continu
