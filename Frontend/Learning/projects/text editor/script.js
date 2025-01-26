let inp=document.querySelector('#inp');
let para=document.querySelector('#para');
inp.addEventListener("input",function(){
    console.log(inp.value)
    para.innerText=inp.value;
})