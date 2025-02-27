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
        // console.log(result.length);
        // console.log(result[0]);
    });
} catch (err) {
    console.log(err);
}
connection.end();
let getRandomUser = () => {
    return {
        user_id: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
};

console.log(getRandomUser());
