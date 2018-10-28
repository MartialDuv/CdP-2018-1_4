| id | description | nom composant | chemin | id us | dépendances |
|----|------------|---------------|--------|-------|-------------|
| TA | Ajout du docker au projet. | docker.ymd  |     |     |     |
| TB | Page d'accueil comprenant la liste des projets et un bouton "créer un projet" qui redirige vers la création d'un projet. | index.html |   | #3 |      |
| TC | Page du formulaire pour la création de projet et bouton "créer" pour finaliser la création. | creaprojet.html |   | #3 |  |
| TD | Ajouter un projet dans la base de données lorsque le bouton "créer" est cliqué et redirection vers la page d'accueil. | creaprojet.html |   | #3  |  |
| TE | Page du backlog du projet lorsqu'on clique sur un projet. Un bouton "ajouter une user story" est disponible. | index.html |        | #8 |             |
| TF | Page du formulaire d'ajout d'une user story lorsqu'on clique sur "ajouter une user story" et bouton "ajouter" pour finaliser l'ajout. | add_us.html |        | #8 |             |
| TG créer| Ajouter l'user story dans la base de données lorsque le bouton "créer" est cliqué, et redirection vers le backlog du projet.  | add_us.html |        | #8 |    |
| TH | Pré-construire le champs "description" dans le formulaire d'ajout de l'user story avec "En tant que", "je souhaite", "afin de". | add_us.html |        | #10 |   |
| TI | Bouton "modifier" à droite de l'user story redirige vers un formulaire de modification de l'user story en question. | backlog_nomprojet.html | |  #11  |  |
| TJ | Page du formulaire de modification d'une user story et bouton "enregistrer les modifications" lorsqu'on clique sur "modifier" | edit_us.html |    | #11 |  |
| TK | Modifier l'user story dans la base de données lorsque le bouton "enregistrer les modifications" est cliqué, et redirection vers le backlog du projet.  | add_us.html |        | #11 |    ||

<!--
us : #3 (création projet), #8(ajout us),#10(us pré faite),#11(modif us) -->
