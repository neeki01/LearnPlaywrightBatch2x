console.log( 42 == "42" ); // true — loose equality (==) 
// performs type coercion
console.log( 42 === "42" ); // false — strict equality 
// (===) does NOT perform type coercion
//data type and conversion value

console.log( 42 == "45" ); // false


console.log( 5 === 5 ); // true
console.log( 5 === "5" ); // false



console.log( 0 == "" );// true — loose equality (==)
console.log( 0 === "" ); // false — strict equality (===)

console.log( true == 1 ); // true — loose equality (== 
console.log( true === 1 ); // false — strict equality (===)
console.log( true == "1" ); // true — loose equality (==)
console.log( true === "1" ); // false — strict equality (===)   

console.log( false == 0 ); // true — loose equality (==)
console.log( false === 0 ); // false — strict equality (===)
console.log( false == "0" ); // true — loose equality (==)
console.log( false === "0" ); // false — strict equality (===)

console.log( null == undefined ); // true — loose equality (==) considers null and undefined equal
console.log( null === undefined ); // false — strict equality (===) considers them different types

console.log( 5 != "5" ); // false — loose inequality (!=) performs type coercion
console.log( 5 !== "5" ); // true — strict inequality (!==) does NOT perform type coercion