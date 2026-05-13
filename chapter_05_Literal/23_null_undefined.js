// ============================================
// null vs undefined in JavaScript
// Simple explanation with examples
// ============================================

// --- undefined ---
// Meaning: A variable has been declared but NOT assigned a value yet.
// It's the default value JS gives when something is missing.

let name;
console.log("Declared but not assigned:", name); // undefined

// Accessing a non-existent property
const person = { age: 25 };
console.log("Property does not exist:", person.name); // undefined

// Function that doesn't return anything
function greet() {
  console.log("Hello!");
}
console.log("No return value:", greet()); // undefined

// Missing function argument
function add(a, b) {
  return a + b;
}
console.log("Missing argument:", add(5)); // NaN (because b is undefined)

// --- null ---
// Meaning: A variable is intentionally set to have NO value.
// It's assigned by the developer on purpose.

let user = null;
console.log("Intentionally empty:", user); // null

// Common use: clear a variable, reset an object reference
let account = { balance: 100 };
account = null; // deliberately removed the reference
console.log("Cleared reference:", account); // null

// --- Key Differences ---

// 1. Type
console.log("typeof undefined:", typeof undefined); // undefined
console.log("typeof null:", typeof null);            // object (known JS bug)

// 2. Comparison
console.log("Loose equality (==):", null == undefined);  // true
console.log("Strict equality (===):", null === undefined); // false

// 3. Meaning
// undefined = "not assigned yet" (automatic)
// null      = "intentionally empty" (manual)

// --- Practical Example ---
function findUser(id) {
  // Simulate: user not found
  return null; // intentionally returning "nothing found"
}

let result = findUser(999);
if (result === null) {
  console.log("User not found (null means intentionally empty)");
}

let notSet;
if (notSet === undefined) {
  console.log("Variable not set yet (undefined means never assigned)");
}

// --- Quick Summary ---
// | Aspect       | undefined                     | null                          |
// |--------------|-------------------------------|-------------------------------|
// | Who sets it  | JavaScript (automatic)        | Developer (intentional)       |
// | Meaning      | Not assigned / missing        | Intentionally empty           |
// | typeof       | "undefined"                   | "object" (JS bug)             |
// | Use case     | Default for missing values    | Clear / reset a variable      |
