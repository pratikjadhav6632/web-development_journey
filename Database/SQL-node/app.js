const express=require("express");
const app=express();
const Port=8080;
const mysql=require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'delta_app',
    password:'Pratik#07'
});

//create home route
app.get("/",(req,res)=>{
    let q="SELECT * FROM user";
    try {
        connection.query(q,(err, result) => {
            if (err) throw err;
            console.log(result[0]);
            res.send(result[0]);
        });
    } catch (err) {
        console.log(err);
    }

})
app.listen(Port,(req,res)=>{
    console.log(`Listening port ${Port}`);
});