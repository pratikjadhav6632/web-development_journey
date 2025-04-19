const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const User=require("./routes/user.js");
const Post=require("./routes/post.js");
const session=require("express-session");
const flash=require("connect-flash");

const sessionOption={
    secret:"superSecret",
    resave:false,
    saveUninitialized:true    
};
//express-session
app.use(session(sessionOption));

app.use(flash());
//cookieParser
app.use(cookieParser("secreteKey"));

//User 
app.use("/user",User);

//Post
app.use("/posts",Post);


app.get("/register",(req,res)=>{
    let {name}=req.query;
    req.session.name=name;
    req.flash("success","Succesfully registerd!");
  res.redirect("/hello");
})

app.get("/hello",(req,res)=>{
    console.log(req.flash("success"));
    res.send(`Hello,${req.session.name}`);
})

app.get("/test",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count=1;
    }
    res.send(`count of req send by you are ${req.session.count}`);
});


// app.get("/getsignedcookie",(req,res)=>{
//     res.cookie("Made-in","India",{signed:true});
//     res.send("sent signed cookie")
// });

// app.get("/verify",(req,res)=>
//     {
//     console.log(req.signedCookies);
//     res.send("Verified");
// })
// app.get("/greet",(req,res)=>{
//     let {MadeIn="Bharat"}=req.cookies;
//     res.send(`Hi,${MadeIn}`);
// })

// app.get("/getcookies",(req,res)=>{
//     res.cookie("Greet","namaste");
//     res.cookie("MadeIn","India");
//     res.send("Cookies Sent successfully");
// })

app.listen(3000,()=>{
    console.log("Listening port 3000");
});