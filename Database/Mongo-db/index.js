const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("Successfully connected..");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//     name: 'ajay',
//     email: 'ajay@yahoo.in',
//     age: 42
// });

// user1.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.insertMany([
//     {name:'kiran',email:'kiran@gmail.com',age:20},
//     {name:'shweta',email:'shweta@yahoo.in',age:24}
// ]).then((res)=>{
//     console.log(res);
// });


// User.find({}).then((res)=>{
//     console.log(res)

// }).catch((err)=>{
//     console.log(err);
// });


// User.find({age:{$lte:20}}).then((res)=>{
//     console.log(res);

// }).catch((err)=>{
//     console.log(err);
// })

// User.findOne({age:{$gte:24}}).then((res)=>{
//     console.log(res);
// })

// User.findById("67c735b72cadeda31aed257a").then((res)=>{
//     console.log(res.name);
// })

// User.updateOne({name:'ajay'},{age:50}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.updateMany({age:24},{age:25}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.findByIdAndUpdate("67c735b72cadeda31aed257a",{age:18},{new:true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.findOneAndUpdate({name:'kiran'},{age:'35'},{new:true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.deleteOne({name:'kiran'}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// User.deleteMany({age:{$gte:25}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

User.findOneAndDelete({name:'ajay'}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

User.findByIdAndDelete('67c8f131e758820a45b35686').then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
