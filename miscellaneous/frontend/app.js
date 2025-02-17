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

//constructor-it doesn't return anything & start with capital letters

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.talk=function(){
    console.log(`hey i am ${this.name}`);
};

let P1=new Person("raj",32);
let P2=new Person("keshav",52);
console.log(P1.talk===P2.talk);