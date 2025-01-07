let gameSequence=[];
let usersequence=[];

let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Satrted ");
        started=true;
    }
});