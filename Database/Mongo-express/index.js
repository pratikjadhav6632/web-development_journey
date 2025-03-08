const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat=require("./model/chat.js")

main().then((res) => {
    console.log("Connection succesfully..");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatschat");
}

let chat1=new Chat({
    from:"ajay",
    to:"kiran",
    message:"hey how are you",
    created_at:new Date()
});

chat1.save().then((res)=>{
    console.log(res);
})

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