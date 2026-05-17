console( 0 == "" ); // true — loose equality (==)
console( 0 == "0" ); // true — loose equality (==)
console( "" == "0" ); // false — strict equality (===)
//  transitive comparison
//String and be equal to a Char 

console.log( 0 == false );// true — loose equality (==)
console.log( null == 0 ); // false — loose equality (==)
console.log( null == undefined ); // true — loose equality (==) considers null and undefined equal
console.log( null === undefined ); // false — strict equality (===) considers them different types