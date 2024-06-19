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


/*que3.Write switch statement ro print the months in a quarter.
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

/*que4.A string is a golden string if it start with character 'A' or 'a' And has a total length greater than 5.
for given string print if it is golden or not*/

let str="apple";

if(str[0]=="A" || str[0]=="a" && str.length>=5){
    console.log("string is Golden");
}else{
    console.log("string is Not Golden");
}

//que5.Write a program to find largest of 3 numbers.
let firstNum=10;
let secNum=20;
let thirdNum=12;

if(firstNum>secNum&& firstNum>thirdNum){
    console.log("larger num is:",firstNum);
}else if(secNum>firstNum&&secNum>thirdNum){
    console.log("larger num is:",secNum);
}else if(thirdNum>firstNum&&thirdNum>secNum){
    console.log("larger num is:",thirdNum);
}else{
    console.log("all num are equals");
}

/*write a program to check if 2 numbers have the same last digits.
Eg.32 and 47852 have the same last digit i.e. 2 */
let num1=5673;
let num2=235;

let lastdigit1=num1%10;
let lastdigit2=num2%10;

if(lastdigit1==lastdigit2){
    console.log(`${num1} and ${num2} have the same last digits`);
}else{
    console.log(`${num1} and ${num2} have  the different last digits`);
}