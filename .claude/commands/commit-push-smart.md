# Commande — Commit and Push Smart

Commit et push intelligents avec message automatique ou personnalisé selon le contexte.

## Usage

```
/commit-push-smart [message optionnel]
```

Utiliser pour commit rapide avec ou sans message personnalisé.

## Actions

1. Analyser les fichiers modifiés et staged
2. Afficher un diff des changements pour validation
3. Si message fourni : utiliser tel quel sans modification
4. Si pas de message : générer automatiquement un message descriptif (max 50 chars)
5. Créer le commit avec le message choisi
6. Demander confirmation avant push
7. Push vers le remote

## Exemples

**Entrée avec message :**

```
/commit-push-smart "fix: resolve navigation bug"
```

**Sortie attendue :**

```bash
git add .
git diff --cached
git commit -m "fix: resolve navigation bug"
git push
```

**Entrée sans message :**

```
/commit-push-smart
```

**Sortie attendue :**

```bash
git add .
git diff --cached
# Analyse des changements...
git commit -m "Update navigation and footer components"
git push
```

## Notes

- Si message fourni : utilise EXACTEMENT le message (pas de génération)
- Si pas de message : génère automatiquement basé sur les fichiers modifiés
- Évite les ajouts comme "Generated with Claude Code" si message fourni
- Respecte les conventions de commit du projet
- Demande confirmation avant chaque étape critique
