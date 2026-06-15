let testResults = [ "Pass", "Fail", "Pass", "Skip" ];

testResults.forEach( function ( result, index ) {
    console.log( "Tests" + index + " => " + result )
} );
