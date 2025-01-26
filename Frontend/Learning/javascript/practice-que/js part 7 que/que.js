// Q1. Write an arrow function that return the square of a number 'n'

const square=(n)=>{
    return n*n;
};
let res=square(5);
console.log(res);

// Q2. Write a function that print "hello World" 5 times at intervals of 2s each.

   const id = setInterval(()=>{
        console.log("Hello World!");
    },2000);
    setTimeout(()=>{
        clearInterval(id);
        console.log("Clear interval ran");
    },10000);

//Q3. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
 const arrayAverage=(arr)=>{
    let total=0;
    for(let number of arr)
    {
        total += number;
    }
    return total/arr.length;
 };
 let arr=[1,2,3,4,5,6,7];
 console.log(arrayAverage(arr));


//Q4.Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
let num =4;
 const iseven = (num) => num % 2 == 0;
 console.log(iseven(num));
    

 