//JS Engine
//Reading line by line, JIT compilation
console.log( greeting );
var greeting = "Hello!";

//BTS
//it will create a variable in memory and assign undefined to it, then it will read the next line and assign the value to the variable
//So the above code will be interpreted as
var greeting; //undefined
console.log( greeting ); //undefined
greeting = "Hello!";
console.log