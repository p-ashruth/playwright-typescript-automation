import {test, expect} from '@playwright/test';

// Let us create two groups names 'Smoke Testing' and 'Regression Testing'
test.describe('Smoke Testing', () => {
    test('Test 1', async({page}) => {
        await page.goto("https://duckduckgo.com/");
    
        // Entering and clicking
        await page.getByLabel("Search with DuckDuckGo", {exact : true}).fill("Hello World");
        await page.getByLabel("Search with DuckDuckGo", {exact : true}).press('Enter');
    });
});

test.describe('Regression Testing', () => {
    test('Test 2', async({page}) => {
        await page.goto("https://duckduckgo.com/");
    
        // Entering and clicking
        await page.getByLabel("Search with DuckDuckGo", {exact : true}).fill("Hello World");
        await page.getByLabel("Search with DuckDuckGo", {exact : true}).press('Enter');
    });
    
    test('Test 3', async({page}) => {
        await page.goto("https://duckduckgo.com/");
    
        // Entering and clicking
        await page.getByLabel("Search with DuckDuckGo", {exact : true}).fill("Hello World");
        await page.getByLabel("Search with DuckDuckGo", {exact : true}).press('Enter');
    });

    test('Test 4', async({page}) => {
        await page.goto("https://duckduckgo.com/");
    
        // Entering and clicking
        await page.getByLabel("Search with DuckDuckGo", {exact : true}).fill("Hello World");
        await page.getByLabel("Search with DuckChickGo", {exact : true}).press('Enter');
    });
})
