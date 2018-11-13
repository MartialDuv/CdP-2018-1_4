User stories du sprint 2
-----------------
| id | user story  | priorité | difficulté | sprint |
|----|-------|-------------|------------|-------------|
| #3 |  En tant que développeur, je souhaite pouvoir créer un projet. Pour cela, je dois renseigner sur un formulaire dédié : le nom du projet, une thématique, le propriétaire, le client, le nombre de développeurs et une estimation de la durée. Seuls le nom et la thématique du projet sont obligatoires, les autres sont facultatifs. |    haute               |    3     |    1    |
| #4 |  En tant que développeur, je souhaite pouvoir supprimer un projet afin qu'il ne soit plus disponible dans mon espace. Pour cela, je dois cliquer sur le bouton "supprimer" à droite du nom du projet en question. |     haute              |    1     |  2      |
| #5 |  En tant que développeur, je souhaite pouvoir modifier un projet afin de changer les informations relatives au projet. Pour cela, je dois cliquer sur le bouton "modifier". |       haute            |    2     |    2    |
| #8 |  En tant que développeur, je souhaite ajouter mes "user story" dans un backlog, afin de pouvoir les visualiser. Pour cela, je dois renseigner un id, une description de la user story, une difficulté, une priorité et le sprint auquel l'user story appartient. L'id, la description et la difficulté sont obligatoires, la priorité et l'appartenance à un sprint est optionnel lors de l'ajout d'une "user story". |   haute       |    3     |   1     |
| #9 | En tant que développeur, je souhaite visualiser le backlog du projet afin de consulter la liste des "user story" du projet.  |     haute        |    2     |    2    |
| #10 | En tant que développeur, je souhaite que la colonne "user story" soit pré-construite avec les mots clés "en tant que", "je souhaite", "afin de" dans le but de structurer facilement les "user story".  |        haute      |    2     |    1    |
| #11 | En tant que développeur, je souhaite pouvoir modifier une "user story". Pour cela, je peux cliquer sur le bouton "modifier" à droite de l'"user story" en question.  |    haute      |   2  |   1    |
| #12 | En tant que développeur, je souhaite pouvoir supprimer une "user story". Pour cela, je peux cliquer sur le bouton "supprimer" à droite de l'"user story" en question.  |     haute     |   1     |   2    |

Tâches du sprint 2
-----------------

