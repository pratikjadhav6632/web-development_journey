//Q1. Check if all numbers in our array is multiple of 10.

let num=[20,30,40,50,200,100,10];

let mul=num.every((el)=>{
    return el%10==0;
});
console.log(mul);

//Q2.Create a function to find min number in array.

let arr=[1,24,56,4,3,678,1,0];
let min=-1;

let ans=arr.reduce((min,el)=>{
    if(el<min){
        return el;
    }else{
        return min;
    }
});
console.log(ans);

 //OR

 function getmin(num){
    let min=-1;
    let ans=num.reduce((min,el)=>{
    if(el<min){
        return el;
    }else{
        return min;
    }
    });
    return ans;
 }
 console.log(getmin([1,7,5,34,-1]));