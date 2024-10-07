show databases;
show tables from sakila;

select * from sakila.actor;
 ALTER USER 'root'@'localhost' IDENTIFIED BY 'Temporal+1600';
 flush privileges;
 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Temporal+1600';
 GRANT ALL PRIVILEGES ON * to 'root'@'localhost';
  flush privileges;
 CREATE USER 'sqluser'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
 GRANT ALL PRIVILEGES ON * to 'sqluser'@'%';
 FLUSH PRIVILEGES;