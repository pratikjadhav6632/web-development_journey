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