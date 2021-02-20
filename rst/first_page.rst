
20 février 2021


Propos sur le format reStructuredText
======================================


Le format reStructuredText est un format de fichier. Son extension
usuelle est *rst*. Le format *rst* définit un langage de balisage
riche. Cette richesse, certains pourront la trouver baroque, voire
incompatible avec leur attachement à la simplicité. Le format Markdown
sera une bonne alternative pour ceux-là. Quant aux autres, ils seront
peut-être intéressés par les lignes qui suivent.


Le format *rst* est un format qui conviendra particulièrement aux
programmeurs qui aiment écrire et pour qui la documentation est plus
qu'une exigence habituelle dans les cahiers des charges. Il réalise
aussi un bon compromis entre simplicité et puissance.


Un outil de documentation
---------------------------


Un problème de mémoire
***********************

Chaque programmeur s'est déjà retrouvé dans la situation de ne plus
savoir lui-même comment son propre programme fonctionne. La
documentation apporte une solution à ce problème. La documentation ne
permet pas seulement d'expliquer aux utilisateurs d'un programme ce
que ce programme fait. Elle permet aussi au programmeur de garder une
trace des réflexions qui furent les siennes lors de la conception de
son programme. Ces réflexions, une fois notées, pourront alors jouer
un rôle dans un futur projet ou s'ajouter à une base de
connaissances.


Qu'il serait agréable de ne rencontrer que des programmes possédant un
code source si clair que toute documentation serait inutile ! Dans la
réalité, ces rencontres sont rares. L'algorithme de recherche de
Knuth-Morris-Pratt, par exemple, restera toujours obscur s'il n'est
accompagné d'explications.


Pour aider les programmeurs dans leur apprentissage et dans leur
travail de documentation, le format *rst* offre la possiblité de noter
efficacement des idées d'architecture en les illustrant avec des
fragments de code et en les organisant au moyen d'un plan.



Une digression littéraire
******************************


La programmation est-elle un art qui mêle la littérature et les
mathématiques ? Edsger Dijkstra et Donald Knuth ont déjà développé
cette idée.


Un bon programmeur ne devrait-il pas d'abord être capable d'exprimer
en bon français les problèmes qu'il se propose de résoudre ?


N'est-il pas vrai que tout programme peut se concevoir en pseudo-code
indépendamment de tout langage de programmation particulier ? Certains
programmeurs peuvent être guidés avec profit par l'architecture de
certains langages. L'histoire de la découverte du *tri rapide* par
Tony Hoare est un exemple notable de cette alchimie. On pourrait aussi
citer les qualités littéraires des patrons de conception tels qu'ils
furent définis par le *Gang of Four*.


D'après Christoph Dürr et Jill-Jênn Vie, dans leur ouvrage sur la
programmation efficace, expliquer à quelqu'un (ou un canard) ce qu'un
programme défaillant était censé faire, ligne après ligne, serait la
meilleure méthode pour comprendre ce qui n'a pas fonctionné dans ce
programme.


Mon professeur de mathématiques en deuxième année de classe
préparatoire disait souvent : «Il faut toujours commencer à son
premier niveau d'incompétence.» Des progrès au niveau de la
littérature pourront peut-être économiser à certains de nombreux
*points d'arrêt*.



Un exemple
***********

Pour insérer des lignes de code dans un fichier *rst*, il suffit
d'utiliser la bonne directive et de respecter des règles relatives
à l'indentation et aux sauts de ligne.


.. code:: python

  def my_function():
      """A simple function."""
      print("Hello!")



Un format simple et puissant
------------------------------


Des balises presque invisibles
*******************************

Un fichier *rst* est un simple fichier texte. Il est donc plus simple à
lire et à éditer qu'un fichier binaire ! La structure des documents
*rst* repose sur le soulignement des titres. Ce soulignement n'est pas
simplement esthétique dans le format *rst*, il constitue une véritable
balise.



Conserver des données et des métadonnées
*****************************************

Le format *rst* est puissant car il donne la possibilité de sauvegarder
non seulement un texte mais aussi sa structure hiérarchique et ses
liens avec d'autres textes (métadonnées). Grâce au programme Docutils
(l'analyseur syntaxique de référence pour le format *rst*), vous pourrez
écrire des programmes qui analyseront vos fichiers *rst* et seront
capables d'en extraire sans ambiguïté une grande variété
d'informations.




Un format plébiscité
----------------------

Le format *rst* est très employé par les praticiens du langage
Python. C'est le principal format dans lequel la documentation des
programmes Python est rédigée.




Conclusion
------------

Le format *rst* présente de nombreux avantages pour un grand nombre
d'utilisations. On peut l'utiliser par exemple pour représenter le
contenu des pages constituant un site web.



Constantin Lenoir
