const express=require("express");
const app=express();

const port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log(`Listening port ${port}`);
});

app.get("/register",(req,res)=>{
     let {user,password}=req.query;
    res.send(`Standard get method,Welcome ${user}`);
});

app.post("/register",(req,res)=>{
    console.log(req.body);
    let {user,password}=req.body;
    res.send(`Standard post method,Welcome ${user}`);
});
