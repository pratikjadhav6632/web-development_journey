const express=require("express");
const { readlinkSync } = require("fs");
const app=express();
const Port=8080;
const mysql=require("mysql2");
const path=require("path");
const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public/css")));

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

app.get("/user",(req,res)=>{
    let q=`SELECT * FROM user`;
    try{
        connection.query(q,(err,result)=>{
            // res.send(result);
            let users=result;
            res.render("user.ejs",{users});
        })
    }catch(err){
        console.log(err);
    }
})
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`
    try{
        connection.query(q,(err,result)=>{
            let user=result[0];
            res.render("edit.ejs",{user});
        })
    }catch(err){
        console.log(err);
    }
})

app.patch("/user/:id",(req,res)=>{
    res.redirect("/user");
});
app.listen(Port,(req,res)=>{
    console.log(`Listening port ${Port}`);
});