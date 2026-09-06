import { test, expect } from '@playwright/test';

test('Test 1', {tag : ['@SmokeTesting']}, async ({ page }) => {
    await page.goto("https://duckduckgo.com/");

    // Entering and clicking
    await page.getByLabel("Search with DuckDuckGo", { exact: true }).fill("Hello World");
    await page.getByLabel("Search with DuckDuckGo", { exact: true }).press('Enter');
});

test('Test 2', {tag : ['@SmokeTesting', '@RegressionTesting']}, async ({ page }) => {
    await page.goto("https://duckduckgo.com/");

    // Entering and clicking
    await page.getByLabel("Search with DuckDuckGo", { exact: true }).fill("Hello World");
    await page.getByLabel("Search with DuckDuckGo", { exact: true }).press('Enter');
});

test('Test 3', {tag : ['@RegressionTesting']}, async ({ page }) => {
    await page.goto("https://duckduckgo.com/");

    // Entering and clicking
    await page.getByLabel("Search with DuckDuckGo", { exact: true }).fill("Hello World");
    await page.getByLabel("Search with DuckDuckGo", { exact: true }).press('Enter');
});