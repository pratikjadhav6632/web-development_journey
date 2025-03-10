const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat=require("./model/chat.js")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("root is working");
})

//Chats Route
app.get("/chats", async(req, res) => {
    let chats=await Chat.find();
    res.send("work");
})

app.listen(8080, () => {
    console.log("Server is Listening port 8080");
});