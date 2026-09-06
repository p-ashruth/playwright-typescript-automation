import {test, expect} from '@playwright/test';

test('Locators', async({page}) => {
    // Go to URL
    await page.goto("https://www.google.com/");

    // By Role
    // await page.getByRole('button', {name : "I'm feeling lucky"}).click();

    // By Title
    await page.locator("xpath = //*[@aria-label='Search']").first().fill("hey playwright");
});