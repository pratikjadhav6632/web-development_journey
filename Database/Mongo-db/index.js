const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("Successfully connected..");
    })
    .catch((err) => {
        console.log(err);
    })

async function main(){
   await  mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    age:Number
})