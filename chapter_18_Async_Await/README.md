# Chapter 18 - Async/Await

## What is this chapter about?

`async/await` is like a MAGIC TRICK that makes asynchronous code look and behave like synchronous code! It's the modern, clean way to handle Promises.

Remember the Promise chapter? Instead of using `.then()` chains, you can use `await` to PAUSE your code until a Promise finishes - making it read like a normal story!

## What will you learn?

### 1. Basic Async/Await
```javascript
async function fetchData() {
    let result = await somePromise;  // Wait for the promise to resolve
    console.log(result);
}
```

- `async` before a function means "this function uses await"
- `await` means "pause here until the Promise is done"

### 2. Try-Catch-Finally with Async/Await
```javascript
async function testApi() {
    try {
        let result = await Promise.reject("503 error");
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Cleanup!");
    }
}
```

- `try` → code that might fail
- `catch` → runs if there's an error
- `finally` → ALWAYS runs (cleanup)

### 3. Sequential Execution (One after another)
```javascript
async function runTests() {
    await login();       // Wait for login to finish
    await navigate();    // Then wait for navigation
    await verify();      // Then wait for verification
    console.log("Done!");
}
```

Each step waits for the previous one to finish. Like reading a book page by page.

### 4. Parallel Execution (All at once)
```javascript
async function runParallel() {
    let [result1, result2] = await Promise.all([
        fetchUser(),
        fetchOrders()
    ]);
}
```

Both tasks start at the SAME TIME. Like cooking rice and making curry simultaneously.

### 5. Real-World Example: Login Test
```javascript
async function loginTest() {
    try {
        await page.goto("https://app.vwo.com");
        await page.fill("#username", "admin");
        await page.fill("#password", "password");
        await page.click("#login-btn");
        await page.waitForSelector("h3");
        console.log("Login successful!");
    } catch (error) {
        console.log("Login failed:", error);
    }
}
```

### 6. Async/Await vs Promises

| Promises (.then chain) | Async/Await |
|------------------------|-------------|
| `fetch().then(r => r.json()).then(data => ...)` | `let data = await (await fetch()).json()` |
| Can be hard to read with many chains | Reads like normal code |
| Error handling with .catch() | Error handling with try/catch |
| Parallel with Promise.all() | Parallel with await Promise.all() |

## Files in this chapter

| File | What it does |
|------|-------------|
| `161_Async.js` | Basic async/await with try-catch-finally |
| `162_Aysnc_P2.js` | Part 2 of async/await basics |
| `163_PyODom.js` | Working with DOM using async |
| `164_Async_Ex.js` | Async/await examples |
| `165_AA_Parallel.js` | Parallel execution with Promise.all |
| `166_AA_Seq.js` | Sequential execution (one by one) |
| `167_IQ.js` | Interview questions |
| `168_ACLogin.js` | Real login automation example |

## Key Takeaways

- `async` marks a function that uses `await`
- `await` pauses execution until a Promise resolves
- Use `try/catch/finally` for error handling
- Sequential: `await` one after another (slow but ordered)
- Parallel: `await Promise.all([...])` (fast, all at once)
- Async/await is just "syntactic sugar" over Promises (cleaner syntax)
- Always handle errors with try/catch!

## Real World Connection

Think of async/await like following a recipe:

**With Promises (old way):**
"Put the cake in the oven. When it's done, take it out. When it's out, add frosting. When frosting is done, serve it."

**With Async/Await (new way):**
```
await bakeCake();      // Wait for cake to bake
await addFrosting();   // Then add frosting
await serve();         // Then serve
```

It reads like a normal step-by-step instruction! Much easier to understand.
