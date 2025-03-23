const express=require("express");
const app=express();

app.listen("8080",()=>{
    console.log("Listening port 8080");
})

//logger 
app.use((req,res,next)=>{
    req.time=new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.time);
    next();
})
//using next()
app.use((req,res,next)=>{
    console.log("time",Date.now());
    next();
})

//using req&res object in middleware
app.use((req,res,next)=>{
    console.log("I am 1st one middleware");
    next();
})
//app.use(middleware)
app.use("/",(req,res)=>{
    console.log("Hi, I am 2nd Middleware..")
    res.send("Byy..");
})

//Error Handler
app.get("/err",(req,res)=>{
    abc=abc;
    
})
app.use("/err",(err,req,res,next)=>{
    console.log("------ERROR------")
    next(err);
})

app.use("/err",(err,req,res,next)=>{
    console.log("------ERROR 2 middleware------")
    next(err);
})