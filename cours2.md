---
layout: cours
title: LaTeX - Cours 1
shorttitle: Cours 1
shorturl: git.io/vuZkr
codelang: tex
---

# Le préambule standard

Exemple dans le document [ModelXeLaTeX.tex](https://ktzanev.github.io/tex4lille1/Exemples/ModelXeLaTeX.tex).

- `\documentclass[11pt]{report}` type de document avec taille de police par défaut
- `\usepackage[a4paper]{geometry}` pour la taille de la page, les marges, ...
- `\usepackage{mathtools,amssymb,bm,amsthm}` pour élargir les possibilités en math
- `\usepackage{fontspec}` pour le bon encodage des PDF
- `\usepackage[francais]{babel}` pour franciser LaTeX
- `\usepackage{xcolor}` pour pouvoir utiliser des couleurs
- `\usepackage{graphicx}` pour pouvoir inclure des graphiques
- `\usepackage[pdfencoding=auto]{hyperref}` pour les liens

# Les caractères spéciaux

## Réservés par (La)TeX

- `%`   : commentaire (pour l'imprimer `\%`)
- `$`   : mode math (pour l'imprimer `\$`)
- `&`   : allignement (pour l'imprimer `\&`)
- `_`   : indice (pour l'imprimer `\_`)
- `^`   : puissance (pour l'imprimer `\^`)
- `~`   : espace insecable (pour l'imprimer `\~`)
- `{ }` : début et fin de bloque (pour l'imprimer `\{` et `\}`)
- `#`   : argument de macro (pour l'imprimer `\#`)
- `\`   : spécial (pour l'imprimer `\textbackslash, $\backslash$, $\setminus$, \symbol{92}`)

## Symboles particuliers

- Accents, pas besoin avec unicode, mais pour info :  
  `\'e` <code>\`e</code> `\^e` `\"e` `\~e` `\c{c}`
- les tirés :  
  `$-$` (moins), `-` (césure), `--` (diapason), `---` (dialogue)
- les points de suspension :  
  `\dots`, `$\ldots$`, `$\cdots$`
- ligne horizontale :  
  `\rule{\linewidth}{0.5mm}`

# Les éspaces

## Les caractères d'espace

- espace : au début de ligne, consecutif, en fin de ligne, forcé `\` , en mode math `$xy$`
- espace insecable : `~`
- tabulation
- passage à la ligne : un, deux, après `%`, `\newline`, `\\`, `\\*`

## Les espaces horizontaux

- `\hspace{...}, \hspace*{...}` par exemple `\hspace*{1cm}`
- `\enskip` = `\hspace{.5em}`
- `\quad` = `\hspace{1em}`
- `\qquad` = `\hspace{2em}`
- `\,` espace très fin = 3/18 em ~ 0.17 em
- `\:` (mode math) espace fin = 4/18 em ~ 0.22 em
- `\;` (mode math) espace moyen = 5/18 em ~ 0.28 em
- `\!` (mode math) espace très fin negatif = -3/18 em ~ -0.17 em
- `\hfill` identique à `\hspace{\fill}`
- `\hrulefill` pour _____ et `\dotfill` pour .....
- `\indent` et `\noindent`

## Les espaces verticaux

- `\\[...]`, `\\*[...]` comme `\\[1ex]` ou `\\*[\baselineskip]`
- `\vspace{...}` et `\vspace*{...}`
- `\smallskip`, `\medskip` and `\bigskip`
- `\vfill` identique à `\vspace{\fill}`
- `\linespread` espace entre les lignes. Exemple: `\linespread{1.5}`
- `\parskip`. Exemple : `\setlength{\parskip}{1em}`
- Il y a aussi le package `setspace`.

## Les changements de page

- `\newpage`
- `\clearpage`
- `\cleardoublepage` il faut `[twoside]` dans `\documentclass`

# Les alignements

- Par défaut : justifié
- À droite

  ~~~~~~
  \begin{flushright}
    Texte aligné à droite
  \end{flushright}
  ~~~~~~
  {: class="tex"}  

- À gauche

  ~~~~~~
  \begin{flushleft}
    Texte aligné à gauche
  \end{flushleft}
  ~~~~~~
  {: class="tex"}  

- Centré

  ~~~~~~
  \begin{center}
    Texte au centre
  \end{center}
  ~~~~~~
  {: class="tex"}  

- `\usepackage{ragged2e}` : (voir les options) pour tout le document

# Polices

## Poids, couleur, ...

- `\textbf{gras}`, `\textmd{moyen (pas gras)}`
- `\textit{italique}`, `\textsl{penché}`, `\emph{ça dépend}`, `\textup{droit}`
- `\textsf{sans serif}`, `\texttt{machine à ecrire}`, `\textsc{PETITE CAPITALES}`, `\textrm{par défaut}`
- `\textnormal{tout normale}`
- `\underline{souligné}`
- `\textcolor{red}{en rouge}` (il faut la bibliothèque xcolor)
- `\colorbox{red}{sur fond rouge}` (il faut la bibliothèque xcolor)

## Tailles

- Tailles (standards) :

  `\tiny` minuscule, `\scriptsize` très petit, `\footnotesize` assez petit, `\small` petit, `\normalsize` normal, `\large` grand, `\Large` plus grand, `\LARGE` très grand, `\huge` énorme, `\Huge` géant  

  par exemple `{\Large Titre}`

- Taille arbitraire : `{\fontsize{3cm}{4cm}\selectfont C'est très grand!}`
- Choix de la police ...
