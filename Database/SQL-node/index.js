const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'delta_app',
    password:'Pratik#07'
});
try {
    connection.query("SELECT * FROM temp", (err, result) => {
        if (err) throw err;
        console.log(result);
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
