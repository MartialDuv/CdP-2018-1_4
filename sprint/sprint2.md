User stories du sprint 2
-----------------
| id | user story  | priorité | difficulté | sprint |
|----|-------|-------------|------------|-------------|
| #4 |  En tant que développeur, je souhaite pouvoir supprimer un projet afin qu'il ne soit plus disponible dans mon espace. Pour cela, je dois cliquer sur le bouton "supprimer" à droite du nom du projet en question. |     haute              |    1     |  2      |
| #5 |  En tant que développeur, je souhaite pouvoir modifier un projet afin de changer les informations relatives au projet. Pour cela, je dois cliquer sur le bouton "modifier". |       haute            |    2     |    2    |
| #8 |  En tant que développeur, je souhaite ajouter mes "user story" dans un backlog, afin de pouvoir les visualiser. Pour cela, je dois renseigner un id, une description de la user story, une difficulté, une priorité et le sprint auquel l'user story appartient. L'id, la description et la difficulté sont obligatoires, la priorité et l'appartenance à un sprint est optionnel lors de l'ajout d'une "user story". |   haute       |    3     |   2    |
| #9 | En tant que développeur, je souhaite visualiser le backlog du projet afin de consulter la liste des "user story" du projet.  |     haute        |    2     |    2    |
| #10 | En tant que développeur, je souhaite que la colonne "user story" soit pré-construite avec les mots clés "en tant que", "je souhaite", "afin de" dans le but de structurer facilement les "user story".  |        haute      |    2     |    2    |
| #11 | En tant que développeur, je souhaite pouvoir modifier une "user story". Pour cela, je peux cliquer sur le bouton "modifier" à droite de l'"user story" en question.  |    haute      |   2  |   2    |
| #12 | En tant que développeur, je souhaite pouvoir supprimer une "user story". Pour cela, je peux cliquer sur le bouton "supprimer" à droite de l'"user story" en question.  |     haute     |   1     |   2    |

Tâches du sprint 2
-----------------

| id | description | composant | chemin composant | id us | dépendances | état | développeur | chiffrage (en jh) |
|----|------------|---------------|--------|----|----|----|-----|----|
| T1 | Ajout du docker au projet. | docker.yml  |  docker.yml   |  x   |  x   | DONE | Mathieu, Mary, Martial | 1 |
| T2 | Création des fichiers project.sql. | project.sql |  src/bdd/project.sql | x |   x   | DOING | Mathieu  | 0.5 |
| T3 | Implémentation du script project.sql qui crée les tables de la base de données ainsi que leur champs respectifs. |  project.sql |  src/bdd/project.sql| x |  T2  | TO DO | Mathieu | 0.5 |
| T4 | Création de la page d'accueil comprenant la liste des projets et la possibilité de créer un projet. | index.html, index.js |  src/html/index.html, src/js/index.js | #3 |   x   | TO DO | x | 0.5 |
| T5 | Implémentation de l'ajout d'un projet lorsque le bouton "créer" est cliqué et redirection vers le formulaire de création. S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affichent et le projet n'est pas créé. | creaproject.html, creaproject.js | src/html/creaproject.html, src/js/creaproject.js  | #3  | T3, T4 | TO DO | x | 1 |
| T6 | Création de la page d'ajout d'une user story. | add_us.html, add_us.js | src/html/add_us.html, src/js/add_us.js | #8 | x  | TO DO | x | 0.5 |
| T7 | Implémentation du formulaire d'ajout d'une user story. Il s'affiche lorsqu'on clique sur "ajouter une user story" de backlog.html.  S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affichent. L'user story est crée zn appuyant sur le bouton "créer"  | add_us.html | src/html/add_us.html | #8 | T3, T6  | TO DO | x | 1 |
| T8 | Pré-construire le champs "description" dans le formulaire d'ajout de l'user story avec "En tant que", "je souhaite", "afin de". | add_us.html | src/html/add_us.html | #10 | T3, T6 | TO DO | Martial | 0.5 |
| T9 | Implémentation du bouton "modifier" à droite de l'user story dans backlog.html. Il redirige vers un formulaire de modification de l'user story. | backlog.html, backlog.js | src/html/backlog.html, src/js/backlog.js |  #11  | T8  | TO DO | x | 1 |
| T10 | Création de la page du formulaire de modification d'une user story. | edit_us.html, edit_us.js | src/html/edit_us.html, src/js/edit_us.js | #11 | x | TO DO | x | 0.5 |
| T11| Implémentation du formulaire de modification d'une user story et du bouton "enregistrer les modifications". | edit_us.html | src/html/edit_us.html | #11 | T3, T10 | TO DO | x | 1 |
| T12 | Implémentation de la modification l'user story dans la base de données lorsque le bouton "enregistrer les modifications" est cliqué, et redirection vers le backlog du projet. S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affichent et l'user story n'est pas modifiée. | edit_us.js | src/js/edit_us.js | #11 | T3, T9  | TO DO | x | 1 |
| T13 | Implémentation du bouton "Supprimer" à côté de chaque projet de la liste. | index.html | src/html/index.html | #5 | T3, T4  | TO DO | x | 0.5 |
| T14 | Implémentation du bouton "Modifier" à côté de chaque projet de la liste. | index.html | src/html/index.html | #5 | T3, T4  | TO DO | x | 0.5 |
| T15 | Création de la page de visualisation du backlog comprenant la liste des "user story" ainsi que des boutons "Modifier" et "Supprimer" à côté de chaque "user story" et un bouton "Ajouter une user story". | backlog.html, backlog.js | src/html/backlog.html, src/js/backlog.js | #9 | x  | TO DO | x | 0.5 |
| T16 | Implémentation de la page de visualisation du backlog montrant la liste des "user story" et les boutons. | backlog.html | src/html/backlog.html | #9, #11, #12 | T3, T15  | TO DO | x | 1 |
| T17 | Implémentation des opérations de redirection vers les formulaires d'ajout/modification et le déclenchement d'une pop-up d'avertissement de suppression. | backlog.js | src/js/backlog.js | #9, #11, #12 | T3, T15  | TO DO | x | 1 |


<!--
us : #3 (création projet), #8(ajout us),#10(us pré faite),#11(modif us)
pour chaque tache : ecriture d'un test unitaire ?
ecrire les testes de scenario (us)
 -->
