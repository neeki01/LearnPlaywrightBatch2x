# Chapter 13 - Strings

## What is this chapter about?

A **string** is just a fancy word for text. It can be a single letter, a word, a sentence, or even a whole book! In JavaScript, strings are wrapped in quotes. This chapter teaches you everything you can do with text.

## What will you learn?

### 1. Creating Strings
```javascript
let a = 'hello';       // Single quotes
let b = "world";       // Double quotes
let c = `hello`;       // Backticks (template literal)
```

All three create strings, but backticks are special because they let you embed variables:
```javascript
let name = "Alice";
let msg = `Hello, ${name}!`;  // "Hello, Alice!"
```

### 2. String Properties
```javascript
let text = "Hello World";
text.length;    // 11 (number of characters including space)
```

### 3. Searching in Strings

| Method | What it does | Example |
|--------|-------------|---------|
| `includes()` | Checks if text exists | `"hello".includes("ell")` → true |
| `indexOf()` | Finds position of text | `"hello".indexOf("l")` → 2 |
| `startsWith()` | Checks beginning | `"hello".startsWith("he")` → true |
| `endsWith()` | Checks ending | `"hello".endsWith("lo")` → true |
| `search()` | Search with regex | `"hello".search(/ll/)` → 2 |

### 4. Extracting Parts of Strings

| Method | What it does | Example |
|--------|-------------|---------|
| `slice(start, end)` | Extracts a portion | `"hello".slice(1, 3)` → "el" |
| `substring(start, end)` | Similar to slice | `"hello".substring(1, 3)` → "el" |
| `charAt(index)` | Gets character at position | `"hello".charAt(1)` → "e" |

### 5. Transforming Strings

| Method | What it does | Example |
|--------|-------------|---------|
| `toUpperCase()` | Converts to UPPERCASE | `"hello".toUpperCase()` → "HELLO" |
| `toLowerCase()` | Converts to lowercase | `"HELLO".toLowerCase()` → "hello" |
| `trim()` | Removes spaces from both ends | `"  hi  ".trim()` → "hi" |
| `replace()` | Replaces text | `"hi".replace("hi", "bye")` → "bye" |
| `split()` | Splits into array | `"a,b,c".split(",")` → ["a","b","c"] |

### 6. String Constructor
You can convert anything to a string:
```javascript
String(200);       // "200"
String(true);      // "true"
String(null);      // "null"
String([1, 2]);    // "1,2"
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `118_Strings.js` | Creating strings, template literals |
| `119_String_Properties.js` | Length and other properties |
| `120_Search_Check_Str.js` | includes, indexOf, startsWith, endsWith |
| `121_Substring.js` | slice, substring, charAt |
| `122_Transform_Str.js` | toUpperCase, toLowerCase, trim, replace |
| `123_SC.js` | String constructor and conversions |
| `javascript_stringcheatsheet.md` | Quick reference cheat sheet |

## Key Takeaways

- Strings can be created with '', "", or `` ` ``
- Template literals (backticks) allow `${variable}` inside strings
- `.length` gives you the number of characters
- `includes()` returns true/false, `indexOf()` returns position
- `slice(start, end)` extracts a portion of the string
- `split()` breaks a string into an array
- Strings are IMMUTABLE - methods return NEW strings, they don't change the original

## Real World Connection

Think of a string like a necklace made of beads. Each bead is a character:
- `length` = counting all the beads
- `charAt(2)` = looking at the 3rd bead
- `slice(1, 4)` = taking beads 1 through 3 off the necklace
- `toUpperCase()` = replacing all beads with bigger versions
- `split(",")` = breaking the necklace at specific beads into separate pieces
