let btns = document.querySelectorAll("button");

for (btn of btns) {
    btn.onclick = notify; //onclick
    btn.onmouseenter = mouse;
}

function notify() {
    alert("Button was clicked");
    console.log("Button was clicked");
}
//onmouseenter
function mouse() {
    console.log("Mouse is over the button");
}

//Event listener

//addEventListener
let btn2 = document.getElementsByClassName('btn');
for (i = 0; i < btn2.length; i++) {
    btn2[i].addEventListener('click', Hello);
}

function Hello() {
    alert("Hey hello you clicked me!");
}

//Windows.print();
let printbtn=document.getElementById('Print');
printbtn.onclick=printbt;
function printbt(){
    window.print();
}

//this in Event Listener

let p=document.querySelector('p');
let h1=document.querySelector('h1');
let h3=document.querySelector('h3');
let btn00=document.getElementById('btn');


function changecolor(){
    console.log(this.innerText);
    this.style.backgroundColor="pink";
}
p.addEventListener('click',changecolor);
h1.addEventListener('click',changecolor);
h3.addEventListener('click',changecolor);
btn00.addEventListener('click',changecolor);
