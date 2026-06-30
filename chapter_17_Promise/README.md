# Chapter 17 - Promises

## What is this chapter about?

Remember the pizza order from the Callbacks chapter? A **Promise** is like getting a TRACKING NUMBER for your pizza. Instead of the restaurant calling you back, you get a receipt that says: "Your pizza is either coming (resolved) or cancelled (rejected)."

A Promise is an object that represents the FUTURE result of an operation - it can be:
- **Pending** - still waiting (pizza is being cooked)
- **Fulfilled/Resolved** - success! (pizza arrived!)
- **Rejected** - failed! (order cancelled)

## What will you learn?

### 1. Creating a Promise
```javascript
let order = new Promise(function(resolve, reject) {
    let foodReady = true;
    if (foodReady) {
        resolve("Pizza is delivered!");  // Success!
    } else {
        reject("Order cancelled.");      // Failed!
    }
});
```

### 2. Using .then() and .catch()
```javascript
order.then(function(message) {
    console.log(message);  // Runs if resolved
}).catch(function(error) {
    console.log(error);    // Runs if rejected
});
```

- `.then()` runs ONLY when the promise is successful
- `.catch()` runs ONLY when the promise fails

### 3. Real API Example
```javascript
let apiCall = new Promise(function(resolve, reject) {
    resolve({ status: 200, body: "User data" });
});

apiCall.then(function(response) {
    console.log(response.status);  // 200
    console.log(response.body);    // "User data"
});
```

### 4. The .finally() Method
Runs NO MATTER WHAT - success or failure:
```javascript
promise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Cleanup done!"));
```

### 5. Promise.all() - Running Multiple Promises
When you want to wait for MULTIPLE promises to finish:
```javascript
let p1 = Promise.resolve("Task 1 done");
let p2 = Promise.resolve("Task 2 done");
let p3 = Promise.resolve("Task 3 done");

Promise.all([p1, p2, p3]).then(function(results) {
    console.log(results);  // ["Task 1 done", "Task 2 done", "Task 3 done"]
});
```

### 6. Promise Chaining
You can chain multiple `.then()` calls:
```javascript
fetchUser()
    .then(user => fetchOrders(user.id))
    .then(orders => filterOrders(orders))
    .then(filtered => console.log(filtered))
    .catch(error => console.log(error));
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `154_Promise.js` | Basic Promise creation |
| `155_Promise_REAL_API.js` | Real API simulation with Promise |
| `156_Promise_REAL_API_PART2.js` | More API Promise examples |
| `157_Finally.js` | The .finally() method |
| `158_Call_Py_Problem.js` | Solving callback problems with Promises |
| `159_Promise_ALL.js` | Promise.all() for parallel execution |
| `160_Promise_IQ.js` | Interview questions on Promises |

## Key Takeaways

- A Promise represents a future value (success or failure)
- Three states: pending, resolved, rejected
- `.then()` handles success, `.catch()` handles failure
- `.finally()` runs no matter what
- `Promise.all()` runs multiple promises in parallel
- Promises solve callback hell by allowing chaining
- Promises are the foundation for async/await (next chapter)

## Real World Connection

Think of a Promise like an online order:
1. You place an order → You get a **tracking number** (Promise created)
2. Package is being shipped → **Pending** (still waiting)
3. Package arrives at your door → **Resolved** (success!)
4. Package lost in transit → **Rejected** (failure!)
5. You track it anytime → `.then()` for success, `.catch()` for problems

The beauty is: you don't have to stop what you're doing and wait. You can continue with other tasks and handle the result when it arrives!
