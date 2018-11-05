| id | description | composant | ressource | id us | dépendances | état | développeur |
|----|------------|---------------|--------|-------|-------------|----|-----|
| T1 | Ajout du docker au projet. | Docker  |  docker.ymd   |  x   |  x   | TO DO | Martial, Mary, Mathieu |
| T2 | Création du script project.sql. | Base de données |  project.sql| x |   x   | TO DO | Mathieu |
| T3 | Implémentation du script project.sql qui crée les tables de la base de données ainsi que leur champs respectifs. |  Base de données |  project.sql| x |  T2    | TO DO | Mathieu |
| T4 | Création de la page d'accueil comprenant la liste des projets et la possibilité de créer un projet. | Page d'accueil |  index.html, index.js | #3 |   x   | DOING | Mary |
| T5 | Implémentation de la page d'accueil avec un bouton "créer un projet" qui redirige vers la création d'un projet, et une liste récupérant tous les projets existant de la base de données. | Page d'accueil |  index.html, index.js | #3 |   T4   | DOING | Mary |
| T6 | Création de la page du formulaire de création de projet. | Formulaire de création de projet | creaproject.html  | #3 |  | TO DO | Mary |
| T7 | Implémentation de la page du formulaire pour la création de projet et du bouton "créer" pour finaliser la création. Le formulaire comprend les champs décrits dans l'user story #3. | Formulaire de création de projet | creaproject.html  | #3 |  | TO DO | Mary |
| T8 | Création du fichier creaproject.js. | Formulaire de création de projet | creaproject.js  | #3  | TC | TO DO | Mathieu |
| T9 | Implémentation de l'ajout d'un projet dans la base de données lorsque le bouton "créer" est cliqué et redirection vers la page d'accueil. S'il manque un champs obligatoire, une alerte "remplir tous les champs" s'affichent et le projet n'est pas créé. | Formulaire de création de projet | creaproject.js  | #3  | TC | TO DO | Mathieu |
| T10 | Création de la page du formulaire d'ajout d'une user story. | Formulaire d'ajout d'une user story | add_us.html | #8 | TE  | TO DO | Martial |
| T11 | Implémentation de la page du formulaire d'ajout d'une user story. Elle s'affiche lorsqu'on clique sur "ajouter une user story" du backlog.html. Le formulaire comprend les champs décrits dans l'user story #8. Un bouton "ajouter" doit finaliser l'ajout. | Formulaire d'ajout d'une user story | add_us.html | #8 | TE  | TO DO | Martial |
| T12 | Création du fichier add_us.js pour l'ajout de l'user story dans la base de données.| Formulaire d'ajout d'une user story | add_us.js | #8 | TF | TO DO | Martial |
| T13 | Implémentation de l'ajout de l'user story dans la base de données lorsque le bouton "créer" est cliqué, et redirection vers le backlog du projet. S'il manque un champs obligatoire, une alerte "remplir tous les champs" s'affichent et l'user story n'est pas créée. | Formulaire d'ajout d'une user story | add_us.js | #8 | TF | TO DO | Martial |
| T14 | Pré-construire le champs "description" dans le formulaire d'ajout de l'user story avec "En tant que", "je souhaite", "afin de". | Formulaire d'ajout d'une user story | add_us.html | #10 | TF | TO DO | Martial |
| T15 | Implémentation du bouton "modifier" à droite de l'user story dans backlog.html. Il redirige vers un formulaire de modification de l'user story en question. | Page du backlog | backlog.html, backlog.js |  #11  |  | TO DO |  |
| T16 | Création de la page du formulaire de modification d'une user story. | Formulaire de modification d'une user story | edit_us.html | #11 | TI | TO DO |  |
| T17 | Implémentation de la page du formulaire de modification d'une user story et du bouton "enregistrer les modifications" lorsqu'on clique sur "modifier". | Formulaire de modification d'une user story | edit_us.html | #11 | TI | TO DO |  |
| T18 | Création de edit_us pour modifier l'user story dans la base de données.  | Formulaire de modification d'une user story | edit_us.js | #11 | TJ  | TO DO |  |
| T19 | Implémentation de la modifiation l'user story dans la base de données lorsque le bouton "enregistrer les modifications" est cliqué, et redirection vers le backlog du projet. S'il manque un champs obligatoire, une alerte "remplir tous les champs" s'affichent et l'user story n'est pas modifiée. | Formulaire de modification d'une user story | edit_us.js | #11 | TJ  | TO DO |  |

<!--
us : #3 (création projet), #8(ajout us),#10(us pré faite),#11(modif us)
pour chaque tache : ecriture d'un test unitaire ?
ecrire les testes de scenario (us)
 -->
