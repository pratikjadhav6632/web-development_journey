const express=require("express");
const app=express();

const port=3030;

app.listen(port,()=>{
    console.log(`Listening Port ${port}`);
});