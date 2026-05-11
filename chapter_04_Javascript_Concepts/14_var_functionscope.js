var a = 10;

console.log( a );

function printHello() {
    console.log( "Hello TheTestingAcademy" );
    var a = 20; // this a is local scope
    console.log( a );
    if ( true ) {
        var a = 30;
        console.log( a ); // 30
    }
    console.log( "Final ->" + a ); // 30

}

printHello();