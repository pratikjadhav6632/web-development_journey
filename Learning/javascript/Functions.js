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