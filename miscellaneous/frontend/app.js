//Factory function
function personMaker(name, age) {
    let person = {
        name: name,
        age: age,
        talk() {
            console.log(`hey i am ${name},i am ${age} year old`);
        },
    };
    return person;
};

let p1 = personMaker("jay", 38);
console.log(p1.talk());

//constructor-it doesn't return anything & start with capital letters

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log(`hey i am ${this.name}`);
};

let P1 = new Person("raj", 32);
let P2 = new Person("keshav", 52);
console.log(P1.talk === P2.talk);

//Classes- we prefer classes over constructors & factory functon. Classes is developers firsr choice...

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hey i am ${this.name}`);
    }
}
let person1 = new Person2("riya", 21);
let person2 = new Person2("priya", 21);
console.log(person1.talk === person2.talk);

class Student{
    constructor(name,std,age,school){
        this.name=name;
        this.std=std;
        this.age=age;
        this.school=school;
    };
    school(){
        console.log(`hey My school is ${school}`)
    }
};

let S1=new Student("Jay","F.Y",19);

//Inheritance

//Example 1:
class Persons{  //Parent class OR basic class
    constructor(name,age){
        console.log("Person class is called");
        this.name=name;
        this.age=age;
    }
    talk(){  //all child class can access this function
        console.log(`Hello i am ${name}`);
    }
}
class Students extends Persons{  //Child class
    constructor(name,age,mark){
        console.log("Student class is called");
        super(name,age);
        this.mark=mark;
    }
}

class Teachers extends Persons{  //child class
    constructor(name,age,subject){
        console.log("Student class is called");
        super(name,age);       
        this.subject=subject;
    }
    talk(){  //this function overrides parent class function
        console.log(`hello i am ${this.subject} teacher`);
    }
}

//Example 2:

class Mamamls{
    constructor(name,food){
        this.name=name;
        this.type="warm-Blooded";
    }
    eat(){
        console.log(`I am eating ${this.food}`);
    }
}
class Dogs extends Mamamls{
    constructor(name,food){
        super(name,food);
        this.food=food;
    }
    bark(){
        console.log("booff....");
    }
}

class Cats extends Mamamls{
    constructor(name,food){
        super(name,food);
        this.food=food;
    }
    Meow(){
        console.log("Meooww....");
    }
}