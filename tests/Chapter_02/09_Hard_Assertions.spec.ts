import { test, expect } from '@playwright/test';

// Assertions : Compares the expected output with the actual one

// Hard Assertions
test('Hard Assertions Test', async ({ page }) => {
    await page.goto("https://duckduckgo.com/");

    // Visibility assertion - Is visible
    await expect(page.getByPlaceholder('Search')).toBeVisible();

    // Enability assertion - Is usable
    await expect(page.getByPlaceholder('Search')).toBeEnabled();

    // Editability assertion - Can be editable
    await expect(page.getByPlaceholder('Search')).toBeEditable();

    // IsEmpty assertion - Contains any value
    await expect(page.getByPlaceholder('Search')).toBeEmpty();

    // URL - Whether the expected URL opens after we click it
    await page.getByPlaceholder('Search').fill('playwright');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL('https://duckduckgo.com/?origin=funnel_home_website&t=h_&q=playwright&ia=web')

    // Title - Checks whether our page has the expected title
    await expect(page).toHaveTitle('playwright at DuckDuckGo');

    // Text - Checks whether our page has the text in it
    await expect(page.locator('[class="expandableItem"]').first()).toHaveText('A playwright or dramatist is a person who writes plays, which are a form of drama that primarily consists of dialogue between characters and is intended for theatrical performance rather than just reading. ');

    // Count - How many elements are available with the given attributes
    await expect(page.locator('[class="expandableItem"]')).toHaveCount(4);
});