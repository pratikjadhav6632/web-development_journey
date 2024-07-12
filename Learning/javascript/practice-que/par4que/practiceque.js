/*Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3]*/

let arr=[1,2,3,4,5,6,2,3];
let num=2;

for(i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);

let arr2=[1,2,3,4,5,6,2,3];
let num2=3;

for(i=0;i<arr2.length;i++){
    if(arr2[i]==num2){
        arr2.splice(i,1);
    }
}
console.log(arr2)

/*Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6*/

let number = 287152;
let count=0;

let copy=number;
while(copy>0){
    count++;
    copy= Math.floor(copy/10);
}
console.log(count);
