const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./model/chat.js");
const exp = require("constants");
const { Console } = require("console");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");


//connect Mongo-db to app
main().then((res) => {
    console.log("Connection successfully...");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatschat");
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


//Error Handler asyncWrap function
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>{next(err)})
    };
};
app.get("/", (req, res) => {
    res.send("root is working");
})

//Chats Route
app.get("/chats", asyncWrap(async (req, res,next) => {

        let chats = await Chat.find();
        res.render("chat.ejs", { chats });
    
}));

//New Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
})
app.post("/chats",asyncWrap(async (req, res,next) => {
  
        let { from, to, message } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            message: message,
            created_at: new Date()
        });
       await newChat.save();
        res.redirect("/chats");
   
}));

//Edit route

app.get("/chats/:id/edit", asyncWrap(async (req, res,next) => {
   
        let { id } = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
  
}));

//updated route
app.patch("/chats/:id", asyncWrap(async (req, res,next) => {

        let { id } = req.params;
        let { message: newChat } = req.body;
        let chat = await Chat.findByIdAndUpdate(id, { message: newChat }, { runValidators: true, new: true });
        //console.log(chat);
        res.redirect("/chats");
    
}));

//delete route

app.delete("/chats/:id", asyncWrap(async (req, res,next) => {
 
        let { id } = req.params;
        let delChat = await Chat.findByIdAndDelete(id);
        console.log(delChat);
        res.redirect("/chats");
 
}));
app.listen(8080, () => {
    console.log("Server is Listening port 8080");
});

//NEW Show-route

app.get("/chats/:id", asyncWrap(async (req, res, next) => {

        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            next(new ExpressError(404, "Chat not found"));
        }
        res.render("show.ejs", { chat });
}));

app.use((err, req, res, next) => {
    let { status=404, message="some err occured" } = err;
    res.status(status).send(message);
})