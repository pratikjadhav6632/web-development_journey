const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'delta_app',
    password:'Pratik#07'
});

let a="CREATE TABLE user(id INT PRIMARY KEY,username VARCHAR(20) NOT NULL,email VARCHAR(30) UNIQUE NOT NULL,password VARCHAR(30) NOT NULL)";
let q="SHOW TABLES";
try {
    connection.query(q,/*a,*/ (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
    });
} catch (err) {
    console.log(err);
}

let qu="INSERT INTO user (id,username,email,password)VALUES ?";
let users=[["1","Kishor",'kishor@gmail.com','kishor@097'],
           ['2','ajay','ajay@gmail.com','kishor@123']];
try {
    connection.query(qu,[users], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}


let getRandomUser = () => {
    return [
         faker.string.uuid(),
         faker.internet.username(),
        faker.internet.email(),
         faker.internet.password()
    ];
};
let data=[];
let quer="INSERT INTO user (id,username,email,password)VALUES ?";
for(i=1;i<=100;i++)
{
    data.push(getRandomUser());
}

try {
        connection.query(quer,[data],(err, result) => {
            if (err) throw err;
            console.log(result);
        });
    } catch (err) {
        console.log(err);
    }
    
console.log(getRandomUser());

connection.end();