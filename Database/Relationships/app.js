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
        _id:false,
        location:String,
        city:String
         },
    ],
});

const User=mongoose.model("User",userSchema);

const adduser=async()=>{
    const user1=new User({
        username:"Kiyara",
        addresses:{
            location:"123b main road",
            city:"Mumbai"
        },
    })
    let result=await user1.save();
    console.log(result);
}
adduser();