| id | description | composant | ressource | id us | dépendances | état | développeur | chiffrage (en jh) |
|----|------------|---------------|--------|-------|-------------|----|-----|----|
| T1 | Ajout du docker au projet. | docker.yml   |  docker.yml   |  x   |  x   | TO DO | Martial, Mary, Mathieu | 1 |
| T2 | Création du script project.sql. | project.sql |  src/bdd/project.sql | x |   x   | TO DO | Mathieu | 0.5 |
| T3 | Implémentation du script project.sql qui crée les tables de la base de données ainsi que leur champs respectifs. |  project.sql |  src/bdd/project.sql| x |  T2    | TO DO | Mathieu | 1 |
| T4 | Création de la page d'accueil comprenant la liste des projets et la possibilité de créer un projet. | index.html, index.js |  src/html/index.html, src/js/index.js | #3 |   x   | DOING | Mary | 0.5 |
| T5 | Implémentation de la page d'accueil avec un bouton "créer un projet" qui redirige vers la création d'un projet et une liste récupérant tous les projets existant de la base de données. | index.html, index.js |  src/html/index.html, src/js/index.js | #3 |   T4   | DOING | Mary | 1 |
| T9 | Implémentation de l'ajout d'un projet dans la base de données lorsque le bouton "créer" est cliqué et redirection vers la page d'accueil. S'il manque un champs obligatoire, une alerte "remplir tous les champs" s'affichent et le projet n'est pas créé. | creaproject.html, creaproject.js | src/html/creaproject.html, src/js/creaproject.js  | #3  | TC | TO DO | Mathieu | 1 |
| T10 | Création de la page du formulaire d'ajout d'une user story. | add_us.html | src/html/add_us.html | #8 | TE  | TO DO | Martial | 0.5 |
| T11 | Implémentation de la page du formulaire d'ajout d'une user story. Elle s'affiche lorsqu'on clique sur "ajouter une user story" du backlog.html. Le formulaire comprend les champs décrits dans l'user story #8. Un bouton "ajouter" doit finaliser l'ajout. | add_us.html | src/html/add_us.html | #8 | TE  | TO DO | Martial | 1 |
| T12 | Création du fichier add_us.js pour l'ajout de l'user story dans la base de données.| add_us.js | src/js/add_us.js | #8 | TF | TO DO | Martial | 0.5 |
| T13 | Implémentation de l'ajout de l'user story dans la base de données lorsque le bouton "créer" est cliqué, et redirection vers le backlog du projet. S'il manque un champs obligatoire, une alerte "remplir tous les champs" s'affichent et l'user story n'est pas créée. | add_us.js | src/js/add_us.js | #8 | TF | TO DO | Martial | 1 |
| T14 | Pré-construire le champs "description" dans le formulaire d'ajout de l'user story avec "En tant que", "je souhaite", "afin de". | add_us.html | src/html/add_us.html | #10 | TF | TO DO | Martial | 0.5 |
| T15 | Implémentation du bouton "modifier" à droite de l'user story dans backlog.html. Il redirige vers un formulaire de modification de l'user story en question. | backlog.html, backlog.js | src/html/backlog.html, src/js/backlog.js |  #11  |  | TO DO |  | 1 |
| T16 | Création de la page du formulaire de modification d'une user story. | edit_us.html | src/html/edit_us.html | #11 | TI | TO DO |  | 0.5 |
| T17 | Implémentation de la page du formulaire de modification d'une user story et du bouton "enregistrer les modifications" lorsqu'on clique sur "modifier". | edit_us.html | src/html/edit_us.html | #11 | TI | TO DO |  | 1 |
| T18 | Création de edit_us pour modifier l'user story dans la base de données.  | edit_us.js | src/js/edit_us.js | #11 | TJ  | TO DO |  | 0.5 |
| T19 | Implémentation de la modification l'user story dans la base de données lorsque le bouton "enregistrer les modifications" est cliqué, et redirection vers le backlog du projet. S'il manque un champs obligatoire, une alerte "remplir tous les champs" s'affichent et l'user story n'est pas modifiée. | edit_us.js | src/js/edit_us.js | #11 | TJ  | TO DO |  | 1 |
| T20 | Implémentation du bouton "Supprimer" à côté de chaque projet de la liste. | index.html | src/html/index.html | #5 | x  | TO DO | x | 0.5 |
| T21 | Implémentation du bouton "Modifier" à côté de chaque projet de la liste. | index.html | src/html/index.html | #5 | x  | TO DO | x | 0.5 |
| T22 | Création de la page de visualisation du backlog comprenant la liste des "user story" ainsi que des boutons "Modifier" et "Supprimer" à côté de chaque "user story" et un bouton "Ajouter une user story". | backlog.html, backlog.js | src/html/backlog.html, src/js/backlog.js | #9 | x  | TO DO | x | 0.5 |
| T23 | Implémentation de la page de visualisation du backlog montrant la liste des "user story" et les boutons. | backlog.html | src/html/backlog.html | #9, #11, #12 | x  | TO DO | x | 1 |
| T24 | Implémentation des opérations de redirection vers les formulaires d'ajout/modification et le déclenchement d'une pop-up d'avertissement de suppression. | backlog.js | src/js/backlog.js | #9, #11, #12 | x  | TO DO | x | 1 |


<!--
us : #3 (création projet), #8(ajout us),#10(us pré faite),#11(modif us)
pour chaque tache : ecriture d'un test unitaire ?
ecrire les testes de scenario (us)
 -->
