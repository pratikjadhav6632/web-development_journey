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
