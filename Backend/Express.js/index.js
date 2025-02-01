const express=require("express");
const app=express();

// console.log(app);

//app.listen

const port=3000;
app.listen(port,()=>{
    console.log(`Listening port${port}`);
})

//app.use

/*app.use((req,res)=>{
    console.log("Request recived");
    //res.send("This is a basic response");
    res.send({
        name:"Apple",
        type:"Fruit"
    });
    let code="<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li></ul>"
    res.send(code);
});*/


//app.get (Routing)
app.get("/",(req,res)=>{
    res.send("App contacted to root");
});

/*app.get("/apple",(req,res)=>{
    res.send("App contacted to apple page");
});

app.get("/mango",(req,res)=>{
    res.send("App contacted to mango page");
});

//for unknown req
app.get("*",(req,res)=>{
    res.send("Page not found");
});
*/

//Path parameter (req,params)
/*app.get("/:username/:Id",(req,res)=>{
    let {username,Id}=req.params;
    let user=`<h1>Welcome to page of @${username}.</h1>`;
    res.send(user);
});*/

//Query string (req.query)

app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("Nothing searched");
    }
    res.send(`<h1>These are the result for:${q}</h1>`);
    console.log("sucess")
});
