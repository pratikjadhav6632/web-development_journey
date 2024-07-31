
let student ={
    name:"pratik",
    age:19,
    marks:80.4,
    city:"pune"
};

console.log(student);   //display object

/*  change the city name to "mumbai"
    add new property, gender:"male"
    delete age property
*/

console.log(student["name"]);
console.log(student.city);
console.log(student.city="phaltan");  //update object
console.log(student);

console.log(student.gender="male");  //add property in object
console.log(student);

console.log(delete student.age); //delete property in object
console.log(student);