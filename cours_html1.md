---
layout: cours
title: Cours HTML 1
shorttitle: HTML 1
shorturl: git.io/v2gjo
codelang: html
---

# Les langages du web

![Logos](assets/images/html1/html5css3js5.png)

## HTML5 + CSS3 + JS5 + SVG

- HTML5 est un langage à balises, qui fait partie d'une famille de langages dont les autres membres sont XML, SVG, MathML, ...!!
  Son support est un fichier texte avec extension `html` et au type MIME `text/html`.
- CSS3 est un langage de description de données structurées en arbre.!!
  Son support est un fichier texte avec extension `css` et au type MIME `text/css`. Il peut être aussi inclus directement dans une page web avec la balise `<style>` ou l'attribut `style="..."`.
- JS est un langage de programmation à part entière, créé à la base pour rendre les pages web  dynamiques en les modifiants.!!
  Son support est un fichier texte avec extension `js` et au type MIME `application/javascript`. Il peut être aussi inclus directement dans une page web avec la balise `<script>`.
- SVG est un langage à balises pour décrire des images vectorielles.!!
  Son support est un fichier texte avec extension `svg` et au type MIME `image/svg+xml`. Il peut être aussi inclus directement dans une page web avec la balise `<svg>`.

*[HTML]: Hypertext Markup Language
*[HTML5]: Hypertext Markup Language
*[XML]: Extensible Markup Language
*[SVG]: Scalable Vector Graphics
*[MathML]: Mathematical Markup Language
*[CSS]: Cascading Style Sheets
*[CSS3]: Cascading Style Sheets
*[JS]: JavaScript
*[JS5]: JavaScript

## Histoire (approximative!)

