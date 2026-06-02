let browser = [ 'Chrome', 'firefox', 'safari', 'opera', 'Edge' ];

console.log( browser.length );

console.log( browser.pop() );  //remove the last element from array.


let removed = browser.shift();//remove the first element from the array
console.log( removed );
console.log( "*************************" )
for ( let i = 0; i < browser.length; i++ ) {
    console.log( browser[ i ] );
    if ( browser[ i ] == "Opera" ) {
        console.log( "Selenium doesn't allow this anymore." )
    }

}