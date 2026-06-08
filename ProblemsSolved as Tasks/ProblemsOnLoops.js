// Triangle Classifier:
// Write a program that classifies a triangle based on its side lengths.
// Given three input values representing the lengths of the sides, determine
// if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal),
// or scalene (no sides are equal). Use an if-else statement to classify the triangle.

let a = 10, b = 10, c = 10;

if ( a === b & b === c && a === c ) {
    console.log( "Triangle is equilateral" );
}
else if ( a === b && b != c && a != c ) {
    console.log( "Triangle is isosceles" );
}
else {
    console.log( "Triangle is scalene" );
}

// FizzBuzz Test:
// Write a program that prints numbers from 1 to 100. However, for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz."
// For numbers that are multiples of both 3 and 5, print "FizzBuzz."

for ( let i = 1; i <= 100; i++ ) {
    //console.log(i);
    if ( i % 3 === 0 ) {
        console.log( "Fizz" );
    }
    if ( i % 5 === 0 ) {
        console.log( "Buzz" );
    }
    if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log( "FizzBuzz" );
    }
    else {
        console.log( i );
    }
}