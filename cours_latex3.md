---
layout: cours
title: Cours (Xe)LaTeX 3
shorttitle: (Xe)LaTeX 3
shorturl: git.io/v2gjP
codelang: tex
---

# Écrire des maths

## En ligne (inline mode)

- `$ \sum_{i=1}^n \sin(n \alpha) $`
- `\( \sum_{i=1}^n \sin(n \alpha) \)`
- `\begin{math} ... \end{math}`

## Centré, à la ligne (display mode)

~~~~~~~
$$
  \sum_{i=1}^n \sin(n \alpha)
    \text{\quad pour \quad}
      \alpha \in \mathbb{R}
$$
~~~~~~~
~~~~~~~
\[
  \sum_{i=1}^n \sin(n \alpha)
    \text{\quad pour \quad}
      \alpha \in \mathbb{R}
\]
~~~~~~~
~~~~~~~
\begin{displaymath}
    ...
\end{displaymath}
~~~~~~~

## Avec des numéros d'équations

~~~~~~~
\begin{equation}\label{eq:sommetrigo}
  \sum_{i=1}^n \sin(n \alpha)
    \text{\quad pour \quad}
      \alpha \in \mathbb{R}
\end{equation}
~~~~~~~
~~~~~~~
\begin{multline}\label{eq:treslongue}
  p(x) = 3x^6 + 14x^5y + 590x^4y^2 + 19x^3y^3\\
    + 12x^2y^4 - 12xy^5 + 2y^6 - a^3b^3
\end{multline}
~~~~~~~

- Il existe des versions étoilées `equation*`, `multiline*`,... sans numéro d'équation.
- On peut utiliser `\eqref{...}` à la place de `\ref{...}` pour obtenir, par exemple, (13) au lieu de 13.
- Pour forcer la numérotation à gauche ou à droite, on peut utiliser les options de `\documentclass[...]{}` : `leqno` (l=left) et `reqno` (r=right).

## Avec plusieurs équations (alignées)

- centrées (gather = réunir)

  ~~~~~~~
  \begin{gather}
    2x - 5y =  8 \\
    3x^2 + 9y =  3a + c
  \end{gather}
  ~~~~~~~

- alignées

  ~~~~~~~
  \begin{align}
    B' &= -\nabla \times E,\\
    E' &= \nabla \times B - 4\pi j.
  \end{align}
  ~~~~~~~

- En plus des versions `*` sans numéro, il existe les versions _«ed»_ pour mettre en mode math : `gathered`, `aligned`.
- On peut mettre un `\label` par ligne numérotée.
- On ajuste la "numérotation" avec `\tag{...}`, `\tag*{...}` ou `\notag`.
- On peut insérer des lignes de texte avec `\intertext{...}`.
- Si tout ça ne suffit pas, il y a la librairie `empheq`.

# Polices en mode math

- `\mathcal{...}`
- `\mathfrak{...}`
- `\mathbb{...}`
- `\mathbf{...}` ou `\bm{...}` (de préférence)
- `\mathrm{...}`
- `\mathit{...}`
- `\mathsf{...}`
- Pour les tester, on peut faire

  ~~~~~~~
  \begin{gather*}
    RQSz\pi          \\ \bm{RQSz\pi}      \\ \mathbf{RQSz\pi}  \\
    \mathbb{RQSz\pi} \\ \mathcal{RQSz\pi} \\ \mathfrak{RQSz\pi}
  \end{gather*}
  ~~~~~~~

- La taille des polices (et la position des indices) peut être contrôlée avec `\displaystyle`, `\textstyle`, `\scriptstyle` et `\scriptscriptstyle`.

# Texte, espaces

- `\text{...}` ou une des autres versions `\textbf{...}`, `\textsl{...}`, ...

  Par exemple

  ~~~~~~~
  \[
    \cos(x) \text{ pour } x \in A
  \]
  ~~~~~~~

- Les espaces ne comptent pas dans les formules, mais on peut en rajouter avec les commandes habituelles : `\,`, `\quad`, ...

# Parenthèses

- Taille automatique :

  `\left( ... \right)`

  `\left\{ ... \right\}`

  On peut à la place de `(` avoir `\{`, `[`, `|`, `\|`, `<` ou rien `.`

  + on peut mélanger : `\left\{ ... \right|`

  + pour ne mettre qu'à gauche par exemple : `\left\{ ... \right.`

- Taille manuelle :

  `\big( \Big( \bigg( \Bigg(`

  `\big] \Big] \bigg] \Bigg]`

