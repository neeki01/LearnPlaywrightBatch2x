# Chapter 08 - Switch Statement

## What is this chapter about?

Imagine you're at an ice cream shop. Instead of checking every flavor one by one (if vanilla... if chocolate... if strawberry...), you just tell the shopkeeper the number of your choice and they give you that flavor. That's what a `switch` statement does - it picks ONE path based on a value!

## What will you learn?

### 1. Basic Switch Statement
```javascript
let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("No idea");
}
```

How it works:
1. JavaScript looks at the value of `day` (which is 2)
2. It checks each `case` one by one
3. When it finds `case 2`, it runs that code
4. `break` tells it to STOP (otherwise it would keep going!)

### 2. What happens without break?
If you forget `break`, JavaScript will keep running the NEXT cases too! This is called "fall-through."

```javascript
let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");  // This will ALSO print!
}
// Output: Tuesday AND Wednesday (probably not what you wanted!)
```

### 3. The default Case
`default` is like the `else` in if-else. It runs when NO case matches.
```javascript
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    default: console.log("Invalid day!"); break;
}
```

### 4. Grouping Cases
Sometimes multiple cases should do the SAME thing:
```javascript
let day = 6;
switch (day) {
    case 6:
    case 7:
        console.log("It's a weekend!");
        break;
    default:
        console.log("It's a weekday.");
}
```

### 5. Real-World Example: HTTP Status Codes
```javascript
let status = 404;
switch (status) {
    case 200:
        console.log("Success!");
        break;
    case 404:
        console.log("Page not found!");
        break;
    case 500:
        console.log("Server error!");
        break;
    default:
        console.log("Unknown status");
}
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `58_Switch.js` | Basic switch with days of the week |
| `59_No_Break.js` | Shows what happens without break (fall-through) |
| `60_Default.js` | Using the default case |
| `61_Real_TIme_Example.js` | Real-world switch examples |
| `62_Switch_Grooup.js` | Grouping multiple cases together |
| `63_IQ.js` | Interview questions |
| `64_IQ2.js` | More tricky questions |
| `65_IQ3.js` | Advanced questions |
| `66_IQ4.js` | Expert-level questions |

## Key Takeaways

- Switch is cleaner than many if-else-if chains when comparing ONE value
- Always use `break` to stop after matching a case
- `default` is the fallback when nothing matches (like `else`)
- You can group cases by stacking them without break
- Switch uses STRICT comparison (`===`)

## When to use Switch vs If-Else?

| Use Switch when... | Use If-Else when... |
|-------------------|---------------------|
| Checking ONE value against many options | Checking DIFFERENT conditions |
| All cases are specific values (1, 2, 3) | Conditions involve ranges (> 18, < 100) |
| You want cleaner, more readable code | Logic is complex with AND/OR |

## Real World Connection

Think of switch like an elevator panel. You press button "3" and the elevator goes to floor 3. It doesn't check "are you going to floor 1? floor 2?" - it just goes directly to the floor you selected!
