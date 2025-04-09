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
            ref:Order
        }
    ]
})

const Customer=mongoose.model("Customer",customerSchema);
const Order=mongoose.model("Order",orderSchema);

let addOrder=async ()=>{
    let res=await Order.insertMany([
        {item:"Chips",price:40},
        {item:"fruits",price:120},
        {item:"snacks",price:60},
   ] );
    console.log(res);
}
addOrder();