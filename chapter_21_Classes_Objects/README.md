# Chapter 21 - Classes & Objects

## What is this chapter about?

This is where OOP really comes alive! A **class** is a blueprint/template, and an **object** is what you create from that blueprint. Think of a class as a cookie cutter and objects as the cookies!

## What will you learn?

### 1. Creating a Class
```javascript
class Person {
    // Attributes (what the person HAS)
    name;
    email;
    salary;
    address;

    // Behaviors (what the person DOES)
    sleep() { }
    eat() { }
    walk() { }
}
```

### 2. Creating Objects from a Class
```javascript
let person1 = new Person();
person1.name = "John";
person1.email = "john@example.com";
```

### 3. Constructor - The Setup Function
A constructor automatically sets up values when creating an object:
```javascript
class TestCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display() {
        console.log(this.name + " -> " + this.status + " -> " + this.priority);
    }
}

let loginTC = new TestCase("Login Test", "Pass", "P0");
let signUpTC = new TestCase("Signup TC", "Fail", "P1");

loginTC.display();  // "Login Test -> Pass -> P0"
```

### 4. Real-World Example: Browser Automation
```javascript
class Browser {
    constructor(name) {
        this.name = name;
    }
    launch() {
        console.log(this.name + " launched!");
    }
    navigate(url) {
        console.log("Navigating to " + url);
    }
    close() {
        console.log(this.name + " closed!");
    }
}

let chrome = new Browser("Chrome");
chrome.launch();     // "Chrome launched!"
chrome.navigate("https://google.com");
chrome.close();      // "Chrome closed!"
```

### 5. Private Fields (#) - Hidden Data
Some data should be HIDDEN from outside access:
```javascript
class Credentials {
    #apiKey;  // Private - can't be accessed from outside!
    user;

    constructor(user, key) {
        this.user = user;
        this.#apiKey = key;
    }
    getAuthHeader() {
        return "Bearer " + this.#apiKey;  // Only way to access #apiKey
    }
}

let cred = new Credentials("admin", "secret_key_1234");
console.log(cred.user);       // "admin" (public - OK!)
// console.log(cred.#apiKey); // ERROR! Can't access private field!
console.log(cred.getAuthHeader());  // "Bearer secret_key_1234"
```

### 6. Static Members - Shared by All
Static members belong to the CLASS itself, not to individual objects:
```javascript
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static batchName = "Playwright2x";
    static mentor = "Pramod Dutta";

    static display() {
        console.log("Hi, I am common function");
    }
}

// Access static members through the CLASS, not the object
console.log(Student.batchName);  // "Playwright2x"
Student.display();               // "Hi, I am common function"

// Regular members are accessed through OBJECTS
let s1 = new Student("Yasho", 32);
console.log(s1.name);  // "Yasho"
```

### 7. Function vs Method

| Function | Method |
|----------|--------|
| Standalone (not inside a class) | Inside a class |
| `function greet() { }` | `class Person { greet() { } }` |
| Called directly: `greet()` | Called on object: `person.greet()` |

## Files in this chapter

| File | What it does |
|------|-------------|
| `171_Class_Object.js` | Basic class definition with attributes and behaviors |
| `172_Class_Object2.js` | More class and object examples |
| `173_Car.js` | Car class example |
| `174_REAL_Browser.js` | Real TestCase class with constructor |
| `175_IQ.js` | Interview questions |
| `176_Private_Public.js` | Private (#) and public fields |
| `177_Statis.js` | Static members |
| `178_Statis.js` | More static examples |

## Key Takeaways

- A **class** is a blueprint, an **object** is created from it using `new`
- **Constructor** sets up initial values when creating objects
- `this` refers to the current object
- **Private fields** (`#`) are hidden from outside access
- **Public fields** can be accessed freely
- **Static members** belong to the class, not individual objects
- A **method** is a function inside a class
- Classes help organize code and create reusable blueprints

## Real World Connection

Think of a class like an architectural blueprint for houses:
- The **blueprint** (class) defines: number of rooms, color, size (attributes) and what you can do there like sleep, cook, eat (methods)
- Each **house** (object) built from the blueprint has the same structure but different owners and furniture (different data)
- **Private fields** are like the safe inside a house - only the owner can access it
- **Static members** are like the neighborhood name - shared by ALL houses, not specific to one
