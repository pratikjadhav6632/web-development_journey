const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat=require("./model/chat.js")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get("/work", (req, res) => {
    res.render("index.ejs");
})
app.get("/", (req, res) => {
    res.send("root is working");
})

app.listen(8080, () => {
    console.log("Server is Listening port 8080");
});