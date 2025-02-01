const express=require("express");
const app=express();

// console.log(app);

const port=3000;
app.listen(port,()=>{
    console.log(`Listening port${port}`);
})

app.use((req,res)=>{
    console.log("Request recived");
});
