---
layout: cours
title: Cours HTML 4
shorttitle: HTML 4
shorturl: git.io/vaCqP
codelang: xml
---


# C'est quoi SVG ?

> Le _Scalable Vector Graphics_, ou SVG, est un format de données, basé sur XML, conçu pour décrire des ensembles de graphiques vectoriels.
> --- <cite>[Wikipedia](https://fr.wikipedia.org/wiki/Scalable_Vector_Graphics)</cite>

## Exemple de SVG

<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 -10 20 20"
        width="200" height="200">
  <g stroke="red" stroke-width="3">
    <circle cx="0" cy="0" r="8" fill="white" />
    <line x1="-5" y1="-5" x2="5" y2="5" />
  </g>
</svg>
{: style="float: right;"}

~~~~~~~
<?xml version='1.0'?>
<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 -10 20 20"
        width="200" height="200">
  <g stroke="red" stroke-width="3">
    <circle cx="0" cy="0" r="8" fill="white" />
    <line x1="-5" y1="-5" x2="5" y2="5" />
  </g>
</svg>
~~~~~~~

Attention :

* Comme SVG est basé sur XML, il est **sensible à la case** et il faut fermer les balises `< ... />`
* (0,0) est en haut à gauche (comme pour le HTML) et l'axe des y pointe vers le bas.

# Quelques commandes

Pour chaque commande SVG on va montrer son équivalent en TikZ.

Pour que cette équivalence fonctionne il faut que on applique à tikzpicture le style suivant `[yscale=-1]`.

## Ligne

~~~~~~~
<line stroke="red" stroke-width="2"
  x1="10" y1="10" x2="90" y2="70" />
~~~~~~~

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <line stroke="red" stroke-width="2"
    x1="10" y1="10" x2="90" y2="70" />
</svg>

[[GistRun]](https://gist.run/?id=11b6dcfe4a0a1105ba548b58b444fbbd)

~~~~~~~
\path[draw=red, line width=2cm]
  (10,10) -- (90,70);
~~~~~~~
{:.tex}



## Polygone

~~~~~~~
<polygon fill="yellow" stroke="blue" stroke-width="2"
  points="15,90 30,50 30,10 70,10 70,50 85,90" />
~~~~~~~

Les virgules sont optionnelles.

Il existe aussi `polyline` qui ne ferme pas automatiquement la courbe.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <polygon fill="yellow" stroke="blue" stroke-width="2"
    points="15,90 30,50 30,10 70,10 70,50 85,90" />
</svg>

[[GistRun]](https://gist.run/?id=757b031952041390a78d7da856cb1a5a)

~~~~~~~
\path[fill=yellow, draw=blue, line width=2cm]
  plot coordinates
    {(15,90) (30,50) (30,10) (70,10) (70,50) (85,90)} -- cycle;
~~~~~~~
{:.tex}

## Rectangle

~~~~~~~
<rect stroke="black" fill="magenta" fill-opacity=".7"
  x="5" y="25" rx="10" ry="10" width="90" height="50"/>
~~~~~~~
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <rect stroke="black" fill="magenta" fill-opacity=".7"
    x="5" y="25" rx="10" ry="10" width="90" height="50"/>
</svg>

[[GistRun]](https://gist.run/?id=918c87d7e6b9bbaa83964229fc63b6b7)

~~~~~~~
\path[draw=black, fill=magenta, fill opacity=.7, rounded corners=10cm]
  (5,25) rectangle +(90,50);
~~~~~~~
{:.tex}

## Cercle et ellipse

~~~~~~~
<circle fill="magenta"
  cx="0" cy="0" r="30" />
<ellipse fill="none" stroke="yellow" transform="rotate(30)"
  cx="0" cy="0" rx="15" ry="45" />
~~~~~~~
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="200" height="200">
  <circle fill="magenta"
    cx="0" cy="0" r="30" />
  <ellipse fill="none" stroke="yellow" transform="rotate(30)"
    cx="0" cy="0" rx="15" ry="45" />
</svg>

[[GistRun]](https://gist.run/?id=908731b7b4249646cf176e3085c8b1ec)

~~~~~~~
\path[fill=magenta]
  (0,0) circle(30);
\path[draw=yellow, rotate=30]
  (0,0) ellipse[x radius=15,y radius=45];
~~~~~~~
{:.tex}

## Chemin générique

~~~~~~~
<path fill="none" stroke="red"
  d="M5,5 h15 v15 l35,35 C 95,55 95,95 55,95 z" />
~~~~~~~
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <path fill="none" stroke="red"
    d="M5,5 h15 v15 l35,35 C 95,55 95,95 55,95 z" />
</svg>

* Les lettre majuscules sont pour les coordonnées absolues, et les minuscules pour les coordonnées relatives.
* `M` = Move, `H` = Horizontal line, `V` = Vertical line, `L` = Line, `C` = Cubic Bézier, `Q` = Quadratic Bézier, `A` = Arc, `Z` = close path


[[GistRun]](https://gist.run/?id=f81dca3163fd738ef2c489a940823054)

~~~~~~~
\path[draw=red] (5,5) -- ++(15,0)  -- ++(0,15) -- ++(35,35)
    .. controls (95,55) and (95,95) .. (55,95) -- cycle;
~~~~~~~
{:.tex}

En utilisant `\usetikzlibrary{svg.path}` on peut tracer directement

~~~~~~~
\draw[red] svg {M5,5 h15 v15 l35,35 C 95,55 95,95 55,95 z};
~~~~~~~
{:.tex}

## Texte

~~~~~~~
<text x="10" y="5" fill="ForestGreen">Voilà !</text>
~~~~~~~

Pas de passage à la ligne automatique.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 25 " width="400" height="100">
  <text x="10" y="20" fill="ForestGreen">Voilà !</text>
</svg>

[[GistRun]](https://gist.run/?id=328bef87915e66c038a7cafbd8e1de52)

~~~~~~~
\node[ForestGreen, above right] at (10,20) {Voilà !};
~~~~~~~
{:.tex}

## Regroupement

~~~~~~~
<g fill="green" fill-opacity=".49">
  <circle cx="30" cy="30" r="21"/>
  <rect x="30" y="30" width="70" height="40"/>
</g>
~~~~~~~
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <g fill="green" fill-opacity=".49">
    <circle cx="30" cy="30" r="21"/>
    <rect x="30" y="30" width="70" height="40"/>
  </g>
</svg>

[[GistRun]](https://gist.run/?id=431a7944e48bcf0faae92f5c3a4c3b43)

~~~~~~~
\begin{scope}[fill=green, fill opacity=.49]
  \fill (30,30) circle(21);
  \fill (30,30) rectangle +(70,40);
\end{scope}
~~~~~~~
{:.tex}

# Comment utiliser le SVG ?

## Avec img

~~~~~~~
<img src="anonymous.svg" width="100" height="100">
<img src="anonymous.svg" width="200" height="200">
<img src="anonymous.svg" width="100" height="200">
~~~~~~~


![Anonymous](assets/images/html4/anonymous.svg){:height="100px" width="100px"} ![Anonymous](assets/images/html4/anonymous.svg){:height="200px" width="200px"} ![Anonymous](assets/images/html4/anonymous.svg){:height="100px" width="200px"}

[[GistRun]](https://gist.run/?id=770faf461fa23a5f7e8649691f89c025)

## Comme fond

<style>
  .svgbkgd{
    background: url(assets/images/html4/cochon.svg);
    background-size: 100px 100px;
  }
</style>
<div class="svgbkgd"
    style="
      height:300px;
      width:300px;
      display:inline-block">
</div>

~~~~~~~
<style>
  .svgbkgd {
    background: url(cochon.svg);
    background-size: 100px 100px;
  }
</style>
~~~~~~~

[[GistRun]](https://gist.run/?id=e9e57f9d9f16d1cefe1daff780d28cd9)

## Directement dans le HTML5

<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -150 300 400" width="300" height="400" >
  <g fill="none" stroke-width="3">
    <polygon points="30,30 200,100 100,200" stroke="red"/>
    <circle cx="100" cy ="100" r="100" stroke="blue"/>
  </g>

  <g fill="green">
    <circle cx="30" cy ="30" r="3" />
    <circle cx="200" cy ="100" r="3" />
    <circle cx="100" cy ="200" r="3" />

    <text x="20" y="15">A</text>
    <text x="205" y="105">B</text>
    <text x="95" y="230">C</text>
   </g>
</svg>
{:style="width:28%;display:inline-block;"}

~~~~~~~
<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="-50 -150 300 400"
     width="300" height="400">
  <g fill="none" stroke-width="3">
    <polygon points="30,30 200,100 100,200" stroke="red"/>
    <circle cx="100" cy ="100" r="100" stroke="blue"/>
  </g>

  <g fill="green">
    <circle cx="30" cy ="30" r="3" />
    <circle cx="200" cy ="100" r="3" />
    <circle cx="100" cy ="200" r="3" />

    <text x="20" y="15">A</text>
    <text x="205" y="105">B</text>
    <text x="95" y="230">C</text>
   </g>
</svg>
~~~~~~~
{:style="width:70%;display:inline-block;"}

[[GistRun]](https://gist.run/?id=a8af296e19913d4ad0c55a9f4b1a000b)

# Le système de coordonnées de SVG

* Le SVG est dessiné sur un _canvas_ infinie.
* Une fenêtre de référence est définie avec l'attribue
    `viewBox="x y width height"` de la balise `svg`.
* La taille par défaut de cette fenêtre est définie avec les attribue `width` et `height` de la balise `svg`. Pour vous éviter des mauvaises surprises il faut que ces deux valeurs ont le même rapport que la taille de la fenêtre de référence. Par exemple:

  ~~~~~~~
  <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 15 100 300"
      width="10cm" height="30cm" >
  ~~~~~~~

* On peut modifier, lors de l'utilisation du SVG, la taille de cette fenêtre, par exemple avec `<img ... width=".." height="..">`.
  Pour approfondir ces questions, il faut voir les attribues [preserveAspectRatio](http://sarasoueidan.com/demos/interactive-svg-coordinate-system/index.html) et [transform](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Transformations).

# Comment créer du SVG ?

## Avec un logiciel

* **Avec tout éditeur de texte :** Ce n'est pas le plus pratique, mais c'est bien utile pour pouvoir faire des petites corrections. Et c'est comme ça qu'on l'intègre directement dans le code HTML.
* **[InkScape](https://inkscape.org) :** est un logiciel libre spécialement dédié à l'édition des SVG. Peut importer aussi de PDF et exporter en TikZ (avec un plugin). Les fichier SVG par défaut ne sont pas optimisés, il est préférable de les enregistrer avec « Optimized SVG ». _(L'équivalent payant est Adobe Illustrator.)_
* **[svg-edit](https://svg-edit.github.io/svgedit/releases/svg-edit-2.8.1/svg-editor.html) :** est un éditeur en ligne. Moins performant que InkScape mais peut être utile si on ne dispose pas de InkScape.
* **[GeoGebra](https://www.geogebra.org) :** certaines versions (mais pas toutes) peuvent exporter en SVG.

Aucun de ces éditeur ne permet de produire des SVG avec des formules mathématiques à l'intérieur (peut-être GeoGebra un peu).

## Conversion

* **A partir d'un pdf.** On peut utiliser cette méthode pour créer des figures avec des formules mathématiques en utilisant par exemple TikZ.
  * Avec le logiciel libre [pdf2svg](http://www.cityinthesky.co.uk/opensource/pdf2svg/).
  * Avec InkScape. Pour que les formules mathématiques soient correctement transformées, il faut choisir la conversion avec Poppler et la transformation des polices en courbes.
* **Vers pdf.** Encore une fois InkScape fait du très bon travail. On peut ainsi importer des figures créées à la base avec SVG dans des documents LaTeX.
* **A partir d'un dvi.** Le logiciel libre qui permet de faire ça est [dvisvgm](http://dvisvgm.sourceforge.net/). Pour préserver les formules mathématiques il faut utiliser l'option `-n` qui transforme les polices en courbes.

## Optimisation

Malheureusement tous les logiciels produisent des SVG pas ou peu optimisés.

Heureusement il y a des outilles d'optimisation très performants et gratuits, comme [SVGO](https://jakearchibald.github.io/svgomg/) (ceci est la version en ligne).

SVGO peut être aussi installé localement. Les codes sont disponibles sur [GitHub](https://github.com/svg/svgo).

# SVG et CSS

On peut modifier tous les attributs SVG dit de _présentation_ avec du CSS. Tels sont par exemple `fill`, `stroke`, `fill-opacity` ...

L'utilisation de css dans un fichier SVG (qui est un fichier XML) est un peu différent qu'en HTML (et plus compliqué). On peut voir par exemple [cette page](http://tutorials.jenkov.com/svg/svg-and-css.html).

Par contre pour styler un SVG imbriqué directement dans une page HTML, c'est très simple : on le faire comme pour les autres éléments de la page. On peut même utiliser des pseudo classes comme `:hover`

[[GistRun](https://gist.run/?id=6b665e685610711effcf97138fa3032b)].
