const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hey this is posts route");
});

router.post("/:id",(req,res)=>{
    console.log("this is post route")
});

router.delete("/id/delete",(req,res)=>{
    res.send("Hey this is posts delete route");
});

module.exports=router;