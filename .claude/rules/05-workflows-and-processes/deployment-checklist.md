# Workflow — Deployment Checklist

Checklist complète pour déployer en production avec confiance et sécurité.

## Pré-déploiement

### 1. Validation du code
```bash
# Tests et qualité
echo "=== CODE VALIDATION ==="
pnpm quality              # TypeScript + Lint + Format
pnpm test                # Tests unitaires
pnpm build               # Build de production
pnpm preview             # Test du build local
```

**Checklist qualité :**
- [ ] Tous les tests passent ✅
- [ ] Aucune erreur TypeScript
- [ ] Aucune erreur de linting
- [ ] Code formaté correctement
- [ ] Build de production réussit
- [ ] Preview local fonctionne

### 2. Audit de sécurité
```bash
# Audit des dépendances
echo "=== SECURITY AUDIT ==="
pnpm audit --audit-level moderate
pnpm outdated | grep -E "major|minor"

# Vérification des secrets
echo "=== SECRETS CHECK ==="
grep -r -E "(password|secret|key|token)" src/ --exclude-dir=node_modules || echo "No secrets found"
```

**Checklist sécurité :**
- [ ] Aucune vulnérabilité critique ou haute
- [ ] Pas de secrets dans le code source
- [ ] Variables d'environnement configurées
- [ ] Permissions appropriées configurées

### 3. Performance et SEO
```bash
# Analyse de la taille du build
echo "=== BUILD ANALYSIS ==="
du -sh dist/
find dist -name "*.js" -exec du -h {} + | sort -hr | head -5
find dist -name "*.css" -exec du -h {} + | sort -hr | head -5
```

**Checklist performance :**
- [ ] Bundle size acceptable (<1MB total)
- [ ] Images optimisées (WebP, tailles appropriées)
- [ ] Méta tags SEO présents
- [ ] Sitemap généré
- [ ] RSS feed fonctionnel

### 4. Compatibilité navigateurs
```bash
# Vérifier les targets de build
echo "=== BROWSER SUPPORT ==="
grep -A 5 -B 5 "browserslist\|targets" package.json astro.config.mjs
```

**Checklist compatibilité :**
- [ ] Support navigateurs modernes (dernières 2 versions)
- [ ] Polyfills pour fonctionnalités critiques
- [ ] Tests manuels sur Chrome, Firefox, Safari
- [ ] Tests sur mobile (iOS Safari, Chrome Android)

## Déploiement

### 5. Configuration de production
```bash
# Variables d'environnement
echo "=== PRODUCTION CONFIG ==="
echo "NODE_ENV=production"
echo "ASTRO_OUTPUT=static"

# Configuration du serveur web
echo "=== SERVER CONFIG ==="
echo "Verify: SSL certificate, domain configuration, CDN setup"
```

**Checklist configuration :**
- [ ] Variables d'environnement de prod configurées
- [ ] URL de base correcte (site.url)
- [ ] Configuration HTTPS activée
- [ ] Certificats SSL valides
- [ ] CDN configuré (si applicable)

### 6. Déploiement automatisé
```bash
# Via GitHub Actions / CI/CD
echo "=== AUTOMATED DEPLOYMENT ==="
echo "Trigger: git push origin main"
echo "Process: Build → Test → Deploy → Verify"

# Ou déploiement manuel
echo "=== MANUAL DEPLOYMENT ==="
pnpm build
# Upload dist/ to production server
```

**Checklist déploiement :**
- [ ] Pipeline CI/CD fonctionne
- [ ] Build automatisé réussit
- [ ] Tests passent en CI
- [ ] Déploiement vers staging OK
- [ ] Validation sur environnement de staging

## Post-déploiement

### 7. Vérification fonctionnelle
```bash
# Health checks
echo "=== HEALTH CHECKS ==="
curl -f https://your-domain.com || echo "Site unreachable"
curl -f https://your-domain.com/sitemap.xml || echo "Sitemap missing"
curl -f https://your-domain.com/rss.xml || echo "RSS missing"
```

**Checklist fonctionnelle :**
- [ ] Site accessible publiquement
- [ ] Pages principales se chargent
- [ ] Navigation fonctionne
- [ ] Formulaires fonctionnent (si applicable)
- [ ] Recherche fonctionne (si applicable)

