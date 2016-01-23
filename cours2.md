---
layout: cours
title: Cours 2 - (Xe)LaTeX
shorttitle: Cours 2
shorturl: git.io/vuZkr
codelang: tex
---

# Modèles

## Le préambule standard

Exemple dans le document _ModelXeLaTeX.tex_ [ ](exemple://ModeleXeLaTeX.tex).

- `\documentclass[11pt]{report}` type de document avec taille de police par défaut
- `\usepackage[a4paper]{geometry}` pour la taille de la page, les marges, ...
- `\usepackage{mathtools,amssymb,bm,amsthm}` pour élargir les possibilités en math
- `\usepackage{fontspec}` pour le bon encodage des PDF
- `\usepackage[francais]{babel}` pour franciser LaTeX
- `\usepackage{xcolor}` pour pouvoir utiliser des couleurs
- `\usepackage{graphicx}` pour pouvoir inclure des graphiques
- `\usepackage[pdfencoding=auto]{hyperref}` pour les liens

## Modèle pour les images

- Pour tikz [ ](gist://be42e58a52337653749e/ModelTikZ.tex)

  ~~~~~~
  \documentclass[tikz,border=7pt]{standalone}
  \begin{document}
    \begin{tikz}
      \fill[red] (0,0) circle (1);
    \end{tikz}
  \end{document}
  ~~~~~~
  

- Pour PSTricks [ ](gist://a7600e1f567a6b13ff36/ModelPSTricks.tex)

  ~~~~~~
  \documentclass[pstricks,border=7pt]{standalone}
  \begin{document}
    \begin{pspicture}(-1,-1)(1,1)
      \pscircle(0,0){1}
    \end{pspicture}
  \end{document}
  ~~~~~~

Avec ces modèles qui utilisent la classe _standalone_ on crée des images au format _PDF_ qu'on peut importer après dans le document principal.

## Organisation des fichiers pour le mémoire « explorations »

~~~~~~
├─ memoire.tex
└── images
    ├─ image1.tex
    ├─ image1.pdf
    ⋮
    ├─ imageN.tex
    ├─ imageN.pdf
    ├─ photo1.jpg
    ├─ photo2.jpg
    ⋮
~~~~~~

Vous pouvez dupliquer dans ShareLaTeX [ce projet](https://fr.sharelatex.com/project/56938555de5631c80daec02d?r=3eb5cc58&rm=d&rs=b).

## Organisation des fichiers pour le mémoire ZUPdeCO

~~~~~~
├─ memoire.tex
├─ fiche1.tex
├─ fiche2.tex
└── images
    ├─ image1.tex
    ├─ image1.pdf
    ⋮
    ├─ photo1.jpg
    ├─ photo2.jpg
    ⋮
~~~~~~

Vous pouvez dupliquer dans ShareLaTeX [ce projet](https://fr.sharelatex.com/project/56939047de5631c80daec1e5?r=3eb5cc58&rm=d&rs=b).

## «Recommandations» générales (pour ShareLaTeX)

- N'utilisez pas d'accents ni des symboles bizarres dans les noms des fichiers.!! 
  Les lettres, chiffres et `_` (souligné) suffisent.
- Commentez votre code si nécessaire.
- Utilisez des commentaires «lignes» pour rendre des parties du code visibles. 

  ~~~~~~
  % ----------------------------
  \section{Nom de la section}
  % ----------------------------
  ~~~~~~

- Indentez (mettre en retrait) les blocs.

  ~~~~~~
  ...
  \begin{theorem}
    Soit $A$ ...
    \begin{enumerate}
      \item Si le paramètre ...
      \item Sinon ....
    \end{enumerate}
  \end{theorem}
  ~~~~~~

# Les caractères spéciaux

## Réservés par (La)TeX

- `%`   : commentaire (pour l'imprimer `\%`)
- `$`   : mode math (pour l'imprimer `\$`)
- `&`   : alignement (pour l'imprimer `\&`)
- `_`   : indice (pour l'imprimer `\_`)
- `^`   : exposant (pour l'imprimer `\^`)
- `~`   : espace insécable (pour l'imprimer `\~`)
- `{ }` : début et fin de groupe (pour les imprimer `\{` et `\}`)
- `#`   : argument de macro (pour l'imprimer `\#`)
- `\`   : spécial (pour l'imprimer `\textbackslash, $\backslash$, $\setminus$, \symbol{92}`)

## Symboles particuliers

- accents, pas besoin avec unicode, mais pour info :
  `\'e` (é), <code>\`e</code> (è), `\^e` (ê), `\"\i` (ï), `\c{c}` (ç)
- les lettres grecques :
  `\alpha` (α), `\beta` (β), `\gamma` (γ), ..., `\omega` (ω) !!
  `\Alpha` (Α), `\Beta` (Β), `\Gamma` (Γ), ..., `\Omega` (Ω)
- les tirets :
  `$-$` (moins), `-` (césure), `--` (diapason), `---` (dialogue)
- les points de suspension :
  `\dots`, `$\ldots$`, `$\cdots$`
- ligne horizontale :
  `\rule{\linewidth}{0.5mm}`

# Les espaces

## Les caractères d'espace

- espace : en début de ligne, consécutif, en fin de ligne, forcé `\` , en mode math `$x y$`
- espace insécable : `~`
- tabulation
- passage à la ligne : un, deux, après `%`, `\newline`, `\\`, `\\*`, `\linebreak[4]`
- changement de paragraphe : ligne vide ou `\par` (à ne pas confondre avec `\paragraphe`)

## Les espaces horizontaux [ ](gist://ef4f00c09c5765b152e0/espaces_horizontaux.tex)

- `\hspace{...}, \hspace*{...}` par exemple `\hspace*{1cm}`
- `\enskip` = `\hspace{.5em}`
- `\quad` = `\hspace{1em}`
- `\qquad` = `\hspace{2em}`
- `\,` espace très fin = 3/18 em ~ 0.17 em
- `\:` (mode math) espace fin = 4/18 em ~ 0.22 em
- `\;` (mode math) espace moyen = 5/18 em ~ 0.28 em
- `\!` (mode math) espace très fin négatif = -3/18 em ~ -0.17 em
- `\hfill` identique à `\hspace{\fill}`
- `\hrulefill` pour _____ et `\dotfill` pour .....
- `\indent` et `\noindent`
- **Surtout ne pas faire : `\ \ \ \ ` !**

## Les espaces verticaux

- `\\[...]`, `\\*[...]` comme `\\[1ex]` ou `\\*[\baselineskip]`
- `\vspace{...}` et `\vspace*{...}`
- `\smallskip`, `\medskip` and `\bigskip`
- `\vfill` identique à `\vspace{\fill}`
- `\linespread` espace entre les lignes, exemple: `\linespread{1.5}`
- `\parskip`, exemple : `\setlength{\parskip}{1em}`
- Il y a aussi le package `setspace`.

## Les changements de page

- `\newpage`
- `\clearpage`
- `\cleardoublepage`, il faut `[twoside]` dans `\documentclass`

# Les alignements

- par défaut : justifié
- à droite

  ~~~~~~
  \begin{flushright}
    Texte aligné à droite
  \end{flushright}
  ~~~~~~

- à gauche

  ~~~~~~
  \begin{flushleft}
    Texte aligné à gauche
  \end{flushleft}
  ~~~~~~

- centré

  ~~~~~~
  \begin{center}
    Texte au centre
  \end{center}
  ~~~~~~

- `\usepackage{ragged2e}` : (voir les options) pour tout le document

# Polices

## Poids, couleur, ...

- `\textbf{gras}`, `\textmd{moyen (pas gras)}`
- `\textit{italique}`, `\textsl{penché}`, `\emph{ça dépend}`, `\textup{droit}`
- `\textsf{sans serif}`, `\texttt{machine à écrire}`, `\textsc{PETITE CAPITALES}`, `\textrm{par défaut (avec serif)}`
- `\textnormal{tout normal}`
- `\underline{souligné}`
- `\textcolor{red}{en rouge}` (il faut la bibliothèque _xcolor_)
- `\colorbox{red}{sur fond rouge}` (il faut la bibliothèque _xcolor_)

## Tailles

- tailles (standard) :

  `\tiny` minuscule, `\scriptsize` très petit, `\footnotesize` assez petit, `\small` petit, `\normalsize` normal, `\large` grand, `\Large` plus grand, `\LARGE` très grand, `\huge` énorme, `\Huge` géant

  par exemple `{\Large Titre}`

- taille arbitraire : `{\fontsize{3cm}{4cm}\selectfont C'est très grand!}`
- choix de la police ...
