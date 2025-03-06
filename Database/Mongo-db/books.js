const mongoose=require('mongoose');

main().then((res)=>{
    console.log("connection successfully");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
});

const Book=mongoose.model("Book",bookSchema);


let Book1=new Book({
    title:"Mathematics XII", //this field NOT NULL
    author:"R.D.Sharma",
    price:"233", //It can Parse/convert string->Number 
});

Book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
