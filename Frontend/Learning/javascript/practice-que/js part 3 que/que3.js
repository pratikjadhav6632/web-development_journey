/*que 3. For the given start state of an array.change it to final form using splice.
start:['january',july','march','august']
final:['july','june','march','august']
*/
let start=['january','july','march','august'];

start.splice(0,1);
start.splice(1,0,'june');
console.log(start);

/*return the index of the "javascript" from the given array,if it was reversed.
['c','c++','html','javascript','python','java','c#','sql']*/

let lang=['c','c++','html','javascript','python','java','c#','sql'];

lang.reverse().indexOf('javascript');
console.log(lang);
