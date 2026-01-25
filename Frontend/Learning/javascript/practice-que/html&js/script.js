// const buttton=document.getElementById("btn");

// let resolvepromise;
// const myPromise=new Promise((res,rej)=>{
//     resolvepromise=res
// })
// console.log(myPromise)

// buttton.addEventListener("click",()=>{
//     if(resolvepromise){
//         console.log("resolved")
//     }
// })


const myPromise=new Promise((res,rej)=>{
    document.getElementById("btn").addEventListener("click",()=>{
        res("Clicked")
    })
     document.getElementById("btn2").addEventListener("click",()=>{
        rej("Some err")
    })
})
console.log(myPromise)

// myPromise.then((res)=>console.log(res)).catch((err)=>console.log(err));

//Using async/await Promise
const newPromise=async()=>{
 const res=await myPromise;
 return "Avinash"
}

const res=await newPromise();

console.log( res);
