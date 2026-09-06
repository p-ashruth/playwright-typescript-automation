import {test, expect} from '@playwright/test';

// When you run the entire file, this test case is automatically skipped
test.skip('Test 1', async({page}) => {
    await page.goto("https://duckduckgo.com/");

    // Entering and clicking
    await page.getByLabel("Search with DuckDuckGo", {exact : true}).fill("Hello World");
    await page.getByLabel("Search with DuckDuckGo", {exact : true}).press('Enter');
});

// When you run the file, this test is the only one which executes
test.only('Test 2', async({page}) => {
    await page.goto("https://duckduckgo.com/");

    // Entering and clicking
    await page.getByLabel("Search with DuckDuckGo", {exact : true}).fill("Hello World");
    await page.getByLabel("Search with DuckDuckGo", {exact : true}).press('Enter');
});