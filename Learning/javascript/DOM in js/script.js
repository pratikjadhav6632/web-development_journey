/*..........DOM DOcument Object Model...............*/

//Selecting Elements methods

// 1. getElementById :

console.log(document.getElementById("#prof"));


// 2. gerElementByClassName :
let prof = document.getElementsByClassName("box");
console.log(prof);

// 3. getElementByTagName :
console.log(document.getElementsByTagName('h1'));

//Query Selectors.

// 1. By TagName:
console.dir(document.querySelector('p'));

// 2. By Id :
console.dir(document.querySelector('#heading'));

// 3.By className: 
console.dir(document.querySelector(".box"));

// 4. select all:
console.dir(document.querySelectorAll('p'));

// 5. specific element
console.dir(document.querySelector('div img'));


//Using properties & methods

// 1.innerText:
let para = document.getElementsByTagName("p");
console.log(para[0]);
para[0].innerText = "Hi,I am <b>Peter Parker</b>!";


// // 2.textContent:
let content = para[0].innerContent;
console.log(content);


// // 3.innerHTML
let html = para[0].innerHTML;
console.log(html);