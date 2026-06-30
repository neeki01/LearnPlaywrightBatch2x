# Chapter 15 - 2D Arrays

## What is this chapter about?

You know how a regular array is like a single row of boxes? A **2D array** is like a GRID of boxes - it's an array of arrays! Think of it like a chess board, a spreadsheet, or a tic-tac-toe grid.

## What will you learn?

### 1. What is a 2D Array?
```javascript
// 1D Array (single row)
let a = [1, 2, 3];

// 2D Array (grid / table)
let grid = [
    [1, 2, 3],    // Row 0
    [4, 5, 6],    // Row 1
    [6, 7, 9]     // Row 2
];
```

### 2. Accessing Elements
Each element has TWO indexes: `[row][column]`

```javascript
let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

grid[0][0];  // 1 (row 0, column 0 - top left)
grid[0][2];  // 3 (row 0, column 2 - top right)
grid[1][1];  // 5 (row 1, column 1 - center)
grid[2][2];  // 9 (row 2, column 2 - bottom right)
```

### 3. Looping Through a 2D Array
You need TWO loops - one for rows, one for columns:

```javascript
for (let i = 0; i < 3; i++) {         // Outer loop = rows
    for (let j = 0; j < 3; j++) {     // Inner loop = columns
        console.log(grid[i][j]);
    }
}
```

### 4. Real-World Examples of 2D Arrays

**Tic-Tac-Toe Board:**
```javascript
let board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]
];
```

**Test Results Matrix:**
```javascript
let results = [
    ["Test1", "Pass", "2s"],
    ["Test2", "Fail", "5s"],
    ["Test3", "Pass", "1s"]
];
```

**Seat Arrangement in a Theater:**
```javascript
let seats = [
    [1, 1, 0, 1],   // Row 1: 1=occupied, 0=empty
    [0, 0, 1, 1],   // Row 2
    [1, 0, 0, 0]    // Row 3
];
```

### 5. Patterns with 2D Arrays
You can create cool patterns like pyramids and triangles using nested loops!

## Files in this chapter

| File | What it does |
|------|-------------|
| `138_2D_Array.js` | Creating and looping through 2D arrays |
| `139_2djs` | More 2D array examples |
| `140_Real.js` | Real-world 2D array scenarios |
| `141_2D_Array_Fn.js` | Functions with 2D arrays |
| `142_IQ_Right_Py_pattern.js` | Pattern printing with 2D logic |

## Key Takeaways

- A 2D array is an array inside an array (grid/table)
- Access elements with `[row][column]`
- You need nested loops (loop inside a loop) to go through all elements
- The outer loop handles rows, the inner loop handles columns
- 2D arrays are used for grids, boards, matrices, and tables

## Real World Connection

Think of a 2D array like a building with floors and rooms:
- The first index `[i]` is the FLOOR number
- The second index `[j]` is the ROOM number on that floor
- `grid[0][2]` means "Go to floor 0, then go to room 2"

Just like a hotel has multiple floors, and each floor has multiple rooms, a 2D array has multiple rows, and each row has multiple columns!
