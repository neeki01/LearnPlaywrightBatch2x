# Chapter 09 - User Input

## What is this chapter about?

Until now, all the values in your code were hardcoded (you typed them yourself). But what if you want to ASK the user for information? Like asking "What's your name?" or "Enter a number." This chapter teaches you how to take input from users!

## What will you learn?

### 1. prompt() - Browser Way
In a web browser, you can use `prompt()` to pop up a dialog box asking the user for input.

```javascript
let num = prompt("Enter a number");
```

This shows a popup window where the user can type something. But there's a catch - **this only works in a browser**, not in Node.js!

### 2. Converting Input to Numbers
Here's a SUPER important thing: `prompt()` ALWAYS gives you a STRING (text), even if the user types a number!

```javascript
let num = prompt("Enter a number");  // User types "10"
num = Number(num);  // Now it's the number 10, not the text "10"
```

If you forget to convert, math won't work properly:
```javascript
"10" + 5   // "105" (text joined together!)
10 + 5     // 15 (actual math!)
```

### 3. readline - Node.js Way
Since `prompt()` doesn't work in Node.js (the environment you're running), you need a different method called `readline`.

```javascript
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter a number:", (input) => {
    let num = Number(input);
    console.log(num % 2 === 0 ? "Even" : "Odd");
    r1.close();
});
```

This is like a conversation:
1. Your program ASKS a question
2. The user TYPES an answer
3. Your program USES that answer

## Files in this chapter

| File | What it does |
|------|-------------|
| `67_User_Input.js` | Shows prompt() - works in browser only |
| `68_Node_ReadLine.js` | Shows readline method for Node.js |
| `69_Prompt_sync.js` | Synchronous prompt example |

## Key Takeaways

- `prompt()` works only in browsers, not in Node.js
- User input ALWAYS comes as a string - you must convert it!
- Use `Number()` to convert a string to a number
- In Node.js, use `readline` module to get user input
- Always convert input before doing math operations

## Real World Connection

Think of user input like ordering at a restaurant:
- The waiter (program) asks: "What would you like?"
- You (user) say: "Pizza"
- The waiter writes it down and sends it to the kitchen

Without asking you, the waiter wouldn't know what to bring! Similarly, without user input, your program can only work with values you hardcoded.
