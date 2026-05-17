// Confusing Comparison Cases in JavaScript
// == (loose equality) vs === (strict equality)

// 1. Empty array comparisons
console.log( [] == 0 ); // true — [] converts to "" then to 0
console.log( [] === 0 ); // false — different types
console.log( [] == false ); // true — both convert to 0
console.log( [] === false ); // false — different types

// 2. Empty array with empty string
console.log( [] == "" ); // true — [] converts to ""
console.log( [] === "" ); // false — different types (object vs string)

// 3. Array with single element
console.log( [ 0 ] == 0 ); // true — [0] converts to "0" then to 0
console.log( [ 0 ] === 0 ); // false — different types
console.log( [ "0" ] == 0 ); // true — ["0"] converts to "0" then to 0
console.log( [ "0" ] === 0 ); // false — different types

// 4. NaN comparisons  never equal to anything, including itself
console.log( NaN == NaN ); // false — NaN is never equal to anything
console.log( NaN === NaN ); // false — NaN is never equal to anything
console.log( NaN == 0 ); // false
console.log( NaN === 0 ); // false

// 5. null and undefined edge cases
console.log( null == 0 ); // false — null only equals undefined
console.log( null === 0 ); // false — different types
console.log( undefined == 0 ); // false
console.log( undefined === 0 ); // false

// 6. Object comparisons
console.log( {} == {} ); // false — different object references
console.log( {} === {} ); // false — different object references
const obj1 = {};
const obj2 = obj1;
console.log( obj1 == obj2 ); // true — same reference
console.log( obj1 === obj2 ); // true — same reference

// 7. String object vs primitive
console.log( "hello" == new String( "hello" ) ); // true — value comparison
console.log( "hello" === new String( "hello" ) ); // false — different types

// 8. Boolean with string
console.log( true == "true" ); // false — "true" converts to NaN
console.log( true === "true" ); // false — different types

// 9. Number with boolean
console.log( 1 == true ); // true — true converts to 1
console.log( 1 === true ); // false — different types
console.log( 0 == false ); // true — false converts to 0
console.log( 0 === false ); // false — different types

// 10. Whitespace strings
console.log( " " == 0 ); // true — " " converts to 0
console.log( " " === 0 ); // false — different types
console.log( "\t" == 0 ); // true — "\t" converts to 0
console.log( "\t" === 0 ); // false — different types

// 11. Empty string with zero
console.log( "" == 0 ); // true — "" converts to 0
console.log( "" === 0 ); // false — different types

// 12. Nested arrays
console.log( [ [ 0 ] ] == 0 ); // true — [[0]] converts to "0" then to 0
console.log( [ [ 0 ] ] === 0 ); // false — different types

// 13. Number with string containing spaces
console.log( 5 == " 5 " ); // true — " 5 " trims to 5
console.log( 5 === " 5 " ); // false — different types

// 14. BigInt comparison
console.log( 1n == 1 ); // true — same value
console.log( 1n === 1 ); // false — different types (bigint vs number)

// 15. Symbol comparison
const sym1 = Symbol( "test" );
const sym2 = Symbol( "test" );
console.log( sym1 == sym2 ); // false — symbols are unique
console.log( sym1 === sym2 ); // false — symbols are unique
console.log( sym1 == sym1 ); // true — same symbol
console.log( sym1 === sym1 ); // true — same symbol
