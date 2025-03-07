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
        maxlength:50,
    },
    price:{
        type:Number,
        min:[1,'Price is too Low for amazon listing...'],
    },
    discount:{
        type:Number,
        default:0
    },
    categoary:{
        type:String,
        enum:['fiction','non-fiction'],
    },
});

const Book=mongoose.model("Book",bookSchema);


// let Book1=new Book({
//     title:"Mathematics XII", //this field NOT NULL
//     author:"R.D.Sharma",
//     price:"233", //It can Parse/convert string->Number 
// });

// Book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// Book.findByIdAndDelete('67c95e4036c57b9823b328af').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// const book2=new Book({
//     title:"marvel comics",
//     price:100,
//     categoary:"fiction",

// });
// book2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//Validation with update
Book.findByIdAndUpdate("67c96bda9604af11c2304377",{price:-200},{runValidators:true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
});
