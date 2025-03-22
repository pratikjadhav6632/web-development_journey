const express=require("express");
const app=express();

app.listen("8080",()=>{
    console.log("Listening port 8080");
})

app.use(()=>{
    console.log("Hi, I am a Middleware..")
})