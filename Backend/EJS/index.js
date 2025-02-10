const express = require("express"); //require Express.js
const app = express();
const path=require("path"); //require path
const port = 8000; //Assign port no

//EJS view Directory
app.set("views",path.join(__dirname,"/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render("home"); //Display EJS file on web
});

//passing data from server or database
app.get("/rollDice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rollDice",{diceVal});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`); //Checking port work or not
});
