const button=document.querySelectorAll('.button');
const body=document.querySelector('body')
const h3=document.querySelector('h3')
button.forEach((btn)=>{
    addEventListener('click',(e)=>{
        console.log(e.target)
        body.style.backgroundColor=e.target.id
        h3.innerHTML= `you clicked ${e.target.id} btn `
    })
})

const clock=document.querySelector('.clock');

// setInterval(()=>{
//     const date=new Date();
//     clock.innerHTML=date.toLocaleTimeString()
//     console.log(date.toLocaleTimeString())
// },1000)

// const form=document.querySelector('form');
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const height=parseInt(document.querySelector('.height').value);
//     const weight=parseInt(document.querySelector('.weight').value)
//     const bmi=(weight/(height/100*2)).toFixed(2)
//     const result=document.querySelector('.result').innerHTML=bmi;
// })



const Gform=document.querySelector('form')
const num=10
Gform.addEventListener('submit',(e)=>{
e.preventDefault();
    const guessnum=(document.querySelector('.guessnum').value)
    const arr=[]
    arr.push(guessnum)
    const tGuess=10
    if(guessnum != num){
        document.querySelector('.Uguess').innerHTML=`you guess wrong num ${guessnum} previus ${arr}`
        console.log(tGuess)
       const remain= tGuess
        document.querySelector('.remain').innerHTML=`remaing guess ${remain}`
    }else{
        document.querySelector('.Cnum').innerHTML=`Your gues correct num ${guessnum}`
    }
})