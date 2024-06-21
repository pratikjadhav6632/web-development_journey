 
 //for the given start state of an array,change it to final from using methods.
 //start:['january','july','march','august']
 //final['july','june','march','august']

 let start=['january','july','march','august'];


    start.shift();
    start.shift();
    start.unshift("june");
    start.unshift("july");

    console.log(start);
