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
| __id_projet__ | __id_developpeur__ |
|---------------|--------------------|
|type/mode|type_mode|

User_Story
-------------
| id_us | description  | difficulte | priorite | sprint | __id_projet__ |
|-------|--------------|------------|----------|--------|---------------|
|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|

Sprint
-------------
| id_sprint | __id_projet__ |
|-----------|---------------|
|type/mode|type/mode|

Tache
------------
| id_tache | __id_us__ | description | nom_composant | chemin_ressource | description_composant | dependance_tache | __id_sprint |
|----------|-----------|-------------|---------------|------------------|-----------------------|------------------|----------------|
|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|

<!--
Il faut préciser le type de chaque attribut ainsi que son mode éventuel (auto increment par exemple)
 -->