# Tableaux et matrices

## Tableaux

- `tabular` n'est pas fait spécialement pour les maths.

  ~~~~~~~
  \begin{tabular}{rcc}
          & Blanc       & Noir  \\
    Long  & $P=\frac13$ & $P=x$ \\
    Court & $P=0$       & $P=y$
  \end{tabular}
  ~~~~~~~

- `array` est fait spécialement pour les maths.!!
  Il faut l'utiliser à l'intérieur d'une formule (mode math).

  ~~~~~~~
  \[
    \begin{array}{rcc}
                   & \text{Blanc} & \text{Noir} \\
      \text{Long}  & P=\frac13    & P=x \\
      \text{Court} & P=0          & P=y
    \end{array}
  \]
  ~~~~~~~

- N'oubliez pas l'existence de [www.tablesgenerator.com](http://www.tablesgenerator.com/).

## Matrices

Les matrices sont des _array_ avec les colonnes centrées et avec des espaces à droite et à gauche réduits.

- `matrix` (sans délimiteurs par défaut)

  ~~~~~~~
  \begin{matrix}
    \alpha     & \beta^{*} \\
    \gamma^{*} & \delta
  \end{matrix}
  ~~~~~~~

- `bmatrix` pour mettre entre [...]
- `Bmatrix` pour mettre entre {...}
- `pmatrix` pour mettre entre (...)
- `vmatrix` pour mettre entre \|...\|
- `Vmatrix` pour mettre entre ∥...∥
- `smallmatrix` est une version avec des espaces réduits!!,
  et il existe les version `bsmallmatrix`, `psmallmatrix`, ...

## Choix

- `cases` est un cas particulier de _array_ avec deux colonnes alignées à gauche, et une accolade à gauche

  ~~~~~~~
  \[
  (x-a)_+ =
      \begin{cases}
        x-a & x \geq a \\
          0 & \text{sinon}
      \end{cases}
  \]
  ~~~~~~~

- `dcases` identique, mais les cellules sont en _display_
- pour `cases*` et `dcases*` la deuxième colonne est en mode texte

# Opérateurs

- En plus des opérateurs prédéfinis comme :
  `\sin`, `\cos`, `\tan`, `\cot`,
  `\sinh`, `\cosh`, `\tanh`, `\coth`,
  `\arcsin`, `\arccos`, `\arctan`,
  `\exp`, `\log`, `\ln`, `\lg`,
  `\max`, `\min`, `\sup`,
  `\lim`, `\limsup`, `\liminf`,
  `\dim`, `\ker`, `\det`, `\hom`,

- on peut utiliser `\DeclareMathOperator` pour définir un opérateur,!!
  par exemple à la place de l'anglais `\gcd` on peut faire :
  `\DeclareMathOperator{\pgcd}{pgcd}`.
- Si on souhaite définir un opérateur qui peut avoir des indices
  (comme `\lim`) il faut utiliser `\DeclareMathOperator*`.
- Pour une utilisation ponctuelle, il y a `\operatorname` et `\operatorname*`.

# Compléments

## Indices

- Comme on l'a déjà vu :
  - indice : `x_{i}`,
  - exposant : `x^{k}`,
  - les deux : `x_{i}^{k}` ou `x^{k}_{i}`.
- Pour mettre plusieurs lignes d'indices il existe :
  `\substack{...\\ ...}` et `subarray`.
- Pour mettre des indices dans les 4 coins :
  `\sideset{_1^2}{_3^4}\sum`.
- Avec des accolades :
  `\underbrace{...}_{...}`, `\overbrace{...}^{...}`.
- Avec des crochets :
  `\underbracket{...}_{...}`, `\overbracket{...}^{...}`.

## Fractions

- `\frac12` est la même chose que `\frac{1}{2}`.
- En plus de `\frac` il existe `\dfrac`, `\tfrac`, `\cfrac`.

## Flèches

  - Les standards : `\rightarrow`, `\leftarrow` et `\leftrightarrow`
  - Les implications : `\Rightarrow`, `\Leftarrow` et `\Leftrightarrow`
  - Les versions longues : `\long...` ou `\Long...`
  - «s'envoie sur» : `\mapsto`

## Vecteurs

Il existe plusieurs méthodes :

- la méthode standard : `\overrightarrow{a}`,
- je vous recommande la bibliothèque `\usepackage[e]{esvect}`.
  - exemples : `\vv{a}`, `\vv{AB}` ou `\vv{\mathcal{E}}`
  - les options possibles pour les formes des flèches sont :
  `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`.

