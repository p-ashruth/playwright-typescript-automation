import {test, expect} from '@playwright/test';

test('Keyboard Test', async({page}) => {
    await page.goto("https://duckduckgo.com/");

    // Entering and clicking
    await page.getByLabel("Search with DuckDuckGo", {exact : true}).fill("Hello World");
    await page.getByLabel("Search with DuckDuckGo", {exact : true}).press('Enter');

    // Deleting
    await page.getByLabel("search", {exact : true}).first().click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Delete');

    // Clicking tab and navigating to a page
    await page.getByLabel("Search with DuckDuckGo", {exact : true}).click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
});