# Chapter 25 - OOP Interview Questions

## What is this chapter about?

This chapter is like a **practice test** before the big exam! It contains common Object-Oriented Programming (OOP) questions that interviewers love to ask. Each exercise teaches you a different concept that you'll use when building real applications.

Think of it like learning different moves in a video game - each exercise unlocks a new skill!

## What will you learn?

### Exercise 1: Creating a Bug Tracker Class
Learn how to create a class that represents a bug in your software.

```javascript
class Bug {
    constructor(title, severity) {
        this.title = title;
        this.severity = severity;
    }

    display() {
        console.log("[" + this.severity + "] " + this.title);
    }
}

let b1 = new Bug("Login crash", "Critical");
let b2 = new Bug("Typo in footer", "Low");

b1.display();  // [Critical] Login crash
b2.display();  // [Low] Typo in footer
```

**What you learn:**
- How to define a class with properties (title, severity)
- How to use `constructor` to set up initial values
- How to create methods (display) that use the object's data

**Interview Question:** "Create a class to represent a bug in your testing framework."

---

### Exercise 2: Constructor with Default Values
Learn how to make flexible classes that work even when you don't provide all the information.

```javascript
class Environment {
    constructor(name = "staging", port = 3000) {
        this.name = name;
        this.port = port;
    }

    getURL() {
        return "http://" + this.name + ":" + this.port;
    }
}

let env1 = new Environment();                      // Uses defaults
let env2 = new Environment("production", 8080);    // Custom values

console.log(env1.getURL());  // http://staging:3000
console.log(env2.getURL());  // http://production:8080
```

**What you learn:**
- Default parameters (`name = "staging"`) provide fallback values
- If you don't pass arguments, the defaults are used
- This makes your classes more flexible and easier to use

**Interview Question:** "How do you handle optional parameters in a constructor?"

---

### Exercise 3: Understanding `this` Keyword
Learn what `this` means and why it's important.

```javascript
class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hi, I am " + this.name);
    }
}

let u1 = new User("Alice");
let u2 = new User("Bob");

u1.greet();  // Hi, I am Alice
u2.greet();  // Hi, I am Bob
```

**What you learn:**
- `this` refers to the CURRENT object (the one calling the method)
- When `u1.greet()` is called, `this` points to `u1`
- When `u2.greet()` is called, `this` points to `u2`
- Each object has its own copy of the data

**Interview Question:** "What does `this` mean in a class method?"

**Key Concept:** `this` is like a mirror - it always reflects the object that's using it!

---

### Exercise 4: Method Chaining with `return this`
Learn how to chain multiple method calls together (like jQuery or Playwright).

```javascript
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        return this;  // Return the object itself
    }

    display() {
        console.log("Count:", this.count);
        return this;  // Return the object itself
    }
}

new Counter().increment().increment().increment().display();
// Count: 3
```

**What you learn:**
- `return this` returns the current object
- This allows you to call another method immediately after
- Creates a fluent, readable API (like `page.click().fill().submit()`)
- This pattern is called "method chaining" or "fluent interface"

**Interview Question:** "How do you enable method chaining in your classes?"

**Real-World Example:** This is exactly how Playwright works:
```javascript
await page.locator('#username').fill('admin').locator('#password').fill('password123');
```

---

## Files in this chapter

| File | What it does |
|------|-------------|
| `EX1.js` | Bug tracker class with constructor and display method |
| `EX2.js` | Environment config with default parameter values |
| `EX3.js` | User class demonstrating the `this` keyword |
| `EX4.js` | Counter class with method chaining using `return this` |

## Key Takeaways

1. **Classes organize related data and behavior** - Keep properties and methods together
2. **Constructors set up initial state** - Use them to initialize properties
3. **Default parameters make classes flexible** - Provide sensible defaults
4. **`this` refers to the current object** - It's how methods access object data
5. **`return this` enables method chaining** - Creates fluent, readable APIs
6. **Methods can use object properties** - Use `this.propertyName` to access data

## Common Interview Questions

**Q: What is the difference between a class and an object?**
A: A class is a blueprint/template. An object is an instance created from that blueprint.

**Q: What does the constructor do?**
A: It's a special method that runs when you create a new object. It initializes the object's properties.

**Q: What is `this` in JavaScript?**
A: `this` refers to the object that is currently calling the method. It lets you access the object's own properties.

**Q: How do you enable method chaining?**
A: Return `this` from your methods. This allows the next method to be called on the same object.

**Q: What are default parameters?**
A: Values assigned in the function/method definition that are used if no argument is provided.

## Real-World Connection

Think of these exercises like building blocks:

- **Exercise 1 (Bug Tracker)** = Creating a sticky note system for bugs
- **Exercise 2 (Default Values)** = Making a form that pre-fills common values
- **Exercise 3 (`this` keyword)** = Each person having their own name tag
- **Exercise 4 (Method Chaining)** = Assembling a sandwich: `bread.add().lettuce.add().cheese.add().serve()`

These patterns are used EVERYWHERE in modern JavaScript frameworks like Playwright, React, and Express. Master them and you'll be ready for real-world automation!
