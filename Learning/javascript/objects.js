let obj={
    name:"pratik",
    age:19,
    city:"pune"
};
console.log(obj);
console.log(obj.name);

//object of objects
const classInfo={
    aman:{
        grade:"A+",
        city:"Dehli"
    },
    shraddha:{
        grade:"A",
        city:"Pune"
    },
    karan:{
        grade:"O",
        city:"Mumbai"
    }
};

console.log(classInfo);

console.log(classInfo.aman);

console.log(classInfo.shraddha.city);

console.log(classInfo.karan);
console.log(classInfo.karan.city="Pune");
console.log(classInfo.karan);


//array of objects

const ClassInfo=[
    {
        name:"aman",
        grade:"A+",
        city:"Dehli"
    },
    {
        name:"shraddha",
        grade:"A",
        city:"Pune"
    },
    {
        name:"karan",
        grade:"O",
        city:"Mumbai"
    }
];
console.log(ClassInfo);

console.log(ClassInfo[0]);

console.log(ClassInfo[1].name);

console.log(ClassInfo[2]);
console.log(ClassInfo[2].city="pune");
console.log(ClassInfo[2]);

//Math objects

console.log(Math);
console.log(Math.floor(5.5));
console.log(Math.ceil(6.2));
console.log(Math.PI);
console.log(Math.random());
console.log(Math.E);

let random=Math.floor(Math.random()*100+1);
console.log(random);


let otp=Math.floor(Math.random()*10000+1000);
console.log(otp);