Liste des tables
=================

project
-----------------
| project_id | name  | thematic | owner | client | nb_dev | estimate_time | type_estimate_time |
|-----------|------|------------|--------------|--------|--------|------------------|----------|
|serial/primarykey|varchar(80)/NotNULL|varchar(255)/NotNULL|varchar(80)/NULL|varchar(80)/NULL|int/NULL|varchar(80)/NULL| varchar(10)/NotNULL  |

developer
--------------
| developer_id | last_name  | first_name | email | login | password |
|----------------|------|--------|------|-------------|--------------|
|serial/primarykey|varchar(80)/NotNULL|varchar(80)/NotNULL|varchar(255)/NotNULL|varchar(30)/NotNULL|varchar(30)/NotNULL|

project_membership
-------------
| *project_id* | *developer_id* |
|---------------|--------------------|
|int/primarykey|int/primarykey|

user_story
-------------
| us_id | *project_id*  | description | difficulty_level | priority | sprint|
|-------|--------------|------------|----------|--------|---------------|
|int/NotNULL/primarykey|int|text/NotNULL|int/NULL|varchar(4)/NULL|varchar(20)/NULL|

sprint
-------------
| sprint_id | *project_id* |
|-----------|---------------|
|serial/primarykey|int|

task
------------
| task_id | *sprint_id* | *us_id* | description | component_name | component_path  | task_dependency |
|----------|-----------|-------------|---------------|------------------|-----------------------|----------------|
|int/NotNULL/primarykey|int|int/NotNULL|text/NotNULL|varchar(80)/NotNULL|varchar(255)/NULL|text/NULL|

NB : Les champs en italique sont des clés étrangères.
