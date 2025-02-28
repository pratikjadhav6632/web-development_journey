const express=require("express");
const app=express();
const Port=8080;
const mysql=require("mysql2");
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'delta_app',
    password:'Pratik#07'
});

//create home route
app.get("/",(req,res)=>{
    let q="SELECT count(*) FROM user";
    try {
        connection.query(q,(err, result) => {
            if (err) throw err;
            console.log(result[0]);
            let count=result[0]['count(*)'];
            res.render("home.ejs",{count});
        });
    } catch (err) {
        console.log(err);
    }

})
app.listen(Port,(req,res)=>{
    console.log(`Listening port ${Port}`);
});