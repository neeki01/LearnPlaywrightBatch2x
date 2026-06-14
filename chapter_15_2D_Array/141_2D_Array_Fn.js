let score = [
    [ 85, 90, 78 ],
    [ 60, 45, 70 ],
    [ 95, 88, 92 ]

];

let rowSum = score.map( row => row.reduce( ( a, b ) => a + b, 0 ) );
console.log( rowSum );

let suiteResults = [
    [ "login-pass", "register-pass", "logout-pass" ],  // Auth suite
    [ "search-pass", "filter-fail", "sort-pass" ],  // Search suite
    [ "checkout-fail", "payment-fail", "confirm-pass" ]   // Payment suite
];

//want only failed test cases

for ( let i = 0; i < suiteResults.length; i++ ) {
    for ( let j = 0; j < suiteResults[ i ].length; j++ ) {
        if ( suiteResults[ i ][ j ].includes( "fail" ) ) {
            console.log( suiteResults[ i ][ j ] );
        }

    }
}

