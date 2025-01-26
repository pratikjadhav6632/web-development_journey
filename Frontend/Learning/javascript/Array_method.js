//forEach

let arr =[1,2,3,4,5,6];

let print = function (el){
    console.log(el);
}

arr.forEach(print);
console.log(arr.length);

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

//spread with array literal  //it copy old arr in new array.
let Arr=[1,2,3,45,6,43,2];
console.log(Arr);
let N_Arr=[...Arr];
console.log(N_Arr);

//spread with string literal //it copy old str in new string.
let Str=["Hello World!"];
console.log(Str);
let N_Str=[...Str];
console.log(N_Str);

//Spread with object literals.

const data={
    email:"Ironman@gmail.com",
    pass:"iron123$"
};
console.log(data);

const datacopy={...data,id:1};
console.log(datacopy);


//Rest

function sum(...args){
    for(let i=0;i<args;i++){
        console.log("You gave us:",args[i]);
    }
}
console.log(sum(1));


function add(...args){
    return args.reduce((sum,el)=>sum+el);
}
console.log(add(12,473,23,2,122));


//Destructing


let names=["Stark","bruce","Joe","merry","kim","Tom"];
let [Winner,Runnerup,SecondRunnerup,...Others]=names;
console.log("Winner is:",Winner);
console.log("Runnerup is:",Runnerup);
console.log("SecomdRunnerup is:",SecondRunnerup);
console.log("Our other participants:",...Others);


//Destructuring  objects


const class_student = {
    
   Roll_no_1:{ 
    name:"ajay",
    Age:16,
    class:10,
    subjects:"Eng,Math,Sci,EVS",
    Username:"Ajay@123",
    Password:"Abc123"
   },
   Roll_no_2:{ 
    name:"Seema",
    Age:16,
    class:10,
    subjects:"Eng,Math,Sci,EVS",
    Username:"seema@123",
    Password:"adfc123"
   },
   Roll_no_3:{ 
    name:"yash",
    Age:16,
    class:10,
    subjects:"Eng,Math,Sci,EVS",
    Username:"yash@123",
    Password:"srewfbc123"
   }
};
console.log(class_student);

let {name,Username,Password}=class_student.Roll_no_1;
console.log("\t student name:",name,"\t student username:",Username," \t student pass:",Password);