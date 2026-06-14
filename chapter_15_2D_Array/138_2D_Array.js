let a = [ 1, 2, 3 ];//1D array

let grid = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 6, 7, 9 ]

];

//index of 1-> 0,0
//print all the elements

for ( let i = 0; i < 3; i++ ) {
    for ( let j = 0; j < 3; j++ ) {
        console.log( grid[ i ][ j ] );
    }
    console.log( "\n" );
}