const readline = require( "readline" );

const r1 = readline.creatInterface(
    {
        input: process.stdin,
        output: process.stdout

    }
);
r1.question( "Enter a number:", ( input ) => {
    let num = Number( num );

    if ( num % 2 === 0 ) {
        console.log( "Number " + num + "is even" );
    }
    else {
        console.log( "Number " + num + "is odd" );
    }

    r1.close();
} );

//not required.