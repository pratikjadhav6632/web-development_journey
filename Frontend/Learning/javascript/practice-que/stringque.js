//que. for given string:
let msg=" help!";
//trim & convert it to uppercase.
console.log(msg.trim().toUpperCase());

//for the string->let name="Apna College",predict the output for following:
   let Name="ApnaCollege";
   console.log(Name.slice(4,9));//Colle
   console.log(Name.indexOf("na"));//2
   console.log(Name.replace("Apna","Our"));//OurCollege

//Separate the "college" part in the above string & replace "l"with "t"in it.
console.log(Name.slice(4));
console.log(Name.replace("l","t"));