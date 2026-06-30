# Chapter 16 - Callbacks

## What is this chapter about?

Imagine you order a pizza. You don't just stand at the door waiting - you give the pizza shop your PHONE NUMBER so they can CALL you back when the pizza is ready. That's exactly what a **callback** is - a function you pass to another function so it can "call you back" when it's done!

## What will you learn?

### 1. What is a Callback?
A callback is a function passed as an argument to another function.

```javascript
function print() {
    console.log("Order is ready!");
}

function placeOrder(food, callback) {
    console.log("Order placed for " + food);
    callback();  // Call the callback function
}

placeOrder("Pizza", print);
// Output:
// Order placed for Pizza
// Order is ready!
```

### 2. Three Ways to Write Callbacks

```javascript
// Way 1: Named function
placeOrder("Pizza", print);

// Way 2: Anonymous function
placeOrder("Burger", function() {
    console.log("Burger is ready!");
});

// Way 3: Arrow function (shortest!)
placeOrder("Momos", () => {
    console.log("Momos are ready!");
});
```

### 3. Synchronous vs Asynchronous Callbacks

**Synchronous** - happens immediately:
```javascript
function greet(callback) {
    console.log("Hi");
    callback();  // Runs right away
}
```

**Asynchronous** - happens LATER (after some time):
```javascript
function fetchData(callback) {
    setTimeout(function() {
        console.log("Data loaded!");
        callback();
    }, 2000);  // Runs after 2 seconds
}
```

### 4. Callback Hell
When you have many callbacks nested inside each other, it looks like a pyramid of doom:

```javascript
openBrowser(function() {
    goToLoginPage(function() {
        enterCredentials(function() {
            clickLogin(function() {
                console.log("Login complete!");
            });
        });
    });
});
```

This is hard to read and maintain. That's why Promises and async/await were invented (covered in later chapters)!

### 5. Callback with Parameters
Callbacks can receive data:
```javascript
function processOrder(food, callback) {
    let totalPrice = 100;
    callback(totalPrice);  // Pass data to the callback
}

processOrder("Pizza", function(price) {
    console.log("Total: $" + price);
});
```

### 6. Callback with Return
Callbacks can also return values:
```javascript
function calculate(a, b, callback) {
    let result = callback(a, b);
    console.log("Result: " + result);
}

calculate(5, 3, function(x, y) {
    return x + y;
});
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `143_Callback.js` | Basic callback examples (3 ways to write) |
| `144_CB.js` | More callback basics |
| `145-CB_Fn.js` | Callbacks with functions |
| `146_PW_CB.js` | Playwright callback examples |
| `147_JS_CB.js` | JavaScript callback patterns |
| `148_Sync_CB.js` | Synchronous callbacks |
| `149_Async_CB.js` | Asynchronous callbacks |
| `150_CallBackHell.js` | The pyramid of doom (nested callbacks) |
| `151_CB_Hell_20_STeps.js` | Extreme callback hell example |
| `152_CB_Parameter.js` | Passing parameters to callbacks |
| `153_CB_Return.js` | Returning values from callbacks |

## Key Takeaways

- A callback is a function passed to another function
- It gets "called back" when the task is done
- Three ways to write: named function, anonymous function, arrow function
- Callback hell = too many nested callbacks (hard to read)
- Callbacks can receive parameters and return values
- Promises and async/await solve the callback hell problem

## Real World Connection

Think of callbacks like a restaurant:
1. You ORDER food (call a function)
2. You give your PHONE NUMBER (pass a callback)
3. The kitchen COOKS (function does its work)
4. When ready, they CALL YOU (callback is executed)
5. You PICK UP your food (callback receives the result)

Without callbacks, you'd have to stand at the counter waiting. With callbacks, you can do other things while waiting!
