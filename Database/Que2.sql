/*Create a table to store student info (roll_no, name, city, marks).*/
CREATE TABLE student(roll_no int primary key,name varchar(30),city varchar(20),marks int);
SELECT * FROM student;

/*Insert following data in the table :
110, "adam", "Delhi", 76
108, "bob", "Mumbai", 65
124, "casey", "Pune", 94
112, "duke", "Pune", 80*/
INSERT INTO student 
VALUES(110,'adam','dehli',76),
(108,'bob','mumbai',65),
(124,'casey','pune',94),
(102,'duke','pune',80);

/*Select all students who scored 75+*/
SELECT roll_no,name FROM student WHERE marks>75;

/*Find names of all cities where students are from*/
SELECT roll_no,name FROM student WHERE city='pune';

/*Find the maximum marks of students from each city*/
SELECT city,max(marks) FROM student GROUP BY city;

/*Find the average of the class*/
SELECT avg(marks) FROM student;

/*Add a new column grade, assign grade such that :
marks > 80, grade = O
marks 70-80, grade = A
marks 60-70, grade ='B*/
ALTER TABLE student ADD grade VARCHAR(10);

UPDATE student
SET grade = 'O'
WHERE marks >= 80;

UPDATE student
SET grade = 'A'
WHERE marks BETWEEN 70 AND 80;

UPDATE student
SET grade = 'B'
WHERE marks BETWEEN 60 AND 70;