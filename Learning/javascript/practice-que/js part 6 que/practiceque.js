

/*Qs5. Write a JavaScript function to generate a random number within a range
(start, end).*/

function randomnum(start,end){
    return Math.floor(Math.random() * (end - start + 1))+start;
}

let random=randomnum(1000,2000);
console.log(random);