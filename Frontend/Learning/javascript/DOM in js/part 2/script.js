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

//Keyboard Events

let inp=document.querySelector('input');

inp.addEventListener('keydown',key);

function key(event){
    console.log("key is:",event.key);
    if(event.key=="ArrowDown"){
        console.log("character goes Backward");
    }else if(event.key=="ArrowUp"){
        console.log("character goes Forward");
    }
    else if(event.key=="ArrowLeft"){
        console.log("character goes Left");
    }
    else if(event.key=="ArrowRight"){
        console.log("character goes Right");
    }
}


//form Event Listener

let form=document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log("form was submitted");

    // let user = document.querySelector('#user');
    // let pass= document.querySelector('#pass');
    let user=this.elements[0];
    let pass=this.elements[1];

    alert(`Hii ${user.value},you pass set to be ${pass.value}`);

});

//change and input event

let text=document.querySelector('#text');

text.addEventListener("change",function(){
    console.log("input changed");
    console.log(text.value);
})


text.addEventListener("input",function(){
    console.log(text.value);
})