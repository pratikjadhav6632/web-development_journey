//Q1
let para = document.createElement('p');
para.innerText = "Hey I'm red";
document.querySelector('body').append(para);
para.classList.add('red');

//Q2
let h3 = document.createElement('h3');
h3.innerText = "Hey I'm Blue";
document.querySelector('body').append(h3);
h3.classList.add('Blue');

//Q3
let div = document.createElement('div');
let h1 = document.createElement('h1');
let para1 = document.createElement('p');

h1.innerText = "I'm in a div";
para1.innerText = 'ME TOO';

div.append(h1);
div.append(para1);
document.querySelector('body').append(div);
div.classList.add('box');


//part 9 practice que

//Q1.

let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me!";
document.querySelector("body").append(input);
document.querySelector("body").append(btn);

//Q2
btn.setAttribute('id', 'btn');
input.setAttribute('placeholder', 'username');

//Q3
btn.querySelector('#btn');
btn.classList.add('btnStyle');

//Q4
let h1_new = document.createElement("h1");
h1_new.innerText = "DOM Practice";
document.querySelector("body").prepend(h1_new);
h1_new.classList.add('h1_new');

//Q5
let para3 = document.createElement('p');
para3.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector('body').append(para3);