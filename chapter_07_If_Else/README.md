# Chapter 07 - If/Else (Making Decisions)

## What is this chapter about?

Every day you make decisions: "If it's raining, I'll take an umbrella. Otherwise, I'll wear sunglasses." JavaScript makes decisions the same way using `if`, `else if`, and `else`!

## What will you learn?

### 1. Basic If Statement
"If this condition is true, do something."
```javascript
let age = 20;
if (age > 18) {
    console.log("You are allowed to vote");
}
```

### 2. If-Else Statement
"If this is true, do this. OTHERWISE, do that."
```javascript
let age = 15;
if (age > 18) {
    console.log("You can vote!");
} else {
    console.log("You are too young to vote.");
}
```

### 3. If-Else If-Else Chain
When you have MULTIPLE conditions to check:
```javascript
let marks = 75;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
```

### 4. Real-World Examples

**API Status Codes:**
```javascript
let status = 200;
if (status === 200) {
    console.log("OK - Success!");
} else if (status === 404) {
    console.log("Not Found!");
} else if (status === 500) {
    console.log("Server Error!");
}
```

**Testing Scenarios:**
```javascript
let testResult = "pass";
if (testResult === "pass") {
    console.log("Test passed! Moving to next test.");
} else if (testResult === "fail") {
    console.log("Test failed! Logging bug.");
} else {
    console.log("Unknown result.");
}
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `48_If_Else.js` | Basic if-else example (voting age) |
| `49_IfElseIf_Else.js` | Multiple conditions with else-if chain |
| `50_Real_Examples_If_Else.js` | Real-world examples |
| `51_API_If_Else.js` | Using if-else with API status codes |
| `52_IQ_If_Else.js` | Interview questions on if-else |
| `53_IF_ELSE_Real.js` | More real-world scenarios |
| `54_IQ.js` | Tricky questions |
| `55_IE.js` | Edge cases and examples |
| `56_Problems.js` | Practice problems |
| `57_Problems.js` | More practice problems |

## Key Takeaways

- `if` checks a condition - if true, the code inside runs
- `else` runs when the `if` condition is false
- `else if` lets you check multiple conditions in order
- JavaScript checks from TOP to BOTTOM and stops at the FIRST true condition
- Always use `===` for comparisons in if statements
- You can nest if statements inside other if statements

## Real World Connection

Think of if-else like a vending machine:
- IF you put in enough money AND press a button -> you get a snack
- ELSE IF you put in money but didn't press -> it asks you to press a button
- ELSE -> it says "insert money first"

The machine checks conditions one by one and does the FIRST thing that matches!
