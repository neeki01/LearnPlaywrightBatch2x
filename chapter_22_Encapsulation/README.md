# Chapter 22 - Encapsulation

## What is this chapter about?

Imagine you have a piggy bank. You can put money IN through the slot on top, and you can shake it to hear how much is inside. But you CAN'T reach your hand inside and grab money directly - you have to break it open! That's exactly what **encapsulation** is about - hiding important data and only letting people access it through special "doors" (methods) that YOU control.

In programming, encapsulation means:
- **Hiding** sensitive data (making it private)
- **Controlling** how that data can be accessed or changed (through getters and setters)

## What will you learn?

### 1. Private Fields with # (Hash)
In JavaScript, you use `#` to make a field PRIVATE - nobody from outside can touch it directly!

```javascript
class BankAccount {
    #balance = 0;  // Private - hidden from outside!

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;  // Controlled access through a method
    }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());  // 100

// console.log(account.#balance);  // ERROR! Can't access directly!
```

### 2. Getters and Setters - The "Doors" to Private Data
Since private fields can't be accessed directly, we create special methods:

- **Getter** = A method that RETURNS the private value (like looking at your bank balance)
- **Setter** = A method that CHANGES the private value (like depositing money)

```javascript
class Car {
    #engine;
    constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName;
    }

    getEngine() {          // Getter - lets you SEE the engine
        return this.#engine;
    }

    setEngine(nameEngine) { // Setter - lets you CHANGE the engine
        this.#engine = nameEngine;
    }
}

let tesla = new Car("Tesla", "V8");
console.log(tesla.getEngine());  // "V8"
tesla.setEngine("V9");           // Change the engine
console.log(tesla.getEngine());  // "V9"
```

### 3. Controlled Access with Conditions
Setters can have RULES about who can change the data:

```javascript
class ICICI {
    #balance;

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;  // Only cashier can change balance
        } else {
            console.log("Not allowed!");
        }
    }
}

let account = new ICICI("Pramod", 1000);
account.setBalance(10000000, false);  // "Not allowed!"
console.log(account.getBalance());     // Still 1000

account.setBalance(300000, true);     // Cashier can do it!
console.log(account.getBalance());     // Now 300000
```

### 4. Real-World Example: Protecting Family Data
```javascript
class Person {
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    getChild1() {
        return this.#child1;
    }

    setChild1(changed_name) {
        this.#child1 = changed_name;
    }
}

let p = new Person("Pramod", "Vrad", "Jenny");
console.log(p.name);         // "Pramod" (public - anyone can see)
// console.log(p.#child1);   // ERROR! Private - can't access!
console.log(p.getChild1());  // "Vrad" (through getter)
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `179_Ecap.js` | Basic encapsulation with BankAccount (private balance) |
| `180_REAL_EXAMPLE.js` | Person class with private children data |
| `181_Ecap_Car.js` | Car class with private engine field |
| `182_ECap_Bank.js` | Bank account with controlled access (cashier permission) |

## Key Takeaways

- Encapsulation = hiding data + controlling access
- `#` makes a field PRIVATE in JavaScript
- Private fields CANNOT be accessed directly from outside the class
- Use **getters** to READ private data
- Use **setters** to CHANGE private data (with optional rules/conditions)
- Encapsulation protects sensitive data from being accidentally changed
- Think of it like a bank: you need to go through the teller (method) to access your money (private data)

## Real World Connection

Think of encapsulation like a **medicine bottle**:
- The medicine inside is PRIVATE (you can't just grab it directly)
- The label on the bottle is PUBLIC (anyone can read it)
- You must follow the instructions (methods) to take the medicine
- The bottle protects the medicine from getting contaminated
- Only the right amount can be taken at the right time (controlled access)

Without encapsulation, anyone could change your bank balance, access your passwords, or modify critical data! Encapsulation keeps your data SAFE and SECURE.
