# Commande — Commit and push with message input "your commit message"

Commande rapide pour commit et push avec message court passé en paramètre.

## Usage

```
/commit-push-m "your commit message"
```

## Actions

1. Ajoute tous les fichiers modifiés
2. Affiche un diff des changements
3. Crée un commit avec SEULEMENT le message fourni en paramètre sans emote. Tu dois EVITER d'ajouter des messages générés (ex:"Generated with [Claude Code]....")
4. Push vers le remote

## Message de commit

## Exemples d'utilisation

- `/commit-push-m "fix: resolve navigation bug"`
- `/commit-push-m "feat: add new blog component"`
- `/commit-push-m "refactor: improve styling system"`
