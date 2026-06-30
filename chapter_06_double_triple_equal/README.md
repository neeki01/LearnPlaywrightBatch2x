# Chapter 06 - Double & Triple Equal (Operators)

## What is this chapter about?

Imagine you have a balance scale. You put things on both sides and check if they're equal. In JavaScript, **operators** are like the different actions you can do - adding, comparing, checking types, and more!

This is the BIGGEST chapter because it covers ALL the operators you'll ever need.

## What will you learn?

### 1. Assignment Operator (=)
This puts a value into a variable. It's NOT "equal to" - it means "put this value in the box."
```javascript
let x = 10;  // Put 10 inside the box called x
```

### 2. Arithmetic Operators (+, -, *, /, %)
These are just like math class!
```javascript
10 + 5   // 15 (addition)
10 - 5   // 5  (subtraction)
10 * 5   // 50 (multiplication)
10 / 5   // 2  (division)
10 % 3   // 1  (modulus - remainder after division)
2 ** 3   // 8  (exponent - 2 to the power of 3)
```

**Modulus (%)** is special - it gives you the REMAINDER. Think of sharing 10 candies among 3 friends: each gets 3, and 1 is left over. That 1 is `10 % 3`.

### 3. Comparison Operators (== vs ===)

This is SUPER IMPORTANT!

| Operator | Name | What it does |
|----------|------|-------------|
| `==` | Loose equality | Compares VALUES only (converts types first) |
| `===` | Strict equality | Compares VALUES AND TYPES |
| `!=` | Loose not equal | Values are different (after conversion) |
| `!==` | Strict not equal | Values OR types are different |

```javascript
5 == "5"    // true  (JavaScript converts "5" to 5, then compares)
5 === "5"   // false (different types: number vs string)
5 != "5"    // false (they ARE equal after conversion)
5 !== "5"   // true  (different types, so NOT strictly equal)
```

**Golden Rule:** Always use `===` instead of `==`! It's safer and prevents bugs.

### 4. Logical Operators (&&, ||, !)
These combine multiple conditions:

```javascript
// AND (&&) - BOTH must be true
true && true    // true
true && false   // false

// OR (||) - AT LEAST ONE must be true
true || false   // true
false || false  // false

// NOT (!) - Flips true to false, false to true
!true           // false
!false          // true
```

### 5. Ternary Operator (?:)
A shortcut for if-else in ONE line!
```javascript
let age = 20;
let result = age >= 18 ? "Adult" : "Kid";
// If age >= 18, result is "Adult", otherwise "Kid"
```

### 6. typeof Operator
Tells you the type of a value:
```javascript
typeof 42        // "number"
typeof "hello"   // "string"
typeof true      // "boolean"
```

### 7. Increment/Decrement (++, --)
```javascript
let x = 5;
x++;   // x is now 6 (added 1)
x--;   // x is now 5 again (subtracted 1)
```

**Post-increment (x++)** vs **Pre-increment (++x):**
- `x++` means "use x first, THEN add 1"
- `++x` means "add 1 first, THEN use x"

### 8. Nullish Coalescing Operator (??)
Returns the right side ONLY if the left side is null or undefined:
```javascript
let name = null;
let displayName = name ?? "Guest";  // "Guest"
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `30_Operator.js` | Basic assignment operator |
| `31_Arithmetic.js` | Addition, subtraction, multiplication, division |
| `32_Modulus.js` | Remainder operator |
| `33_Expo_Op.js` | Exponent (power) operator |
| `34_Comparison_Op.js` | Greater than, less than, equal to |
| `35_IQ.js` | Tricky interview questions |
| `36_COmparison_Strict_Loose.js` | == vs === explained |
| `37_IQ_Loose_strict.js` | More tricky comparison questions |
| `38_Confusing_Comparison.js` | Confusing comparisons explained |
| `39_Logical_Op.js` | AND, OR, NOT operators |
| `40_String_Con_Op.js` | Concatenating (joining) strings |
| `41_Ternary_Op.js` | Shortcut if-else |
| `42_Type_Op.js` | typeof operator |
| `43_Incre_Decre_Op.js` | Increment and decrement |
| `44_Null_Op.js` | Nullish coalescing operator |
| `44_Post_Increment.js` | Post vs pre increment |
| `46_InterviewQuestion.js` | Interview-level questions |
| `47_Advance_ID.js` | Advanced operator concepts |

## Key Takeaways

- `=` assigns, `==` compares loosely, `===` compares strictly
- Always prefer `===` over `==`
- `%` gives you the remainder (great for checking even/odd)
- `&&` needs BOTH true, `||` needs AT LEAST ONE true
- `? :` is a one-line if-else
- `++x` adds first, `x++` uses first then adds

## Real World Connection

Think of `==` like comparing two people by their NAME only (John == john), while `===` compares their name AND their ID card (John with ID-123 === John with ID-456 is FALSE because IDs are different).
