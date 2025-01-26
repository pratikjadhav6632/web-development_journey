const max= prompt("Enter Maximum number");

const random= Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the correct number");

while(true){
    if(guess=="quit"){
        console.log("you quite the game");
        break;
    }

    if(guess==random){
        console.log("You guess the correct number: ",random);
        break;
    }
    else{
        guess=prompt("you guess wrong number try again!!");

    }
}