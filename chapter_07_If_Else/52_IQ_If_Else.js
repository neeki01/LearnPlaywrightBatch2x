// if ( "hello" ) console.log( "String is truthy" );
// if ( 42 ) console.log( "Number is truthy" );
// if ( {} ) console.log( "Empty object is truthy" );
// if ( [] ) coonsole.log( "Empty array is also true" );

// if ( "" ) console.log( "won't print" );
// if ( null ) console.log( "won't print" );
// if ( undefined ) console.log( "won't print" );
// if ( NaN ) console.log( "won't print" );
// if ( 0 ) console.log( "won't print" );

//Any number-1,2,3,4,5,6,4, will always be truth
//0 will always be false

let name = undefined;
if ( name ) {
    console.log( "hi" );
}
else {
    console.log( "bye1" );
}
