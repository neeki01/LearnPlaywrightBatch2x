# Chapter 27 - TypeScript Interface

## What is this chapter about?

Think of an **interface** like a **contract** or a **shape definition**. It says: "If you want to be a TestCase, you MUST have these properties and methods." This is TypeScript's way of enforcing structure without writing a full class.

## What will you learn?

### 1. Basic Interface - Defining a TestCase Shape
```typescript
interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
};
```

### 2. Optional Properties (?) and Readonly
- `?` means the property is optional
- `readonly` means the property can't be changed after creation

```typescript
interface APIResponse {
    readonly statusCode: number;
    body: string;
    headers?: object;       // optional
    responseTime?: number;   // optional
}
```

### 3. Interface with Methods (Calculator)
```typescript
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply: (a: number, b: number) => number;  // Alternative syntax
}
```

### 4. Function Type Interface (Hooks)
```typescript
interface TestHook {
    (testName: string): void;
}

let beforeEachHook: TestHook = function(testName: string): void {
    console.log("[Before] Setting up: " + testName);
};
```

### 5. Interface Extending Another (Inheritance)
```typescript
interface BasePage {
    url: string;
    title: string;
}

interface LoginPage extends BasePage {
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}
```

### 6. Class Implementing an Interface
```typescript
interface Executable {
    name: string;
    run(): void;
    getStatus(): string;
}

class TestCase implements Executable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): void { console.log("[RUN] " + this.name); }
    getStatus(): string { return "PASS"; }
}
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `201_Interface.ts` | Basic TestCase interface with objects |
| `202_Interface_Part2.ts` | Optional properties with `?` |
| `203_IF_READONLY.ts` | Readonly properties |
| `204_IF_READOnly.ts` | Point and ReadonlyArray examples |
| `205_Interface.ts` | Calculator interface with method signatures |
| `206_Hooks.ts` | Function-type interface for test hooks |
| `207_Bug REPORT.ts` | BugReport interface |
| `208_TestConfig.ts` | TestConfig interface with optional timeout/retries |
| `209_REAL_EXAMPLE.ts` | Interface inheritance (`extends`) for page objects |
| `210_Class_Interface.ts` | Class implementing an interface (`implements`) |

## Key Takeaways

- An **interface** defines the **shape** of an object — what properties and methods it must have
- `?` makes a property **optional**
- `readonly` prevents modification after creation
- **Interfaces can extend** other interfaces (`extends`)
- **Classes can implement** interfaces (`implements`) — a contract the class must follow
- Interfaces are a **compile-time only** feature — they don't exist in compiled JavaScript

## Real World Connection

Think of an interface like a **job description**:
- It lists what skills you MUST have (required properties)
- Some skills are "nice to have" (optional with `?`)
- Some requirements are non-negotiable (`readonly`)
- A manager role extends a regular employee role (`extends`)
- When you fill the position, you must have ALL the required skills (`implements`)
