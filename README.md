README
-----------------
Test de Validation (traivs)
[![Build Status](https://travis-ci.org/MartialDuv/CdP-2018-1_4.svg?branch=master)](https://travis-ci.org/MartialDuv/CdP-2018-1_4)


Backlog
-----------------
| id | user story  | priorité | difficulté | sprint |
|----|-------|-------------|------------|-------------|
| #1 | En tant que visiteur, je souhaite pouvoir m'enregistrer en tant que développeur. Pour cela, je dois remplir un formulaire composé de : nom, prénom, mail, identifiant, mot de passe. Toutes les informations sont obligatoires lors de l'enregistrement.           |    moyenne      |    4     |   3     |
| #2 | En tant que visiteur, je souhaite pouvoir me connecter en tant que développeur afin de créer un projet ou rejoindre un projet existant.   |    moyenne      |    3     |    3    |
| #3 |  En tant que développeur, je souhaite pouvoir créer un projet. Pour cela, je dois renseigner sur un formulaire dédié : le nom du projet, une thématique, le propriétaire, le client, le nombre de développeurs et une estimation de la durée. Seuls le nom et la thématique du projet sont obligatoires, les autres sont facultatifs. |    haute               |    3     |    1    |
| #4 |  En tant que développeur, je souhaite pouvoir supprimer un projet afin qu'il ne soit plus disponible dans mon espace. Pour cela, je dois cliquer sur le bouton "supprimer" à droite du nom du projet en question. |     haute              |    1     |  2      |
| #5 |  En tant que développeur, je souhaite pouvoir modifier un projet afin de changer les informations relatives au projet. Pour cela, je dois cliquer sur le bouton "modifier". |       haute            |    2     |    2    |
| #6 | En tant que développeur, je souhaite pouvoir ajouter d'autres développeurs sur mon projet afin qu'ils puissent y participer. Pour cela, je dois renseigner l'identifiant du développeur sur la zone de recherche attribuée.     |      moyenne     |    3     |   3     |
| #7 | En tant que développeur, je souhaite pouvoir supprimer des développeurs sur mon projet afin de gérer les participants au projet.     |  moyenne         |    2     |    3    |
| #8 |  En tant que développeur, je souhaite ajouter mes "user story" dans un backlog, afin de pouvoir les visualiser. Pour cela, je dois renseigner un id, une description de la user story, une difficulté, une priorité et le sprint auquel l'user story appartient. L'id, la description et la difficulté sont obligatoires, la priorité et l'appartenance à un sprint est optionnel lors de l'ajout d'une "user story". |   haute       |    3     |   2     |
| #9 | En tant que développeur, je souhaite visualiser le backlog du projet afin de consulter la liste des "user story" du projet.  |     haute        |    2     |    2    |
| #10 | En tant que développeur, je souhaite que la colonne "user story" soit pré-construite avec les mots clés "en tant que", "je souhaite", "afin de" dans le but de structurer facilement les "user story".  |        haute      |    2     |    2    |
| #11 | En tant que développeur, je souhaite pouvoir modifier une "user story". Pour cela, je peux cliquer sur le bouton "modifier" à droite de l'"user story" en question.  |    haute      |   2  |   2    |
| #12 | En tant que développeur, je souhaite pouvoir supprimer une "user story". Pour cela, je peux cliquer sur le bouton "supprimer" à droite de l'"user story" en question.  |     haute     |   1     |   2    |
| #13 |  En tant que développeur, je souhaite ajouter des sprints afin de pouvoir les consulter ultérieurement. Chaque sprint contient un numéro et une liste de tâches associée. Lors de l'ajout, le numéro est obligatoire alors que la liste de tâches est optionnelle. |    basse        |    3     |   3     |
| #14 |  En tant que développeur, je souhaite modifier l'id d'un sprint. Pour cela, je peux cliquer sur "modifier" à droite du sprint en question. |    basse  |    1    |   3    |
| #15 | En tant que développeur, je souhaite ajouter une tâche dans un sprint. Pour cela, je dois renseigner un id, l'id de l'user story à laquelle la tâche correspond, une description de la tâche, un nom du composant, le chemin de la ressource, et les dépendances avec les autres tâches. Lors de l'ajout d'une tâche, le chemin de la ressource, la description du composant ainsi que les dépendances avec les autres tâches sont optionnels, le reste des champs est obligatoire. Il y a également un état de la tâche qui est par défaut "à faire".      |     basse       |    3     |    3    |
| #16 | En tant que développeur, je souhaite pouvoir modifier l'état de chaque tâche parmi une sélection d'état : "à faire", "en cours", "faite" afin d'avoir un suivi des tâches. Cet état est une colonne du tableau des tâches. |    basse     |    1     |    3    |
| #17 | En tant que développeur, je souhaite modifier une tâche. Pour cela, je peux cliquer sur le bouton "modifier" se situant à droite de la tâche en question.   |     basse       |   2     |   3     |
| #18 | En tant que développeur, je souhaite supprimer une tâche. Pour cela, je peux cliquer sur le bouton "supprimer" se situant à droite de la tâche en question.   |      basse      |   1     |   3     |
| #19 | En tant que développeur, je souhaite pouvoir consulter les tâches d'un sprint afin de visualiser le travail à produire pour le sprint.    |      basse       |    2     |   3     |
| #20 | En tant que développeur, je souhaite pouvoir visualiser la liste des sprints afin d'avoir une vue d'ensemble sur l'organisation du projet.   |    basse         |    2     |   3     |
| #21 | En tant que développeur, je souhaite afficher le burn down chart afin de visualiser l'évolution de la quantité de travail qu'il reste. Pour cela, je dois cliquer sur le bouton "visualiser le burn down chart".  |   basse      |    7     |   3     |
| #22 | En tant que développeur, je souhaite ajouter un test dans un espace dédié en renseignant le nom d'un test, sa nature (unitaire/E2E), le composant sur lequel il s'applique et la date du dernier succès afin de suivre l'évolution des tests sur le projet. Le nom du test, sa nature et le composant sur lequel il s'applique sont obligatoires. |   basse      |    2     |   ?     |  
| #23 | En tant que développeur, je souhaite compléter l'historique des releases, afin d'avoir un suivi de toutes les releases. Pour cela, je renseigne le nom de la version, les issues traitées ainsi que fournir la release en format téléchargeable. Toutes les informations sont obligatoires. |   basse      |    5    |    ?    |
