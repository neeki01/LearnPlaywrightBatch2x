// ### Question 1 — Even or Odd

// Problem: Take a number and print whether it's even or odd.

let number = 7;

let reminder = number % 2;
if ( reminder === 0 ) {
    console.log( "Number is even" );
}
else {
    console.log( "Number is odd" );
}

// ### Question 2 — Student Grade Calculator

// Problem: Take marks (0–100) and print the grade based on these rules:

// - 90 and above → A

// - 80–89 → B

// - 70–79 → C

// - 60–69 → D

// - Below 60 → Fail

let score = 78;

if ( score >= 90 ) {
    console.log( "grade is A" );
}
else if ( score >= 80 ) {
    console.log( "grade is B" )
}
else if ( score >= 70 ) {
    console.log( "grade is c" )
} else if ( score >= 60 ) {
    console.log( "grade is D" )
} else {
    console.log( "F-- Fail" )
}

// Question 3 — Leap Year Check
// Problem: Take a year and check if it's a leap year.
// Rules:
// Divisible by 4 AND not divisible by 100 → Leap year
// OR divisible by 400 → Leap year
// Else → Not a leap year

let number1 = 2026;
let rem = number1 % 4;
let remi = number1 % 100;
let remind = number1 % 400;

if ( rem === 0 && !( remi === 0 ) || remind === 0 ) {
    console.log( "Year is leap year" );
}
else {
    console.log( "Year is not leap year" );
}