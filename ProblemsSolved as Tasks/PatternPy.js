// *****

// ****

// ***

// **

// *

let n = 5

for ( let i = n; i >= 1; i-- ) {
    let row = "";
    for ( let j = i; j >= 1; j-- ) {
        row += "*";

    }
    console.log( row.trim() );

}

//Question 2

//   *

//  ***

// ***** 
console.log( "---------------" )
let x = 3

//let n = 3;
for ( let i = 1; i <= x; i++ ) {
    let row = "";
    for ( let k = 1; k <= x - i; k++ ) {
        row += " ";
    }
    for ( let j = 1; j <= 2 * i - 1; j++ ) {
        row += "*";
    }


    console.log( row );
}

/*

EXPLANATION :

This code draws a pyramid (like a triangle) made of stars (*).

Imagine you're building a pyramid with blocks:
- Row 1: 2 spaces + 1 star = "  *"
- Row 2: 1 space + 3 stars = " ***"
- Row 3: 0 spaces + 5 stars = "*****"

The code uses 3 loops:
1. First loop (i): Counts the rows (1, 2, 3)
2. Second loop (k): Adds spaces before the stars (so it looks like a pyramid)
3. Third loop (j): Adds the stars themselves

Each row gets fewer spaces and more stars, making the pyramid shape!

*/


for ( let i = 0; i < 5; i++ ) { if ( i === 3 ) break; }
console.log( i )
