//forEach

let arr =[1,2,3,4,5,6];

let print = function (el){
    console.log(el);
}

arr.forEach(print);

let arr_obj=[{
    name:'Aman',
    marks:95
},
{
    name:'Shraddha',
    marks:98
},
{
    name:'jay',
    marks:89
}];

arr_obj.forEach((el)=> {
    console.log(el.marks);
});

//Map

let new_arr=[1,2,3,4,5];

let double =new_arr.map((el)=>{
    return el*2;
});
console.log(double);

let student=[{
    name:'Aman',
    marks:95
},
{
    name:'Shraddha',
    marks:98
},
{
    name:'jay',
    marks:89
}];

let GPA = student.map((el)=>{
    return el.marks/10;
});
console.log(GPA);

//filter

let num = [1,2,543,23,56,2,46,66,23,9];
let ans = num.filter((el)=>{
    return el%2==0; //filter->Even nums
});
console.log(ans);

//every

let n=[2,4,6].every((el)=>{
    return el%2==0;//all ele satisfy cond->true 
});
console.log(n);

//some

let a=[1,2,34,564,4].some((el)=>{
    return el%2==0;//some ele satisfy cond->true
});
console.log(a);

//reduce

let arr_m=[1,4,8,9,23,2];
let max=arr_m.reduce((max,el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
});
console.log(max);

//Default parameter

function func(a,b=3){ //default value i the argument.
    return a+b; 
}
console.log(func(2));

//Spread
let ar_r=[1,3,24,43,53,23,1];
let spred=Math.min(...ar_r);
console.log(spred);

let str="Apnna College";
console.log(...str);

