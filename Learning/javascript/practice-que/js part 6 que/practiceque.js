
/*Qs4. Write a JavaScript function to count the number of vowels in a String
argument.*/

function countvowel(str){
    const vowels="aeiouAEIOU";
    let count =0;

    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
const count=countvowel("I love JAVASCRIPT");
console.log(count);

/*Qs5. Write a JavaScript function to generate a random number within a range
(start, end).*/

function randomnum(start,end){
    return Math.floor(Math.random() * (end - start + 1))+start;
}

let random=randomnum(1000,2000);
console.log(random);