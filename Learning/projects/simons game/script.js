let gameSequence = [];
let usersequence = [];

let started = false;
let level = 0;

let Highscore=localStorage.getItem("Highscore") || 0;
document.querySelector("h3").innerHTML=`High Score=${Highscore}`;
const h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
let btns = ["red", "purple", "blue", "orange"];

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Satrted ");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 100);
}

function levelUp() {
    usersequence = [];
    level++;
    h2.innerText = `Level ${level}`;

    if(level>Highscore){
        Highscore=level;
        localStorage.setItem("High Score",Highscore);
    }
    h3.innerHTML=`High Score=${Highscore}`;

    let randIndx = Math.floor(Math.random() * 4);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIndx);

    gameSequence.push(randColor);
    console.log(gameSequence);

    btnFlash(randBtn);

}
function checkAns(idx) {
    //console.log(level);

    if (usersequence[idx] === gameSequence[idx]) {
        if (usersequence.length == gameSequence.length) {

            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over ! Your score was <b>${level}</b>. <br> Press any key to Start game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        }, 100);
        reset();
    }
}
function btnPress() {
    let btn = this;
    // console.log(btn);
    userflash(btn);
    userColor = btn.getAttribute("id");
    usersequence.push(userColor);
    //console.log(userColor);
    checkAns(usersequence.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    gameSequence = [];
    usersequence = [];
    level = 0;
}
