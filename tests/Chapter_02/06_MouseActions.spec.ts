import {test, expect} from '@playwright/test';
test('Mouse Actions', async({page}) => {
    await page.goto("https://www.facebook.com/");
    
    await page.getByRole('button', {name : 'Create new account'}).click({button : 'right'});

    await page.getByRole('button', {name : 'Create new account'}).hover();
});