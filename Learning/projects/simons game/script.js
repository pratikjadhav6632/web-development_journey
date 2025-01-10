// Arrays to store the game sequence and the user's sequence
let gameSequence = [];
let usersequence = [];

// Variables to track the game state
let started = false;
let level = 0;

// Retrieve the high score from local storage or set it to 0 if it doesn't exist
let Highscore = localStorage.getItem("Highscore") || 0;
document.querySelector("h3").innerHTML = `High Score=${Highscore}`;

// Display the high score on the page
const h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");

// Array of button colors
let btns = ["red", "purple", "blue", "orange"];

// Event listener to start the game when a key is pressed
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Satrted ");
        started = true;

        // Move to the next level
        levelUp();
    }
});

// Function to add a flash effect to a button
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}

// Function to add a flash effect to a button
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 100);
}

// Function to handle level up logic
function levelUp() {
    usersequence = [];
    level++;
    h2.innerText = `Level ${level}`;

    // Update high score if current level is higher
    if (level > Highscore) {
        Highscore = level;
        localStorage.setItem("High Score", Highscore);
    }
    h3.innerHTML = `High Score=${Highscore}`;

    // Generate a random button for the game sequence
    let randIndx = Math.floor(Math.random() * 4);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIndx);

    // Add the random color to the game sequence
    gameSequence.push(randColor);
    console.log(gameSequence);

    // Flash the random button
    btnFlash(randBtn);

}

// Function to check the user's answer
function checkAns(idx) {
    //console.log(level);

    // Check if the user's input matches the game sequence
    if (usersequence[idx] === gameSequence[idx]) {
        // If the user has completed the sequence, level up
        if (usersequence.length == gameSequence.length) {

            setTimeout(levelUp, 1000);
        }
    } else {
        // If the user's input is incorrect, end the game
        h2.innerHTML = `Game over ! Your score was <b>${level}</b>. <br> Press any key to Start game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 100);
        reset();
    }
}

// Function to handle button press events
function btnPress() {
    let btn = this;
    // console.log(btn);
    userflash(btn);
    userColor = btn.getAttribute("id");
    usersequence.push(userColor);
    //console.log(userColor);
    checkAns(usersequence.length - 1);
}

// Add event listeners to all buttons
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

// Function to reset the game
function reset() {
    started = false;
    gameSequence = [];
    usersequence = [];
    level = 0;
}
