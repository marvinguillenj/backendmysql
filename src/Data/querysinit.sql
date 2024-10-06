/*show databases;
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
*/


 SELECT * FROM `database_development`.`posts` LIMIT 1000;
 select *  FROM `database_development`.`users` LIMIT 1000;
 --SELECT * FROM `database_development`.`categories` LIMIT 1000;

 insert into 
  addresses (
    
    address, 
    `userId`, 
    `createdAt`, 
    `updatedAt`
  )
values
  (
     
    "San Pedro Sula", 
    4, 
    NOW(), 
    NOW()
  );
  
  SELECT id,address,`userId`,`createdAt`,`updatedAt` FROM addresses;


   update 
    posts 
  set 
    userId = NULL
      
  where 
    id in (10)
  ;

    
insert into 
  addresses (
    
    address, 
    `userId`, 
    `createdAt`, 
    `updatedAt`
  )
values
  (
     
    "San Pedro Sula", 
    4, 
    NOW(), 
    NOW()
  );
  
  SELECT id,address,`userId`,`createdAt`,`updatedAt` FROM addresses;
  
  SELECT id,title,content,`imageUrl`,`categoryId`,`userId`,`createdAt`,`updatedAt` FROM posts;
  
  SELECT * FROM categories;
  
  
  DELETE FROM sequelizemeta
  where name ='20241006205826-create-postcategory.js';
  
  SELECT id,name,`createdAt`,`updatedAt` FROM categories;
  
  SELECT id,title,content,`imageUrl`,`categoryId`,`userId`,`createdAt`,`updatedAt` FROM posts;

   
  insert into 
    postcategories (
      
      `postId`, 
      `categoryId`, 
      `createdAt`, 
      `updatedAt`
    )
  values
    (
      
      20, 
      3, 
     NOW(),
     NOW()
    );


  SELECT id,`postId`,`categoryId`,`createdAt`,`updatedAt` FROM postcategories;