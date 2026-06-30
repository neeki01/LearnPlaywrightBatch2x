# Chapter 11 - Arrays

## What is this chapter about?

Imagine you have a train with multiple compartments. Each compartment has a number (starting from 0) and can hold different things. An **array** is exactly like that train - it holds multiple values in order, and each value has a position number called an **index**.

## What will you learn?

### 1. Creating Arrays
```javascript
let fruits = [];                          // Empty array
let fruits_fresh = ["apple", "banana", "cherry"];  // Array with items
let arr = [10, 20, 30, 40];              // Array of numbers
let mixed = [1, "hello", true, null];    // Mix of different types!
```

### 2. Accessing Elements (Index starts at 0!)
```javascript
let arr = [10, 20, 30, 40];
console.log(arr[0]);  // 10 (first element)
console.log(arr[3]);  // 40 (fourth element)
console.log(arr[4]);  // undefined (doesn't exist!)
```

**Remember:** The first item is at index 0, NOT 1!

### 3. Adding and Removing Elements

| Method | What it does | Example |
|--------|-------------|---------|
| `push()` | Add to the END | `arr.push(50)` → [10, 20, 30, 40, 50] |
| `pop()` | Remove from the END | `arr.pop()` → removes 40 |
| `unshift()` | Add to the BEGINNING | `arr.unshift(5)` → [5, 10, 20, 30, 40] |
| `shift()` | Remove from the BEGINNING | `arr.shift()` → removes 10 |

### 4. Searching in Arrays
```javascript
let fruits = ["apple", "banana", "cherry"];
fruits.indexOf("banana");     // 1 (found at index 1)
fruits.indexOf("grape");      // -1 (not found)
fruits.includes("apple");     // true
fruits.includes("grape");     // false
```

### 5. Looping Through Arrays
```javascript
let testResults = ["pass", "fail", "pass", "skip"];

// Using for loop
for (let i = 0; i < testResults.length; i++) {
    console.log(testResults[i]);
}

// Using for...of (cleaner!)
for (let result of testResults) {
    console.log(result);
}
```

### 6. Transforming Arrays

| Method | What it does |
|--------|-------------|
| `map()` | Creates a NEW array by transforming each element |
| `filter()` | Creates a NEW array with only elements that pass a test |
| `reduce()` | Combines all elements into ONE value |
| `find()` | Returns the FIRST element that passes a test |
| `some()` | Returns true if AT LEAST ONE element passes |
| `every()` | Returns true if ALL elements pass |

### 7. Slicing and Concatenating
```javascript
let arr = [1, 2, 3, 4, 5];
arr.slice(1, 3);     // [2, 3] (extracts a portion)
let a = [1, 2];
let b = [3, 4];
a.concat(b);         // [1, 2, 3, 4] (joins arrays)
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `83_Arrays.js` | Creating arrays and accessing elements |
| `84_Arrays.js` | More array basics |
| `85_Access_Array.js` | How to access array elements |
| `86_Arrays_Adding_Remove.js` | Push, pop, shift, unshift |
| `87_Adding_Remove.js` | More adding/removing examples |
| `88_REAL_Example.js` | Real-world array examples |
| `89_Searching.js` | indexOf, includes, find |
| `90_Iterate.js` | Looping through arrays |
| `91_Transform_Array.js` | map, filter, reduce |
| `92_Arrays.js` | More array operations |
| `93_Array_Slicing.js` | slice and splice |
| `94_Concat_array.js` | Joining arrays together |
| `95_Array_Checking.js` | Checking array properties |

## Key Takeaways

- Arrays store multiple values in order
- Index starts at 0 (first element is arr[0])
- `push/pop` work at the END, `shift/unshift` work at the BEGINNING
- `indexOf` returns -1 if element is not found
- `includes` returns true/false
- Arrays in JavaScript can hold mixed types (numbers, strings, etc.)
- Use `map` to transform, `filter` to select, `reduce` to combine

## Real World Connection

Think of an array like a chocolate box with compartments:
- Each compartment has a number (0, 1, 2, 3...)
- You can add chocolates (push) or eat one (pop)
- You can look at any chocolate by its position
- You can rearrange them, remove some, or add new ones
