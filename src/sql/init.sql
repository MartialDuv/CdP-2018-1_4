CREATE DATABASE docker;
GRANT ALL PRIVILEGES ON DATABASE docker TO cdp;
\c docker

CREATE TABLE project (
	project_id SERIAL,
	name varchar(80) NOT NULL,
	thematic varchar(255) NOT NULL,
	owner varchar(80) NULL,
	client varchar(80) NULL,	
	nb_dev int NULL,
	estimate_time varchar(80) NULL,
	type_estimate_time varchar(10) NOT NULL,
	PRIMARY KEY(project_id)
);

CREATE TABLE developer (
	developer_id SERIAL,
	last_name varchar(80) NOT NULL,
	first_name varchar(80) NOT NULL,
	email varchar(255) NOT NULL,
	login varchar(40) NOT NULL,
	password varchar(40) NOT NULL,
	PRIMARY KEY(developer_id)
);


CREATE TABLE project_membership (
	project_id int NOT NULL,
	developer_id int NOT NULL,
	PRIMARY KEY(project_id, developer_id),
	FOREIGN KEY(project_id) REFERENCES project (project_id),
	FOREIGN KEY(developer_id) REFERENCES developer (developer_id)
);

CREATE TABLE user_story (
	us_id int NOT NULL,
	project_id int,
	description text NOT NULL,
	difficulty_level int NULL,
	priority varchar(4) NULL,
	sprint varchar(30) NULL,
	PRIMARY KEY(us_id),
	FOREIGN KEY(project_id) REFERENCES project (project_id)
);

CREATE TABLE sprint (
	sprint_id SERIAL,
	project_id int,
	PRIMARY KEY(sprint_id),
	FOREIGN KEY(project_id) REFERENCES project (project_id)
);

CREATE TABLE task (
	task_id int NOT NULL,
	sprint_id int,
	us_id int NOT NULL,
	description text NOT NULL,
	component_name varchar(80) NOT NULL,
	component_path varchar(255) NULL,
	task_dependency text NULL,
	PRIMARY KEY(task_id),
	FOREIGN KEY(sprint_id) REFERENCES sprint(sprint_id),
	FOREIGN KEY(us_id) REFERENCES user_story(us_id)
);