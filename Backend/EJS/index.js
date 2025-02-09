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

app.listen(port, () => {
    console.log(`Listening on port ${port}`); //Checking port work or not
});
