| id | description | nom composant | chemin | id us | dépendances |
|----|------------|---------------|--------|-------|-------------|
| TA | Ajout du docker au projet. | Docker  |  docker.ymd   |  x   |  x   |
| TB | Page d'accueil comprenant la liste des projets et un bouton "créer un projet" qui redirige vers la création d'un projet. | Page des projets |  index.html, index.js | #3 |      |
| TC | Page du formulaire pour la création de projet et bouton "créer" pour finaliser la création. | Formulaire de création de projet | creaprojet.html  | #3 |  |
| TD | Ajouter un projet dans la base de données lorsque le bouton "créer" est cliqué et redirection vers la page d'accueil. | Formulaire de création de projet | creaprojet.js  | #3  | TC |
| TE | Page du backlog du projet lorsqu'on clique sur un projet. Un bouton "ajouter une user story" est disponible. | Page du backlog | backlog.html, backlog.js| #9 | TD |
| TF | Page du formulaire d'ajout d'une user story lorsqu'on clique sur "ajouter une user story" et bouton "ajouter" pour finaliser l'ajout. | Formulaire d'ajout d'une user story | add_us.html | #8 | TE  |
| TG | Ajouter l'user story dans la base de données lorsque le bouton "créer" est cliqué, et redirection vers le backlog du projet.  | Formulaire d'ajout d'une user story | add_us.js | #8 | TF |
| TH | Pré-construire le champs "description" dans le formulaire d'ajout de l'user story avec "En tant que", "je souhaite", "afin de". | Formulaire d'ajout d'une user story | add_us.html | #10 | TF |
| TI | Bouton "modifier" à droite de l'user story redirige vers un formulaire de modification de l'user story en question. | Page du backlog | backlog.html, backlog.js |  #11  |  |
| TJ | Page du formulaire de modification d'une user story et bouton "enregistrer les modifications" lorsqu'on clique sur "modifier" | Formulaire de modification d'une user story | edit_us.html | #11 | TI |
| TK | Modifier l'user story dans la base de données lorsque le bouton "enregistrer les modifications" est cliqué, et redirection vers le backlog du projet.  | Formulaire de modification d'une user story | edit_us.js | #11 | TJ  ||

<!--
us : #3 (création projet), #8(ajout us),#10(us pré faite),#11(modif us) -->
