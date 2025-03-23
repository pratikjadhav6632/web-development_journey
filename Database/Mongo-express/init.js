const mongoose=require("mongoose");
const Chat=require("./model/chat.js");

main().then((res)=>{
    console.log("Connection successfully...");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatschat");
}

const allChat=[
    {
        from:"sita",
        to:"kalyan",
        message:"how are you!",
        created_at:new Date()
    },
    {
        from:"komal",
        to:"riya",
        message:" I want your math notebook ",
        created_at:new Date()
    },
    {
        from:"suhil",
        to:"kiyara",
        message:" im busy now ",
        created_at:new Date()
    },
    {
        from:"ajay",
        to:"vijay",
        message:"hey can we talk now",
        created_at:new Date()
    },
];
Chat.insertMany(allChat);