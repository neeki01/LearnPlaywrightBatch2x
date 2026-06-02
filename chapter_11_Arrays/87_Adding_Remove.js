let arr = [ 1, 2, 3 ];
arr.push( 4, 5, 6 );
console.log( arr );

//splice,deletCount......itemsToAdd
// arr.splice( 2, 1 );//2-Start index/item  1-number of items to be removed from the given index
// console.log( arr );


// arr.splice( 2, 0, 99 );//2-Start index/item  0-nothing will be deleted but on index 2, '99' will be added
// console.log( arr );

// arr.splice( 2, 1, 99 );//2-Start index/item  1-Delete the value on index 2 , and '99' will be added
// console.log( arr );

arr.splice( 1, 2, 10, 20 );//2-Start index/item  1-Delete the value on index 2 , and '99' will be added
console.log( arr );