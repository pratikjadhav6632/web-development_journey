/*Create a database for your college.*/
CREATE DATABASE College;
USE  college;

/*Create a table named Teacher to store (id, name, subject, salary)*/
CREATE TABLE teacher(id int primary key,name varchar(30),subject varchar(30),salary int);
SELECT * FROM teacher;

/*Insert following data in the table :
23, "ajay", "math", 50,000
47, "bharat", "english", 60,000
18, "chetan", "chemistry", 45,000
9, "divya", "physics", 75,000*/
INSERT INTO teacher 
VALUES(23,'ajay','math',50000),
(47,'bharat','english',60000),
(18,'chetan','chemistry',45000),
(9,'divya','physics',75000);

/*Select teachers whose salary is more than 55K*/
SELECT id,name FROM teacher WHERE salary>55000;

/*Rename the salary column of teacher table to ctc*/
ALTER TABLE teacher CHANGE COLUMN salary CTC int;

/*Update salary of all teachers by giving them an increment of 25%*/
UPDATE teacher SET CTC=CTC+(0.25)*CTC;

/*Add a new column for teachers called city. The default city should be "Gurgaon"*/
ALTER TABLE teacher ADD city varchar(30) DEFAULT 'Gurgaon';

/*Delete the salary column for teacher table*/
ALTER TABLE teacher DROP COLUMN CTC;