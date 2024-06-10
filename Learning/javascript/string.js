
let str="Hello World!";//string

console.log(str);
console.log(str.length);//string length
console.log(str[0]);//string indices

//template literals

let str2=`hello world! ${12} `;
console.log(str2);

let str_2=`my roll no is ${7}`;
console.log(str_2);
//string methods

let str3 ="  Hello World!"  ;
//upper case
let str3u=str3.toUpperCase()
console.log(str3u);
//lowercase
let str3l=str3.toLowerCase();890
console.log(str3l);890
//trim
let str3t=str3.trim()
console.log(str3t);

//slice
let str4="I Love JavaScript";
let str4s=str4.slice(2,5);
console.log(str4s);

//concat
let str4c=str3.concat(str4);
console.log(str4c);

//replace
let str4r=str4.replace("Love","like");
console.log(str4r);

let stra=str4.replaceAll("I Love JavaScript","i like java");
console.log(stra);

//char At
let strc=str4.charAt(0);
console.log(strc);

let sentence='this is a "apple"';
console.log(sentence);
