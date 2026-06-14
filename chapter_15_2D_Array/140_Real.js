let testMatrix = [
    [ "login", "Pass", 200 ],
    [ "Checkout", "Fail", 404 ],
    [ "Search", "Pass", 180 ]
];

// How many test cases we have executed
//How many test cases are  failed
// What is the status code for the failed test csese

for ( let i = 0; i < testMatrix.length; i++ ) {
    for ( let j = 0; j < testMatrix[ i ].length; j++ ) {
        console.log( testMatrix[ i ][ j ] );
        if ( testMatrix[ i ][ j ] === "login" ) {
            console.log( "satus code is 200" );
        }
    }
}

for ( row of testMatrix ) {
    for ( cell of row ) {
        process.stdout.write( cell + " " );
    }
    console.log();
}
testMatrix.forEach( row => {
    row.forEach( cell => process.stdout.write( cell + " " ) );
    console.log();
}

)