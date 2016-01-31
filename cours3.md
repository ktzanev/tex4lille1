---
layout: cours
title: Cours 3 - (Xe)LaTeX
shorttitle: Cours 3
shorturl: git.io/vuBDO
codelang: tex
---

# Structure du document

- `\part{Nom de la partie} % niveau -1`
    disponible que dans les classes _book_ et _report_
- `\chapter{Nom du chapitre} % niveau 0`
    disponible que dans les classes _book_ et _report_
- `\section{Nom de la section} % niveau 1`
- `\subsection{Nom de la sous-section} % niveau 2`
- `\subsubsection{Nom de la sous-sous-section} % niveau 3`
- `\paragraph{Nom du paragraphe} % niveau 4`
- `\subparagraph{Nom du sous-paragraphe} % niveau 5`
- pour déterminer le niveaux de numérotation
    `\setcounter{secnumdepth}{3}`
- ils existent tous en version avec `*` pour ne pas être numérotés,
    ex : `\chapter*{Introduction}`
- pour modifier l'apparence des titres il y a la bibliothèque [titlesec](https://www.sharelatex.com/learn/Sections_and_chapters#Customize_chapters_and_sections) : `\usepackage{titlesec}`

# Table des matières

- Pour rajouter une table des matières : `\tableofcontents`.
    Il faut compiler 2 fois (automatique dans ShareLaTeX).
- Le niveau maximal inclus dans la table : `\setcounter{tocdepth}{3}`.
- Pour rajouter à la table des matières, par exemple un chapitre on peut faire `\addcontentsline{toc}{chapter}{Introduction}`!!
  ce qui est utile pour rajouter par exemple des chapitres non numérotés (avec `*`).

# Définitions, Propositions, Théorèmes, ...

## Déclarations

- {: data-fragment-index="1"}Dans le préambule (avant `\begin{document}`) :

  ~~~~~~~
  \newtheorem{theorem}{Théorème}
  ~~~~~~~
  {: data-fragment-index="2"}
  ~~~~~~~
    \newtheorem{lemma}[theorem]{Lemme}
    \newtheorem{proposition}[theorem]{Proposition}
  ~~~~~~~
  {: data-fragment-index="3"}
  ~~~~~~~
  \theoremstyle{remark}
  ~~~~~~~
  {: data-fragment-index="4"}
  ~~~~~~~
    \newtheorem*{remark}{Remarque}
    \newtheorem*{remarks}{Remarques}
  ~~~~~~~
  ~~~~~~~
  \theoremstyle{definition}
    \newtheorem{definition}{Définition}[section]
  ~~~~~~~

- {: data-fragment-index="3"}À quoi sert `[theorem]` ?
- {: data-fragment-index="4"}À quoi sert `\theoremstyle` ?
- À quoi sert `[section]` ? (soit pour tous, soit pour aucun)

## Utilisation

~~~~~~~
\begin{theorem}[Théorème de Baire]
  Tout espace localement compact est \emph{de Baire}.
\end{theorem}
~~~~~~~

et de même pour _lemma_, _proposition_, ...

et même _proof_ (démonstration) qui est prédéfini :

~~~~~~~
\begin{proof}
  Soit $\mathcal{E}$ un espace localement compact...
\end{proof}
~~~~~~~

# Références, citations, notes

## Références

- Pour marquer une section, un théorème, une équation : `\label{...}`.
- Par exemple :
  + `\section{Premier résultat}\label{sec:premire}`
  + `\begin{theorem}\label{thm:principal}`
  + `\begin{equation}\label{eq:schrod}`
- Puis on utilise `\ref{...}` pour obtenir la référence  et/ou `\pageref{...}` pour obtenir la page.

  Exemple :

  ~~~~~~~
  Nous avons vu dans la section \ref{sec:premire}
  lors de la démonstration du théorème \ref{thm:principal}
  (à la page \pageref{thm:principal}) ...
  ~~~~~~~

## Citations

