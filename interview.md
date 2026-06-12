# JavaScript Interview Notes

Curated interview questions + answers from this curriculum.

---

## Table of Contents

1. [Basics](#basics)
2. [Variables & Comments](#variables--comments)
3. [Identifiers & Naming Conventions](#identifiers--naming-conventions)
4. [var vs let vs const — Scope, Hoisting & TDZ](#var-vs-let-vs-const--scope-hoisting--tdz)
5. [Literals & typeof](#literals--typeof)
6. [Equality Operators — == vs ===](#equality-operators----vs-)
7. [If / Else & Truthy/Falsy](#if--else--truthyfalsy)
8. [Switch Statement](#switch-statement)
9. [User Input](#user-input)
10. [Loops](#loops)
11. [Arrays](#arrays)
12. [Functions](#functions)
13. [Strings](#strings)
14. [Objects](#objects)
15. [Problems Solved](#problems-solved)

---

## Basics

### Q: How does JavaScript run outside the browser?

JavaScript runs on **Node.js**. The `process` object exposes platform info:

```js
console.log(process.platform);  // "win32"
console.log(process.arch);      // "x64"
```

### Q: What is the basic program structure in JS?

Declare → Assign → Print:

```js
let name = "Playwright";
console.log(name);

function print() {
  console.log("Hello");
}
print();
```

---

## Variables & Comments

### Q: What are the comment styles in JavaScript?

| Style | Syntax | Use |
|-------|--------|-----|
| Single-line | `// comment` | Quick notes |
| Multi-line | `/* comment */` | Block comments |
| JSDoc | `/** comment */` | Documentation |

### Q: What are essential VS Code shortcuts?

| Shortcut | Action |
|----------|--------|
| `Ctrl+/` | Toggle comment |
| `Ctrl+D` | Select next occurrence |
| `F12` | Go to definition |
| `Ctrl+Shift+P` | Command palette |
| `F5` | Start debugging |
| `F9` | Toggle breakpoint |

---

## Identifiers & Naming Conventions

### Q: What are the identifier naming rules in JavaScript?

- Must start with a **letter**, `_` (underscore), or `$` (dollar sign)
- Digits allowed only **after** the first character
- **Reserved keywords** (`let`, `class`, `var`, etc.) cannot be used
- JavaScript is **case-sensitive** (`foo` !== `Foo`)
- No spaces or hyphens allowed

### Q: What are the naming conventions (case styles)?

| Style | Example | Use Case |
|-------|---------|----------|
| `camelCase` | `firstName`, `getUserData` | Variables, functions |
| `PascalCase` | `Person`, `HttpRequestHandler` | Classes, constructors |
| `snake_case` | `max_retries`, `user_id` | Constants, database fields |
| `UPPER_SNAKE_CASE` | `MAX_VALUE`, `API_BASE_URL` | Constants |
| `kebab-case` | `my-variable` | **NOT valid** in JS (hyphen = subtraction) |
| Hungarian | `strName`, `intAge` | Legacy prefix-based typing |

---

## var vs let vs const — Scope, Hoisting & TDZ

### Q: What are the differences between `var`, `let`, and `const`?

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function | Block | Block |
| Redeclaration | Yes | No | No |
| Reassignment | Yes | Yes | No |
| Hoisting | Initialized to `undefined` | Hoisted but NOT initialized (TDZ) | Hoisted but NOT initialized (TDZ) |
| Leaks from blocks | Yes | No | No |

### Q: What is hoisting?

The JS engine moves declarations to the top during compilation:

```js
console.log(a);  // undefined (var is hoisted and initialized)
var a = 5;

console.log(b);  // ReferenceError (let is hoisted but NOT initialized — TDZ)
let b = 10;
```

### Q: What is the Temporal Dead Zone (TDZ)?

The period between hoisting and initialization for `let`/`const`. Accessing the variable in this zone throws a `ReferenceError`.

```js
// TDZ starts here for `x`
console.log(x);  // ReferenceError
let x = 42;      // TDZ ends here
```

### Q: Why does `var` leak from loops?

```js
for (var i = 0; i < 3; i++) { }
console.log(i);  // 3 — var is function-scoped, leaks out

for (let j = 0; j < 3; j++) { }
console.log(j);  // ReferenceError — let is block-scoped
```

---

## Literals & typeof

### Q: What are the literal types in JavaScript?

String, Boolean, Number, `null`, `undefined`.

### Q: What does `typeof` return for each type?

```js
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object"   ← known JS bug/quirk
typeof []          // "object"
typeof {}          // "object"
```

### Q: `null` vs `undefined`?

| | `undefined` | `null` |
|---|-------------|--------|
| Meaning | Declared but not assigned | Intentionally set to "no value" |
| Assignment | Automatic | Manual (developer-assigned) |
| `== undefined` | `true` | `true` |
| `=== undefined` | `true` | `false` |

### Q: What are template literals?

Backtick strings with `${variable}` interpolation and multi-line support:

```js
const name = "World";
const msg = `Hello, ${name}!`;   // "Hello, World!"
const multi = `line1
line2`;
```

---

## Equality Operators — == vs ===

### Q: What is the difference between `==` and `===`?

- `==` (loose) — performs **type coercion** before comparing
- `===` (strict) — compares both **value AND type** (no coercion)

```js
42 == "42"    // true  (string "42" coerced to number)
42 === "42"   // false (different types)
```

### Q: What are the tricky equality comparisons?

```js
[] == 0           // true  (empty array → "" → 0)
[] == false       // true  (both convert to 0)
NaN == NaN        // false (NaN is never equal to anything, including itself)
null == 0         // false (null only equals undefined)
{} == {}          // false (different object references)
" " == 0          // true  (whitespace string converts to 0)
1n == 1           // true  (BigInt loose equality)
1n === 1          // false (different types)
Symbol("a") == Symbol("a")  // false (Symbols are always unique)
```

### Q: How to check for `NaN`?

Use `Number.isNaN()` — `NaN === NaN` is always `false`.

### Q: What is the nullish coalescing operator (`??`)?

Returns right-hand side only if left is `null` or `undefined`:

```js
const val = null ?? "default";   // "default"
const val2 = 0 ?? "default";     // 0 (0 is NOT null/undefined)
const val3 = "" ?? "default";    // "" (empty string is NOT null/undefined)
```

### Q: Pre-increment vs Post-increment?

```js
let a = 5;
console.log(a++);  // 5 (use then increment)
console.log(a);    // 6

let b = 5;
console.log(++b);  // 6 (increment then use)
```

---

## If / Else & Truthy/Falsy

### Q: What are truthy and falsy values?

**Falsy:** `0`, `""`, `null`, `undefined`, `NaN`

**Truthy:** Any non-zero number, non-empty string, `{}`, `[]`

```js
if ({}) { console.log("truthy"); }   // runs — empty object is truthy
if ([]) { console.log("truthy"); }   // runs — empty array is truthy
if (0)  { console.log("truthy"); }   // does NOT run
```

### Q: What is the pattern for nested if-else authorization?

```js
if (isLoggedIn) {
  if (role === "admin") {
    console.log("Full access");
  } else if (role === "editor") {
    console.log("Edit access");
  } else {
    console.log("Read-only");
  }
} else {
  console.log("Login required");
}
```

---

## Switch Statement

### Q: What happens if you forget `break` in a switch?

**Fall-through** — execution continues into all subsequent cases:

```js
const fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Apple");    // runs
  case "banana":
    console.log("Banana");   // ALSO runs (no break!)
  default:
    console.log("Unknown");  // ALSO runs
}
```

### Q: How to group cases for shared logic?

```js
switch (browser) {
  case "Chrome":
  case "Edge":
  case "Brave":
    console.log("Chromium project");
    break;
  case "Firefox":
    console.log("Mozilla");
    break;
}
```

### Q: Does switch use loose or strict comparison?

Switch uses **strict comparison** (`===`) internally.

---

## User Input

### Q: How to get user input in Node.js?

`prompt()` is **browser-only**. In Node.js:

```js
// Built-in readline module (async)
const readline = require("readline");
const r1 = readline.createInterface({ input: process.stdin, output: process.stdout });
r1.question("Enter name: ", (input) => {
  console.log(input);
  r1.close();
});

// Third-party: prompt-sync (synchronous)
const prompt = require("prompt-sync")();
const name = prompt("Enter name: ");
```

### Q: What type does user input return?

Always a **string** — must convert with `Number()`, `parseInt()`, etc.

---

## Loops

### Q: What are the three loop types?

| Loop | Condition Check | Minimum Runs |
|------|----------------|--------------|
| `for` | Before each iteration | 0 |
| `while` | Before each iteration | 0 |
| `do-while` | After each iteration | 1 |

### Q: What does `continue` do?

Skips the rest of the **current iteration** and proceeds to the next:

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);  // 0, 1, 3, 4
}
```

### Q: `for...of` vs `for...in`?

```js
const arr = ["a", "b", "c"];

for (const val of arr) { console.log(val); }   // "a", "b", "c" (values)
for (const key in arr) { console.log(key); }   // "0", "1", "2" (indexes)
```

### Q: What are common loop traps?

- `i < 5` → 5 iterations; `i <= 5` → 6 iterations (off-by-one)
- Forgetting the update variable → **infinite loop**
- `do-while` always runs at least once

---

## Arrays

### Q: How to add/remove elements?

| Method | Action | End |
|--------|--------|-----|
| `push()` | Add | End |
| `pop()` | Remove | End |
| `unshift()` | Add | Beginning |
| `shift()` | Remove | Beginning |

### Q: `slice` vs `splice`?

```js
const arr = [1, 2, 3, 4, 5];

arr.slice(1, 3);     // [2, 3] — new array, does NOT mutate
arr;                 // [1, 2, 3, 4, 5] — unchanged

arr.splice(1, 2);    // [2, 3] — MUTATES original
arr;                 // [1, 4, 5]
```

### Q: `map` vs `forEach`?

```js
const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);   // [2, 4, 6] — returns new array
nums.forEach(n => console.log(n));       // undefined — returns nothing
```

### Q: `find` vs `filter`?

```js
const nums = [1, 2, 3, 4, 5];

nums.find(n => n > 3);       // 4 — first match only
nums.filter(n => n > 3);     // [4, 5] — all matches
```

### Q: What do `every()` and `some()` do?

```js
const scores = [85, 92, 78];

scores.every(s => s >= 70);  // true — ALL pass
scores.some(s => s >= 90);   // true — at least ONE passes
```

### Q: Other important array methods?

- `indexOf()` / `lastIndexOf()` / `includes()` — searching
- `findIndex()` / `findLast()` / `findLastIndex()` — search from end
- `flat()` — flatten nested arrays
- `reduce()` — accumulate to a single value
- `Array.isArray()` — type check
- `typeof []` returns `"object"` — arrays are objects

---

## Functions

### Q: What are the four function types?

```js
// 1. No params, no return
function greet() { console.log("Hi"); }

// 2. Params, no return
function greet(name) { console.log(`Hi ${name}`); }

// 3. No params, with return
function getRandom() { return Math.random(); }

// 4. Params and return
function add(a, b) { return a + b; }
```

### Q: Function Expression vs Arrow Function?

```js
// Function Expression
const greet = function(name) { return `Hi ${name}`; };

// Arrow Function (ES6)
const greet = (name) => `Hi ${name}`;

// Single param — no parentheses needed
const doubleIt = n => n * 2;

// No params
const sayHi = () => "Hi";
```

### Q: What is an IIFE?

**Immediately Invoked Function Expression** — runs immediately upon definition:

```js
(function() { console.log("Runs now!"); })();
(() => { console.log("Arrow IIFE!"); })();
```

### Q: What is a closure?

A function that **remembers its lexical scope** even after the outer function returns:

```js
function makeCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    get: () => count
  };
}
const counter = makeCounter();
counter.increment();  // 1
counter.increment();  // 2
counter.get();        // 2
```

### Q: What is a pure function?

- Same input **always** produces same output
- **No side effects** (no dependency on external state)

```js
// Pure
function add(a, b) { return a + b; }

// Impure — depends on external variable
let threshold = 50;
function isHigh(n) { return n > threshold; }
```

### Q: Rest vs Spread?

```js
// Rest — collects remaining args into an array
function log(suite, ...results) { console.log(results); }
log("Login", "pass", "fail", "pass");  // ["pass", "fail", "pass"]

// Spread — expands array into individual arguments
function add(a, b, c) { return a + b + c; }
const nums = [1, 2, 3];
add(...nums);  // 6
```

### Q: What are default parameters?

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();         // "Hello, Guest!"
greet("Alice");  // "Hello, Alice!"
```

### Q: What is a higher-order function?

A function that takes another function as an argument:

```js
function runWithLogging(testFn, testName) {
  console.log(`Running: ${testName}`);
  testFn();
}
runWithLogging(() => console.log("Test passed!"), "Login Test");
```

---

## Strings

### Q: Are strings mutable in JavaScript?

**No** — strings are **immutable**. Every method returns a **new string**.

### Q: `slice` vs `substring`?

```js
const str = "Hello World";

str.slice(0, 5);       // "Hello"
str.slice(-5);         // "World" (supports negative index)

str.substring(0, 5);   // "Hello"
str.substring(-5);     // "Hello World" (negative treated as 0)
```

### Q: `replace` vs `replaceAll`?

```js
const str = "foo bar foo";

str.replace("foo", "baz");      // "baz bar foo" (first only)
str.replaceAll("foo", "baz");   // "baz bar baz" (all)
str.replace(/foo/g, "baz");     // "baz bar baz" (regex global)
```

### Q: How to access characters?

```js
const str = "Hello";

str[0];        // "H"
str.at(-1);    // "o" (supports negative index)
str.charAt(0); // "H" (no negative support)
```

### Q: Important string methods?

- `includes()`, `startsWith()`, `endsWith()` — checking
- `indexOf()`, `lastIndexOf()`, `search()` — searching (`search` takes regex)
- `toUpperCase()`, `toLowerCase()` — case
- `trim()`, `trimStart()`, `trimEnd()` — whitespace
- `split(",")` — string to array
- `join("-")` — array to string
- `split("").sort().join("")` — anagram checking pattern

---

## Objects

### Q: Why declare object references with `const` instead of `let`/`var`?

**Short answer:** A variable holds a *reference* to the object, not the object
itself. `const` locks the binding (which object the variable points to), **not**
the object's contents. Since the reference almost never needs reassignment, `const`
is the correct default.

**`const` allows mutation of contents:**

```js
const obj1 = { a: 1, b: 2 };
obj1.a = 99;          // OK — mutate existing property
obj1.c = 3;           // OK — add property
delete obj1.b;        // OK — remove property
console.log(obj1);    // { a: 99, c: 3 }
```

**`const` blocks only reassignment of the binding:**

```js
const obj1 = { a: 1, b: 2 };
obj1 = { x: 5 };      // ❌ TypeError: Assignment to constant variable.
```

**Why this is the preferred style:**

| Reason | Explanation |
|--------|-------------|
| Reference rarely changes | You mutate properties or spread into a new variable; the binding stays fixed for its whole life. |
| Catches bugs | Accidental `obj1 = somethingElse` throws instead of silently overwriting. |
| Clear intent | `const` signals to the reader that the binding is stable. |
| Favors immutability | Encourages new objects via spread instead of reassignment. |

**Need a changed copy? Spread into a new `const` — don't reassign:**

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };   // new object, new const binding
```

**When `let`/`var` *is* justified — the binding itself is reassigned:**

```js
let current = { id: 1 };
current = { id: 2 };   // points to a different object — let needed
```

This is rare for plain object literals, so **default to `const`**.

**One gotcha:** `const` is shallow. It does not freeze the object. Use
`Object.freeze(obj)` to prevent mutation of contents.

```js
const frozen = Object.freeze({ a: 1 });
frozen.a = 99;        // silently ignored (throws in strict mode)
console.log(frozen);  // { a: 1 }
```

### Q: Dot notation vs Bracket notation?

```js
const user = { name: "Alice", age: 30 };

user.name;         // "Alice" (dot notation)
user["age"];       // 30 (bracket notation)

const key = "age";
user[key];         // 30 (dynamic access — only works with brackets)
```

### Q: Primitive vs Reference types?

```js
// Primitives — copied by VALUE
let a = 10;
let b = a;
b = 99;
console.log(a);  // 10 (unaffected)

// Objects — copied by REFERENCE
const obj1 = { val: 10 };
const obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);  // 99 (changed!)
```

### Q: How are objects compared?

```js
{} === {}              // false (different references)
const a = {}; a === a  // true  (same reference)
```

### Q: What is object destructuring?

```js
const user = { name: "Alice", age: 30, country: "USA" };

// Basic
const { name, age } = user;

// Renaming
const { name: userName, age: userAge } = user;

// Default values
const { country = "Unknown", role = "user" } = user;

// Nested
const data = { user: { address: { city: "NYC" } } };
const { user: { address: { city } } } = data;
```

### Q: What are getters and setters?

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};

person.fullName;          // "John Doe" (calls getter)
person.fullName = "Jane Smith";  // calls setter
```

### Q: Shallow copy vs Deep copy?

```js
const original = { a: 1, nested: { b: 2 } };

// Shallow copy (spread)
const shallow = { ...original };
shallow.nested.b = 99;
console.log(original.nested.b);  // 99 — nested object is shared!

// Deep copy
const deep = JSON.parse(JSON.stringify(original));
const deep2 = structuredClone(original);
```

---

## Problems Solved

### Triangle Classifier

Classify triangles as equilateral, isosceles, or scalene using if-else.

### FizzBuzz (1–100)

Multiples of 3 → "Fizz", multiples of 5 → "Buzz", both → "FizzBuzz".

### String Reverse

Reverse a string using a loop and `charAt()`.

### Palindrome Check

Check if a string reads the same forwards and backwards (e.g., "Madam").

### Anagram Check

Check if two strings contain the same characters using `split("").sort().join("")`.

---

## Cross-Cutting Interview Themes

| Theme | Chapters |
|-------|----------|
| `var` vs `let` vs `const` (scope, hoisting, TDZ) | 4, 5, 14 |
| `==` vs `===` (type coercion, confusing comparisons) | 5, 6 |
| Truthy/Falsy values | 7 |
| Closures and IIFE | 12 |
| Pure vs Impure functions | 12 |
| Primitive vs Reference types | 6, 14 |
| Array methods (map, filter, reduce, slice vs splice) | 11 |
| String immutability and methods | 13 |
| Object destructuring, spread, getters/setters | 14 |
| Loop types and traps (infinite loops, off-by-one) | 10 |
| `typeof` quirks (`typeof null === "object"`) | 5, 6 |

---

## Code Interview Questions

### Q1: What is the output? (var vs let in loops)

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
```

**Answer:**
```
0, 1, 2, 3, 3, 3
```

**Explanation:** `var` is function-scoped, so all callbacks share the same `i` (which is 3 after the loop). `let` is block-scoped, so each iteration gets its own `j`.

---

### Q2: What is the output? (Hoisting & TDZ)

```js
console.log(a);
console.log(b);
var a = 10;
let b = 20;
```

**Answer:**
```
undefined
ReferenceError: Cannot access 'b' before initialization
```

**Explanation:** `var` is hoisted and initialized to `undefined`. `let` is hoisted but NOT initialized (Temporal Dead Zone).

---

### Q3: What is the output? (Equality quirks)

```js
console.log([] == 0);
console.log([] == false);
console.log(NaN == NaN);
console.log(null == undefined);
console.log(" " == 0);
```

**Answer:**
```
true
true
false
true
true
```

**Explanation:**
- `[] == 0` → `"" == 0` → `0 == 0` → `true`
- `[] == false` → `0 == 0` → `true`
- `NaN` is never equal to anything, including itself
- `null` only loosely equals `undefined`
- `" "` converts to `0`

---

### Q4: What is the output? (Truthy/Falsy)

```js
if ({}) console.log("A");
if ("") console.log("B");
if ([]) console.log("C");
if (0) console.log("D");
if (null) console.log("E");
```

**Answer:**
```
A
C
```

**Explanation:** Empty object `{}` and empty array `[]` are **truthy**. Empty string `""`, `0`, and `null` are **falsy**.

---

### Q5: What is the output? (Pre/Post Increment)

```js
let a = 5;
console.log(a++ + ++a);
```

**Answer:**
```
12
```

**Explanation:**
- `a++` → use 5, then `a` becomes 6
- `++a` → `a` becomes 7, then use 7
- `5 + 7 = 12`

---

### Q6: What is the output? (Array methods)

```js
const arr = [1, 2, 3, 4, 5];

const result1 = arr.filter(n => n % 2 === 0);
const result2 = arr.find(n => n > 3);
const result3 = arr.map(n => n * 2);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(arr);
```

**Answer:**
```
[2, 4]
4
[2, 4, 6, 8, 10]
[1, 2, 3, 4, 5]
```

**Explanation:** `filter` returns all matches, `find` returns first match, `map` transforms all. None mutate the original array.

---

### Q7: What is the output? (slice vs splice)

```js
const arr = [10, 20, 30, 40, 50];

const sliced = arr.slice(1, 3);
const spliced = arr.splice(1, 2);

console.log(sliced);
console.log(spliced);
console.log(arr);
```

**Answer:**
```
[20, 30]
[20, 30]
[10, 40, 50]
```

**Explanation:** `slice` returns a new array without mutating. `splice` removes elements and **mutates** the original.

---

### Q8: What is the output? (Object reference)

```js
const obj1 = { value: 10 };
const obj2 = obj1;
obj2.value = 99;

console.log(obj1.value);
console.log(obj1 === obj2);
```

**Answer:**
```
99
true
```

**Explanation:** Objects are copied by **reference**. `obj1` and `obj2` point to the same object in memory.

---

### Q9: What is the output? (Closure)

```js
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
console.log(counter.count);
```

**Answer:**
```
3
undefined
```

**Explanation:** The closure keeps `count` private. It is not accessible directly via `counter.count` — only through the returned methods.

---

### Q10: What is the output? (String immutability)

```js
const str = "hello";
str.toUpperCase();
str.replace("h", "H");

console.log(str);
console.log(str.toUpperCase());
```

**Answer:**
```
"hello"
"HELLO"
```

**Explanation:** Strings are **immutable**. Methods like `toUpperCase()` and `replace()` return **new strings** — they do not modify the original.

---

### Q11: What is the output? (Destructuring)

```js
const user = { name: "Alice", age: 30, city: "NYC" };
const { name: userName, age, country = "USA" } = user;

console.log(userName);
console.log(age);
console.log(country);
console.log(city);
```

**Answer:**
```
"Alice"
30
"USA"
ReferenceError: city is not defined
```

**Explanation:** `name` is renamed to `userName`, `country` gets default value `"USA"` (since it doesn't exist in `user`), and `city` is not destructured so it is not in scope.

---

### Q12: What is the output? (Spread operator)

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(arr2);
console.log(obj2);
```

**Answer:**
```
[1, 2, 3, 4, 5]
{ a: 1, b: 2, c: 3 }
```

**Explanation:** Spread (`...`) expands an array/object into individual elements/properties.

---

### Q13: What is the output? (Rest parameters)

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
```

**Answer:**
```
6
100
```

**Explanation:** Rest (`...numbers`) collects all arguments into an array. `reduce` accumulates the sum.

---

### Q14: What is the output? (IIFE)

```js
const result = (function() {
  let x = 10;
  return x * 2;
})();

console.log(result);
console.log(x);
```

**Answer:**
```
20
ReferenceError: x is not defined
```

**Explanation:** The IIFE runs immediately and returns `20`. `x` is scoped inside the IIFE and is not accessible outside.

---

### Q15: What is the output? (for...of vs for...in)

```js
const arr = ["a", "b", "c"];

for (const val of arr) {
  console.log(val);
}

for (const key in arr) {
  console.log(key);
}
```

**Answer:**
```
a
b
c
0
1
2
```

**Explanation:** `for...of` iterates over **values**, `for...in` iterates over **keys/indexes**.

---

### Q16: What is the output? (Switch fall-through)

```js
const grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
  case "B":
    console.log("Good");
  case "C":
    console.log("Average");
  default:
    console.log("Unknown");
}
```

**Answer:**
```
Good
Average
Unknown
```

**Explanation:** Without `break`, execution **falls through** to all subsequent cases.

---

### Q17: What is the output? (Nullish coalescing)

```js
const a = null ?? "default";
const b = 0 ?? "default";
const c = "" ?? "default";
const d = undefined ?? "default";

console.log(a, b, c, d);
```

**Answer:**
```
"default" 0 "" "default"
```

**Explanation:** `??` only returns the right side if the left is `null` or `undefined`. `0` and `""` are **not** null/undefined.

---

### Q18: What is the output? (typeof quirks)

```js
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof undefined);
console.log(typeof NaN);
```

**Answer:**
```
"object"
"object"
"object"
"undefined"
"number"
```

**Explanation:** `typeof null` is a known JS bug (returns `"object"`). Arrays and objects are `"object"`. `NaN` is technically a number.

---

### Q19: What is the output? (Object.freeze)

```js
const obj = Object.freeze({ a: 1, b: 2 });
obj.a = 99;
obj.c = 3;
delete obj.b;

console.log(obj);
```

**Answer:**
```
{ a: 1, b: 2 }
```

**Explanation:** `Object.freeze()` prevents mutation. All operations are silently ignored (or throw in strict mode).

---

### Q20: What is the output? (Array reduce)

```js
const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((acc, curr) => acc + curr, 0);
const product = nums.reduce((acc, curr) => acc * curr, 1);

console.log(sum);
console.log(product);
```

**Answer:**
```
15
120
```

**Explanation:** `reduce` accumulates values. Sum: `0+1+2+3+4+5 = 15`. Product: `1*1*2*3*4*5 = 120`.

---

### Q21: What is the output? (String methods)

```js
const str = "Hello World";

console.log(str.slice(-5));
console.log(str.substring(-5));
console.log(str.at(-1));
console.log(str.includes("World"));
console.log(str.startsWith("Hello"));
```

**Answer:**
```
"World"
"Hello World"
"d"
true
true
```

**Explanation:** `slice` supports negative index, `substring` treats negative as 0. `at(-1)` gets last char.

---

### Q22: What is the output? (every vs some)

```js
const scores = [85, 92, 78, 60, 95];

console.log(scores.every(s => s >= 60));
console.log(scores.every(s => s >= 80));
console.log(scores.some(s => s >= 90));
console.log(scores.some(s => s >= 100));
```

**Answer:**
```
true
false
true
false
```

**Explanation:** `every` checks if **all** pass. `some` checks if **at least one** passes.

---

### Q23: What is the output? (Object destructuring with functions)

```js
const user = { name: "Alice", age: 30 };

function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age}`);
}

greet(user);
```

**Answer:**
```
Hello Alice, you are 30
```

**Explanation:** Destructuring works in function parameters too. The object is unpacked directly in the parameter list.

---

### Q24: What is the output? (Arrow function vs regular function)

```js
const obj = {
  name: "Alice",
  regular: function() { return this.name; },
  arrow: () => this.name
};

console.log(obj.regular());
console.log(obj.arrow());
```

**Answer:**
```
"Alice"
undefined
```

**Explanation:** Arrow functions do **not** have their own `this`. They inherit `this` from the enclosing scope (which is `window`/`global`, not `obj`).

---

### Q25: What is the output? (Shallow vs Deep copy)

```js
const original = { a: 1, nested: { b: 2 } };
const shallow = { ...original };
const deep = structuredClone(original);

shallow.a = 99;
shallow.nested.b = 99;

console.log(original.a);
console.log(original.nested.b);
console.log(deep.nested.b);
```

**Answer:**
```
1
99
2
```

**Explanation:** Shallow copy shares nested objects. `shallow.nested.b = 99` affects `original`. Deep copy (`structuredClone`) creates independent copies at all levels.

---

### Q26: What is the output? (Ternary operator)

```js
const score = 85;

const grade = score >= 90 ? "A" :
              score >= 80 ? "B" :
              score >= 70 ? "C" : "F";

console.log(grade);
```

**Answer:**
```
"B"
```

**Explanation:** Nested ternary. `85 >= 90` is false, `85 >= 80` is true → returns `"B"`.

---

### Q27: What is the output? (Array flat)

```js
const nested = [1, [2, 3], [4, [5, 6]]];

console.log(nested.flat());
console.log(nested.flat(2));
console.log(nested.flat(Infinity));
```

**Answer:**
```
[1, 2, 3, 4, [5, 6]]
[1, 2, 3, 4, 5, 6]
[1, 2, 3, 4, 5, 6]
```

**Explanation:** `flat()` flattens one level by default. Pass a depth number or `Infinity` for full flattening.

---

### Q28: What is the output? (Template literals)

```js
const a = 5;
const b = 10;

console.log(`Sum: ${a + b}`);
console.log(`Product: ${a * b}`);
console.log(`${a} > ${b} is ${a > b}`);
```

**Answer:**
```
Sum: 15
Product: 50
5 > 10 is false
```

**Explanation:** Template literals evaluate expressions inside `${...}`.

---

### Q29: What is the output? (Object keys/values/entries)

```js
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
```

**Answer:**
```
["a", "b", "c"]
[1, 2, 3]
[["a", 1], ["b", 2], ["c", 3]]
```

**Explanation:** `Object.keys()` returns keys, `Object.values()` returns values, `Object.entries()` returns key-value pairs as arrays.

---

### Q30: What is the output? (Continue in loops)

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(i);
}
```

**Answer:**
```
0
1
3
```

**Explanation:** `continue` skips iteration 2. `break` stops the loop at 4. Only 0, 1, 3 are printed.
