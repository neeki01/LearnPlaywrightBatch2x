# Chapter 05 - Literals

## What is this chapter about?

Imagine you're filling out a form. You write your name (a word/string), your age (a number), whether you're a student (yes/no = true/false), and maybe leave some fields empty (null/undefined). These different types of values are called **literals** in JavaScript!

A **literal** is just a fancy word for "a fixed value written directly in your code."

## What will you learn?

### 1. Types of Literals

**Number Literal** - Just plain numbers!
```javascript
let pi = 3.14;
let age = 25;
```

**String Literal** - Text wrapped in quotes!
```javascript
let name = "Alice";
let greeting = 'Hello';
```

**Boolean Literal** - Only two values: true or false!
```javascript
let isStudent = true;
let isRaining = false;
```

**Null Literal** - Intentionally empty!
```javascript
let nullValue = null;  // "I purposely put nothing here"
```

**Undefined Literal** - Forgot to fill it in!
```javascript
let undefinedValue;    // "I haven't put anything here yet"
```

### 2. The typeof Operator
This is like a magic scanner that tells you what TYPE of value is inside a variable.

```javascript
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (this is a famous JavaScript bug/quirk!)
```

### 3. Template Literals (Backticks)
Instead of using regular quotes, you can use backticks (`` ` ``) to create super-powered strings!

```javascript
let name = "Alice";
let msg = `Hello, ${name}! 2 + 2 = ${2 + 2}`;
// Result: "Hello, Alice! 2 + 2 = 4"
```

The `${}` lets you put variables and math RIGHT INSIDE your string!

### 4. Single vs Double vs Backtick Quotes
```javascript
let a = 'hello';      // Single quotes - basic
let b = "world";      // Double quotes - basic
let c = `hello ${b}`; // Backticks - super powered! (template literal)
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `22_Literal.js` | Introduction to all types of literals and typeof |
| `23_null_undefined.js` | Understanding null and undefined |
| `24_null.js` | Deep dive into null |
| `25_Literal_All.js` | All literals in one place |
| `26_Literal_Number_all.js` | Everything about number literals |
| `27_String.js` | String literals in detail |
| `28_Template_Literal.js` | Template literals with backticks |
| `29_Backtick_single_double.js` | Comparing all three types of quotes |

## Key Takeaways

- Literals are fixed values you write directly in code
- JavaScript has 5 main types: number, string, boolean, null, undefined
- `typeof` tells you what type a value is
- `typeof null` returns "object" - this is a known JavaScript quirk!
- Template literals (backticks) let you embed variables inside strings using `${}`
- Single quotes, double quotes, and backticks all create strings, but backticks are the most powerful

## Real World Connection

Think of literals like different types of packages you send in the mail:
- **Number** = a box with a number inside (like 42)
- **String** = a letter with text inside (like "Hello")
- **Boolean** = a light switch (only on/true or off/false)
- **Null** = an empty box you sent on purpose
- **Undefined** = a box you forgot to put anything in
