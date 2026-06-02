let num = prompt( "Enter a number" );

num = Number( num );

if ( num % 2 === 0 ) {
    console.log( "Number " + num + "is even" );
}
else {
    console.log( "Number " + num + "is odd" );
}

//this will not work, here but if pasted and run into console
// on browser then it will run.

//This will not run as node js is not integgrated yet.
//ONLY AVAILABLE IN JAVA SCRIPT(PROMPT)