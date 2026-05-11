var a = 10;
// var is function scoped, it can be redeclared and updated


console.timeLog( a ); //global scope

function printHello() {
    console.log( "Hello TheTestingAcademy" );
    var a = 20; // this a is local scope

    console.log( a );
}

printHello(); 