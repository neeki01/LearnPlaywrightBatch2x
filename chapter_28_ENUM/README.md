# Chapter 28 - ENUM

## What is this chapter about?

An **enum** (short for "enumeration") is a way to group related named constants together. Instead of typing "PASS", "FAIL", "SKIP" as plain strings everywhere, you define them once in an enum and use the enum everywhere. TypeScript catches typos, gives you autocomplete, and makes your code self-documenting.

## What will you learn?

### 1. Basic Enum - Test Status
```typescript
enum TestStatus {
    Pass = "PASS",
    Fail = "FAIL",
    Skip = "SKIP",
    Pending = "PENDING",
    Blocked = "BLOCKED"
}

console.log(TestStatus.Pass);  // "PASS"
```

### 2. Enum for Severity Levels & Environments
```typescript
enum SeverityLevels {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical",
    BLOCKING = "blocking"
}

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}
```

### 3. Enum with Switch Statement (Browser)
```typescript
enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}

function launchBrowser(browser: Browser): void {
    switch (browser) {
        case Browser.Chrome:
            console.log("Launching Chromium (Chrome v120)");
            break;
        case Browser.Firefox:
            console.log("Launching Gecko (Firefox v115)");
            break;
        // ...
    }
}
```

### 4. Enum for API HTTP Methods
```typescript
enum HTTPMethod {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE"
}

function sendRequest(method: HTTPMethod, endpoint: string): void {
    console.log(method + " " + endpoint + " → 200 OK");
}
```

## Files in this chapter

| File | What it does |
|------|-------------|
| `211_ENUM.ts` | TestStatus enum (PASS, FAIL, SKIP, PENDING, BLOCKED) |
| `212_Enum_Fn.ts` | SeverityLevels and Environment enums |
| `213_ENUM.ts` | Browser enum with switch-case logic |
| `214_API_.ts` | HTTPMethod enum for API requests |

## Key Takeaways

- **Enum** groups named constants into one place
- Values can be **strings** (string enum) or **numbers** (numeric enum)
- Enums prevent **typos** — TypeScript validates the name at compile time
- Use enums in `switch` statements for clean branching
- Enums make code **self-documenting** — `Browser.Chrome` is clearer than `"chrome"`
- Enums **do exist at runtime** — they compile to JavaScript objects

## Real World Connection

Think of an enum like a **dropdown menu**:
- A "Test Status" dropdown only lets you pick from: PASS, FAIL, SKIP, PENDING, BLOCKED
- You can't type a custom value — no surprises
- Everyone uses the same consistent values across the entire codebase
- If the values change, you change them in ONE place
