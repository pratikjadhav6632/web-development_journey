const express=require("express");
const app=express();

const port=8080;

app.listen(port,()=>{
    console.log(`Listening port ${port}`);
});

app.get("/register",(req,res)=>{
    // let {user,password}=req.params;
    res.send(`Standard get method,Welcome`);
});

app.post("/register",(req,res)=>{
    // let {user,password}=req.params;
    res.send(`Standard post method,Welcome`);
});