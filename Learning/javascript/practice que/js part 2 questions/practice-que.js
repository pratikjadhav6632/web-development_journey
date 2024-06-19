//que1. create a number variable num with some value.
//Now print "good" if the number is divisible by 10 and print "bad" if it is not.

let num=10;

if(num%10==0){
    console.log("Good");
}else{
    console.log("bad")
}

/*que2. Take the user name & age as input using prompts
then return back the following statement to the user as an alert (by substituting their name & age);
name is age years old.
[Use templet literals to print this sntences]*/


let userName=prompt("Enter yor name");
let age = prompt("Enter your age");
let msg =`${userName} is ${age} years old`;
alert(msg);


/*Write switch statement ro print the months in a quarter.
Months in Quarter 1 : January,february,march.
Months in Quarter 2 :April,May ,June.
Months in Quarter 3 :july,august,september.
Months in Quarter 4 : october,november,december.
[Use the number as the case value in switch]*/

let Quarter=1;

switch(Quarter){
    case 1 :console.log("January,february,march");
    break;

    case 2 : console.log("April,May ,June.");
    break;

    case 3 : console.log("july,august,september");
    break;

    case 4 : console.log(" october,november,december");
    break;
    default: console.log("invalid Quarter");
}