- Juste avant `\end{document}` il faut mettre les ouvrages que vous citez, de la façon suivante :

  ~~~~~~~
  \begin{thebibliography}{XXXXXXXXX}

    \bibitem[Lamp1994]{lamp}
      L.~Lamport, \emph{\LaTeX: A Document Preparation System}.
      Addison Wesley, Massachusetts, 2nd Edition, 1994.

    \bibitem[Einst1905]{einstein}
      A.~Einstein, \emph{Zur Elektrodynamik bewegter Körper}.
      Annalen der Physik, 322(10):891--921, 1905.

  \end{thebibliography}
  ~~~~~~~
  {: class="tex xsmaller"}

- Après pour citer on utilise par exemple `\cite{lamp}` qui va produire `[Lamp1994]`.
- Si on désire une numérotation automatique des entrées, on peut omettre les étiquettes `[Lamp1994]`, `[Einst1905]`, ...
- En cas d'une bibliographie abondante, on peut utiliser des systèmes plus performants, tel [biblatex](https://fr.wikipedia.org/wiki/BibTeX).

## Notes de bas de page

- Pour rajouter une note de bas de page, il suffit de mettre `\footnote{Voilà une note}` à l'endroit désiré.
- Pour changer le style de numérotation des notes, vous pouvez redéfinir `\thefootnote`.

# Les liens

Grâce à la librairie `hyperref` :

- tous les `\ref` et `\pageref` deviennent des liens;
- les lignes dans la table des matières sont des liens;
- il y a une table des matières PDF et les infos auteur et titre sont renseignées dans le PDF (métadonnées).
- On peut utiliser des liens web comme :
  `\url{http://fr.wikipedia.org/wiki/Théorème_de_Baire}`{: class="tex smaller"}
  ou
  `\href{http://fr.wikipedia.org/wiki/Théorème_de_Baire}{Baire sur Wikipedia}`{: class="tex xsmaller"}

# Les listes

## Types

- Non numérotée :

  ~~~~~~~
  \begin{itemize}
    \item Premier élément de la liste
    \item Deuxième élément de la liste
  \end{itemize}
  ~~~~~~~

- Numérotée :

  ~~~~~~~
  \begin{enumerate}
    \item Premier élément de la liste
    \item Deuxième élément de la liste
  \end{enumerate}
  ~~~~~~~

## et encore ...

- Imbriquées :

  ~~~~~~~
  \begin{enumerate}
    \item ...
    \item ...
    \begin{itemize}
      \item ...
      \item ...
    \end{itemize}
    \item ...
  \end{enumerate}
  ~~~~~~~

- On peut personnaliser les listes, par exemple en utilisant la bibliothèque `\usepackage[shortlabels]{enumitem}`!! où l'option `[shortlabels]` permet de choisir facilement le type de numérotation :

  ~~~~~~~
  \begin{enumerate}[1.]
  ~~~~~~~

  ou

  ~~~~~~~
  \begin{enumerate}[a)]
  ~~~~~~~

# En-têtes et pieds de page

- `\pagestyle{empty}`
- `\pagestyle{plain}`
- Pour pouvoir modifier les en-têtes et les pieds de page facilement :

  ~~~~~~~
  \usepackage{fancyhdr}
  \fancyhf{}
  ~~~~~~~

  Puis on peut configurer avec

  ~~~~~~~
  \lhead[...]{...} \chead{...} \rhead[...]{...}
  \lfoot[...]{...} \cfoot{...} \rfoot[...]{...}
  ~~~~~~~

  Par exemple on peut dire `\cfoot{Page \thepage}`!!, et mettre `\pagestyle{fancy}` à la place de `\pagestyle{plain}`.

- Pour changer la première page des chapitres des classes `book` et `report` :

  ~~~~~~~
  \usepackage{etoolbox}
  \patchcmd{\chapter}{plain}{fancy}{}{}
  ~~~~~~~

- Pour gérer les lignes séparatrices :

  ~~~~~~~
  \renewcommand{\headrulewidth}{0pt}
  \renewcommand{\footrulewidth}{0.4pt}
  ~~~~~~~
