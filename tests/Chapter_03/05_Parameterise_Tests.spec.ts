import {test, expect} from '@playwright/test';
 
const searchParam = ['Playwright by Testers Talk', 'Hello World', 'Search with DuckDuckGo']

for(const i of searchParam){
    test(`Test - ${i}`, async ({ page }) => {
        await page.goto("https://duckduckgo.com/");
    
        // Entering and clicking
        await page.getByLabel("Search with DuckDuckGo", { exact: true }).fill(i);
        await page.getByLabel("Search with DuckDuckGo", { exact: true }).press('Enter');
    
        await expect(page.locator('[class="Ee2e63EzQ9F3xq9wsGDY"]')).toHaveText(i);
    });
}