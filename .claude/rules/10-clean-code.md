# Règles Clean Code (JS/TS)

- SRP : 1 fichier/composant = 1 responsabilité.
- Fonctions ≤ 40 lignes, early returns, pas d'états cachés.
- Nommage explicite; éviter abréviations opaques.
- Éviter "god modules" → factoriser dans `src/lib`.
- Imports rdonnés (builtin/external → internal → parent/sibling/index).
- Fichiers ≤ 300 lignes (cible 150–200).
- Cas d'erreurs/branches critiques testés (Vitest).
