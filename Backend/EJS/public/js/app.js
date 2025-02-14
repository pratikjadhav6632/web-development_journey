
const btns=document.querySelectorAll("button");

for(btn of btns){
    btn.addEventListener("click",()=>{
        alert(`you followed`);
    });
}
