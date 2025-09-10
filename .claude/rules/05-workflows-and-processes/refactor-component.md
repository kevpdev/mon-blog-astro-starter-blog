# Workflow — Refactor ciblé

Processus systématique pour refactoriser des composants existants en améliorant la maintenabilité, la testabilité et la performance.

## Objectifs
- Réduire la complexité cyclomatique
- Extraire la logique métier dans `src/lib` ou `src/utils`
- Ajouter des types TypeScript explicites
- Créer des tests unitaires avec Vitest
- Améliorer la réutilisabilité

## Étapes détaillées

### 1. Analyse du composant cible
```bash
# Identifier le composant à refactoriser
echo "Composant: [COMPONENT_PATH]"

# Analyser sa complexité
wc -l [COMPONENT_PATH]
grep -c "if\|switch\|for\|while" [COMPONENT_PATH]

# Lister ses dépendances
grep -E "^import|from" [COMPONENT_PATH]
```

### 2. Audit de qualité pré-refactoring
```bash
# Exécuter les tests existants
pnpm test [COMPONENT_NAME] || echo "Pas de tests existants"

# Vérifier le typage
pnpm typecheck

# Linter le composant
pnpm lint [COMPONENT_PATH]
```

### 3. Plan de refactoring
**Checklist d'analyse:**
- [ ] Identifier les responsabilités multiples
- [ ] Repérer la logique métier extractible
- [ ] Définir les interfaces TypeScript manquantes
- [ ] Planifier la décomposition en sous-composants
- [ ] Évaluer les props et leur validation

### 4. Extraction de la logique métier
```bash
# Créer le fichier utilitaire
mkdir -p src/lib
touch src/lib/[COMPONENT_NAME]-logic.ts

# Template de base
cat > src/lib/[COMPONENT_NAME]-logic.ts << 'EOF'
/**
 * Logique métier pour [COMPONENT_NAME]
 */

export interface [ComponentName]Config {
  // Définir les types
}

export interface [ComponentName]State {
  // Définir l'état
}

export function [functionName](config: [ComponentName]Config): [ComponentName]State {
  // Implémenter la logique
}

export function [validationFunction](input: unknown): input is [ComponentName]Config {
  // Validation des types runtime
  return typeof input === 'object' && input !== null;
}
EOF
```

### 5. Refactoring du composant
**Étapes de transformation:**
1. **Extraire la logique** vers `src/lib/`
2. **Définir les interfaces** TypeScript
3. **Simplifier le template** Astro
4. **Optimiser les props** et slots
5. **Ajouter la documentation** JSDoc

### 6. Tests unitaires
```bash
# Créer le fichier de test
mkdir -p src/lib/__tests__
touch src/lib/__tests__/[COMPONENT_NAME]-logic.test.ts

# Template de test Vitest
cat > src/lib/__tests__/[COMPONENT_NAME]-logic.test.ts << 'EOF'
import { describe, it, expect } from 'vitest';
import { [functionName], [validationFunction] } from '../[COMPONENT_NAME]-logic';

describe('[ComponentName] Logic', () => {
  describe('[functionName]', () => {
    it('should handle valid input', () => {
      // Test case
    });
    
    it('should handle edge cases', () => {
      // Test edge cases
    });
  });
  
  describe('[validationFunction]', () => {
    it('should validate correct input', () => {
      // Validation tests
    });
  });
});
EOF
```

### 7. Validation post-refactoring
```bash
# Exécuter tous les tests
pnpm test

# Vérifier le typage
pnpm typecheck

# Linter le code
pnpm lint

# Vérifier la qualité globale
pnpm quality

# Test de build
pnpm build
```

### 8. Documentation des changements

**Template de documentation:**
```markdown
## Refactoring [ComponentName]

### Changements apportés
- [ ] Extraction de [X] fonctions vers `src/lib/[component]-logic.ts`
- [ ] Ajout de [Y] interfaces TypeScript
- [ ] Simplification du template de [Z] lignes à [W] lignes
- [ ] Création de [N] tests unitaires
- [ ] Amélioration de la réutilisabilité

### Impact
- **Performance:** [description]
- **Maintenabilité:** [description] 
- **Testabilité:** [description]

### Tests
- Couverture: [X]%
- Tests passants: [Y]/[Z]
```

## Checklist de validation finale
- [ ] Logique métier extraite et testée
- [ ] Types TypeScript explicites ajoutés
- [ ] Tests unitaires créés et passants
- [ ] Composant simplifié et optimisé
- [ ] Documentation mise à jour
- [ ] Build et qualité OK
- [ ] Pas de régression fonctionnelle

## Sortie attendue
- **Diff du refactoring** avec explications
- **Tests unitaires** couvrant la logique
- **Documentation** des choix techniques
- **Métriques d'amélioration** (complexité, lignes, etc.)
