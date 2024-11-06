//Functions
function hello(){
    console.log("Hello");
}

hello();

function printName(){
    console.log("Code With Beliefs");
    console.log("Pratik Jadhav");
}
printName();

function print1to5(){
    for(i=1;i<5;i++){
        console.log(i);
    }
}
print1to5();


function eligibleForVote(){
    age=18;
    if(age<18){
        console.log("Not Eligible For Voting");
    }else{
        console.log("Eligible For Vote");
    }
}
eligibleForVote();

//function with arguments.

function print_Name(name){
    console.log(name);
}

print_Name("Code with belifs");
print_Name("Aman");

function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}

printInfo("Karan",21);


//Return keyword.

function sum(a,b){
    return a+b;
}

console.log(sum(1,5));

function isadult(age){
    if(age<18){
        return "Not adult";
    }
    else{
        return "Adult";
    }
}

console.log(isadult(18));

//Scope in JS
let sum2 =59; //Global Scope
function calsum(a,b){
    let sum2 =a+b; //Function Scope
    console.log(sum2);
}

calsum(3,5);
console.log(sum2);

{
    let a="This is a block scope";//Scope block
    console.log(a);
}


function outerFunc(){
    let a=10;
    let b=5;

    function innerFunc(){ //lexical Scope

        let x=1;

        console.log(a,"this outer varibale");
        console.log(x,"This is inner variable")
    }
    innerFunc();
}
outerFunc();

//Function Expression.

let name2=function(a,b){
    console.log(a+b);
}
name2(5,9);

const sum3 = function(w,r) {
    return w + r;
}
sum3(2,4);

//Higher Order Function

function multiplegreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}

let greet= function(){
    console.log("Hello");
}

multiplegreet(greet,100);


function oddEvenfact(request){
    if(request=="odd"){
    return function(n){
        console.log(!(n%2==0));
    }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("Wrong Request");
    }
}
let func=oddEvenfact("even");
func(2);

//Methods 
let calculator ={
    add: function(a,b){
        return a+b;
    },
    sub(a,b){           //shorthand way 
        return a-b;
    },
    mul :function(a,b){
        return a*b;
    },
    div(a,b){
        return a/b;
    }
};

console.log(calculator.add(6,5));
console.log(calculator.sub(10,4));
console.log(calculator.mul(2,5));
console.log(calculator.div(2,5));

//Arrow Function

const sum23 = (a,b)=> {
    console.log(a+b);
};
let a= sum23(12,20);
console.log(a);


const pow = (a,b) => {
    return a**b;
   
};
let b= pow(3,4);
console.log(b);

const cube = n => {
    return n*n*n;
}
let c= cube(4);
console.log(c);

//Implicit arrow func
const N_sum = (a,b) => (a+b);
let b1 = N_sum(1,5);
console.log(b1);

//setTimeout function

console.log("Hii there");
setTimeout(()=>{
    console.log("Apnna college");
},600);
console.log("Welcome to ");

//setInterval function

let id= setInterval(()=> {
    console.log("Apnna college");
},2000);
clearInterval(id);

//this with arrow function

 const  stud = {
    name:'aman',
    age:21,
    mark:99,
    getname: function(){
        return this.name;
    },
    getinfo:function (){
        setTimeout(()=>{
            console.log(this);
        },4000);
    }
 };
 console.log(stud.getname());
 console.log(stud.getinfo());
