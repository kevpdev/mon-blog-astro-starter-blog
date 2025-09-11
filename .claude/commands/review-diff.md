# Commande — Revue de diff

Analyse les changements git et génère une revue de code structurée prête pour PR.

## Usage

```
/review-diff [branch]
```

Utiliser avant de créer une PR ou pour revue de code interne.

## Actions

1. Analyser le diff git (staged ou branche spécifiée)
2. Identifier les bloquants: sécurité, accessibilité, performance
3. Détecter la dette technique: duplication, fonctions longues, naming
4. Générer suggestions concrètes avec snippets
5. Vérifier couverture tests et cas limites
6. Produire message court prêt pour PR

## Exemples

**Entrée :**

```
git diff main..feature-branch
```

**Sortie attendue :**

```markdown
## ❗ Bloquants

- Vulnérabilité XSS ligne 42

## 📈 Optimisations

- Duplication dans utils.ts (extraire fonction)
- Test manquant pour cas d'échec API
```

## Notes

- Focus sur l'actionnable et mesurable
- Utilise les standards qualité du projet
- Format adapté aux commentaires GitHub/GitLab
