let add=document.querySelector("#button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

add.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let date=document.createElement('input')
    date.type="date";
    date.style="margin:1rem"

    let delBtn=document.createElement('button');
    delBtn.innerText="remove ❌";
    delBtn.classList.add('Delete');
    delBtn.classList.add('delBtn');

    item.appendChild(date);
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener('click',function(event){
   if(event.target.nodeName=='BUTTON'){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("task deleted successfully");
   }
});