/*Let's create a middleware for an api that check if the access token was passes in query string or not*/
const express = require("express");
const app = express();
const ExpressError=require("./ExpressError");
app.listen(8080, () => {
    console.log("Listening on port 8080");
});

app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "Accesstoken") {
        return next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
});

app.get("/api", (req, res) => {
    res.send("Data..");
});

app.get("/",(req,res)=>{
    abc=abc;
})


//OR

// const checktoken=(req,res,next)=>{
//     let {token}=req.query;
//     if(token==="giveaccess"){
//         return next();
//     }
//     res.send("ACCESS DENIED!");
// }

// app.get("/api/dem",checktoken,(req,res)=>{
//     res.send("Data...");
// })

/*Create an admin route & send an error with a 403 status code */

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"ACCESS is Forbidden");
})

app.use((err,req,res,next)=>{
    let {status=500,message='Some error occured'}=err;
    res.status(status).send(message);
     
 })