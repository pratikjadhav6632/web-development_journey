const express=require("express");
const app=express();
const path=require("path");

const port=2411;

app.listen(port,()=>{
    console.log(`Listening port ${port}`);
});
