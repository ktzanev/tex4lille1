---
layout: cours
title: Cours 5 - (Xe)LaTeX
shorttitle: Cours 5
shorturl: git.io/vu7GP
codelang: tex
---

# Les formats d'images

## Matriciels (Bitmap)

- _JPG_ : idéal pour les photos
- _PNG_ : idéal pour les illustrations, peut avoir des transparences

  On peut utiliser ces 2 formats avec LaTeX, XeLaTeX, PDFLaTeX et HTML.

- _GIF_ : semblable au _PNG_, pas de transparences, mais des animations possibles. Ne fonctionne pas en LaTeX, mais utilisable en HTML.

## Vectoriels

- _PDF_ : c'est le seul format accessible avec XeLaTeX, PDFLaTeX et LuaLaTeX
- _EPS_ : c'est le seul format accessible avec LaTeX!! (il peut-être utilisé également avec XeLaTeX qui le converti en _PDF_)
- _SVG_ : c'est le seul format accessible avec HTML, mais pas avec LaTeX

Les logiciels d'édition d'images vectorielles, exportent en général dans les trois formats.

# Inclure une image

Grâce à la bibliothèque `graphicx` il suffit de faire :

`\includegraphics{nom du fichier}`

- pas besoin de mettre l'extension _.pdf_, _.jpg_, _.png_ ou _.gif_
- le fichier doit être dans le même répertoire que la source tex, ou ...
- si vos images sont dans un sous-répertoire, par exemple _images_, on peut le signaler à LaTeX avec `\graphicspath{{images/}}`.
- la commande `\includegraphics` peut prendre des paramètres : `width`, `height`, `scale`, `angle`.

Exemple :
  `\includegraphics[height=5cm]{triangle}`

# Les figures

- Si on souhaite, en plus d'inclure l'image, y mettre un titre, pouvoir la référencer, qu'elle soit centrée avec passage à la ligne!! on peut utiliser l'environnement `figure`.!! Exemple :

  ~~~~~~~
  \begin{figure}[h!]
    \centering
    \includegraphics[width=7cm]{sinc}
    \caption{Le graphe de sinus cardinal.}
    \label{fig:sinc}
  \end{figure}
  ~~~~~~~
  {: class="tex xsmaller"}

- Le paramètre `[h]` est pour «*h*ere» et `[!]` pour dire «vraiment». On peut utiliser aussi `[t]` pour «*t*op of the page» ou `[b]` pour «*b*ottom of the page»
- `\centering` c'est pour centrer l'image
- `\caption` c'est pour mettre une légende (titre)
- `\lable` doit être mis après _caption_, si on en a besoin
- Si on souhaite utiliser plusieurs images côte-à-côte dans une figure, on peut utiliser l'environnement `subfigure`
- Dans _figure_ on n'est pas obligé d'avoir `includegraphics`, on peut mettre n'importe quel code, par exemple des commandes pour dessiner

# Incruster une image

- Si on souhaite que le texte coule autour de l'image, on peut utiliser l'environnement `wrapfigure` de la bibliothèque `wrapfig`.!! Exemple :

  ~~~~~~~
  \begin{wrapfigure}{r}{0.5\textwidth}
    \centering
    \includegraphics[width=5cm]{sinc}
    \caption{Le graphe de sinus cardinal.}
    \label{fig:sinc}
  \end{wrapfigure}
  ~~~~~~~

- Le paramètre `[r]` est pour «`r`ight». On peut utiliser aussi `[l]` pour «*l*eft», `[i]` pour «*i*nner» et `[o]` pour «*o*uter»
- Le deuxième paramètre `0.5\textwidth` indique que la largeur est la moitié de la page. On peut mettre ici par exemple `10 cm`.

# Dessiner avec LaTeX

Il existe plusieurs «langages» qui permettent de dessiner avec LaTeX

