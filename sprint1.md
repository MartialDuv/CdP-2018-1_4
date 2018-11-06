User stories du sprint 1
-----------------
| id | user story  | priorité | difficulté | sprint |
|----|-------|-------------|------------|-------------|
| #3 |  En tant que développeur, je souhaite pouvoir créer un projet. Pour cela, je dois renseigner sur un formulaire dédié : le nom du projet, une thématique, le propriétaire, le client, le nombre de développeurs et une estimation de la durée. Seuls le nom et la thématique du projet sont obligatoires, les autres sont facultatifs. |    haute               |    3     |    1    |
| #8 |  En tant que développeur, je souhaite ajouter mes "user story" dans un backlog, afin de pouvoir les visualiser. Pour cela, je dois renseigner un id, une description de la user story, une difficulté, une priorité et le sprint auquel l'user story appartient. L'id, la description et la difficulté sont obligatoires, la priorité et l'appartenance à un sprint est optionnel lors de l'ajout d'une "user story". |   haute       |    3     |   1     |
| #10 | En tant que développeur, je souhaite que la colonne "user story" soit pré-construite avec les mots clés "en tant que", "je souhaite", "afin de" dans le but de structurer facilement les "user story".  |        haute      |    2     |    1    |
| #11 | En tant que développeur, je souhaite pouvoir modifier une "user story". Pour cela, je peux cliquer sur le bouton "modifier" à droite de l'"user story" en question.  |    haute      |   2  |   1    |

Tâches du sprint 1
-----------------

| id | description | composant | ressource | id us | dépendances | état | développeur | chiffrage (en jh) |
|----|------------|---------------|--------|-------|-------------|----|-----|----|
| T1 | Ajout du docker au projet. | Docker  |  docker.ymd   |  x   |  x   | TO DO | Martial, Mary, Mathieu | 1 |
| T2 | Création du script project.sql. | Base de données |  project.sql| x |   x   | TO DO | Mathieu | 0.5 |
| T3 | Implémentation du script project.sql qui crée les tables de la base de données ainsi que leur champs respectifs. |  Base de données |  project.sql| x |  T2    | TO DO | Mathieu | 1 |
| T4 | Création de la page d'accueil comprenant la liste des projets et la possibilité de créer un projet. | Page d'accueil |  index.html, index.js | #3 |   x   | DOING | Mary | 0.5 |
| T5 | Implémentation de la page d'accueil avec un bouton "créer un projet" qui redirige vers la création d'un projet, et une liste récupérant tous les projets existant de la base de données. | Page d'accueil |  index.html, index.js | #3 |   T4   | DOING | Mary | 1 |
| T6 | Création de la page du formulaire de création de projet. | Formulaire de création de projet | creaproject.html  | #3 |  | TO DO | Mary | 0.5 |
| T7 | Implémentation de la page du formulaire pour la création de projet et du bouton "créer" pour finaliser la création. Le formulaire comprend les champs décrits dans l'user story #3. | Formulaire de création de projet | creaproject.html  | #3 |  | TO DO | Mary | 1 |
| T8 | Création du fichier creaproject.js. | Formulaire de création de projet | creaproject.js  | #3  | TC | TO DO | Mathieu |0.5|
| T9 | Implémentation de l'ajout d'un projet dans la base de données lorsque le bouton "créer" est cliqué et redirection vers la page d'accueil. S'il manque un champs obligatoire, une alerte "remplir tous les champs" s'affichent et le projet n'est pas créé. | Formulaire de création de projet | creaproject.js  | #3  | TC | TO DO | Mathieu | 1 |
| T10 | Création de la page du formulaire d'ajout d'une user story. | Formulaire d'ajout d'une user story | add_us.html | #8 | TE  | TO DO | Martial | 0.5 |
| T11 | Implémentation de la page du formulaire d'ajout d'une user story. Elle s'affiche lorsqu'on clique sur "ajouter une user story" du backlog.html. Le formulaire comprend les champs décrits dans l'user story #8. Un bouton "ajouter" doit finaliser l'ajout. | Formulaire d'ajout d'une user story | add_us.html | #8 | TE  | TO DO | Martial | 1 |
| T12 | Création du fichier add_us.js pour l'ajout de l'user story dans la base de données.| Formulaire d'ajout d'une user story | add_us.js | #8 | TF | TO DO | Martial | 0.5 |
| T13 | Implémentation de l'ajout de l'user story dans la base de données lorsque le bouton "créer" est cliqué, et redirection vers le backlog du projet. S'il manque un champs obligatoire, une alerte "remplir tous les champs" s'affichent et l'user story n'est pas créée. | Formulaire d'ajout d'une user story | add_us.js | #8 | TF | TO DO | Martial | 1 |
| T14 | Pré-construire le champs "description" dans le formulaire d'ajout de l'user story avec "En tant que", "je souhaite", "afin de". | Formulaire d'ajout d'une user story | add_us.html | #10 | TF | TO DO | Martial | 0.5 |
| T15 | Implémentation du bouton "modifier" à droite de l'user story dans backlog.html. Il redirige vers un formulaire de modification de l'user story en question. | Page du backlog | backlog.html, backlog.js |  #11  |  | TO DO |  | 1 |
| T16 | Création de la page du formulaire de modification d'une user story. | Formulaire de modification d'une user story | edit_us.html | #11 | TI | TO DO |  | 0.5 |
| T17 | Implémentation de la page du formulaire de modification d'une user story et du bouton "enregistrer les modifications" lorsqu'on clique sur "modifier". | Formulaire de modification d'une user story | edit_us.html | #11 | TI | TO DO |  | 1 |
| T18 | Création de edit_us pour modifier l'user story dans la base de données.  | Formulaire de modification d'une user story | edit_us.js | #11 | TJ  | TO DO |  | 0.5 |
| T19 | Implémentation de la modifiation l'user story dans la base de données lorsque le bouton "enregistrer les modifications" est cliqué, et redirection vers le backlog du projet. S'il manque un champs obligatoire, une alerte "remplir tous les champs" s'affichent et l'user story n'est pas modifiée. | Formulaire de modification d'une user story | edit_us.js | #11 | TJ  | TO DO |  | | 1 |

<!--
us : #3 (création projet), #8(ajout us),#10(us pré faite),#11(modif us)
pour chaque tache : ecriture d'un test unitaire ?
ecrire les testes de scenario (us)
 -->
