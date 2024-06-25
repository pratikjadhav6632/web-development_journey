/*Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
    positive number].
    For example: for array [7, 9, 0, -2] and n=3
    Print, [7, 9, 0]*/

    let arr=[7,9,0,-2];
    let result=arr.slice(0,3);
    console.log(result);

/*Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [9, 0, -2]*/

    let arr2=[7,9,0,-2];
    let result2=arr2.slice(1);
    console.log(result2);

/* Qs3. Write a JavaScript program to check whether a string is blank or not.
     
     let string=prompt("enter string");

     if(string.length==0){
        console.log("string is blank");
     }else{
        console.log("string is full");
     }*/
    
/*Qs4. Write a JavaScript program to test whether the character at the given (character)
     index is lower case.*/

     let string2="ApkaCoLlEgE";
     let idx=3;

     if(string2[idx]==string2[idx].toLowerCase){

        console.log("character is lowecase");
     }else{
        console.log("character is not lowercase");
     }

/*Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.*/
    
    let str=prompt("enter string here");

    console.log(`with spaces${str}`);
    console.log(`without spaces${str.trim()}`);

/*Qs6. Write a JavaScript program to check if an element exists in an array or not.*/

     let arr3=['hello','a',3,23,64,2];
     let item=23;

     if(arr3.indexOf(item)!=-1){
        console.log("element exists in array");

     }else{
        console.log("element does not exists in array");
     }