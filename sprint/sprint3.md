User stories du sprint 3
--

*Anciennement sprint 2*
-----------------------

| id | user story  | priorité | difficulté | sprint |
|----|-------------|----------|------------|--------|
| #4 |  En tant que développeur, je souhaite pouvoir supprimer un projet afin qu'il ne soit plus disponible dans mon espace. Pour cela, je dois cliquer sur le bouton "supprimer" à droite du nom du projet en question. |  haute  |  1  |  3  |
| #5 |  En tant que développeur, je souhaite pouvoir modifier un projet afin de changer les informations relatives au projet. Pour cela, je dois cliquer sur le bouton "modifier". |  haute  |  2  |  3  |
| #9 | En tant que développeur, je souhaite visualiser le backlog du projet afin de consulter la liste des "user story" du projet.  |  haute  |  2  |  3  |
| #11 | En tant que développeur, je souhaite pouvoir modifier une "user story". Pour cela, je peux cliquer sur le bouton "modifier" à droite de l'"user story" en question.  | haute  |  2  |  3  |
| #12 | En tant que développeur, je souhaite pouvoir supprimer une "user story". Pour cela, je peux cliquer sur le bouton "supprimer" à droite de l'"user story" en question.  | haute  |  1  |  3  |


*Nouvellement sprint 3*
----------------------

| id | user story  | priorité | difficulté | sprint |
|----|-------------|----------|------------|--------|
| #1 | En tant que visiteur, je souhaite pouvoir m'enregistrer en tant que développeur. Pour cela, je dois remplir un formulaire composé de : nom, prénom, mail, identifiant, mot de passe. Toutes les informations sont obligatoires lors de l'enregistrement.  |  moyenne  |  4  |  3  |
| #2 | En tant que visiteur, je souhaite pouvoir me connecter en tant que développeur afin de créer un projet ou rejoindre un projet existant. | moyenne |  3  |  3  |
| #6 | En tant que développeur, je souhaite pouvoir ajouter d'autres développeurs sur mon projet afin qu'ils puissent y participer. Pour cela, je dois renseigner l'identifiant du développeur sur la zone de recherche attribuée. | moyenne |  3  |  3  |
| #7 | En tant que développeur, je souhaite pouvoir supprimer des développeurs sur mon projet afin de gérer les participants au projet.  |  moyenne  |  2  |  3  |
| #13 |  En tant que développeur, je souhaite ajouter des sprints afin de pouvoir les consulter ultérieurement. Chaque sprint contient un numéro et une liste de tâches associée. Lors de l'ajout, le numéro est obligatoire alors que la liste de tâches est optionnelle. |  basse  |  3  |  3  |
| #14 |  En tant que développeur, je souhaite modifier l'id d'un sprint. Pour cela, je peux cliquer sur "modifier" à droite du sprint en question. |  basse  | 1  |  3  |
| #15 | En tant que développeur, je souhaite ajouter une tâche dans un sprint. Pour cela, je dois renseigner un id, l'id de l'user story à laquelle la tâche correspond, une description de la tâche, un nom du composant, le chemin de la ressource, et les dépendances avec les autres tâches. Lors de l'ajout d'une tâche, le chemin de la ressource, la description du composant ainsi que les dépendances avec les autres tâches sont optionnels, le reste des champs est obligatoire. Il y a également un état de la tâche qui est par défaut "à faire". |  basse  |  3  |    3 |
| #16 | En tant que développeur, je souhaite pouvoir modifier l'état de chaque tâche parmi une sélection d'état : "à faire", "en cours", "faite" afin d'avoir un suivi des tâches. Cet état est une colonne du tableau des tâches. |  basse  |    1  |  3  |
| #17 | En tant que développeur, je souhaite modifier une tâche. Pour cela, je peux cliquer sur le bouton "modifier" se situant à droite de la tâche en question. | basse  |  2  |  3  |
| #18 | En tant que développeur, je souhaite supprimer une tâche. Pour cela, je peux cliquer sur le bouton "supprimer" se situant à droite de la tâche en question.  | basse  |  1  |  3  |
| #19 | En tant que développeur, je souhaite pouvoir consulter les tâches d'un sprint afin de visualiser le travail à produire pour le sprint. |  basse  | 2  |   3  |
| #20 | En tant que développeur, je souhaite pouvoir visualiser la liste des sprints afin d'avoir une vue d'ensemble sur l'organisation du projet.   | basse   |  2  |  3  |
| #21 | En tant que développeur, je souhaite afficher le burn down chart afin de visualiser l'évolution de la quantité de travail qu'il reste. Pour cela, je dois cliquer sur le bouton "visualiser le burn down chart".  |  basse   |  7  | 3  |

