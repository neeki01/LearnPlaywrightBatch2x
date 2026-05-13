// ============================================
// Lab Exercise 26: All Number Literals in JavaScript
// ============================================
// JavaScript has ONE number type: 64-bit floating point (IEEE 754)
// But there are MANY ways to write number literals.

console.log("=== 1. Decimal (Base 10) ===");
// Normal everyday numbers
let decimalInt = 42;
let decimalNeg = -17;
console.log("Positive integer:", decimalInt);
console.log("Negative integer:", decimalNeg);

console.log("\n=== 2. Binary (Base 2) ===");
// Prefix: 0b or 0B
// Only digits 0 and 1 are allowed
let binaryNum = 0b1010;       // 10 in decimal
let binaryNum2 = 0B1111;      // 15 in decimal
console.log("0b1010 =", binaryNum);
console.log("0B1111 =", binaryNum2);
console.log("Binary to string:", binaryNum.toString(2)); // "1010"

console.log("\n=== 3. Octal (Base 8) ===");
// Prefix: 0o or 0O
// Digits 0-7 are allowed
let octalNum = 0o77;          // 63 in decimal
let octalNum2 = 0O10;         // 8 in decimal
console.log("0o77 =", octalNum);
console.log("0O10 =", octalNum2);
console.log("Octal to string:", octalNum.toString(8)); // "77"

// Legacy octal (non-strict mode only): leading 0
// let legacyOctal = 077; // Avoid this - use 0o prefix instead

console.log("\n=== 4. Hexadecimal (Base 16) ===");
// Prefix: 0x or 0X
// Digits 0-9 and letters A-F (case insensitive)
let hexNum = 0xFF;            // 255 in decimal
let hexNum2 = 0x1A3F;         // 6719 in decimal
let hexNum3 = 0Xabc;          // 2748 in decimal
console.log("0xFF =", hexNum);
console.log("0x1A3F =", hexNum2);
console.log("0Xabc =", hexNum3);
console.log("Hex to string:", hexNum.toString(16)); // "ff"

console.log("\n=== 5. Floating-Point Numbers ===");
// Numbers with a decimal point
let float1 = 3.14;
let float2 = 0.5;
let float3 = .75;             // leading zero is optional
let float4 = 42.0;            // still a float internally
let float5 = 42.;             // trailing dot is valid
console.log("3.14 =", float1);
console.log("0.5 =", float2);
console.log(".75 =", float3);
console.log("42.0 =", float4);
console.log("42. =", float5);

console.log("\n=== 6. Scientific (Exponential) Notation ===");
// Format: <number>e<exponent>  (e means "times 10 to the power of")
let sci1 = 1e2;               // 1 * 10^2 = 100
let sci2 = 2.5e3;             // 2.5 * 10^3 = 2500
let sci3 = 5e-2;              // 5 * 10^-2 = 0.05
let sci4 = 1.23e4;            // 1.23 * 10^4 = 12300
console.log("1e2 =", sci1);
console.log("2.5e3 =", sci2);
console.log("5e-2 =", sci3);
console.log("1.23e4 =", sci4);

console.log("\n=== 7. Numeric Separators (Underscores) ===");
// Underscores improve readability for large numbers (ES2021)
let largeNum = 1_000_000;
let creditCard = 4111_1111_1111_1111;
let bytes = 0b1010_0011_1100_1101;
let hexColor = 0xDE_AD_BE_EF;
console.log("1_000_000 =", largeNum);
console.log("Credit card:", creditCard);
console.log("Binary with separators:", bytes);
console.log("Hex with separators:", hexColor);

console.log("\n=== 8. Special Number Values ===");

// Infinity
let posInf = Infinity;
let negInf = -Infinity;
let overflow = 1e308 * 10;    // exceeds max value
console.log("Infinity:", posInf);
console.log("-Infinity:", negInf);
console.log("Overflow to Infinity:", overflow);

// NaN (Not a Number)
let nanVal = NaN;
let badMath = 0 / 0;
let badParse = parseInt("hello");
console.log("NaN:", nanVal);
console.log("0 / 0 =", badMath);
console.log("parseInt('hello') =", badParse);
console.log("NaN === NaN:", NaN === NaN); // false! Use Number.isNaN() instead
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true

console.log("\n=== 9. BigInt (Arbitrarily Large Integers) ===");
// Suffix: n — separate type from number
let big1 = 9007199254740991n;          // Number.MAX_SAFE_INTEGER
let big2 = 9007199254740992n;          // beyond safe integer
let big3 = 123456789012345678901234567890n; // huge number!
console.log("BigInt:", big1);
console.log("BigInt type:", typeof big1); // "bigint"
console.log("Huge BigInt:", big3);

// BigInt operations
console.log("BigInt multiply:", big1 * 2n);
// Cannot mix BigInt and Number: big1 + 1  // TypeError!

console.log("\n=== 10. Number Type Limits ===");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Number.NaN:", Number.NaN);

console.log("\n=== Quick Summary ===");
// | Literal Type       | Prefix/Format      | Example              |
// |--------------------|--------------------|----------------------|
// | Decimal            | (none)             | 42, -17              |
// | Binary             | 0b or 0B           | 0b1010               |
// | Octal              | 0o or 0O           | 0o77                 |
// | Hexadecimal        | 0x or 0X           | 0xFF                 |
// | Floating-point     | decimal point      | 3.14, .5, 42.        |
// | Scientific         | e or E             | 1e5, 2.5e-3          |
// | Numeric Separator  | underscores        | 1_000_000            |
// | BigInt             | suffix n           | 9007199254740991n    |
// | Special            | keywords           | Infinity, -Infinity, NaN |
