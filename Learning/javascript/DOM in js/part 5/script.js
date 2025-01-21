//async function

async function greet() {
    console.log("hello world!");//return promise
}

greet();

//async Arrow function
let hello=async ()=>{
    console.log('Hello');
}
hello();


// await keyword.

let h1=document.querySelector("h1");

  function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay);
    });
}

async function demo(){
    await changeColor("red",1000);
    await changeColor("blue",1000);
    await changeColor("green",1000);
    await changeColor("yellow",1000);
}
demo();