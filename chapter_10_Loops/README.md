# Chapter 10 - Loops

## What is this chapter about?

Imagine your teacher asks you to write "I will not talk in class" 100 times. Would you write it 100 times manually? NO! You'd find a shortcut. That's what loops do - they repeat code for you!

## What will you learn?

### 1. For Loop - The Most Common Loop
Use it when you know HOW MANY TIMES to repeat.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5
```

The three parts:
- `let i = 1` → STARTING POINT (where to begin)
- `i <= 5` → CONDITION (when to stop)
- `i++` → STEP (how much to increase each time)

### 2. While Loop
Use it when you DON'T know how many times to repeat, but you know WHEN to stop.

```javascript
let attempt = 0;
while (attempt < 3) {
    console.log("Trying... Attempt " + attempt);
    attempt++;
}
```

### 3. Do-While Loop
Same as while, but it ALWAYS runs at least ONCE (even if the condition is false from the start).

```javascript
let i = 10;
do {
    console.log(i);  // This will print 10 at least once
    i++;
} while (i < 5);
```

### 4. For...of Loop (for Arrays)
The easiest way to loop through items in an array:
```javascript
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
```

### 5. For...in Loop (for Objects)
Used to loop through the keys of an object:
```javascript
let person = { name: "John", age: 30 };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

### 6. forEach (Array Method)
Another way to loop through arrays:
```javascript
let numbers = [1, 2, 3, 4];
numbers.forEach(function(num) {
    console.log(num);
});
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `71_For_loop.js` | Introduction to for loops |
| `72_For_loop.js` | More for loop examples |
| `73_For_Loop2.js` | Advanced for loop patterns |
| `74_IQ.js` | Interview questions |
| `75_For_OF_IN_EACH.js` | for...of, for...in, and forEach |
| `76_While.js` | While loop examples |
| `77_Do_While.js` | Do-while loop basics |
| `78_Do_While.js` | More do-while examples |
| `79_IQ.js` | Tricky loop questions |
| `80_IQ.js` | More interview questions |
| `81_IQ.js` | Advanced questions |
| `82_IQ.js` | Expert-level questions |

## Key Takeaways

- **for** → when you know how many times to repeat
- **while** → when you don't know how many times, but know the stopping condition
- **do-while** → always runs at least once
- **for...of** → best for arrays (gives you values)
- **for...in** → best for objects (gives you keys)
- **forEach** → array method, clean and simple
- Be careful of INFINITE LOOPS - always make sure your condition will eventually become false!

## Real World Connection

Think of loops like a washing machine:
- **For loop** = "Wash for exactly 30 minutes" (you know when it ends)
- **While loop** = "Keep washing while clothes are dirty" (you don't know exactly when)
- **Do-while** = "Run one rinse cycle, then check if done" (always does at least one cycle)
