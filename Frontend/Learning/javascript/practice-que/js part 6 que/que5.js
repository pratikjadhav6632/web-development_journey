//what will be the output?
let greet="welcome";//Global Scope

function changeGreet(){
    let greet="Namaste";//Function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}

console.log(greet);
changeGreet();