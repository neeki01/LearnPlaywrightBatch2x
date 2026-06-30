# Chapter 14 - Objects

## What is this chapter about?

Imagine you want to describe your best friend. You'd say things like: "Their name is John, they're 12 years old, and they live in New York." In JavaScript, you can group all this information about ONE thing into an **object**!

An object is like a ID card that stores related information as key-value pairs.

## What will you learn?

### 1. Creating Objects
```javascript
let obj = {};  // Empty object

let person = {
    name: "Pramod",
    age: 42,
    rollNo: 123
};
```

Each piece of information has a **key** (like "name") and a **value** (like "Pramod").

### 2. Accessing Properties
```javascript
// Dot notation (most common)
console.log(person.name);   // "Pramod"
console.log(person.age);    // 42

// Bracket notation
console.log(person["name"]);  // "Pramod"
```

### 3. Adding and Changing Properties
```javascript
person.email = "pramod@example.com";  // Add new property
person.age = 43;                       // Change existing property
```

### 4. Objects vs Arrays

| Objects | Arrays |
|---------|--------|
| Store data as key-value pairs | Store data in ordered list |
| Access by key name | Access by index number |
| Best for describing THINGS | Best for listing ITEMS |
| `{ name: "John", age: 30 }` | `["John", 30, "NYC"]` |

### 5. Object Methods (Functions inside Objects)
```javascript
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
calculator.add(5, 3);  // 8
```

### 6. Object Destructuring
Extracting values from objects into variables:
```javascript
const user = { name: "John", age: 30, city: "NYC" };

// Basic destructuring
const { name, age } = user;
console.log(name);  // "John"
console.log(age);   // 30

// Rename variables
const { name: userName, age: userAge } = user;

// Default values
const { country = "USA" } = user;  // "USA" (since country doesn't exist)

// Nested destructuring
const data = { user: { address: { city: "NYC" } } };
const { user: { address: { city } } } = data;
```

### 7. Spread Operator with Objects
Copy and merge objects:
```javascript
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };  // { a: 1, b: 2, c: 3 }
```

### 8. Getters and Setters
Special methods that look like properties:
```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(name) {
        let parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
```

### 9. Primitive vs Reference Types
- **Primitive types** (number, string, boolean) are copied by VALUE
- **Objects** are copied by REFERENCE (like sharing a link)

```javascript
let a = 10;
let b = a;      // b gets a COPY of 10
b = 20;         // a is still 10

let obj1 = { x: 10 };
let obj2 = obj1; // obj2 points to the SAME object
obj2.x = 20;     // obj1.x is ALSO 20!
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `124_Objects.js` | Creating basic objects |
| `125_Objects2.js` | More object basics |
| `126_Objects_Creation.js` | Different ways to create objects |
| `127_Objects_REAL.js` | Real-world object examples |
| `128_Primitive_Ref.js` | Primitive vs reference types |
| `129_Ob_Examples.js` | Object examples |
| `130_IQ.js` | Interview questions |
| `131_Object_Fn.js` | Methods (functions inside objects) |
| `132_Obj_Decon.js` | Object destructuring |
| `133_Spead.js` | Spread operator with objects |
| `134_Objects_GET_SET_Methods.js` | Getters and setters |
| `135_IQ` | More interview questions |
| `136_Obj_REAL.js` | Real-world scenarios |
| `137_Let_const_obj.js` | let vs const with objects |

## Key Takeaways

- Objects store data as key-value pairs
- Access properties with dot notation (`obj.key`) or brackets (`obj["key"]`)
- Objects can contain functions (called methods)
- Destructuring extracts values into variables cleanly
- Objects are reference types - copying creates a reference, not a copy
- `const` with objects means you can't reassign the variable, but you CAN change properties inside

## Real World Connection

Think of an object like a contact card in your phone:
- Name: John
- Phone: 555-1234
- Email: john@example.com
- Address: 123 Main St

Each piece of information has a label (key) and a value. You can look up any piece by its label, add new information, or change existing information. That's exactly what objects do in JavaScript!
