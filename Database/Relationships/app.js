const mongoose=require("mongoose");
const{Schema}=mongoose;

main()
    .then(() => {
        console.log("Successfully connected..");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relation");
}

const userSchema=new Schema({
    username:String,
    addresses:[
        {
        location:String,
        city:String
         },
    ],
})