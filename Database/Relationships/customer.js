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

const orderSchema=new Schema({
  item:String,
  price:Number,
});

const customerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
})

const Customer=mongoose.model("Customer",customerSchema);
const Order=mongoose.model("Order",orderSchema);

let addCust=async()=>{
    let cust1=new Customer({
        name:"Rahul K"
    });
    let order1=await Order.findOne({item:"Chips"});
    let order2=await Order.findOne({item:"snacks"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result=await cust1.save();
    console.log(result);
}
addCust();

// let addOrder=async ()=>{
//     let res=await Order.insertMany([
//         {item:"Chips",price:40},
//         {item:"fruits",price:120},
//         {item:"snacks",price:60},
//    ] );
//     console.log(res);
// }
// addOrder();