const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const User=require("./routes/user.js");
const Post=require("./routes/post.js");

//cookieParser
app.use(cookieParser("secreteKey"));

//User 
app.use("/user",User);

//Post
app.use("/posts",Post);

app.get("/getsignedcookie",(req,res)=>{
    res.cookie("Made-in","India",{signed:true});
    res.send("sent signed cookie")
});

app.get("/verify",(req,res)=>
    {
    console.log(req.signedCookies);
    res.send("Verified");
})
app.get("/greet",(req,res)=>{
    let {MadeIn="Bharat"}=req.cookies;
    res.send(`Hi,${MadeIn}`);
})

app.get("/getcookies",(req,res)=>{
    res.cookie("Greet","namaste");
    res.cookie("MadeIn","India");
    res.send("Cookies Sent successfully");
})

app.listen(3000,()=>{
    console.log("Listening port 3000");
});