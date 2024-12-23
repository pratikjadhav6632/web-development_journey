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

/*Qs3. Create a new array whose elements are in uppercase of words present in the
original array.*/

let original_arr=["APPLE","ball","Cat","DOG"];

let New_Arr=original_arr.map((original_arr)=>original_arr.toUpperCase());
console.log(New_Arr);



/*Q. Finding lowercase characters within a string */
let str_arr=["APPLE","ball","Cat","DOG"];
let New_str=str_arr.filter((str_arr)=>{
    return (str_arr >="a"&& str_arr <= "z")
});
console.log(New_str);

/*Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled.*/


const doubleAndReturnArgs=(arr,...args)=>[...arr,...args.map((v)=>v*2),];

console.log(doubleAndReturnArgs([12,21],21,24,754));
console.log(doubleAndReturnArgs([12,1],1,2,4));
