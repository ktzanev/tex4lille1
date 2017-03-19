---
layout: cours
title: Cours HTML 3
shorttitle: HTML 3
shorturl: git.io/vaJVC
codelang: css
bodyclass: tex2jax_ignore
---


# C'est quoi un CDN ?

> Un _content delivery network (CDN)_ est constitué d'ordinateurs reliés en réseau à travers Internet et qui coopèrent afin de mettre à disposition du contenu ou des données à des utilisateurs.
> --- <cite>[Wikipedia](https://fr.wikipedia.org/wiki/Content_delivery_network)</cite>

Dans la pratique si on cherche une adresse url d'une bibliothèque JS ou d'un framework CSS on cherche dans un moteur de recherche « CDN ... », par exemple « [CDN MathJax](https://www.google.fr/search?q=CDN+MathJax) » ou « [CDN Bootstrap](https://www.google.fr/search?q=CDN+Bootstrap) ».

# MathJax

## C'est quoi MathJax ?

> MathJax est une bibliothèque logicielle JavaScript qui affiche les formules mathématiques dans des navigateurs web, en utilisant les balises de LaTeX ou de MathML.
> --- <cite>[Wikipedia](https://fr.wikipedia.org/wiki/MathJax)</cite>

MathJax est open-source sous licence Apache.

L'adresse du site web est [www.mathjax.org](http://www.mathjax.org).

## Comment utiliser MathJax ?

* En bas du `<body>` on met le code suivant

  ~~~~~~~
  <script type="text/javascript"
    src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
  </script>
  ~~~~~~~

* Par défaut les formules doivent être entourées par `\( ... \)`, `\[ ... \]` ou `$$ ... $$`. Si on souhaite utiliser des simples dollars en plus, il faut rajouter le code suivant:

  ~~~~~~~
  <script type="text/x-mathjax-config">
    MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
  </script>
  ~~~~~~~

* Puis on peut utiliser des formules LaTeX comme

  ~~~~~~~
  $ \sinh(x) = \sum \frac{x^{2k+1}}{(2k+1)!} $
  ~~~~~~~

  pour obtenir :

$\sinh(x) = \sum \frac{x^{2k+1}}{(2k+1)!}$
{:.tex2jax_process}

## Comment fonctionne MathJax ?

Par défaut le script MathJax parcourt toute la page à la recherche des textes délimités par `\(...\)`, `$$...$$` ... puis remplace ces textes par des commandes plus complexes pour afficher les formules. Il rajoute aussi un certain nombre de styles et de codes javascript dans la page.

Toute cette complexité a un prix : de la mémoire et du temps.

Si la page web est très longue, pour améliorer un peut les choses, il est souhaitable d'utiliser les classes `tex2jax_ignore` (dans la balise body) et `tex2jax_process` (dans les balises contenant des maths).

# Bootstrap

## C'est quoi Bootstrap ?

> _Bootstrap_ est une collection d'outils (_Framework d'interface_) utile à la création de sites et d'applications web.

Bootstrap est édité par Twitter ![Logo Twitter](assets/images/html3/twitter_logo.svg){:style="height:50px;width:50px;margin:0px;border:none;box-shadow:none;" }
et distribué sous licence libre MIT.

L'adresse est [getbootstrap.com](http://getbootstrap.com/)

## Comment utiliser Bootstrap ?

Pour un usage simple, il suffit d'inclure de fichier css à partir d'un cdn:

~~~~~~~
<link rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
~~~~~~~

Pour un usage plus poussé, il va falloir inclure aussi des javascript (en bas de la balise `<body>`) :

~~~~~~~
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
~~~~~~~

## La typographie

Bootstrap change le CSS par défaut et introduit beaucoup de classes css très utiles.

Par exemple `text-center`, `text-uppercase`
ou `list-inline` (à utiliser dans un `<ul>`).

[[exemple]](https://gist.run/?id=8b179b950e1adfdc40720e05f10a541b)
[+](http://codepen.io/ktzanev/pen/qEvyyX?editors=100)

Pour plus d'information voir [Typography (en anglais)](http://getbootstrap.com/css/#type).

## La grille de Bootstrap

Il s'agit d'une grille de 12 colonnes dans laquelle on positionne des éléments en choisissant leur largeur ... et tout ça en mettant des classes.

Par exemple:

~~~~~~~
<div class="row">
  <div class="col-md-4"> Largeur 4 colonnes </div>
  <div class="col-md-8"> Largeur 8 colonnes </div>
</div>
~~~~~~~

ces deux div vont être côte-à-côte sur un ordinateurs (largeur >= 992px), mais vont être l'un sous l'autre pour un écran de tablette ou téléphone.

[[exemple]](https://gist.run/?id=a9899fb681d8639c69e8ad7fa3907c39)
[+](http://codepen.io/ktzanev/pen/ZYPjOz?editors=110)

Pour plus d'information on peut consulter [cette page en français](http://creersonsiteweb.net/page-bootstrap-grille) ou [celle-ci](http://openclassrooms.com/courses/prenez-en-main-bootstrap/une-grille), ou [la documentation officielle en anglais](http://getbootstrap.com/css/#grid-options).

## Classes de visibilité

* `visible-xs-block` : pour afficher un élément seulement sur des écrans xs (<768px). On peut remplacer `xs` par `sm`, `md` et `lg`. Et à la place de `block` on peut mettre `inline` ou `inline-block`.
* `hidden-xs` : pour cacher un élément seulement sur des écrans xs. De même on peut mettre `sm`, `md` et `lg`.
* `hidden-print` pour cacher l'élément lors de l'impression

## Les icônes

Pour utiliser une [icône](http://getbootstrap.com/components/#glyphicons) il suffit de rajouter dans un `<span>` vide la classe `glyphicon` et la classe avec le nom de l'icône, par exemple `glyphicon-camera`.

[[exemple]](https://gist.run/?id=b6c90a7e1ce6c62a028e6ed95a9b9179)
[[+]](http://codepen.io/ktzanev/pen/YPgjpr?editors=110)

# Thèmes HTML5 (Bootstrap)

* [startbootstrap.com](http://startbootstrap.com)
* [scoopthemes.com](http://www.scoopthemes.com)
* [bootstraptaste.com](https://bootstraptaste.com)
* [templated.co](http://templated.co)
* [html5up.net](http://html5up.net)

{% include mathjax.html %}
