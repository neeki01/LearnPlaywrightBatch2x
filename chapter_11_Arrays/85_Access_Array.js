let status = [ "pass", "fail", "skip" ];
console.log( status[ 0 ] );
console.log( status[ 2 ] );


console.log( status.at( -1 ) );//  borrowed from Python
console.log( status.at( -2 ) );
console.log( status.at( -3 ) );


status[ 1 ] = "blocked";
console.log( status );

console.log( status[ -1 ] );//undefined  can not do without 'at'
