//Create a nested array to show the following tic-tac-toe game state.
let tic_tac=[['x',null,'o'],[null,'x',null],['o',null,'x']];
console.log(tic_tac);

let cars=['bmw','audi','ferari','mercedies'];
console.log(cars.sort());

let cars2=['xuv','supra','rolls-r'];
console.log(cars2);

let newCars=cars.concat(cars2);
console.log(newCars);

cars.push('thar');
console.log(cars)

cars.pop();
console.log(cars);

let newvar=cars.slice(1,4);
console.log(newvar);
