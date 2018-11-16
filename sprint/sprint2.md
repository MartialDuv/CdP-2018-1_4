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
| T2 | Création du fichier project.sql. | project.sql |  src/bdd/project.sql | x |   x   | DOING | Mathieu  | 0.5 |
| T3 | Implémentation du script project.sql qui crée les tables de la base de données ainsi que leur champs respectifs. |  project.sql |  src/bdd/project.sql| x |  T2  | TO DO | Mathieu | 0.5 |
| T4 | Création de la page d'accueil comprenant la liste des projets et la possibilité de créer un projet. | index.ejs, index.js |  src/views/index.ejs, src/js/index.js | #3 |   x   | TO DO | Mary | 0.5 |
| T5 | Implémentation de l'ajout d'un projet dans la base de données lorsque le bouton "créer" est cliqué et redirection vers le formulaire de création. S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affichent et le projet n'est pas créé. | creaproject.ejs, creaproject.js | src/views/creaproject.ejs, src/js/creaproject.js  | #3  | T3, T4 | TO DO | Mary | 1 |
| T6 | Création de la page d'ajout d'une user story. | add_us.ejs, add_us.js | src/views/add_us.ejs, src/js/add_us.js | #8 | x  | TO DO | Martial | 0.5 |
| T7 | Implémentation du formulaire d'ajout d'une user story. Il s'affiche lorsqu'on clique sur "ajouter une user story" de backlog.ejs.  S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affichent. L'user story est ajoutée dans la base de données en appuyant sur le bouton "créer"  | add_us.ejs | src/views/add_us.ejs | #8 | T3, T6  | TO DO | Martial | 1 |
| T8 | Pré-construire le champ "description" dans le formulaire d'ajout de l'user story avec "En tant que", "je souhaite", "afin de". | add_us.ejs | src/views/add_us.ejs | #10 | T3, T6 | TO DO | Martial | 0.5 |
| T9 | Implémentation du bouton "modifier" à droite de l'user story dans backlog.ejs. Il redirige vers un formulaire de modification de l'user story. | backlog.ejs, backlog.js | src/views/backlog.ejs, src/js/backlog.js |  #11  | T8  | TO DO | Mathieu | 1 |
| T10 | Création de la page du formulaire de modification d'une user story. | edit_us.ejs, edit_us.js | src/views/edit_us.ejs, src/js/edit_us.js | #11 | x | TO DO | Martial | 0.5 |
| T11| Implémentation du formulaire de modification d'une user story. S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affiche et l'user story n'est pas modifiée. L'user story est modifiée dans la base de données en appuyant sur le bouton "enregistrer les modifications". | edit_us.ejs | src/views/edit_us.ejs | #11 | T3, T10 | TO DO | Martial | 1 |
| T12 | Implémentation du bouton "Supprimer" à côté de chaque projet de la liste. Lorsqu'il est cliqué, une pop-up apparait avec l'avertissement de la suppression. | index.ejs, index.js | src/views/index.ejs, src/js/index.js | #4 | T3, T4  | TO DO | Mary | 0.5 |
| T13 | Implémentation du bouton "Modifier" à côté de chaque projet de la liste. Lorsqu'il est cliqué, il redirige l'utilisateur vers un formulaire de modification de projet.| index.ejs, index.js | src/views/index.ejs, src/js/index.js | #5 | T3, T4  | TO DO | Mathieu | 0.5 |
| T14 | Création de la page du formulaire de modification d'un projet. | edit_project.ejs, edit_project.js | src/views/edit_project.ejs, src/js/edit_project.js | #5 | Mary | TO DO | Martial | 0.5 |
| T15| Implémentation du formulaire de modification d'un projet. S'il manque un champ obligatoire, une alerte "remplir tous les champs obligatoires" s'affiche et le projet n'est pas modifié. Le projet est modifié dans la base de données en appuyant sur le bouton "enregistrer les modifications". | edit_project.ejs | src/views/edit_project.ejs | #5 | T3, T14 | TO DO | Martial | 1 |
| T16 | Création de la page de visualisation du backlog comprenant la liste des "user story" ainsi que des boutons "Modifier" et "Supprimer" à côté de chaque "user story" et un bouton "Ajouter une user story". | backlog.ejs, backlog.js | src/views/backlog.ejs, src/js/backlog.js | #9 | x  | TO DO | Mary | 0.5 |
| T17 | Implémentation de la page de visualisation du backlog montrant la liste des "user story" et les boutons. | backlog.ejs | src/views/backlog.ejs | #9, #11, #12 | T3, T15  | TO DO | Mary | 1 |
| T18 | Implémentation des opérations de redirection vers les formulaires d'ajout/modification d'une "user story" et le déclenchement d'une pop-up d'avertissement de suppression d'une "user story". | backlog.js | src/js/backlog.js | #9, #11, #12 | T3, T15  | TO DO | Mathieu | 1 |
| T19 | Création du test de validation de l'US #4. | à préciser | à préciser | #4 | T12 | TO DO | Mary | 0.5 |
| T20 | Implémentation du test de validation de l'US #4. Le test part de la page affichant les projets et clique sur le bouton "Supprimer" puis vérifie après validation sur la pop-up que le projet est supprimé dans la base de données. | à préciser | à préciser | #4 | T19  | TO DO | Mary | 1 |
| T21 | Création du test de validation de l'US #5. | à préciser | à préciser | #5 | T15 | TO DO | Mathieu | 0.5 |
| T22 | Implémentation du test de validation de l'US #5. Le test part de la page affichant les projets et clique sur le bouton "Modifier" puis modifie un ou plusieurs champs et vérifie que le projet est modifié dans la base de données. | à préciser | à préciser | #5 | T21  | TO DO | Mathieu | 1 |
| T23 | Création du test de validation de l'US #8. | à préciser | à préciser | #8 | T7| TO DO | Martial | 0.5 |
| T24 | Implémentation du test de validation de l'US #8. Le test part de la page affichant les projets et choisit l'un des projets. Il se dirige ensuite vers le backlog et appuie sur le bouton "Ajouter une User story". Il entre ensuite les champs nécessaires et vérifie l'ajout dans la base de données. | à préciser | à préciser | #8 | T23  | TO DO | Martial | 1 |
| T25 | Création du test de validation de l'US #9. | à préciser | à préciser | #9 | T17| TO DO | Mary | 0.5 |
| T26 | Implémentation du test de validation de l'US #9. Le test part de la page affichant les projets et choisit l'un des projets. Il se dirige ensuite vers le backlog. Si aucune "user story" ne s'affiche, il en ajoute une à l'aide du bouton et du formulaire associé et vérifie ensuite qu'elle apparait sur la page du backlog. | à préciser | à préciser | #9 | T25  | TO DO | Mary   | 1 |
| T27 | Création du test de validation de l'US #10. | à préciser | à préciser | #10 | T8| TO DO | Martial | 0.5 |
| T28 | Implémentation du test de validation de l'US #10. Le test part de la page affichant les projets et choisit l'un des projets. Il se dirige ensuite vers le backlog et appuie sur le bouton "Ajouter une User story". Il vérifie ensuite que le champ "description" est pré-construit avec les mots-clé : "En tant que", "je souhaite", "afin de". | à préciser | à préciser | #10 | T27  | TO DO | Martial | 1 |
| T29 | Création du test de validation de l'US #11. | à préciser | à préciser | #11 | T11| TO DO | Martial | 0.5 |
| T30 | Implémentation du test de validation de l'US #11. Le test part de la page affichant les projets et choisit l'un des projets. Il se dirige ensuite vers le backlog. S'il n'y a aucune "user story" il en ajoute une à l'aide du bouton et du formulaire. Il clique sur le bouton "Modifier" à droite d'une "user story" et remplit ensuite le formulaire de modification. Enfin il vérifie la modification dans la base de données. | à préciser | à préciser | #11 | T29  | TO DO | Martial | 1 |
| T31 | Création du test de validation de l'US #12. | à préciser | à préciser | #12 | T18| TO DO | Mathieu | 0.5 |
| T32 | Implémentation du test de validation de l'US #12. Le test part de la page affichant les projets et choisit l'un des projets. Il se dirige ensuite vers le backlog. S'il n'y a aucune "user story" il en ajoute une à l'aide du bouton et du formulaire. Il clique sur le bouton "Supprimer" à droite d'une "user story" et valide ensuite la pop-up qui apparait. Enfin il vérifie la suppression dans la base de données. | à préciser | à préciser | #12 | T31  | TO DO | Mathieu | 1 |







<!--
us : #3 (création projet), #8(ajout us),#10(us pré faite),#11(modif us)
pour chaque tache : ecriture d'un test unitaire ?
ecrire les testes de scenario (us)
 -->