- L'environnement [picture](http://fr.wikibooks.org/wiki/LaTeX/Dessiner_avec_LaTeX/R%C3%A9alisation_de_graphiques_math%C3%A9matiques) natif dans LaTeX, mais très pauvre.
- Le langage [metapost](http://tex.loria.fr/prod-graph/f-mpman-2.pdf) qui est compilé avec la commande `metapost`. Très performant en 2D, mais nécessite un outil externe et le résultat est en EPS.
- Le langage [Asymptote](http://asymptote.sourceforge.net/) qui est inspiré de metapost. Très performant en 3D, mais nécessite un outil externe.
- Le langage [PSTicks](http://fr.wikibooks.org/wiki/LaTeX/Dessiner_avec_LaTeX/Dessiner_avec_PSTricks) qui peut être écrit directement dans LaTeX. Le résultat est en EPS. N'est pas fait à la base pour [Xe\|Lua\|PDF]LaTeX.!!
  À compiler avec _XeLaTex_ !
- Le langage [TikZ](https://fr.wikibooks.org/wiki/LaTeX/Dessiner_avec_LaTeX/Dessiner_avec_PGF_et_TikZ) qui peut être écrit directement dans LaTeX. Il est inspiré de metapost et PSTrick, mais plus moderne. Fonctionne à merveille avec toutes les versions de [Xe|Lua|PDF][La|Con]TeX aussi bien en PS qu'en PDF.!!
  C'est le langage que je vous conseille !

## TikZ (quelques notions)

- [La documentation](http://pgf.sourceforge.net/pgf_CVS.pdf) est fantastique, mais fait plus de 1000 pages !
- Il existe des manuels plus [concis et en français](http://math.et.info.free.fr/TikZ/bdd/TikZ-Impatient.pdf)
- On peut voir plusieurs exemples sur le site [texemple.net](http://www.texample.net/tikz/examples/) (et pas que de TikZ par ailleurs)
- Il faut inclure la bibliothèque `\usepackage{tikz}`
- Puis selon les besoins on peut rajouter des possibilités avec `\usetikzlibrary{...}`
- Premier exemple :

  ~~~~~~~
  \begin{tikzpicture}
    \fill[red] (0,0) circle(1 cm);
    \draw[very thick,<->] (-1,0) -- (1,0);
    \path (0,0) node[above]{$d$};
  \end{tikzpicture}
  ~~~~~~~

- Attention, toute commande se termine par `;` (point-virgule)
- Les coordonnées sont par défaut en _cm_ et les angles en _deg_

## TikZ (les commandes de base)

- `\path ... ;` est la commande de base qui «construit» un chemin
- `\draw ... ;` est la commande pour dessiner. C'est un raccourci de `\path[draw] ... ;`
- `\fill ... ;` est la commande pour remplir. C'est un raccourci de `\path[fill] ... ;`
- On peut combiner les deux de plusieurs façons, mais probablement le plus simple est de faire`\path[fill,draw] ... ;`

## TikZ (les coordonnées)

- `(1,2)` c'est la même chose que `(1cm,2cm)`, mais on peut utiliser aussi d'autres unités
- `(35:2)` en coordonnées polaires : angle de 35° et distance de 2cm
- `+(1,1)` relativement au dernier point courant, sans changer de point courant
- `++(1,1)` relativement au dernier point courant, et devient le point courant
- `coordinate (A)` enregistre la position du point courant en _A_,!! puis on peut le réutiliser avec _(A)_ à la place de coordonnées explicites

## TikZ (les opérations de base)

- `(A) -- (B)` : ligne droite entre (A) et (B)
- `(A) circle (1cm)` : cercle de centre (A) et de rayon 1cm
- `(A) ellipse (1cm and 2cm)` : ellipse de rayons 1cm et 2cm
- `(A) arc (0:90:1cm)` : arc de cercle de rayon 1cm qui débute en (A), entre les angles 0° et 90°
- `(A) .. controls (1,1) and (2,1) .. (B)` : courbe de Bézier entre (A) et (B), avec points de contrôle (1,1) et (2,1)
- `(A) rectangle (B)` : rectangle avec côtés // aux axes et coins opposés (A) et (B)
- `(A) grid (B)` : une grille à la place du rectangle
- `plot ({\x},{sin(\x r)})` : dessine la fonction sinus (en radians)
- `(A) node {Text}` : place le texte centré en (A)

## TikZ (les transformations)

- `[xshift=1cm]` : décalage à droite de 1cm
- `[yshift=-1em]` : décalage vers le bas de 1em
- `[rotate=70]` : rotation d'angle 70°
- `[scale=1.5]` : homothétie de rapport 1.5
- ces transformations n'affectent que les coordonnées explicites, mais pas les points nommés (comme `(A)`), ni les épaisseurs des lignes
- quand il y a plusieurs transformations ou options (comme `[xshift=25mm, rotate=30]`) elles sont exécutées de gauche à droite
- si on souhaite qu'une transformation ou une option s'applique à plusieurs chemins on peut utiliser l'environnement `scope` :

  ~~~~~~~
  \begin{scope}[xshift=25mm,rotate=30]
    \fill[red] (0,0) circle(1 cm);
    \draw[very thick,<->] (-1,0) -- (1,0);
    \path (0,0) node[above]{$d$};
  \end{scope}
  ~~~~~~~

## TikZ (les options)

- `[red]` pour dessiner et remplir en rouge. La couleur peut être `red`, `blue`, ... et aussi `red!30!blue`
- `[draw=orange]` pour dessiner en orange et `[fill=yellow]` pour remplir en jaune
- `[fill opacity=.7]` le remplissage est opaque à 70% (par défaut c'est 1 = 100%)
- `[very thin]` pour des lignes très fines,!! ou `[ultra thick]` pour des lignes ultra épaisses
- `[->]` pour que la ligne se termine avec une flèche. Il existe plusieurs types de flèches, par exemple `[-latex]`,`[-stealth]`, `[-|]`, ...
- `[rounded corners=3mm]` pour arrondir les coins
- Pour `plot` il y a plusieurs options comme :
- `[domain=0:4]` pour dire que `\x` varie entre 0 et 4
- `samples=100` pour utiliser 100 points lors du plot (par défaut c'est 20)
- `smooth` pour lisser la courbe

## TikZ (compléments)

- Pour dessiner des fonctions (y compris en 3D) il y a la bibliothèque `\usepackage{pgfplots}`.
  Par exemple :

  ~~~~~~~
  \begin{axis}
    \addplot3[surf,domain=0:360] {cos(x)*cos(y)};
  \end{axis}
  ~~~~~~~

- Pour des opérations à répétition, il y a la commande très performante `\foreach`.
  Par exemple :

  ~~~~~~~
  \foreach[evaluate={\f=\p/\q;\r=1/(2*\q^2)}]
    \p/\q in {0/1,1/1,1/2,2/1,3/2,1/3}{
      \draw (\f,\r) circle(\r) node[scale=2*\r]{$\frac{\p}{\q}$};
  }
  ~~~~~~~


