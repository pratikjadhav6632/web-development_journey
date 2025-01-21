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

let h1=document.querySelector("span");

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



function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve("Succefully num generated");
        },1000);
    });
}

async function demo2(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}

demo2();

let skills=document.querySelector("#skill");

function displaySkill(skill,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            skills.innerText=skill;
            resolve("Skill successfully added");
        },delay);
    });
}

async function addskill(){
    await displaySkill("Web developer",1000);
    await displaySkill("app developer",1000);
    await displaySkill("software developer",1000);
    await displaySkill("react developer",1000);
}
addskill();
demo();
