# Chapter 19 - Playwright Basics

## What is this chapter about?

Now we enter the EXCITING world of browser automation! **Playwright** is a tool that lets you control a web browser with code. Imagine having a robot that can open a browser, click buttons, type text, and check if things work - all by itself! That's Playwright!

Playwright is used for:
- Automated testing of websites
- Web scraping
- Automating repetitive browser tasks

## What will you learn?

### 1. What is Playwright?
Playwright is a testing framework made by Microsoft. It can:
- Open browsers (Chrome, Firefox, Safari)
- Navigate to websites
- Click buttons, fill forms
- Take screenshots
- Check if things are working correctly

### 2. Project Setup
This chapter includes a full Playwright project with:
- `package.json` - Lists all the tools/libraries needed
- `playwright.config.ts` - Configuration file (settings for Playwright)
- `tests/` folder - Where your test files go
- `node_modules/` - Downloaded libraries

### 3. Playwright Configuration
The `playwright.config.ts` file tells Playwright:
- Where to find tests (`testDir: './tests'`)
- Which browsers to use (Chromium, Firefox, WebKit)
- How many tests to run at once
- What reporter to use (HTML report)

### 4. Writing Your First Test
```typescript
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
});
```

### 5. Running Tests
```bash
npx playwright test        # Run all tests
npx playwright test --ui   # Open the UI mode
npx playwright show-report # View the HTML report
```

### 6. Key Concepts

| Concept | What it does |
|---------|-------------|
| `page.goto()` | Navigate to a URL |
| `page.click()` | Click on an element |
| `page.fill()` | Type text into an input |
| `page.locator()` | Find an element on the page |
| `expect()` | Check/assert something is true |
| `test.describe()` | Group related tests together |

## Files in this chapter

| File/Folder | What it does |
|-------------|-------------|
| `playwright.config.ts` | Playwright settings and configuration |
| `package.json` | Project dependencies |
| `tests/example.spec.ts` | Example test file |
| `tests/codegen_tta-cart_spec.ts` | Generated test using codegen |
| `.github/` | GitHub configuration |
| `playwright-report/` | Generated HTML test reports |
| `test-results/` | Test output and screenshots |

## Key Takeaways

- Playwright automates web browsers
- Tests are written in TypeScript/JavaScript
- Configuration is in `playwright.config.ts`
- Supports multiple browsers (Chrome, Firefox, Safari)
- Uses `page` object to interact with web pages
- `expect()` is used for assertions (checking results)
- HTML reports show test results visually

## Real World Connection

Think of Playwright like a robot tester sitting at a computer:
1. You tell it: "Open Chrome and go to google.com"
2. It does it!
3. You tell it: "Type 'Playwright' in the search box and click Search"
4. It does that too!
5. You tell it: "Check if the results page shows 'Playwright'"
6. It checks and reports back: "Yes, found!" or "No, not found!"

This robot can work 24/7 without getting tired, making it perfect for testing websites automatically!
