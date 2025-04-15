const express=require("express");
const app=express();

const User=require("./routes/user.js");
const Post=require("./routes/post.js");
//User 

app.use("/user",User);

//Post
app.use("/posts",Post);

app.listen(3000,()=>{
    console.log("Listening port 3000");
});