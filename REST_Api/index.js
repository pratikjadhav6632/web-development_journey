const express=require("express");
const app=express();
const port=8080;
const path=require("path");

app.listen(port,()=>{
    console.log(`Listening port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("Server is working");
})