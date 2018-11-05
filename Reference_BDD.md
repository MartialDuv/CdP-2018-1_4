Liste des tables
=================

Projet
-----------------
| id_projet | nom  | thematique | proprietaire | client | nb_dev | estimation_duree |
|-----------|------|------------|--------------|--------|--------|------------------|
|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|

Développeur
--------------
| id_developpeur | nom  | prenom | mail | identifiant | mot_de_passe |
|----------------|------|--------|------|-------------|--------------|
|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|

Autorisation
-------------
| *id_projet* | *id_developpeur* |
|---------------|--------------------|
|type/mode|type_mode|

User_Story
-------------
| id_us | description  | difficulte | priorite | sprint | *id_projet* |
|-------|--------------|------------|----------|--------|---------------|
|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|

Sprint
-------------
| id_sprint | *id_projet* |
|-----------|---------------|
|type/mode|type/mode|

Tache
------------
| id_tache | *id_us* | description | nom_composant | chemin_ressource | description_composant | dependance_tache | *id_sprint* |
|----------|-----------|-------------|---------------|------------------|-----------------------|------------------|----------------|
|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|

<!--
Il faut préciser le type de chaque attribut ainsi que son mode éventuel (auto increment par exemple)
Les clés étrangères sont en italique
 -->
