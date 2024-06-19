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
