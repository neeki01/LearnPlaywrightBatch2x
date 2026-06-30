# Chapter 23 - Inheritance

## What is this chapter about?

Imagine you inherit your grandfather's house. You get everything he had - the rooms, the furniture, the garden - PLUS you can add your own things like a new TV or paint the walls differently. That's exactly what **inheritance** is in programming - a child class gets everything from the parent class, and can add its own special features too!

Inheritance helps you:
- **Reuse code** - Don't write the same thing twice
- **Organize better** - Group related things together
- **Extend functionality** - Add new features to existing code

## What will you learn?

### 1. Single Inheritance (One Parent, One Child)
The simplest form - one child class inherits from one parent class.

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
    sleep() {
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call parent's constructor
        this.breed = breed;
    }
    bark() {
        console.log(this.name + " is barking!");
    }
}

let dog = new Dog("Rex", "Labrador");
dog.eat();    // Inherited from Animal
dog.sleep();  // Inherited from Animal
dog.bark();   // Dog's own method
```

The `Dog` class gets `eat()` and `sleep()` from `Animal`, and adds its own `bark()` method!

### 2. The `super` Keyword
`super` is how the child class talks to the parent class:

- `super()` → Calls the parent's constructor
- `super.methodName()` → Calls the parent's method

```javascript
class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
    teardown() {
        console.log("Base: close browser");
    }
}

class UITest extends BaseTest {
    setup() {
        super.setup();  // First, do what parent does
        console.log("UI: maximize window");  // Then add your own stuff
    }
    teardown() {
        console.log("UI: take screenshot");
        super.teardown();  // Then close browser (parent's job)
    }
}

let test = new UITest();
test.setup();
// Output:
// Base: open browser
// UI: maximize window
```

### 3. Method Overriding
When the child has a method with the SAME NAME as the parent, the child's version "overrides" (replaces) the parent's version.

```javascript
class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APITest extends BaseTest {
    setup() {
        console.log("APITest: open browser");  // Overrides parent
    }
}

let test = new APITest();
test.setup();  // "APITest: open browser" (NOT "Base: open browser")
```

### 4. Real-World Example: Page Object Model
This is HOW inheritance is used in real test automation:

```javascript
class BasePage {
    verify() {
        console.log("Verifying base page");
    }
}

class LoginPage extends BasePage {
    verify() {
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button is visible");
    }
}

class DashboardPage extends BasePage {
    verify() {
        console.log("Verify: welcome message shown");
        console.log("Verify: sidebar menu loaded");
    }
}

class CartPage extends BasePage {
    verify() {
        console.log("Verify: cart items displayed");
        console.log("Verify: total price is correct");
    }
}

let pages = [new LoginPage(), new DashboardPage(), new CartPage()];
pages.forEach(function(page) {
    page.verify();
    console.log("---");
});
```

### 5. Types of Inheritance

**Multi-Level Inheritance** (Grandparent → Parent → Child):
```javascript
class BasePage {
    open() { console.log("[OPEN] " + this.name); }
}

class AuthPage extends BasePage {
    login(user) { console.log("[LOGIN] " + user); }
}

class AdminPage extends AuthPage {
    manageUsers() { console.log("[ADMIN] Managing users"); }
}

let admin = new AdminPage();
admin.open();         // From BasePage (grandparent)
admin.login("admin"); // From AuthPage (parent)
admin.manageUsers();  // Own method
```

**Hierarchical Inheritance** (One Parent, Multiple Children):
```javascript
class Father { }
class Son1 extends Father { }
class Son2 extends Father { }
```

**Multiple Inheritance** (NOT supported in JavaScript):
```javascript
// class Child extends Father, Mother { }  // ❌ ERROR!
// JavaScript does NOT support multiple inheritance
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `183_Single_Inheritance.js` | Basic single inheritance (BasePage → LoginPage) |
| `184_SI_Example.js` | Animal → Dog example with super() |
| `185_Single_Inheritance_Con.js` | Method overriding example |
| `186_IQ.js` | Using super.method() to call parent methods |
| `188_REAL_PageObject_Model.js` | Real Page Object Model with multiple pages |
| `189_Multiple_Inheritance.js` | Shows that JS doesn't support multiple inheritance |
| `190_Multiple_Level_Inheritance.js` | Multi-level inheritance (BasePage → AuthPage → AdminPage) |
| `191_Hierarchial_Inheritance.js` | Hierarchical inheritance (Father → Son1, Son2) |

## Key Takeaways

- `extends` keyword makes a class inherit from another class
- Child class gets ALL methods and properties from parent
- `super()` calls the parent's constructor
- `super.method()` calls the parent's method
- Child can OVERRIDE parent methods (replace with own version)
- JavaScript supports: Single, Multi-level, Hierarchical inheritance
- JavaScript does NOT support Multiple inheritance (can't have two parents)
- Inheritance is the foundation of Page Object Model in test automation

## Real World Connection

Think of inheritance like a **family tree**:
- **Grandparent** (BasePage) → Has basic features (open, close)
- **Parent** (AuthPage) → Gets grandparent's features + adds login
- **Child** (AdminPage) → Gets everything + adds manage users

Each generation inherits what came before and adds something new. You don't have to rebuild the house from scratch - you just add a new room!

In test automation, inheritance is like having a **template for all tests**:
- Base class opens browser, closes browser
- Login test inherits and adds "test login"
- Signup test inherits and adds "test signup"
- Everyone shares the common setup, but has their own special steps!
