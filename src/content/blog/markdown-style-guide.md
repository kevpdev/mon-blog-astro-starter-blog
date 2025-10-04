---
title: 'Guide de style Markdown'
description: 'Voici un aperçu de la syntaxe Markdown de base que vous pouvez utiliser lors de la rédaction de contenu Markdown dans Astro.'
pubDate: 'Jun 19 2024'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

Voici un aperçu de la syntaxe Markdown de base que vous pouvez utiliser lors de la rédaction de contenu Markdown dans Astro.

## Titres

Les éléments HTML `<h1>` à `<h6>` suivants représentent six niveaux de titres de section. `<h1>` est le niveau de section le plus élevé tandis que `<h6>` est le plus bas.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraphe

Le développement web moderne nécessite une maîtrise des technologies fondamentales ainsi qu'une compréhension des meilleures pratiques. La création de contenu structuré et accessible est essentielle pour offrir une expérience utilisateur optimale. Les frameworks modernes facilitent cette tâche en proposant des outils performants et des conventions éprouvées.

L'évolution constante de l'écosystème web impose aux développeurs de rester informés des dernières tendances et innovations. Cette veille technologique permet d'adapter les projets aux besoins actuels et futurs.

## Images

### Syntaxe

```markdown
![Alt text](./full/or/relative/path/of/image)
```

### Résultat

![blog placeholder](../../assets/blog-placeholder-about.jpg)

## Citations

L'élément blockquote représente un contenu cité d'une autre source, éventuellement avec une citation qui doit être dans un élément `footer` ou `cite`, et éventuellement avec des modifications en ligne telles que des annotations et des abréviations.

### Citation sans attribution

#### Syntaxe

```markdown
> La créativité naît de la contrainte et meurt de la liberté.
> **Note** : vous pouvez utiliser la _syntaxe Markdown_ dans une citation.
```

#### Résultat

> La créativité naît de la contrainte et meurt de la liberté.
> **Note** : vous pouvez utiliser la _syntaxe Markdown_ dans une citation.

### Citation avec attribution

#### Syntaxe

```markdown
> Ne communiquez pas en partageant la mémoire, partagez la mémoire en communiquant.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Résultat

> Ne communiquez pas en partageant la mémoire, partagez la mémoire en communiquant.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: La citation ci-dessus est extraite de la [présentation](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike lors du Gopherfest, le 18 novembre 2015.

## Tableaux

### Syntaxe

```markdown
| Italique   | Gras     | Code   |
| ---------- | -------- | ------ |
| _italique_ | **gras** | `code` |
```

### Résultat

| Italique   | Gras     | Code   |
| ---------- | -------- | ------ |
| _italique_ | **gras** | `code` |

## Blocs de code

### Syntaxe

Nous pouvons utiliser 3 backticks ``` sur une nouvelle ligne et écrire un extrait de code puis fermer avec 3 backticks sur une nouvelle ligne. Pour mettre en évidence la syntaxe spécifique au langage, écrivez le nom du langage après les premiers 3 backticks, par exemple : html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

### Résultat

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## Types de listes

### Liste ordonnée

#### Syntaxe

```markdown
1. Premier élément
2. Deuxième élément
3. Troisième élément
```

#### Résultat

1. Premier élément
2. Deuxième élément
3. Troisième élément

### Liste non ordonnée

#### Syntaxe

```markdown
- Élément de liste
- Autre élément
- Et encore un autre élément
```

#### Résultat

- Élément de liste
- Autre élément
- Et encore un autre élément

### Liste imbriquée

#### Syntaxe

```markdown
- Fruits
  - Pomme
  - Orange
  - Banane
- Produits laitiers
  - Lait
  - Fromage
```

#### Résultat

- Fruits
  - Pomme
  - Orange
  - Banane
- Produits laitiers
  - Lait
  - Fromage

## Autres éléments — abbr, sub, sup, kbd, mark

### Syntaxe

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> est un format d'image bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Appuyez sur <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Suppr</kbd> pour terminer la session.

La plupart des <mark>salamandres</mark> sont nocturnes et chassent les insectes, vers et autres petites créatures.
```

### Résultat

<abbr title="Graphics Interchange Format">GIF</abbr> est un format d'image bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Appuyez sur <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Suppr</kbd> pour terminer la session.

La plupart des <mark>salamandres</mark> sont nocturnes et chassent les insectes, vers et autres petites créatures.
