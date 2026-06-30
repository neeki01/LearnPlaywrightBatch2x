# Chapter 24 - Polymorphism

## What is this chapter about?

Imagine you have a magic button at home. When Mom presses it, it makes coffee. When Dad presses it, it makes tea. When you press it, it makes hot chocolate. SAME button, DIFFERENT results depending on WHO is using it! That's **polymorphism** - "one name, many forms."

In programming, polymorphism means the SAME method name can behave DIFFERENTLY depending on which class is using it.

## What will you learn?

### 1. Method Overriding (Runtime Polymorphism)
When a child class has a method with the SAME NAME as the parent class, the child "overrides" (replaces) the parent's version.

```javascript
class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APIPage extends BaseTest {
    setup() {
        console.log("APITest: open browser");  // Overrides parent's setup
    }
}

let test = new APIPage();
test.setup();  // "APITest: open browser" (child's version wins!)
```

Even though `APIPage` inherited `setup()` from `BaseTest`, it has its OWN version that replaces the parent's.

### 2. How Polymorphism Works
Think of it like this:
- `BaseTest` says: "I have a `setup()` method"
- `APIPage` says: "I ALSO have a `setup()` method, but MINE does something different"
- When you create an `APIPage` object and call `setup()`, JavaScript uses `APIPage`'s version

### 3. Real-World Testing Example
```javascript
class TestFramework {
    run() {
        console.log("Running generic test...");
    }
}

class LoginTest extends TestFramework {
    run() {
        console.log("Running login test: enter username, password, click submit");
    }
}

class SignupTest extends TestFramework {
    run() {
        console.log("Running signup test: fill form, verify email, confirm");
    }
}

let tests = [new LoginTest(), new SignupTest()];
tests.forEach(test => test.run());
// Each test runs ITS OWN version of run()
```

### 4. Polymorphism + Inheritance = Powerful!
When you combine inheritance with polymorphism, you can write flexible code:

```javascript
class Animal {
    makeSound() {
        console.log("Some generic sound...");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow! Meow!");
    }
}

class Cow extends Animal {
    makeSound() {
        console.log("Moo! Moo!");
    }
}

let animals = [new Dog(), new Cat(), new Cow()];
animals.forEach(animal => animal.makeSound());
// Each animal makes its OWN sound, even though we call the same method!
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `192_Method_Overriding.js` | Shows method overriding (BaseTest vs APIPage setup) |

## Key Takeaways

- Polymorphism = "one name, many forms"
- Method overriding is when a child class replaces a parent's method
- The child's version is used when you call the method on a child object
- Polymorphism lets you write flexible, reusable code
- Same method name can behave differently for different objects
- This is the foundation of the Page Object Model in test automation

## Real World Connection

Think of polymorphism like a **universal remote control**:
- You press the "Power" button → TV turns on, AC turns on, Fan turns on
- SAME button, DIFFERENT devices, DIFFERENT actions
- Each device understands "Power" in its own way

Or think of it like the word "RUN":
- A person RUNS (moves fast with legs)
- A computer program RUNS (executes code)
- A faucet RUNS (water flows)
- Same word, completely different meanings depending on context!

In test automation, polymorphism is like having a `verify()` method that works differently for each page:
- LoginPage's `verify()` checks username/password fields
- DashboardPage's `verify()` checks welcome message/sidebar
- CartPage's `verify()` checks items/total price
- Same method name, different behavior for each page!
