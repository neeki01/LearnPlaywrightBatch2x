// ============================================
// Lab Exercise 29: Single vs Double Quotes
// ============================================

// There is NO difference in JS — both create the same string type.
// The only practical difference: pick the one that avoids escaping.

// Example: string that contains a single quote
let msg1 = "It's a sunny day";    // double quotes — no escape needed
let msg2 = 'It\'s a sunny day';   // single quotes — must escape with \

console.log(msg1); // It's a sunny day
console.log(msg2); // It's a sunny day
console.log("Equal?", msg1 === msg2); // true

// Quick rule: Use whichever avoids backslash escapes.

// | Feature          | Single Quotes (' ')  | Double Quotes (" ")  | Backticks (` `)        |
// |------------------|----------------------|----------------------|------------------------|
// | String type      | string               | string               | string                 |
// | Interpolation    | No                   | No                   | Yes (`${var}`)         |
// | Escaping '       | Need \'              | No escape needed     | No escape needed       |
// | Escaping "       | No escape needed     | Need \"              | No escape needed       |
// | Multi-line       | Need \n or +         | Need \n or +         | Yes (natural)          |
// | JSON strings     | Not valid            | Required             | Not valid              |
// | Performance      | Same                 | Same                 | Same                   |
// | Recommendation   | Pick one, stay consistent with your team; use backticks for interpolation or multi-line |