Tâches du sprint 3
------------------


*Anciennement sprint 2*
--

| id | description | composant | chemin composant | id us | dépendances | état | développeur | chiffrage (en jh) |
|----|------------|---------------|--------|----|----|----|-----|----|
| T1 | Implémentation de l'ajout d'un projet dans la base de données lorsque le bouton "créer" est cliqué et redirection vers le formulaire de création. S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affichent et le projet n'est pas créé. | creaproject.ejs, creaproject.js | src/views/creaproject.ejs, src/js/creaproject.js  | #3  | T3, T4 | DOING | Mary | 1 |
| T2 | Implémentation du formulaire d'ajout d'une user story. Il s'affiche lorsqu'on clique sur "ajouter une user story" de backlog.ejs.  S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affichent. L'user story est ajoutée dans la base de données en appuyant sur le bouton "créer"  | add_us.ejs | src/views/add_us.ejs | #8 | T3, T7 | DOING | Martial | 1 |
| T3 | Implémentation du bouton "modifier" à droite de l'user story dans backlog.ejs. Il redirige vers un formulaire de modification de l'user story. | backlog.ejs, backlog.js | src/views/backlog.ejs, src/js/backlog.js |  #11  | T17  | TO DO | Mathieu | 1 |
| T4 | Création de la page du formulaire de modification d'une user story. Les boutons de validation et d'annulation utiliseront la route "/backlog" pour revenir à la visualisation des user story.  | edit_us.ejs, edit_us.js | src/views/edit_us.ejs, src/js/edit_us.js | #11 | x | DOING | Martial | 0.5 |
| T5 | Implémentation du formulaire de modification d'une user story. S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affiche et l'user story n'est pas modifiée. L'user story est modifiée dans la base de données en appuyant sur le bouton "enregistrer les modifications". | edit_us.ejs | src/views/edit_us.ejs | #11 | T3, T11 | TO DO | Martial | 1 |
| T6 | Implémentation du bouton "Supprimer" à côté de chaque projet de la liste. Lorsqu'il est cliqué, une pop-up apparait avec l'avertissement de la suppression. | index.ejs, index.js | src/views/index.ejs, src/js/index.js | #4 | T3, T4  | DOING | Mary | 0.5 |
| T7 | Implémentation du bouton "Modifier" à côté de chaque projet de la liste. Lorsqu'il est cliqué, il redirige l'utilisateur vers un formulaire de modification de projet.| index.ejs, index.js | src/views/index.ejs, src/js/index.js | #5 | T3, T4  | TO DO | Mathieu | 0.5 |
| T8 | Création de la page du formulaire de modification d'un projet. Les boutons de validation et d'annulation utiliseront la route "/" pour revenir à la visualisation des projets. | edit_project.ejs, edit_project.js | src/views/edit_project.ejs, src/js/edit_project.js | #5 | x | TO DO | Martial | 0.5 |
| T9 | Implémentation du formulaire de modification d'un projet. S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affiche et le projet n'est pas modifié. Le projet est modifié dans la base de données en appuyant sur le bouton "enregistrer les modifications". | edit_project.ejs | src/views/edit_project.ejs | #5 | T3, T15 | TO DO | Martial | 1 |
| T10 | Création de la page de visualisation du backlog comprenant la liste des "user story" ainsi que des boutons "Modifier" et "Supprimer" à côté de chaque "user story" et un bouton "Ajouter une user story". Les boutons utiliseront les routes "/add_us", "/edit_us" et "/delete_us" pour rediriger vers les formulaires ou permettre la suppression. | backlog.ejs, backlog.js | src/views/backlog.ejs, src/js/backlog.js | #9 | x  | TO DO | Mary | 0.5 |
| T11 | Implémentation de la page de visualisation du backlog montrant la liste des "user story" et les boutons. | backlog.ejs | src/views/backlog.ejs | #9, #11, #12 | T3, T17  | TO DO | Mary | 1 |
| T12 | Implémentation des opérations de redirection vers les formulaires d'ajout/modification d'une "user story" et le déclenchement d'une pop-up d'avertissement de suppression d'une "user story". | backlog.js | src/js/backlog.js | #9, #11, #12 | T17, T18 | TO DO | Mathieu | 1 |
| T13 | Création des tests de validation des US. Ces tests seront effectués avec Puppeteer et Travis pour permettre de les automatiser. | test_US4.js, test_US5.js, test_US8.js, test_US9.js, test_US10.js, test_US11.js, test_US12.js |tests/test_US4.js, tests/test_US5.js, tests/test_US8.js, tests/test_US9.js, tests/test_US10.js , tests/test_US11.js , tests/test_US12.js| #4 | x | DOING | Mary | 1  |
| T14 | Implémentation du test de validation de l'US #4. Le test part de la page affichant les projets et clique sur le bouton "Supprimer" puis vérifie après validation sur la pop-up que le projet est supprimé dans la base de données. | test_US4.js | tests/test_US4.js | #4 | T13, T20  | TO DO | Mary | 1 |
| T15 | Implémentation du test de validation de l'US #5. Le test part de la page affichant les projets et clique sur le bouton "Modifier" puis modifie un ou plusieurs champs et vérifie que le projet est modifié dans la base de données. | test_US5.js | tests/test_US5.js | #5 | T14, T15, T16, T20  | TO DO | Mathieu | 1 |
| T16 | Implémentation du test de validation de l'US #8. Le test part de la page affichant les projets et choisit l'un des projets. Il se dirige ensuite vers le backlog et appuie sur le bouton "Ajouter une User story". Il entre ensuite les champs nécessaires et vérifie l'ajout dans la base de données. | test_US8.js | tests/test_US8.js | #8 | T7, T8, T20  | TO DO | Martial | 1 |
| T17 | Implémentation du test de validation de l'US #9. Le test part de la page affichant les projets et choisit l'un des projets. Il se dirige ensuite vers le backlog. Si aucune "user story" ne s'affiche, il en ajoute une à l'aide du bouton et du formulaire associé et vérifie ensuite qu'elle apparait sur la page du backlog. | test_US9.js | tests/test_US9.js | #9 | T16, T17, T18, T19, T20 | TO DO | Mary | 1 |
| T18 | Implémentation du test de validation de l'US #10. Le test part de la page affichant les projets et choisit l'un des projets. Il se dirige ensuite vers le backlog et appuie sur le bouton "Ajouter une User story". Il vérifie ensuite que le champ "description" est pré-construit avec les mots-clé : "En tant que", "je souhaite", "afin de". | test_US10.js | tests/test_US10.js | #10 | T9, T20  | TO DO | Martial | 1 |
| T19 | Implémentation du test de validation de l'US #11. Le test part de la page affichant les projets et choisit l'un des projets. Il se dirige ensuite vers le backlog. S'il n'y a aucune "user story" il en ajoute une à l'aide du bouton et du formulaire. Il clique sur le bouton "Modifier" à droite d'une "user story" et remplit ensuite le formulaire de modification. Enfin il vérifie la modification dans la base de données. | test_US11.js | tests/test_US11.js | #11 | T10, T11, T12, T18, T19 T20  | TO DO | Martial | 1 |
| T20 | Implémentation du test de validation de l'US #12. Le test part de la page affichant les projets et choisit l'un des projets. Il se dirige ensuite vers le backlog. S'il n'y a aucune "user story" il en ajoute une à l'aide du bouton et du formulaire. Il clique sur le bouton "Supprimer" à droite d'une "user story" et valide ensuite la pop-up qui apparait. Enfin il vérifie la suppression dans la base de données. | test_US12.js | tests/test_US12.js | #12 | T18, T19, T20 | TO DO  | Mathieu | 1 |

