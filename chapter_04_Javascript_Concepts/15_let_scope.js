let a = 10;

console.log( a );

function printHello() {
    console.log( "Hello TheTestingAcademy" );
    let a = 20; // this a is local scope
    console.log( a );
    if ( true ) {
        let a = 30;
        console.log( a ); // 30
    }
    console.log( "Final ->" + a ); // 30

}

printHello();