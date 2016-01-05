---
layout: cours
title: Cours d'introduction
shorttitle: Cours 0
shorturl: git.io/vuGEG
codelang: tex
---

# Les fichiers texte

- C'est quoi un fichier (file [en]) texte ?
- C'est quoi un encodage (encoding [en]) ?
  + ASCII/ANSI (7/8 bits)
  + Latin-1 = ISO 8859-1 (Western) ~ Windows-1252
  + Unicode => UTF8 (avec BOM), UTF16, ...

# Programmation

- Au commencement était le fichier texte (pas vraiment)
- "Parse [en]" = "Analyse grammaticale"
- Compilation ou interprétation ...
- Le résultat + les messages d'erreur

# Langages à balises

- HTML : `<b>en gras</b>`{: class="html"}
- LaTeX : `\textbf{en gras}`
- Markdown : `**en gras**`{: class="markdown"}
- MediaWiki : `'''en gras'''`{: class="mediawiki"}
- ...des dizaines autres existent

# (La)TeX et HTML

## Similitudes
- Détermine la mise en page globale et locale du document
- Essaye de séparer le contenu des instructions d'affichage (.css/.sty)
- Les deux excellent dans leur domaine de prédilection
  + (La)TeX : affichage sur papier
  + HTML : affichage sur écrans
- Pas facile d'apprentissage
- Très bien documentés

## Différences
- compiler vs interpréter
- popularité
- difficulté de la programmation associée (javascript vs tex)

# Hello World !

- [HTML](http://dabblet.com/gist/6ac41cfbe336cb511be2)

  ~~~~~~
  <html>
    <head></head>
    <body>
      Hello world!
    </body>
  </html>
  ~~~~~~
  {: class="html"}

- [LaTeX](https://fr.sharelatex.com/project/54bb8a74ef302e673191ee38)
 
  ~~~~~~
  \documentclass{article}

  \begin{document}
    Hello world!
  \end{document}
  ~~~~~~

# (La)TeX : comment ça fonctionne

- Si le document (principal) est un fichier texte appelé _monfichier.tex_, on compile d'une des façons suivantes:  
_(en fonction du compilateur choisie)_
  - `xelatex monfichier.tex`{: class="code"}
  - `lualatex monfichier.tex`{: class="code"}
  - `pdflatex monfichier.tex`{: class="code"}

  et le résultat est un fichier _monfichier.pdf_ si tout se déroule bien.  
  //Sinon, les messages d'erreur en plus d'être affichés à l'écran se trouve dans le fichier _monfichier.log_.

- Démonstration ...

# (La)TeX : comment l'installer sur son ordinateur

- Une _distribution_ (La)TeX est un ensemble de programmes permettant de produire, à partir des textes sources, des documents finaux, le plus souvent des PDF. En général, une distribution est entre 100 Mo et 500 Mo.
- Il existe des _distributions_ différentes en fonctions du système d'opération. Les principales sont:
  * Linux: [TeXLive](http://fr.wikipedia.org/wiki/TeX_Live)
  * Mac OS X: [MacTeX](http://fr.wikipedia.org/wiki/MacTeX)
  * Windows: [MikTeX](http://fr.wikipedia.org/wiki/MikTeX)
- Mais de nos jours on peut s'en passer d'une telle installation ...

# LaTeX - l'édition en ligne

Essentiellement trois choix possibles:

- [ShareLaTeX.com](http://www.sharelatex.com)  
  ∞ projets privés, compilation correcte, très bonne documentation (en anglais), 1 seul collaborateur autorisé pour les projets privés, mais on peut éditer directement les projets publiques.
  {: class="smaller"}

- [Overleaf.com](http://www.overleaf.com/)  
  Presque pas de limitations dans le plan gratuit, mais compilation un peu lente, documentation pauvre et choix du modèle difficile.
  {: class="smaller"}

- [Papeeria.com](http://www.papeeria.com/)  
  1 projet privé + ∞ collaborateurs, compilation correcte, pas de documentation latex, presque pas de modèles
  {: class="smaller"}

Et GitHub dans tout ça ?

# Autre site utiles pour le LaTeX

- [Detexify](http://detexify.kirelabs.org)
- [formulasheet.com](http://formulasheet.com/#r\|ed)
- [mathurl](http://mathurl.com)
- [codecogs](http://www.codecogs.com/latex/eqneditor.php?lang=fr-fr)
- [Tables Generator](http://www.tablesgenerator.com/)

# LaTeX : Manuels

- [WikiBooks](http://fr.wikibooks.org/wiki/LaTeX)
- [ShareLaTeX](https://fr.sharelatex.com/learn)
- [Open Classrooms](http://openclassrooms.com/courses/redigez-des-documents-de-qualite-avec-latex?status=published)
- [Google "latex table des matières"](https://www.google.fr/search?q=latex+table+des+mati%C3%A8res)
- [YouTube](https://www.youtube.com/playlist?list=PLF5D1F10DAA072E4E)

# TeX & Co. l'histoire version courte

- 1977: Création par [Donald Knuth](http://fr.wikipedia.org/wiki/Donald_Knuth) de TeX (7 bits) et PlainTeX
- 1983: AMS-TeX & _LaTeX_ (créé par Leslie **La**mport)
- 1990: TeX 3.0 (8 bits)
- 1992: eTeX
- 1999: pdfTeX
- 2004: _XeLaTeX_, pdfLaTeX
- 2010: LuaLaTeX
- 2014: TeX est en version 3.14159265//_→ π_

# Conseils pratiques : vos adresses mail et mots de passes

- Il faut avoir au moins deux adresses perso
  +   Pour communiquer avec les humains (y compris l'administration)
  +   Pour donner à des sites lors des inscriptions
  +   Il est préférable d'avoir un troisième: "argent"
- Il faut avoir au moins deux adresses pro
  +   Un fournit par l'employeur (l'université)
  +   L'un constant au long de votre vie (à mettre sur CV)
- Comment retenir autant de mot de passes

# HTML : édition en ligne

Plusieurs possibilités, mais une seule est gratuite avec possibilité d'avoir plusieurs projets à ma connaissance.

- [Plnkr.co](http://plnkr.co/) (avec projets, compte GitHub)
- [codepen.io](http://codepen.io)
- [jsfiddle.net](http://jsfiddle.net/)
- [dabblet.com](http://dabblet.com/)
- [cssdeck.com](http://cssdeck.com/)
- [Mozilla Thimble](https://thimble.webmaker.org/fr/)