*Nouvellement sprint 3*
--
| id | description | composant | chemin composant | id us | dépendances | état | développeur | chiffrage (en jh) |
|----|------------|---------------|--------|----|----|----|-----|----|
| T21 | Ajout de sonar au projet pour contrôler la qualité du code | x  | x | x | x | DONE | Mary | 1 |
| T22 | Ajout d'un linter au projet pour vérifier le code (eslint)| x  | x | x | x | DOING | Mary | 1 |
| T23 | Implémentation des boutons d'enregistrement et de connexion d'un développeur sur la page d'accueil. Lorsqu'ils sont cliqués, ils redirigent vers le formulaire approprié. | index.ejs | src/views/index.ejs | #1, #2 | x | TO DO | x | 1 |
| T24 | Création de la page du formulaire d'enregistrement d'un développeur. Le bouton de validation utilisera la route "/" pour revenir à la visualisation des projets.  | add_dev.ejs, add_dev.js | src/views/add_dev.ejs, src/js/add_dev.js | #1 | x | TO DO | x | 0.5 |
| T25 | Implémentation du formulaire d'enregistrement d'un développeur. S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affiche et le développeur n'est pas enregistré. Le développeur est ajouté dans la base de données en appuyant sur le bouton "Enregistrer". | add_dev.ejs | src/views/add_dev.ejs | #1 | T23 | TO DO | x | 1 |
| T26 | Création de la page du formulaire de connexion d'un développeur qui demande de remplir le login ou l'email et le mot de passe. Le bouton de validation utilisera la route "/" pour revenir à la visualisation des projets.  | add_dev.ejs, add_dev.js | src/views/add_dev.ejs, src/js/add_dev.js | #1 | x | TO DO | x | 0.5 |
| T27 | Implémentation du formulaire de connexion d'un développeur. S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affiche et le développeur n'est pas connecté. L'existance du développeur dans la base de données est vérifiée en appuyant sur le bouton "Connexion". | connect_dev.ejs | src/views/connect_dev.ejs | #1 | T23 | TO DO | x | 1 |
| T28 | Implémentation d'une zone d'ajout d'un développeur au projet. Elle contiendra un champ de saisie du login du développeur à ajouter ainsi qu'un bouton de confirmation. On vérifiera que le champ de saisie n'est pas vide et que sa valeur est présente dans la table "developer". Si c'est le cas, on ajoutera l'autorisation du développeur à visualiser et modifier le projet dans la base de données. | project.ejs | src/views/project.ejs | #6 | x | TO DO | x | 1 |
| T29 | Implémentation d'une zone de suppression d'un développeur au projet. Elle contiendra un champ de saisie du login du développeur à supprimer ainsi qu'un bouton de confirmation. On vérifiera que le champ de saisie n'est pas vide et que sa valeur est présente dans la table "developer". Si c'est le cas, on supprimera l'autorisation du développeur à visualiser et modifier le projet dans la base de données. | project.ejs | src/views/project.ejs | #7 | x | TO DO | x | 1 |
| T30 | Création de la page du formulaire d'ajout d'un sprint. Le bouton de validation et d'annulation utilisera la route "/project" pour revenir à la visualisation du projet. | add_sprint.ejs, add_sprint.js | src/views/add_sprint.ejs, src/js/add_sprint.js | #13 | x | TO DO | x | 0.5 |
| T31 | Implémentation du formulaire d'ajout d'un sprint. S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affiche et le sprint n'est pas enregistré. Le sprint est ajouté dans la base de données en appuyant sur le bouton "créer". | add_sprint.ejs | src/views/add_sprint.ejs | #13 | T30 | TO DO | x | 1 |
| T32 | Création de la page de modification d'un sprint. Le bouton de validation et d'annulation utilisera la route "/project" pour revenir à la visualisation du projet. | edit_sprint.ejs, edit_sprint.js | src/views/edit_sprint.ejs, src/js/edit_sprint.js | #14 | x | TO DO | x | 0.5 |
| T33 | Implémentation du formulaire de modification d'un sprint. S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affiche et le sprint n'est pas enregistré. Le sprint est modifié dans la base de données en appuyant sur le bouton "Enregistrer les modifications". | edit_sprint.ejs | src/views/edit_sprint.ejs | #14 | T32 | TO DO | x | 1 |
