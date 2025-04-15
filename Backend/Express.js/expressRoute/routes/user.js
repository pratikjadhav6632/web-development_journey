const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hey this is User route");
});

router.post("/:id",(req,res)=>{
    console.log("this is post route")
});

router.delete("/id/delete",(req,res)=>{
    res.send("Hey this is user delete route");
});

module.exports=router;