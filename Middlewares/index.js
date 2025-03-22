const express=require("express");
const app=express();

app.listen("8080",()=>{
    console.log("Listening port 8080");
})



//using req&res object in middleware
app.use((req,res)=>{
    console.log("I am Another one middleware");
    res.send("Byy..");
})
//app.use(middleware)
app.use(()=>{
    console.log("Hi, I am a Middleware..")
})