const express = require("express");
const { readlinkSync } = require("fs");
const app = express();
const Port = 8080;
const mysql = require("mysql2");
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");
const { th } = require("@faker-js/faker");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public/css")));

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Pratik#07'
});

//create home route
app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result[0]);
            let count = result[0]['count(*)'];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("Error!")
    }

})

//Create User route to display users
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            // res.send(result);
            let users = result;
            res.render("user.ejs", { users });
        })
    } catch (err) {
        console.log(err);
        res.send("Error!")
    }
})

//create edit route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        })
    } catch (err) {
        console.log(err);
        res.send("Error!")
    }
})

//patch edited username
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("Wrong pass");
            } else {
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    //  if (err) throw err;
                    res.redirect("/user");
                })
            }

        })
    } catch (err) {
        console.log(err);
        res.send("Error!")
    }
    // res.redirect("/user");
});

//create new route toadd new user
app.get("/user/new", (req, res) => {
    res.render("new.ejs");
})

//add new user
app.post("/user/new", (req, res) => {
    let { username, email, password } = req.body;
    let id = uuidv4();

    let q = `INSERT INTO user (id,username,email,password)VALUES('${id}','${username}','${email}','${password}')`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.redirect("/user");
        })
    } catch (err) {
        console.log(err);
        res.send("ERROR!");
    }
})

app.get("/user/:id/delete", (req, res) => {
    let {id}=req.params;
    let q =`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user=result[0];
            res.render("delete.ejs",{user});
        })
    }catch(err){
        console.log(err);
        res.send("ERROR!")
    }
})

app.delete("/user/:id/delete", (req, res) => {
    let { password } = req.body;
    let { id } = req.params;
    let q =`SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if(user.password != password){
                res.send("Wrong Password try again");
            }else{
            let q2=`DELETE FROM user WHERE id='${id}'`;
            connection.query(q2,(err,result)=>{
                if(err) throw err;
                // let user=result[0];
                console.log(`Successfullu delted user`);
                res.redirect("/user");
            });
            }
        })
    } catch (err) {
        console.log(err);
        res.send("ERROR!");
    }
});

app.listen(Port, (req, res) => {
    console.log(`Listening port ${Port}`);
});