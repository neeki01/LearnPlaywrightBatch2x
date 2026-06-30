# Chapter 20 - OOPs Basics (Object-Oriented Programming)

## What is this chapter about?

Imagine you're building a toy factory. You need a BLUEPRINT for each toy (what it looks like, what it can do), and then you can CREATE many toys from that blueprint. That's what Object-Oriented Programming (OOP) is all about - creating blueprints (classes) and making objects from them!

This chapter also covers **Export and Import** - how to share code between different files.

## What will you learn?

### 1. Export and Import
When your code gets big, you split it into multiple files. Export/Import lets files share code with each other.

**Exporting (sharing your code):**
```javascript
// utils.js
export let BASE_URL = "https://api.staging.com";

export function formatTestName(name) {
    return "TC_" + name.toUpperCase();
}
```

**Importing (using someone else's code):**
```javascript
// main.js
import { BASE_URL, formatTestName } from "./utils.js";

console.log(BASE_URL);              // "https://api.staging.com"
console.log(formatTestName("login")); // "TC_LOGIN"
```

### 2. Types of Exports

**Named Export** - Export specific things by name:
```javascript
export let x = 10;
export function greet() { return "Hi"; }

// Import with exact name
import { x, greet } from "./file.js";
```

**Default Export** - Export ONE main thing:
```javascript
export default function logger() {
    console.log("Logging...");
}

// Import with ANY name
import myLogger from "./logger.js";
```

### 3. What is OOP?
OOP is a way of writing code by creating **objects** that have:
- **Attributes** (data/properties) - What the object KNOWS
- **Behaviors** (methods/functions) - What the object DOES

Example: A "Dog" object
- Attributes: name, breed, color, age
- Behaviors: bark(), eat(), sleep(), run()

### 4. Why OOP?
- **Organization** - Keeps code tidy and manageable
- **Reusability** - Create a blueprint once, make many objects
- **Maintenance** - Easy to fix and update
- **Real-world modeling** - Code mirrors real-life things

## Files in this chapter

| File | What it does |
|------|-------------|
| `utils.js` | Named exports example (BASE_URL, formatTestName) |
| `logger.js` | Default export example |
| `testutils.js` | Test utility exports |
| `01_Export_Import/168_Export_Import.js` | How to import and use exported code |
| `01_Export_Import/169_Utils.js` | More utility exports |
| `01_Export_Import/170_Logger.js` | Logger import example |
| `01_Export_Import/ExplainDefault.md` | Explanation of default export |

## Key Takeaways

- `export` makes code available to other files
- `import` brings in code from other files
- Named exports: `export { x, y }` → `import { x, y }`
- Default export: `export default x` → `import anyName from "./file"`
- OOP organizes code into objects with data (attributes) and actions (methods)
- Export/Import helps keep code organized across multiple files

## Real World Connection

Think of export/import like a library:
- **Export** = putting a book on the shelf (making it available)
- **Import** = borrowing the book from the shelf (using it in your file)

And OOP is like a cookie cutter:
- The **class** is the cookie cutter (blueprint)
- The **objects** are the cookies you make from it
- Each cookie has the same shape but can have different decorations (data)
