# Chapter 12 - Functions

## What is this chapter about?

Imagine you have a recipe for making a sandwich. Instead of explaining the steps every time someone wants a sandwich, you just say "make a sandwich!" and they follow the recipe. A **function** is like a recipe for your code - you write the steps once, then use (call) it whenever you need it!

## What will you learn?

### 1. Basic Function
```javascript
// Step 1: Define the function (write the recipe)
function greet() {
    console.log("Hi, how are you?");
}

// Step 2: Call the function (use the recipe)
greet();  // Output: Hi, how are you?
greet();  // You can call it as many times as you want!
```

### 2. Functions with Parameters (Inputs)
Parameters are like ingredients for your recipe:
```javascript
function add(a, b) {
    console.log(a + b);
}
add(5, 3);   // 8
add(10, 20); // 30
```

### 3. Functions with Return (Output)
`return` sends back a result:
```javascript
function add(a, b) {
    return a + b;
}
let result = add(5, 3);  // result is 8
```

### 4. Types of Functions

| Type | Has Parameters? | Has Return? | Example |
|------|----------------|-------------|---------|
| Basic | No | No | `function say() { console.log("Hi"); }` |
| With Params | Yes | No | `function greet(name) { console.log("Hi " + name); }` |
| With Return | No | Yes | `function getTime() { return "3 PM"; }` |
| Full Function | Yes | Yes | `function add(a, b) { return a + b; }` |

### 5. Arrow Functions (ES6 Shortcut)
A shorter way to write functions:
```javascript
// Normal function
function doubleIt(n) {
    return n * 2;
}

// Arrow function (shortcut!)
const doubleIt = n => n * 2;

// If only one parameter, no need for parentheses
// If only one line, no need for curly braces or return keyword
```

### 6. Function Expression
Storing a function in a variable:
```javascript
const greet = function(name) {
    return "Hello " + name;
};
console.log(greet("Pramod"));
```

### 7. IIFE (Immediately Invoked Function Expression)
A function that runs IMMEDIATELY after being created:
```javascript
(function() {
    console.log("I run immediately!");
})();
```

### 8. Default Parameters
Give parameters a default value if none is provided:
```javascript
function greet(name = "Guest") {
    console.log("Hello " + name);
}
greet("John");  // Hello John
greet();        // Hello Guest
```

### 9. Rest Parameters (...rest)
Collect multiple arguments into an array:
```javascript
function sum(...numbers) {
    let total = 0;
    for (let n of numbers) {
        total += n;
    }
    return total;
}
sum(1, 2, 3, 4);  // 10
```

### 10. Closures
A closure is when a function REMEMBERS variables from its outer function even after the outer function has finished:
```javascript
function outer() {
    let message = "hello";
    function inner() {
        console.log(message);  // inner remembers message!
    }
    return inner;
}
let fn = outer();
fn();  // "hello" (even though outer() already finished!)
```

### 11. Higher Order Functions
A function that takes another function as a parameter or returns a function:
```javascript
function applyOperation(num, operation) {
    return operation(num);
}
applyOperation(5, doubleIt);  // 10
```

### 12. Pure Functions
A function that always gives the same output for the same input and has no side effects:
```javascript
function add(a, b) {
    return a + b;  // Always pure - same input = same output
}
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `96_Functions.js` | Basic function definition and calling |
| `97_Type1_Fn_Basic_Functions.js` | Simple functions without params or return |
| `98_Type2_Fn_With_Param_No_Return.js` | Functions with parameters |
| `99_Type3_Fn_without_Param_Return_Type.js` | Functions with return |
| `100_Type4_Fn_With_Param_With_Return.js` | Full functions with both |
| `101_Template_literal.js` | Template literals in functions |
| `102_Fn_Expression.js` | Function expressions |
| `103_Arrow_Fn.js` | Arrow functions |
| `104_Arrow_Fn_REAL.js` | Real-world arrow function examples |
| `105_IIFE.js` | Immediately Invoked Function Expressions |
| `106_Default_Param_Fn.js` | Default parameters |
| `107_IQ.js` | Interview questions |
| `108_Rest_Param_Fn.js` | Rest parameters |
| `109_IQ.js` | More questions |
| `110_Spead_IQ.js` | Spread operator with functions |
| `111_Scope._Fn.js` | Scope in functions |
| `112_IQ.js` | Tricky questions |
| `113_Closure.js` | Closures explained |
| `114_Closure.js` | More closure examples |
| `115_API_REAL_Closure.js` | Real API closure example |
| `116_Higher_Order_Fn.js` | Higher order functions |
| `117_Pure_Fn.js` | Pure functions |
| `118_Normalize_Label.js` | Practical function usage |

## Key Takeaways

- Functions let you reuse code - write once, call many times
- Parameters are inputs, return is the output
- Arrow functions are shorter: `const fn = (x) => x * 2`
- Closures remember variables from their outer scope
- Higher order functions take or return other functions
- Pure functions are predictable and easy to test

## Real World Connection

Think of functions like a vending machine:
- You put in coins (parameters/inputs)
- The machine does something inside (the function body)
- It gives you a drink (return value/output)
- The same coins always give you the same drink (pure function)
