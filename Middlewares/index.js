const express=require("express");
const app=express();

app.listen("8080",()=>{
    console.log("Listening port 8080");
})

//using next()
app.use((req,res,next)=>{
    console.log("time",Date.now());
    next();
})

//using req&res object in middleware
app.use((req,res)=>{
    console.log("I am Another one middleware");
   
})
//app.use(middleware)
app.use("/",(req,res)=>{
    console.log("Hi, I am a Middleware..")
    res.send("Byy..");
})
