import {test, expect} from '@playwright/test';

test('Test 1', {tag : ['@SmokeTesting']}, async ({ page }) => {
    await page.goto("https://duckduckgo.com/");

    // Entering and clicking
    await page.getByLabel("Search with DuckDuckGo", { exact: true }).fill("Hello World");
    await page.getByLabel("Search with DuckDuckGo", { exact: true }).press('Enter');

    await expect(page.locator('[class="Ee2e63EzQ9F3xq9wsGDY"]')).toHaveText('Hello World');
});