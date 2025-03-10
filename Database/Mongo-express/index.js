const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat=require("./model/chat.js")


main().then((res)=>{
    console.log("Connection successfully...");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatschat");
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("root is working");
})

//Chats Route
app.get("/chats", async(req, res) => {
    let chats=await Chat.find();
    res.render("chat.ejs",{chats});
})

app.listen(8080, () => {
    console.log("Server is Listening port 8080");
});