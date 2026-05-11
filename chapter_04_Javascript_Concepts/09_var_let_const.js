var v = 10;
let l = 30;

const c = 3.41;

//var is the old way of declaring variables, it has function scope and can be redeclared and updated 
//let is the new way of declaring variables, it has block scope and cannot be redeclared but can be updated
//const is the new way of declaring constants, it has block scope and cannot be redeclared or updated


var browser = "chrome";
var browser = "firefox"; // redeclaration allowed
browser = "edge"; // reassignment allowed

var testCases = [ "login", "logout", "signup" ];

for ( var i = 0; i < testCases.length; i++ ) {
    console.log( testCases[ i ] );
}

console.log( "loop counter leaked outside the loop: ", i ); // i is accessible here due to function scope of
// 

function say() {
    console.log( "Hello World" );
}

say(); // Hello World
say(); // Hello World