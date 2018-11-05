Liste des tables
=================

project
-----------------
| project_id | name  | thematic | owner | client | nb_dev | estimate_time |
|-----------|------|------------|--------------|--------|--------|------------------|
|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|

developer
--------------
| developer_id | last_name  | first_name | e-mail | login | password |
|----------------|------|--------|------|-------------|--------------|
|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|

project_membership
-------------
| *project_id* | *developer_id* |
|---------------|--------------------|
|type/mode|type_mode|

user_story
-------------
| us_id | *project_id*  | description | difficulty_level | priority | sprint|
|-------|--------------|------------|----------|--------|---------------|
|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|

sprint
-------------
| sprint_id | *project_id* |
|-----------|---------------|
|type/mode|type/mode|

task
------------
| task_id | *sprint_id* | *us_id* | description | component_name | component_path | component_description | task_dependency |
|----------|-----------|-------------|---------------|------------------|-----------------------|------------------|----------------|
|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|type/mode|

<!--
Il faut préciser le type de chaque attribut ainsi que son mode éventuel (auto increment par exemple)
Les clés étrangères sont en italique
 -->
