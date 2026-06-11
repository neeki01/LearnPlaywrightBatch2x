// String Reverse | Palindrome Program
// Given a string , Reverse it and print true if they are same.
// Madam is palindrome, pramod is not

let string = "Madam";
let reverseString = "";
// let stringArray = new Array();
// let stringReverseArray = new Array();
// for ( let i = 0; i <= string.length; i++ ) {
//     stringArray = string.charAt( i );
//     console.log( string.charAt( i ) );
// }
// //console.log( stringArray );



for ( let j = string.length; j >= 0; j-- ) {
    reverseString = reverseString + string.charAt( j )
    // nsole.log( j );
}
console.log( reverseString );

let newString = string.toLowerCase();

console.log( newString );

let stringPallindrome = "";

for ( let i = 0; i <= newString.length; i++ ) {
    stringPallindrome += newString.charAt( i );
}
console.log( stringPallindrome );

if ( string.matchAll( stringPallindrome ) ) {
    console.log( "String is Palllimdrome" );

}
else {
    console.log( "String is not Palllimdrome" );
}


//Java Anagrams
let string1 = "pot";
let string2 = "pats";

console.log( string1.split( "" ) );
if ( ( string1.split( '' ).sort() ) === ( string2.split( '' ).sort() ) ) {
    console.log( "String is anagram" );

}
else {
    console.log( "String is not an anagram" );
}


