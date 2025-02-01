const express=require("express");
const app=express();

// console.log(app);

const port=3000;
app.listen(port,()=>{
    console.log(`Listening port${port}`);
})

app.use((req,res)=>{
    console.log("Request recived");
    //res.send("This is a basic response");
    /*res.send({
        name:"Apple",
        type:"Fruit"
    });*/
    let code="<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li></ul>"
    res.send(code);
});
