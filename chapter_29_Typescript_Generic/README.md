# Chapter 29 - TypeScript Generics

## What is this chapter about?

**Generics** let you write code that works with **any type** without losing type safety. Instead of writing a separate function for numbers, strings, and booleans, you write ONE function that takes a **type parameter** (`<T>`) and TypeScript figures out the rest. Think of it like a reusable template.

## What will you learn?

### 1. Generic Function - Get First Element
```typescript
function getFirstResult<T>(results: T[]): T {
    return results[0]!;
}

let firstCode = getFirstResult<number>([200, 400, 500]);  // T = number
let firstTest = getFirstResult<string>(["Login", "Signup"]); // T = string
```

The `<T>` is a placeholder type. When you call it with `number[]`, T becomes `number`. With `string[]`, T becomes `string`.

### 2. Generic Class - Data Storage
```typescript
class TestDataStorage<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }
    getFirst(): T { return this.items[0]!; }
    getAll(): T[] { return this.items; }
    count(): number { return this.items.length; }
}

let statuscodeStore = new TestDataStorage<number>();
let testNameStore = new TestDataStorage<string>();
```

Same class, different types — no code duplication!

### 3. Generic API Response Wrapper
```typescript
function wrapResponse<T>(statusCode: number, data: T): { statusCode: number; data: T } {
    return { statusCode, data };
}

let userResp = wrapResponse<string>(200, "admin");
let flagResp = wrapResponse<boolean>(200, true);
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `215_Generic.ts` | Generic function `getFirstResult<T>()` with type parameter |
| `216_Generic_Class.ts` | Generic class `TestDataStorage<T>` for storing any type |
| `217_Generic_API_RESPONSE.ts` | Generic API response wrapper function |

## Key Takeaways

- **Generics** use type parameters `<T>` to work with any type
- The type is **inferred** from usage or **explicitly specified** (`<number>`)
- Generic **functions** — one function works for numbers, strings, objects
- Generic **classes** — one class works for any data type
- Generics give you **type safety** without **code duplication**
- The `!` (non-null assertion) tells TypeScript "this value is not null/undefined"

## Real World Connection

Think of a generic like a **vending machine**:
- The machine works the same way regardless of what's inside
- One machine can hold chips (snacks) or drinks (beverages)
- The "type parameter" is like a sign on the machine saying what's inside
- The machine's buttons (methods) work the same for any product type
- Generics let you build reusable components that adapt to whatever type you need
