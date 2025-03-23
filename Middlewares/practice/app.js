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

app.use((err,req,res,next)=>{
   let {status,message}=err;
   res.status(status).send(message);
    
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