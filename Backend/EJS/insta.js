const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.set("view engine", "ejs");

//Create a basic template for instagram page based on following route:
        // /ig/:username
app.listen(port, () => {
    console.log(`Listening port ${port}`);
});

app.get("/ig/:username", (req,res) => {
    const {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    if(data){

        res.render("insta.ejs",{data});
    }else{
        res.render("error.ejs");
    }
});