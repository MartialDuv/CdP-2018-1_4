Pour le dockerfile tomcat :
https://store.docker.com/images/tomcat?tab=description

version choisie : 9.0.12-jre11-slim (la dernière dans la liste)

Pour utiliser tomcat (9.0.12) :
*$ docker run -it --rm -p 8888:8080 tomcat:8.0*

Pour tester si ça marche, il faut aller http://localhost:8888 dans un navigateur


Pour le dockerfile postgres :

https://store.docker.com/images/postgres

version choisie : 11.0 (la première dans la liste)

Pour lancer une instance postgres :

*$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres*

Pour se connecter à Postgres depuis une application

*$ docker run --name some-app --link some-postgres:postgres -d application-that-uses-postgres*
