# Claude Context Commands

Commandes simples et robustes pour maintenir `CLAUDE.md` automatiquement synchronisé avec votre projet.

## 🎯 Commandes disponibles

### `/sync-context`
**Met à jour** CLAUDE.md avec l'état actuel du projet.
```bash
/sync-context
# ou via npm:
pnpm claude:sync
```

**Actions :**
- ✅ Analyse `package.json` pour les commandes
- ✅ Scan `src/` pour l'architecture  
- ✅ Détecte layouts, components, routes
- ✅ Préserve les sections manuelles
- ✅ Sauvegarde automatique avant modification

### `/check-context`
**Vérifie** si CLAUDE.md est synchronisé (sans modification).
```bash
/check-context
# ou via npm:
pnpm claude:check
```

**Informations affichées :**
- 📊 État du projet (nom, scripts, structure)
- 📄 Sections présentes dans CLAUDE.md
- 🆕 Fichiers modifiés depuis la dernière sync
- ✅/⚠️ Statut de synchronisation

## 🔧 Workflow recommandé

### Utilisation quotidienne
```bash
# Avant de travailler sur une feature
/check-context

# Après avoir ajouté des composants/pages
/sync-context
```

### Intégration git
```bash
# Pre-commit check (optionnel)
pnpm claude:check

# Après merge/pull important
pnpm claude:sync
```

## 📁 Structure des fichiers

```
.claude/
└── commands/
    ├── sync-context       # Script de synchronisation
    ├── check-context      # Script de vérification
    └── README.md         # Cette documentation
```

## ✨ Avantages vs scripts JavaScript

| Aspect | Bash Commands | Scripts JS |
|---|---|---|
| **Simplicité** | ✅ Très simple | 🔴 Complexe |
| **Fiabilité** | ✅ Robuste | 🟡 Fragile |
| **Maintenance** | ✅ Facile | 🔴 Difficile |
| **Performance** | ✅ Rapide | 🟡 Plus lent |
| **Debugging** | ✅ Transparent | 🔴 Opaque |
| **Windows** | ✅ Compatible | 🟡 Problèmes |

## 🔍 Sections automatisées

### Générées automatiquement :
- ✅ **Commands** - Depuis `package.json` scripts
- ✅ **Architecture** - Structure `src/` scannée
- ✅ **Layouts** - Fichiers `src/layouts/*.astro`
- ✅ **Components** - Arborescence `src/components/`
- ✅ **Routes** - Pages `src/pages/`
- ✅ **Configuration** - Dépendances clés

### Préservées manuellement :
- 🔒 **Development Best Practices** 
- 🔒 **Performance & UX**
- 🔒 Toute section entre `<!-- SECTION MANUELLE -->` et `<!-- FIN SECTION MANUELLE -->`

## 🚨 Résolution de problèmes

### "Command not found"
```bash
# Vérifier les permissions
ls -la .claude/commands/

# Rendre exécutable si nécessaire
chmod +x .claude/commands/*
```

### "CLAUDE.md corrompu"
```bash
# Restaurer depuis la sauvegarde automatique
cp CLAUDE.md.backup CLAUDE.md

# Ou régénérer complètement
/sync-context
```

### "Sections manuelles perdues"
Les sections entre `<!-- SECTION MANUELLE -->` et `<!-- FIN SECTION MANUELLE -->` sont automatiquement préservées. Si perdues :
```bash
# Restaurer depuis git
git checkout HEAD~1 -- CLAUDE.md
# Puis récupérer vos sections manuelles
```

## 💡 Personnalisation

### Modifier les descriptions
Éditez directement `.claude/commands/sync-context` :

```bash
# Ligne ~95 pour les layouts
case "$layout_name" in
    "YourLayout")
        echo "- \`YourLayout.astro\` - Votre description" >> "$TEMP_FILE"
        ;;
```

### Ajouter de nouvelles sections
Ajoutez à la fin du script avant les sections manuelles :

```bash
# Votre nouvelle section
echo "### Ma Section" >> "$TEMP_FILE"
echo "Contenu..." >> "$TEMP_FILE"
echo "" >> "$TEMP_FILE"
```

---

**Créé le** : $(date)  
**Système** : Maintenance automatique Claude context via bash commands  
**Objectif** : Simplicité, fiabilité, maintenabilité