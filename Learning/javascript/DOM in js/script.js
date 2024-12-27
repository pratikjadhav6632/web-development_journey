/*..........DOM DOcument Object Model...............*/

//Selecting Elements methods

// 1. getElementById :

document.getElementById("heading");

// 2. gerElementByClassName :
document.getElementsByClassName("box");

// 3. getElementByTagName :
document.getElementsByTagName('h1');

//Query Selectors.

// 1. By TagName:
document.querySelector('p');

// 2. By Id :
document.querySelector('#id');

// 3.By className: 
document.querySelector(".className");

// 4. select all:
document.querySelectorAll('p');

// 5. specific element
document.querySelector('div a');


//Using properties & methods

// 1.innerText:
Obj.innertext = "changes";

// 2.textContent:
Obj.textContent;

// 3.innerHTML
Obj.innerHTML = "Hi,I am <b>Peter Parker</b>!";


//Manipulating Attributes

Obj.getAttribute(attr); //getter
Obj.setAttribute(attr, val); //setter

//