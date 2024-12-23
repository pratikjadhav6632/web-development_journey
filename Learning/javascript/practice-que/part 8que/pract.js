/*Qs1. Square and sum the array elements using the arrow function and then find the
average of the array.*/

let num=[1,35,2,657,32];

let Square=num.map((num)=>num*num);
console.log(Square);

let sum=Square.reduce((acc,cur)=>acc+cur,0);
console.log(sum);

let avg=sum/num.length;
console.log(avg);


/*Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5.*/

let arr=[1,2,3];
let new_arr=arr.map((arr)=>arr+5);
console.log(new_arr);

