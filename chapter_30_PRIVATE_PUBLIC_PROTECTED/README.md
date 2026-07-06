# Chapter 30 - Access Modifiers: Private, Public, Protected

## What is this chapter about?

**Access modifiers** control **who can see and use** the members (properties/methods) of a class. Think of them like security clearance levels:

- **`public`** — Anyone can access (default)
- **`private`** — Only the class itself can access
- **`protected`** — The class and its child classes can access
- **`readonly`** — Can be set once, then read-only forever

## What will you learn?

### 1. Public / Private / Protected (APIClient)
```typescript
class APIClient {
    public baseURL: string;      // Accessible everywhere
    private apiKey: string;      // Only inside this class
    protected timeout: number;   // This class + child classes

    private getAuthHeader(): string {
        return "Bearer " + this.apiKey;  // OK — private method
    }

    public sendRequest(path: string): void {
        console.log("Auth: " + this.getAuthHeader());  // OK — same class
    }
}

let client = new APIClient("https://api.staging.com", "key_secret_123", 5000);
console.log(client.baseURL);       // ✅ OK (public)
// console.log(client.apiKey);     // ❌ Error! (private)
// console.log(client.timeout);    // ❌ Error! (protected)
```

### 2. Protected in Action (Page Object Model)
```typescript
class BasePage {
    protected baseURL: string;
    protected navigate(path: string): void {
        console.log("Navigating to: " + this.baseURL + path);
    }
}

class LoginPage extends BasePage {
    login(user: string): void {
        this.navigate("/login");  // ✅ OK — child can access protected
        console.log("Typing " + user + " into #username");
    }
}
```

### 3. Readonly (PlaywrightConfig)
```typescript
class PlaywrightConfig {
    readonly baseURL: string;
    readonly timeout: number;

    constructor(url: string, timeout: number) {
        this.baseURL = url;     // ✅ OK — set in constructor
        this.timeout = timeout;
    }
}

let config = new PlaywrightConfig("https://staging.app.com", 30000);
// config.baseURL = "https://other.com";  // ❌ Error! readonly
```

### 4. Abstract Class (BaseTest)
An **abstract class** is a class that **can't be instantiated directly**. It's a base blueprint that forces child classes to implement certain methods.

```typescript
abstract class BaseTest {
    protected testName: string;

    abstract setup(): void;      // Child MUST implement
    abstract execute(): void;    // Child MUST implement
    abstract teardown(): void;   // Child MUST implement

    loan1(): void {              // Regular method — optional override
        console.log("Hi");
    }
}

class UITest extends BaseTest {
    setup(): void { console.log("  Setup: launch browser"); }
    execute(): void { console.log("  Execute: click buttons"); }
    teardown(): void { console.log("  Teardown: close browser"); }
    loan(): void { console.log("  GIVE LOAN"); }
}
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `218_PPP.ts` | Public, private, protected — APIClient class |
| `219_PageObjectModel.ts` | Protected members in Page Object Model pattern |
| `220_READONLY.ts` | Readonly properties in PlaywrightConfig |
| `221_Abstract_Class.ts` | Abstract class — BaseTest with abstract methods |

## Key Takeaways

- **`public`** (default) — accessible from anywhere
- **`private`** — accessible only within the class (not even children)
- **`protected`** — accessible within the class and its subclasses
- **`readonly`** — can only be assigned in the constructor, then read-only
- **`abstract` class** — cannot be instantiated; forces child classes to implement `abstract` methods
- Use `private` to hide secrets (API keys, passwords)
- Use `protected` for shared utilities in a base class
- Use `readonly` for configuration that should never change

## Real World Connection

Think of access modifiers like **building security**:
- **Public** = Lobby area — anyone can walk in
- **Private** = CEO's safe — only the CEO can open it
- **Protected** = Employee-only floor — employees and managers can enter, but not outsiders
- **Readonly** = A monument plaque — once engraved, it can't be changed
- **Abstract** = A job description — you can't hire a "Job Description," you must hire a specific person who fills the role
