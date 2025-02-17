//Factory function
function personMaker(name,age){
    let person={
        name:name,
        age:age,
        talk(){
            console.log(`hey i am ${name},i am ${age} year old`);
        },
    };
    return person;
};

let p1=personMaker("jay",38);
console.log(p1.talk());