- 1991 : HTML (créé par [Tim Berners-Lee](http://fr.wikipedia.org/wiki/Tim_Berners-Lee))
- 1994 : HTML 2
- 1996 : CSS 1 + JavaScript 1
- 1997 : HTML 4
- 1998 : CSS 2
- 2000 : XHTML 1
- 2002 : Tableless Web Design
- 2005 : AJAX
- 2009 : HTML 5 + CSS 3 (en constante enrichissement depuis)
- 2010 : JS 5 (qui est en fait 1.8.2 ~ ECMAScript 5)
- 2015 : JS 6 ( ~ ECMAScript2015)

# HTML5

## Premier exemple

~~~~~~~
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <title>Exemple minimal</title>
  </head>
  <body>
    <!-- Un commentaire -->
    Bonjour le monde!
  </body>
</html>
~~~~~~~

Comme en LaTeX : plusieurs espaces consécutifs = 1 espace, et le passage à la ligne = 1 espace.

## L'arbre (DOM) d'un document HTML

~~~~~~~
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Alchemy for beginners</title>
    <script src="BlackMagic.js"></script>
  </head>
  <body>
    <h1>Chapter 1: Equipment</h1>
    <p>This is what an <em>alchemist's bottle</em> looks like:</p>
    <img src="StrangeBottle.jpg">
  </body>
</html>
~~~~~~~
{:style="float:left;font-size:.7em"}

![DOM Tree](assets/images/html1/dom_tree.png)
{:style="float:right;width:49%;;margin-top:-1em;margin-left:-100%;position:relative;z-index:2;"}

Pour visualiser l'arbre DOM : [Live DOM Viewer](http://software.hixie.ch/utilities/js/live-dom-viewer/)
{:style="clear: both;"}

## Comment créer des pages HTML ?

- Avec un éditeur de texte
  + simple : _gedit_ (Linux), _Notepad_ (Windows), _TextEdit_ (Mac)
  + performant : _Emacs_, _vi(m)_, _Notepad++_, _Atom_, _Sublime Text_, ...
  + spécialisé : _Brackets_, _Web Storm_, _LightTable_, ...
- Avec un logiciel WYSIWYG dédié (ce n'est plus à la mode) : _Adobe Dreamweaver_, _iWeb_, _Nvu_, _KompoZer_, ...
- En ligne :
  + [Plnkr.co](http://plnkr.co/)
  + [dabblet.com](http://dabblet.com/)
  + [codepen.io](http://codepen.io)
  + [jsfiddle.net](http://jsfiddle.net/)
  + [Mozilla Thimble](https://thimble.webmaker.org/fr/)
- À partir d'autres langages à balises, comme [markdown](https://markdown-it.github.io), [textile](http://borgar.github.io/textile-js/), [LaTeX](http://en.wikipedia.org/wiki/TeX4ht), ...
- On peut vérifier si le code HTML est correcte dans le [validateur de HTML](http://validator.w3.org).

# Les balises

- `<balise>...</balise>` : balise _non-void_ (peut contenir du texte et/ou d'autres éléments)
- `<balise>` ou `<balise/>` : pour une balise _void_ (ne peut pas contenir d'autres éléments)
- `<balise attribut>` ou `<balise attribut="quelque chose">` : une balise peut contenir 0, 1 ou plusieurs attributs qui spécifient ou changent son comportement.
- Pas de croisement : `<paul> <thom> </paul> </thom>` est interdit.
- Pas d'espace entre `<` et le nom de la balise, mais on peut avoir des espaces avant `>`. Par exemple `<paul >` est ok.
- Il est souhaitable d'écrire les balises en minuscules, à part pour `<!DOCTYPE>`.

## Balises particulières

- `<!--...-->` commentaire
- `<!DOCTYPE html>` première ligne obligatoire pour HTML5
- `<html>` c'est ici qu'il faut mettre le attribut `lang="fr"`
- `<head>` la partie contenant la « configuration » de la page.
- `<body>` la partie principale de la page

## Balises d'en-tête

- `<meta>` (void) permet de renseigner des informations sur le document HTML en fonction des attributs utilisées.!! Exemple:
  + `<meta charset="UTF-8">`
  + `<meta name="keywords" content="LaTeX, XeLaTeX, PDF">`
- `<title>` (non-void) Le titre de la page HTML.!! Exemple:
  + `<title>Cours HTML5</title>`

* * *

- `<link>` (void) Définit une relation (inclusion) avec un autre ressource. Utilisé dans 99% des cas pour inclure un fichier CSS (style).!! Exemple:
  + `<link rel="stylesheet" type="text/css" href="theme.css">`
- `<style>` (non-void) Pour ecrire le style CSS directement dans le HTML.!! Exemple:
  + `<style> body {color:red;} </style>`

* * *

- `<script>` (non-void) Permet d'inclure ou d'écrire du JavaScript.!! Exemple:
  + `<script src="MathJax.js"></script>`
  + `<script>alert('Au secours !')</script>`

## Balises fondamentales

- Balises de base
  + `<div>` la conteneur de base _block_ ([exemple](http://dabblet.com/gist/3e141d95513b27a4bbc5))
  + `<span>` la conteneur de base _inline_ ([exemple](http://dabblet.com/gist/e586030952be736189e7))
- Balises de liens
  + `<img>` pour inclure une image ([exemple](http://dabblet.com/gist/043e30ff1c328063f5f6))
  + `<a>` pour créer un lien ([exemple](http://dabblet.com/gist/59f53ff244a7c4982c2a))

## Balises pour structurer et formater un texte

- `<h1>` – `<h6>` les titres de niveaux 1 à 6 ([exemple](http://dabblet.com/gist/c5bfa781fd194db1dc8f))
- `<p>` un paragraphe ([exemple](http://dabblet.com/gist/0177f3cde7ffb2174ae1))
- `<br>` passage à la ligne (_void_) ([exemple](http://dabblet.com/gist/a86f0e04e41e090da387))
- `<hr>` ligne horizontale (_void_) ([exemple](http://dabblet.com/gist/e5c145cb3b3c773e5481))
- `<b>, <strong>` gras (important) ([exemple](http://dabblet.com/gist/5f975b8a92f83ecf614a))
- `<i>, <em>` italique (mise en valeur) ([exemple](http://dabblet.com/gist/f09a54294a3f274a5a5d))
- `<s>, <del>` barré (supprimé) ([exemple](http://dabblet.com/gist/70dfb1bd81eb92726a2b))
- `<u>, <ins>` souligné (inséré) ([exemple](http://dabblet.com/gist/11dcc9a5c7a4846bc5e2))
- `<mark>` marqué ([exemple](http://dabblet.com/gist/2d4a26b1c8887f0c56f8))
- `<small>` petit ([exemple](http://dabblet.com/gist/89dd36e9ab023ef2316d))
- `<sub>, <sup>` indice et exposant ([exemple](http://dabblet.com/gist/18c9d9b7764d2d76850c))

## Balises pour créer des listes

- `<ul>` liste non numérotée ([exemple](http://dabblet.com/gist/218cf243d7f641066514))
- `<ol>` liste numérotée ([exemple](http://dabblet.com/gist/6ff5feac49280b9dde46))
  + `<li>` élément d'une liste

* * *

- `<dl>` liste de définitions ([exemple](http://dabblet.com/gist/e4339f1e49810aa5632c))
  + `<dt>` terme à définir
  + `<dd>` la définition du terme

## Balises pour des textes spéciaux

- `<q>` entre guillemets
- `<blockquote>` partie en retrait
- `<cite>` référence de citation ([exemple](http://dabblet.com/gist/e50bd8db86a98f9fb362))

* * *

- `<pre>` partie <q>préformaté</q> ([exemple](http://dabblet.com/gist/a268c4b75e30dbba0d22))
- `<code>` code source ([exemple](http://dabblet.com/gist/b0f7cae2b782da1cd8fd))
- `<kbd>` touche de clavier
- `<var>` variable

## Balises sémantiques

- `<main>` partie principale de la page ([exemple](http://dabblet.com/gist/5dfe603bf3231c7672a0))
- `<article>` article
- `<section>` section
- `<aside>` à côté
- `<nav>` partie contenant plusieurs liens de navigation
- `<footer>` bas de page, de section, d'article, ...
- `<header>` en tête de page, de section, d'article, ...
- `<adress>` adresse
- `<time>` moment (heure et/ou date)

## Balises pour la création des tables

Il ne faut utiliser les tables que pour faire des tables, et non pour la mise en page !

- `<table>` table
  - `<thead>` l'en-tête
    - `<tr>` ligne d'en-tête
      - `<th>` titre de colonne
  - `<tfoot>` le bas de la table
    - `<tr>` ligne de bas
      - `<td>` cellule de bas
  - `<tbody>` corps de la table
    - `<tr>` ligne de la table
      - `<td>` cellule avec des données

([exemple](http://dabblet.com/gist/d54682f7a7715c731bfd))

Pour créer une table vous pouvez utiliser [www.tablesgenerator.com](http://www.tablesgenerator.com/html_tables).!!
Mais malheureusement il ne génère pas `<thead>`, `<tfoot>` et `<tbody>`.

# Les caractères spéciaux

- `&#946;` représente le caractère de code 946 en base 10 (β).
- `&#x3B2;` représente le caractère de code 3B2 en base 16 (β).
- `&beta;` représente le caractère _beta_ en HTML (β).

## quelques exemples

- `&amp;` = &
- `&lt;` et `&gt;` = < et >
- `&laquo;` et `&raquo;` = « et »
- `&dash;`, `&ndash;` et `&mdash;` = ‐, – et —
- `&nbsp;` = (espace insécable)
- `&euro;` = €
- `&copy;` = ©
- `&reg;` = ®
- ... pour une liste complète voir [w3.org](http://dev.w3.org/html5/html-author/charref)
