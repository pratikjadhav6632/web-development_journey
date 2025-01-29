// let math=require("./math");

// console.log(math.sum(1,4));
// console.log(math.sub(1,4));
// console.log(PI);
// console.log(g);

// let car_info=require("./car");
// console.log(car_info);

const figlet=require("figlet");

figlet("Pratik", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
