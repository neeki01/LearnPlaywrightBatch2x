const prompt = require( "prompt-sync" )();

let num = Number( prompt( "Enter a number:" ) );

if ( num % 2 === 0 ) {
    console.log( "Number " + num + "is even" );
}
else {
    console.log( "Number " + num + "is odd" );
}

//not used   we will user uer input through playwright