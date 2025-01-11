// Call satck
function one(){
    return 1;
}

function two(){
    return (one()+one());
}

function three(){
    let ans=two()+one();
    console.log(ans);
}
three();
console.log(two());
console.log(one());

//Promises

function saveDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("Success:Data savd ");
        }else{
            reject("Weak network connection");
        }
    });
}
    
console.log(saveDB("Apnna college"));