### 8. Tests de performance
```bash
# Tests de vitesse
echo "=== PERFORMANCE TESTS ==="
echo "Tools: Google PageSpeed Insights, GTmetrix, WebPageTest"
echo "Targets: LCP <2.5s, FID <100ms, CLS <0.1"
```

**Checklist performance :**
- [ ] Core Web Vitals dans les cibles
- [ ] Score Lighthouse >90 (Performance)
- [ ] Temps de chargement <3s (3G)
- [ ] Images se chargent correctement
- [ ] CSS et JS non bloquants

### 9. SEO et accessibilité
```bash
# Validation SEO
echo "=== SEO VALIDATION ==="
echo "Check: Meta tags, structured data, robots.txt"

# Accessibilité
echo "=== ACCESSIBILITY ==="
echo "Tools: aXe, WAVE, Lighthouse Accessibility"
```

**Checklist SEO/A11y :**
- [ ] Méta descriptions présentes
- [ ] Balises H1-H6 structurées
- [ ] Images avec attributs alt
- [ ] Contraste des couleurs suffisant (AA)
- [ ] Navigation clavier fonctionnelle

### 10. Monitoring et rollback
```bash
# Setup monitoring
echo "=== MONITORING SETUP ==="
echo "Analytics: Google Analytics, plausible, etc."
echo "Error tracking: Sentry, LogRocket, etc."
echo "Uptime monitoring: Pingdom, UptimeRobot, etc."
```

**Checklist monitoring :**
- [ ] Analytics configurées
- [ ] Monitoring d'erreurs actif
- [ ] Alertes de disponibilité configurées
- [ ] Plan de rollback préparé
- [ ] Backup des données critique

## Templates de validation

### Rapport de déploiement
```markdown
# Deployment Report - [DATE]

## Summary
- **Environment:** Production
- **Version:** [GIT_TAG/COMMIT]
- **Deploy Time:** [DURATION]
- **Status:** ✅ Success / ❌ Failed

## Pre-deployment Checks
- [x] Tests passed (X/Y)
- [x] Security audit clean
- [x] Performance validated
- [x] Browser compatibility tested

## Deployment Process
- [x] Build successful
- [x] Assets uploaded
- [x] DNS/CDN updated
- [x] SSL certificate valid

## Post-deployment Validation
- [x] Site accessible
- [x] Core functionality working
- [x] Performance metrics acceptable
- [x] SEO/Accessibility validated

## Metrics
- **Build Size:** XMB
- **Lighthouse Score:** X/100
- **Core Web Vitals:** LCP=Xs, FID=Xms, CLS=X
- **Load Time:** Xs (3G)

## Issues Found
[List any issues discovered and their resolution status]

## Rollback Plan
[If issues occur: steps to rollback to previous version]
```

### Checklist de validation finale
```bash
# Automated post-deploy checks
echo "=== POST-DEPLOY VALIDATION ==="

# Site health
curl -f $SITE_URL/health || echo "❌ Health check failed"

# Critical pages
critical_pages=(
  "/"
  "/blog"
  "/about"
  "/sitemap.xml"
  "/rss.xml"
)

for page in "${critical_pages[@]}"; do
  curl -f "$SITE_URL$page" > /dev/null && echo "✅ $page" || echo "❌ $page"
done

# Performance check
echo "🚀 Run Lighthouse audit on: $SITE_URL"
```

## Échec de déploiement

### Plan de rollback
```bash
# Rollback automatique
echo "=== ROLLBACK PROCEDURE ==="
echo "1. Identify last known good version"
echo "2. Restore from backup/previous deploy"
echo "3. Verify rollback successful"
echo "4. Investigate root cause"
echo "5. Fix issues in development"
echo "6. Re-deploy with fixes"
```

### Communication
- [ ] Équipe notifiée du problème
- [ ] Utilisateurs informés si nécessaire  
- [ ] Post-mortem planifié
- [ ] Documentation mise à jour

## Sortie attendue
- **Déploiement réussi** et validé
- **Site en production** fonctionnel
- **Monitoring actif** et alertes configurées
- **Documentation** de déploiement mise à jour
- **Métriques baseline** établies pour le suivi