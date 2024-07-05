
//if statement
let mode="dark";
let color;
if(mode==="dark")
    {
        color="black";
    }
console.log(color);

//if-else statement

let age=25;

if(age>=18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}

//find odd or even num
let num2=4;

if(num2%2===0){
    console.log("even");
}else{
    console.log("odd");
}

//if-else if-else statement

let mode2="light"
let color2;

if(mode2==="dark")
    {
        color2="black";
    }
else if(mode2==="light")
    {
        color2="white";
    }
else{
        color2="gray";
    }
    console.log(color2);

//Ternary operator

let age2=21;

const result=age2>18 ? "adult" : "not adult";

console.log(result);

//switch statement
let exp="mangoes";
switch(exp){
    case "orange":
        console.log("oranges are 50 Rs dozen");
        break;
    case "mangoes" :
        console.log("mangoes are 120 Rs dozen");
        break;
    default :
    console.log("sorry we are out of RS{exp}");
}

//ternary expression
let o_p=(age<18) ? 'not able to vote' : 'your able to vote';
console.log(o_p);