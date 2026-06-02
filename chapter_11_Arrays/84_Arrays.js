// Creating arrays
let browsers = [ "Chrome", "Firefox", "Safari" ];

//Arrays Constructor

let scores = new Array( 3 );
scores[ 0 ] = 1;
scores[ 1 ] = 2;
scores[ 2 ] = 1;

let scores2 = new Array( 1, 2, 3 );
console.log( scores );
console.log( scores2 );

let test = Array.of( 10, 20, 30, 40, 50 );
console.log( test );

let chars = Array.from( "hello" );
console.log( chars );