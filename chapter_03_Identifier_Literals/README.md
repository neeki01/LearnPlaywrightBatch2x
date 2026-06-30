# Chapter 03 - Identifier & Literals

## What is this chapter about?

Imagine you're naming your pet. You can call it "Fluffy" or "Max", but you can't call it "Sit" or "Stay" because those are commands! In JavaScript, the rules for naming things (variables, functions, etc.) are very similar. This chapter teaches you those naming rules.

## What will you learn?

### 1. What is an Identifier?
An identifier is just a fancy word for "a name you give to something in your code." Variables, functions, and objects all need identifiers.

### 2. Rules for Naming Identifiers

**Rule 1: Must start with a letter, underscore (_), or dollar sign ($)**
```javascript
var name = 10;       // OK - starts with letter
var _count = 20;     // OK - starts with underscore
var $total = 30;     // OK - starts with dollar sign
// 1name = 40;       // WRONG - can't start with a number!
```

**Rule 2: Can have numbers, but NOT as the first character**
```javascript
var abs7689 = 10;    // OK - numbers after letters
var item2 = 50;      // OK
```

**Rule 3: Can't use reserved words**
```javascript
var total = 60;      // OK
// var let = 70;     // WRONG - 'let' is a reserved word!
// var class = 80;   // WRONG - 'class' is reserved!
```

**Rule 4: JavaScript is case-sensitive**
```javascript
var foo = 90;
var Foo = 100;       // These are TWO DIFFERENT variables!
```

**Rule 5: No spaces or special characters**
```javascript
var myVar = 110;     // OK
// var my var = 120; // WRONG - no spaces allowed!
// var my-var = 130; // WRONG - no hyphens allowed!
```

### 3. Naming Styles (Conventions)

| Style | Example | When to use |
|-------|---------|-------------|
| camelCase | `firstName`, `getUserData` | Variables and functions (most common!) |
| PascalCase | `Person`, `UserProfile` | Classes and constructors |
| snake_case | `max_retries`, `user_id` | Constants and database fields |
| UPPER_SNAKE_CASE | `MAX_VALUE`, `PI` | Constants that never change |

## Files in this chapter

| File | What it does |
|------|-------------|
| `06_Identifier_Rules.js` | Shows all the rules and naming styles with examples |

## Key Takeaways

- Names must start with a letter, `_`, or `$`
- No numbers at the beginning
- No spaces or special characters (except `_` and `$`)
- Can't use reserved words like `let`, `class`, `function`
- `foo` and `Foo` are different because JavaScript cares about uppercase/lowercase
- Follow naming conventions to write clean, professional code

## Real World Connection

Think of identifiers like naming a baby. You can name your baby "John" or "john123" but you can't name them "123john" or "John Smith Jr. III!" (with spaces and special characters). JavaScript has similar rules for what names are allowed!
