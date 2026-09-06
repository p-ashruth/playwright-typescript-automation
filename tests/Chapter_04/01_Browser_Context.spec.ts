import {test, expect} from '@playwright/test';

test('Multiple Browser Sessions in TypeScript', async({page, browser}) => {
    await page.goto('https://github.com/login');
    
    await page.locator('[id="login_field"]').fill("iamrandom@github.com");
    await page.keyboard.press('Enter');
    
    // Create a new browser
    const tempContext = await browser.newContext();
    const page2 = await tempContext.newPage();

    await page2.goto('https://github.com/login');
    
    await page2.locator('[id="login_field"]').fill("iamrandom@github.com");
    await page2.keyboard.press('Enter');

    // Create a new tab
    // As tempContext browser is already created, we'll get a new tab
    const page3 = await tempContext.newPage();

    await page3.goto('https://github.com/login');
    
    await page3.locator('[id="login_field"]').fill("iamrandom@github.com");
    await page3.keyboard.press('Enter');
});