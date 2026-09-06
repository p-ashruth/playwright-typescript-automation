# Playwright Testing Suite (TypeScript) - Learning & Practice

A comprehensive Playwright testing framework organized in **4 chapters** with progressive learning, from basics to advanced concepts. This project demonstrates real-world testing scenarios with various Playwright features and best practices.

---

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [Folder Breakdown](#folder-breakdown)
- [Chapter Details](#chapter-details)
- [Setup & Installation](#setup--installation)
- [Running Tests](#running-tests)
- [Test Summary](#test-summary)

---

## Project Structure

```
PlayWright-using-TypeScript/
│
├── tests/
│   ├── example.spec.ts                    # Basic example test
│   │
│   ├── Chapter_01/                        # Basics & Recording
│   │   ├── 01_Record_Test.spec.ts
│   │   ├── 02_First_Test.spec.ts
│   │   ├── 03_RecordAtCursor.spec.ts
│   │   └── 04_Codegen_Example.spec.ts
│   │
│   ├── Chapter_02/                        # Locators & User Interactions
│   │   ├── 01_ScreenshotCheck.spec.ts
│   │   ├── 02_Locators.spec.ts
│   │   ├── 03_Hooks.spec.ts
│   │   ├── 04_Dropdown.spec.ts
│   │   ├── 05_Iframe_DragDown.spec.ts
│   │   ├── 06_MouseActions.spec.ts
│   │   ├── 07_Keyboard_Actions.spec.ts
│   │   ├── 08_DatePicker.spec.ts
│   │   ├── 09_Hard_Assertions.spec.ts
│   │   └── 10_Soft_Assertions.spec.ts
│   │
│   ├── Chapter_03/                        # Advanced Test Features
│   │   ├── 01_Annotations.spec.ts
│   │   ├── 02_Group_and_Execute.spec.ts
│   │   ├── 03_Tags.spec.ts
│   │   ├── 04_Retry_Test_on_Failure.spec.ts
│   │   ├── 05_Parameterise_Tests.spec.ts
│   │   ├── 06_Visual_Testing.spec.ts
│   │   ├── 06_Visual_Testing.spec.ts-snapshots/    # Visual regression snapshots
│   │   └── 07_Timeouts.spec.ts
│   │
│   └── Chapter_04/                        # Advanced Scenarios
│       ├── 01_Browser_Context.spec.ts
│       ├── 02_Rerun_Failed_tests.spec.ts
│       ├── 03_Alerts_PopUps.spec.ts
│       ├── 04_TestReports.spec.ts
│       ├── 05_TextContent.spec.ts
│       ├── 06_Iterate_Matching_Elements.spec.ts
│       └── 07_Checkbox_Radio.spec.ts
│
├── playwright.config.ts                   # Playwright configuration
├── tsconfig.json                          # TypeScript configuration
├── package.json                           # Project dependencies
├── .gitignore                             # Git ignore rules
└── README.md                              # This file

```

---

## Folder Breakdown

### 📁 Root Level

**`example.spec.ts`** - Basic Example Test
- **Purpose:** Starter template showing simplest Playwright test
- **What it does:** Navigates to example.com and verifies page title
- **Concepts:** Basic test structure, page navigation, assertion
- **Usage:** Reference for creating new test files

```typescript
test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

---

## Chapter Details

### 📚 CHAPTER 01: Basics & Recording

**Focus:** Learning Playwright recording features and basic test writing

#### **01_Record_Test.spec.ts** - Test Recording
- **Purpose:** Understanding how to record automated test scripts
- **What it does:** Records and replays user interactions on GitHub login page
- **Concepts:** 
  - Using test.step() to document test steps
  - Recording user actions (clicks, fills, etc.)
  - Locating elements by role, text, and accessibility attributes
- **Scenario:** User logs into GitHub with username and password
```typescript
// Records each step and navigates through GitHub login flow
```

#### **02_First_Test.spec.ts** - First Test
- **Purpose:** Writing your first Playwright test from scratch
- **What it does:** Basic test demonstrating page interactions
- **Concepts:**
  - Manual test writing without recording
  - Locators and element interaction
  - Basic assertions
- **Scenario:** Simulating a basic user workflow

#### **03_RecordAtCursor.spec.ts** - Record at Cursor
- **Purpose:** Recording tests starting from a specific cursor position
- **What it does:** Demonstrates partial recording capabilities
- **Concepts:**
  - Starting recording mid-session
  - Playwright inspector usage
  - Incremental test building
- **Scenario:** Continue recording from a specific point in the browser

#### **04_Codegen_Example.spec.ts** - Codegen Example
- **Purpose:** Using Playwright Codegen to auto-generate test code
- **What it does:** Example of auto-generated test code from Codegen
- **Concepts:**
  - Playwright codegen command
  - Auto-generated locators
  - Test code patterns
- **Command:** `npx playwright codegen <url>`
- **Scenario:** Shows how codegen creates test scripts automatically

---

### 📚 CHAPTER 02: Locators & User Interactions

**Focus:** Different ways to locate elements and interact with them

#### **01_ScreenshotCheck.spec.ts** - Screenshot Capture
- **Purpose:** Taking screenshots at different levels
- **What it does:** Captures screenshots of Google homepage
- **Concepts:**
  - Element-level screenshots
  - Page screenshots
  - Full-page screenshots
  - Screenshot paths and configuration
- **Scenarios:**
  - Element screenshot: Captures specific UI element
  - Page screenshot: Captures visible viewport
  - Full page screenshot: Captures entire scrollable page
```typescript
// Saves screenshots to ./screenshots/ directory
await page.screenshot({path: './screenshots/page_screenshot.png'});
```

#### **02_Locators.spec.ts** - Element Locators
- **Purpose:** Different ways to locate and interact with elements
- **What it does:** Demonstrates various locator strategies on Google
- **Concepts:**
  - By Role locators: `getByRole()`
  - By XPath: `locator("xpath = ...")`
  - By Test ID: `getByTestId()`
  - Chaining locators
  - `.first()`, `.last()` modifiers
- **Scenarios:**
  - Finding buttons by their accessible name
  - XPath expressions
  - Complex element selection
```typescript
// By Role: Find element by accessibility role
await page.getByRole('button', {name: "I'm feeling lucky"}).click();

// By XPath: Find search box
await page.locator("xpath = //*[@aria-label='Search']").first().fill("hey playwright");
```

#### **03_Hooks.spec.ts** - Test Hooks
- **Purpose:** Setup and teardown logic for tests
- **What it does:** Demonstrates beforeEach, afterEach hooks
- **Concepts:**
  - `beforeEach()`: Runs before each test
  - `afterEach()`: Runs after each test
  - Common setup tasks (login, navigation)
  - Common cleanup tasks (logout, data cleanup)
- **Scenarios:**
  - Login before each test
  - Cleanup resources after tests
  - Database reset between tests
  - Browser state reset
```typescript
test.beforeEach(async ({ page }) => {
  // Setup before each test
});

test.afterEach(async ({ page }) => {
  // Cleanup after each test
});
```

#### **04_Dropdown.spec.ts** - Dropdown Interactions
- **Purpose:** Working with select/dropdown elements
- **What it does:** Selecting options from dropdown menus
- **Concepts:**
  - Selecting dropdown values
  - Getting selected option
  - Multi-select dropdowns
  - Custom dropdown components
- **Scenarios:**
  - Select single option from dropdown
  - Verify selected value
  - Handle dynamic dropdowns
  - Working with combo-boxes

#### **05_Iframe_DragDown.spec.ts** - IFrames & Drag-Drop
- **Purpose:** Handling iframes and drag-and-drop interactions
- **What it does:** Tests within iframes and dragging elements
- **Concepts:**
  - Accessing elements inside iframes
  - `frameLocator()` method
  - Drag and drop operations
  - `dragTo()` method
- **Scenarios:**
  - Locate and interact with elements in iframes
  - Drag elements from one location to another
  - Handle multiple iframes on a page
  - Nested frame structures
```typescript
// Access iframe content
await page.frameLocator('iframe').locator('button').click();

// Drag and drop
await page.locator('source-element').dragTo(page.locator('target-element'));
```

#### **06_MouseActions.spec.ts** - Mouse Interactions
- **Purpose:** Advanced mouse operations
- **What it does:** Demonstrates mouse movements and clicks
- **Concepts:**
  - Single click
  - Double click
  - Right-click (context menu)
  - Mouse hover
  - Mouse movements
- **Scenarios:**
  - Click on elements
  - Double-click for selection/opening
  - Right-click for context menus
  - Hover over elements
  - Move mouse without clicking
```typescript
// Double-click
await page.locator('element').dblclick();

// Right-click
await page.locator('element').click({ button: 'right' });

// Hover
await page.locator('element').hover();
```

#### **07_Keyboard_Actions.spec.ts** - Keyboard Interactions
- **Purpose:** Keyboard events and text input
- **What it does:** Simulating keyboard presses and shortcuts
- **Concepts:**
  - Type text
  - Press specific keys (Enter, Tab, Escape, etc.)
  - Keyboard shortcuts (Ctrl+A, Ctrl+C, etc.)
  - Modifier keys (Shift, Ctrl, Alt)
- **Scenarios:**
  - Type username/password
  - Press Enter to submit forms
  - Use Tab to navigate between fields
  - Use keyboard shortcuts
  - Select all and copy/paste
```typescript
// Type text
await page.locator('input').fill('Hello World');

// Press Enter
await page.keyboard.press('Enter');

// Keyboard shortcut
await page.keyboard.press('Control+A');
```

#### **08_DatePicker.spec.ts** - Date Picker
- **Purpose:** Interacting with date picker elements
- **What it does:** Selecting dates from calendar widgets
- **Concepts:**
  - Native date inputs
  - Custom date picker components
  - Calendar navigation
  - Date formatting
- **Scenarios:**
  - Select date using native date input
  - Navigate months/years
  - Pick date from calendar widget
  - Validate selected date

#### **09_Hard_Assertions.spec.ts** - Hard Assertions
- **Purpose:** Assertions that stop test execution on failure
- **What it does:** Strict validations that fail tests immediately
- **Concepts:**
  - `expect()` statements
  - Test stops on first failure
  - Critical validations
  - Common assertions
- **Scenarios:**
  - Verify element text content
  - Check element visibility
  - Validate URL
  - Compare values
  - Assert attribute values
```typescript
// Hard Assertion - Test stops if fails
await expect(page.locator('h1')).toHaveText('Expected Text');
await expect(page).toHaveURL('https://example.com');
```

#### **10_Soft_Assertions.spec.ts** - Soft Assertions
- **Purpose:** Assertions that don't stop test execution
- **What it does:** Collect failures but continue test execution
- **Concepts:**
  - `expect.soft()` method
  - Test continues after assertion failure
  - Multiple assertions in one test
  - Failure reporting at end
- **Scenarios:**
  - Verify multiple conditions
  - Collect all failures
  - Report all issues at once
  - Better failure insights
```typescript
// Soft Assertion - Test continues even if fails
await expect.soft(element1).toBeVisible();
await expect.soft(element2).toHaveText('Expected');
// Both assertions run, failures reported at end
```

---

### 📚 CHAPTER 03: Advanced Test Features

**Focus:** Test organization, parameterization, visual testing, and resilience

#### **01_Annotations.spec.ts** - Annotations
- **Purpose:** Marking tests to skip or run exclusively
- **What it does:** Demonstrates test annotations for execution control
- **Concepts:**
  - `test.skip()` - Skip test execution
  - `test.only()` - Run only this test
  - `test.fixme()` - Mark as broken/not ready
  - Conditional skipping
- **Scenarios:**
  - Skip known failing tests
  - Run single test during debugging
  - Mark WIP tests as fixme
  - Platform-specific test skipping
```typescript
test.skip('Test to skip', async({page}) => {});
test.only('Test to run exclusively', async({page}) => {});
test.fixme('Test to fix later', async({page}) => {});
```

#### **02_Group_and_Execute.spec.ts** - Test Groups
- **Purpose:** Organizing tests into logical groups
- **What it does:** Using `test.describe()` for grouping
- **Concepts:**
  - `test.describe()` for grouping
  - Hierarchical test organization
  - Group-level setup/teardown
  - Nested describe blocks
- **Scenarios:**
  - Group tests by feature
  - Group tests by page/component
  - Shared setup for related tests
  - Better test report organization
```typescript
test.describe('Login Feature', () => {
  test('Valid credentials', async({page}) => {});
  test('Invalid credentials', async({page}) => {});
});
```

#### **03_Tags.spec.ts** - Test Tags
- **Purpose:** Labeling tests for selective execution
- **What it does:** Adding tags for test categorization
- **Concepts:**
  - `@tag` syntax in test names
  - Tag-based test filtering
  - Running specific test tags
  - Multiple tags per test
- **Scenarios:**
  - Mark tests as @smoke, @regression, @critical
  - Run only smoke tests in CI/CD
  - Run critical tests before deployment
  - Filter tests by feature area
```typescript
test('Login @smoke @critical', async({page}) => {});
// Run with: npx playwright test --grep @smoke
```

#### **04_Retry_Test_on_Failure.spec.ts** - Test Retry
- **Purpose:** Automatically retry failed tests
- **What it does:** Configuring test retry attempts
- **Concepts:**
  - Retry configuration
  - Flaky test handling
  - Retry on specific failures
  - Reporting with retries
- **Scenarios:**
  - Retry tests 2-3 times on failure
  - Handle transient network issues
  - Reduce false negatives
  - Better CI/CD stability
```typescript
// In playwright.config.ts
retries: process.env.CI ? 2 : 0
```

#### **05_Parameterise_Tests.spec.ts** - Parameterized Tests
- **Purpose:** Running same test with different data sets
- **What it does:** Using `test.describe()` with `test.forEach()`
- **Concepts:**
  - Data-driven testing
  - Multiple test iterations
  - Test parameters
  - Reusable test logic
- **Scenarios:**
  - Test login with multiple users
  - Test form with various inputs
  - Test pagination with different page sizes
  - Cross-browser/device testing
```typescript
[
  { user: 'admin', pass: 'admin123' },
  { user: 'user', pass: 'user123' }
].forEach(({ user, pass }) => {
  test(`Login as ${user}`, async({page}) => {
    // Test logic
  });
});
```

#### **06_Visual_Testing.spec.ts** - Visual Regression Testing
- **Purpose:** Comparing screenshots for visual changes
- **What it does:** Visual regression testing with snapshots
- **Concepts:**
  - `toHaveScreenshot()` method
  - Visual regression detection
  - Screenshot baselines
  - Snapshot comparison
  - Snapshot updates
- **Scenarios:**
  - Verify page layout unchanged
  - Detect UI regressions
  - Visual component testing
  - CSS change detection
- **Snapshot Location:** `06_Visual_Testing.spec.ts-snapshots/`
```typescript
// Take screenshot and compare with baseline
await expect(page).toHaveScreenshot('github-login.png');
```

#### **07_Timeouts.spec.ts** - Timeout Configuration
- **Purpose:** Handling and configuring timeouts
- **What it does:** Setting timeouts for actions and assertions
- **Concepts:**
  - Action timeout (default 30s)
  - Navigation timeout
  - Assertion timeout
  - Global vs local timeouts
- **Scenarios:**
  - Wait for slow loading pages
  - Set element-specific timeouts
  - Handle long-running operations
  - API response waiting
```typescript
// Global timeout in config
timeout: 30000,

// Local timeout for action
await page.goto(url, { waitUntil: 'networkidle' });

// Timeout for assertion
await expect(element).toBeVisible({ timeout: 5000 });
```

---

### 📚 CHAPTER 04: Advanced Scenarios & Best Practices

**Focus:** Complex real-world scenarios, reporting, and advanced features

#### **01_Browser_Context.spec.ts** - Multiple Browser Contexts
- **Purpose:** Managing multiple browser contexts and tabs
- **What it does:** Creating and managing multiple pages/contexts
- **Concepts:**
  - Browser context - isolated session
  - Multiple pages in one context
  - Separate cookies/storage per context
  - Context isolation
- **Scenarios:**
  - Test multi-user scenarios
  - Verify data sync between tabs
  - Test user permissions/access
  - Simulate multiple sessions
```typescript
// Create new context (independent session)
const tempContext = await browser.newContext();
const page2 = await tempContext.newPage();

// Create new page in same context (shares cookies)
const page3 = await tempContext.newPage();
```

#### **02_Rerun_Failed_tests.spec.ts** - Rerun Failed Tests
- **Purpose:** Automatically rerun only failed tests
- **What it does:** Demonstrates test retry mechanism
- **Concepts:**
  - Failed test detection
  - Automatic retry execution
  - Flaky test handling
  - Test report with retries
- **Command:** `npx playwright test --last-failed`
- **Scenarios:**
  - Rerun failed tests after first run
  - Reduce false negatives
  - Quick feedback on fixes
  - CI/CD optimization

#### **03_Alerts_PopUps.spec.ts** - Alerts & Pop-ups
- **Purpose:** Handling browser alerts, confirms, and prompts
- **What it does:** Intercepting and responding to dialogs
- **Concepts:**
  - Alert dialog handling
  - Confirm dialog (accept/dismiss)
  - Prompt dialog (text input)
  - Dialog message reading
  - Dialog type identification
- **Scenarios:**
  - Accept alert: `dialog.accept()`
  - Dismiss confirm: `dialog.dismiss()`
  - Respond to prompt: `dialog.accept('user input')`
  - Read dialog message: `dialog.message()`
  - Check dialog type: `dialog.type()`
```typescript
page.once('dialog', async dialog => {
  console.log(`Dialog message: ${dialog.message()}`);
  console.log(`Dialog type: ${dialog.type()}`); // alert, confirm, prompt
  await dialog.accept('optional input');
});
```

#### **04_TestReports.spec.ts** - Test Reporting
- **Purpose:** Generating and understanding test reports
- **What it does:** Creating various test report formats
- **Concepts:**
  - HTML reports
  - JSON reports
  - JUnit XML reports
  - Report customization
  - Report viewing
- **Report Types:**
  - HTML: `npx playwright show-report`
  - JSON: `json-test-report.json`
  - JUnit: `junit-test-report.xml`
- **Scenarios:**
  - View test results in browser
  - Parse JSON reports programmatically
  - Integrate with CI/CD systems
  - Track test history

#### **05_TextContent.spec.ts** - Text Content Verification
- **Purpose:** Extracting and verifying text content
- **What it does:** Getting and asserting text from elements
- **Concepts:**
  - `textContent()` - Get all text
  - `innerText()` - Get visible text
  - `inputValue()` - Get input value
  - Text trimming and normalization
  - Partial text matching
- **Scenarios:**
  - Verify error messages
  - Check success notifications
  - Validate form labels
  - Compare actual vs expected text
```typescript
// Get text content
const text = await page.locator('p').textContent();

// Get inner text (visible only)
const visibleText = await page.locator('p').innerText();

// Get input value
const inputValue = await page.locator('input').inputValue();

// Assert text
await expect(page.locator('p')).toContainText('Hello');
```

#### **06_Iterate_Matching_Elements.spec.ts** - Element Iteration
- **Purpose:** Iterating over multiple matching elements
- **What it does:** Finding and looping through elements
- **Concepts:**
  - `locator.count()` - Get number of matches
  - `locator.nth()` - Get specific element
  - Loop through elements
  - Dynamic element counting
  - Array operations on locators
- **Scenarios:**
  - Verify number of list items
  - Check each item in list
  - Iterate table rows
  - Process search results
  - Loop through navigation items
```typescript
// Count matching elements
const count = await page.locator('li').count();

// Iterate through elements
for (let i = 0; i < count; i++) {
  const text = await page.locator('li').nth(i).textContent();
  console.log(text);
}

// Or use locator directly
for (const element of await page.locator('li').all()) {
  const text = await element.textContent();
}
```

#### **07_Checkbox_Radio.spec.ts** - Checkbox & Radio Buttons
- **Purpose:** Interacting with checkboxes and radio buttons
- **What it does:** Selecting/deselecting checkboxes and radios
- **Concepts:**
  - Checkbox checking/unchecking
  - Radio button selection
  - Checking if checked
  - Multiple checkboxes
  - Radio button groups
- **Scenarios:**
  - Accept terms & conditions
  - Select gender/options
  - Enable/disable features
  - Filter options with checkboxes
  - Choose plan type with radio
```typescript
// Check checkbox
await page.locator('input[type="checkbox"]').check();

// Uncheck checkbox
await page.locator('input[type="checkbox"]').uncheck();

// Check if checked
const isChecked = await page.locator('input[type="checkbox"]').isChecked();

// Click radio button
await page.locator('input[type="radio"][value="option1"]').click();

// Assert checked
await expect(page.locator('input[type="checkbox"]')).toBeChecked();
```

---

## Setup & Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PlayWright-using-TypeScript
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Verify installation**
   ```bash
   npm test -- --version
   ```

---

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Specific Chapter
```bash
npm test tests/Chapter_01/
npm test tests/Chapter_02/
npm test tests/Chapter_03/
npm test tests/Chapter_04/
```

### Run Specific Test File
```bash
npm test tests/Chapter_01/01_Record_Test.spec.ts
```

### Run in Headed Mode (See Browser)
```bash
npm test -- --headed
```

### Run in Debug Mode
```bash
npm test -- --debug
```

### Run on Specific Browser
```bash
npm test -- --project=chromium
npm test -- --project=firefox
npm test -- --project=webkit
```

### Run Tests by Tag
```bash
npm test -- --grep @smoke
npm test -- --grep @regression
```

### Run Only Failed Tests
```bash
npm test -- --last-failed
```

### View HTML Report
```bash
npx playwright show-report
```

### Run in Parallel
```bash
npm test -- --workers=4
```

---

## Test Summary

| Chapter | Topic | Files | Tests |
|---------|-------|-------|-------|
| **Chapter 01** | Basics & Recording | 4 | 4 |
| **Chapter 02** | Locators & Interactions | 10 | 10+ |
| **Chapter 03** | Advanced Features | 7 | 7+ |
| **Chapter 04** | Advanced Scenarios | 7 | 7+ |
| **Root** | Example | 1 | 1 |
| **Total** | - | **29** | **30+** |

---

## Key Concepts Covered

- ✅ **Test Recording & Codegen** - Automated test generation

- ✅ **Locators** - Multiple ways to find elements

- ✅ **User Interactions** - Clicks, typing, drag-drop, mouse, keyboard

- ✅ **Screenshots** - Element, page, full-page capture

- ✅ **Assertions** - Hard and soft assertions

- ✅ **Test Organization** - Grouping, tagging, annotations

- ✅ **Visual Testing** - Screenshot regression testing

- ✅ **Parameterization** - Data-driven testing

- ✅ **Multiple Contexts** - Multi-user/multi-session testing

- ✅ **Dialog Handling** - Alerts, confirms, prompts

- ✅ **Test Reporting** - HTML, JSON, JUnit reports

- ✅ **Timeouts** - Configuration and handling

- ✅ **Retries** - Flaky test mitigation

---

## Best Practices

1. ✅ Use meaningful test names

2. ✅ Keep tests independent and isolated

3. ✅ Use page object model for maintainability

4. ✅ Use meaningful locators

5. ✅ Add explicit waits instead of hard sleeps

6. ✅ Capture screenshots on failures

7. ✅ Use hooks for setup/teardown

8. ✅ Organize tests logically

9. ✅ Use tags for selective execution

10. ✅ Keep tests atomic (single purpose)
