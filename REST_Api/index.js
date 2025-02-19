const express=require("express");
const app=express();
const port=8080;
const path=require("path");


app.set("views",path.join(__dirname,"/views"))
app.set("views engine","ejs");

app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`Listening port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("Server is working");
})