let rajKumar_Age = 18;
let rj_will_go_goa = rajKumar_Age >= 18 ? "RJ will go th goa" : "No Goa";
console.log( rj_will_go_goa );

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "Test case passed" : "Testase failed";
console.log( testResult );

let env = "staging";
let baseUrl = env === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log( baseUrl );

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log( browserMode );


// Multiple Condition
let age = 26;
let is_pramod_goa = age > 26 ? "Yes, he will go" : "else he will not go";
console.log( is_pramod_goa );

// Nested ternary

let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? ( age_pramod > 26 ? "Drink" : "No Drink" ) : "NO GOA";
console.log( is_pramod_d );


let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";

console.log( 'Status ${statusCode} : $({category}' );


// Task for 18th May
/*Maximum number between two numbers, okay, by using the ternary operator */

let a = 10;
let b = 25;
let maxNumber = a > b ? "a is greater" : "b is greater";
console.log( maxNumber );

// maximum between the three numbers also by using turnery over 

let x = 52;
let y = 25;
let z = 31;
let maximumNumber = x > y ? "x is greater" :
    y > z ? "y is greater" :
        z > x ? "x is greater" : "z is greater";
console.log( maximumNumber );