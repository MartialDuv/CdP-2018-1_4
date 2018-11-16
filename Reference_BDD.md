Liste des tables
=================

project
-----------------
| project_id | name  | thematic | owner | client | nb_dev | estimate_time |
|-----------|------|------------|--------------|--------|--------|------------------|
|int/autoincrement|varchar(80)/NotNULL|varchar(255)/NotNULL|varchar(80)/NULL|varchar(80)/NULL|int/NULL|varchar(80)/NULL|

developer
--------------
| developer_id | last_name  | first_name | email | login | password |
|----------------|------|--------|------|-------------|--------------|
|int/autoincrement|varchar(80)/NotNULL|varchar(80)/NotNULL|varchar(255)/NotNULL|varchar(30)/NotNULL|varchar(30)/NotNULL|

project_membership
-------------
| *project_id* | *developer_id* |
|---------------|--------------------|
|int|int|

user_story
-------------
| us_id | *project_id*  | description | difficulty_level | priority | sprint|
|-------|--------------|------------|----------|--------|---------------|
|int/NotNULL|int|text/NotNULL|int/NULL|varchar(4)/NULL|varchar(20)/NULL|

sprint
-------------
| sprint_id | *project_id* |
|-----------|---------------|
|int/autoincrement|int|

task
------------
| task_id | *sprint_id* | *us_id* | description | component_name | component_path  | task_dependency |
|----------|-----------|-------------|---------------|------------------|-----------------------|----------------|
|int/NotNULL|int|int/NotNULL|text/NotNULL|varchar(80)/NotNULL|varchar(255)/NULL|text/NULL|

<!--
Les identifiants de chaque table ne peuvent pas être NULL
Les clés étrangères sont en italique
 -->
