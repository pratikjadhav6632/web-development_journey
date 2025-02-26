create database Instagram; /*Create database*/

use instagram; /*connect DB*/

/*Create table user*/
create table user(
       id int primary key,
       name varchar(20),
       email varchar(30)
       );

/*Create table post*/     
create table post(
		user_id int primary key,
        title varchar(10),
        content varchar(30),
        foreign key (user_id) references user(id)
        );

/*Insert values into table*/   
insert into user values(1,'ajay','ajay@gmail');
insert into post values(1,'achivement','its my first achivement ');

/*Display all/full table*/
select * from user  ,post;

/*Display specific id row only*/
select email,title,content from user,post where id=1;

/*Alter  in user table add age column*/
alter table user add age int;

/*Alter  in user table add followers column*/
alter table user add followers int;

/*Alter  in user table add following  column*/
alter table user add following int;

/*Alter  in user table remove email column*/
alter table user drop column email;

/*Alter  in user table add email column*/
alter table user add email varchar(30);

/*update user table where id=1*/
update user set age=14,followers=200,following=300 where id=1 ; 

/*updat email where id=1*/
update user set email="ajay@gmail.com" where id=1 ; 

/*Display user table*/
select * from user;

/*Insert bulk values in user table */
insert into user 
values(2,'kishor',18,300,340,'kishor@gmail.com'),
(3,'samay',24,3000,1000,'samay69@gmail.com'),
(4,'abhi',21,500,240,'abhi26@gmail.com'),
(5,'riya',19,390,390,'riya2@gmail.com');

/*perform frequently used operator operation using where clause*/
select name,age,followers,email from user where id between 1 and 4; /*BETWEEN operator*/
select name,age,followers,email from user where email in('abhi26@gmail.com','samay69@gmail.com','abc@gmail.com'); /*IN operator*/
select name,email,followers from user where age<20 and followers<400;/*AND operator*/
select name,email,age,followers from user where age>20 or followers>500;/*OR operator*/
select name,age,followers,email from user where email Not in('abhi26@gmail.com','samay69@gmail.com','abc@gmail.com');/*NOT IN operator*/

/*LIMIT CLAUSE*/
SELECT name,age,email FROM user WHERE age > 18 LIMIT 2;

/*ORDER BY Clause*/
SELECT name,age,email,followers FROM user ORDER BY age ASC; /*Ascending*/
SELECT name,age,email,followers FROM user ORDER BY followers DESC;/*Descending*/

/*Aggregate Function*/
SELECT sum(followers) FROM user; /*SUM*/
SELECT avg(followers) FROM user;/*AVG*/
SELECT count(age) FROM user WHERE age<20;/*COUNT*/
SELECT max(followers) FROM user;/*MAX*/
SELECT min(followers) FROM user;/*MIN*/

/*GROUP BY Clause*/
SELECT age,count(age) FROM user GROUP BY age;