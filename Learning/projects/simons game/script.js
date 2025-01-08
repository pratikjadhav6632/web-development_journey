let gameSequence=[];
let usersequence=[];

let started=false;
let level=0;

let h2=document.querySelector("h2");
let btns=["red","purple","blue","orange"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Satrted ");
        started=true;

       levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },100);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },100);
}

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*4);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIndx);

    gameSequence.push(randColor);
    console.log(gameSequence);

    btnFlash(randBtn);

}

function btnPress(){
    let btn=this;
    console.log(btn);
    userflash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}