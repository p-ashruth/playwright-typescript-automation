import {test, expect} from '@playwright/test';

test('Dropdown Test', async({page}) => {
    await page.goto('https://www.facebook.com/');

    await page.getByRole('button', {name : 'Create new account'}).click();

    await page.getByLabel('Day', {exact : true}).selectOption('8');
    await page.getByLabel('Month', {exact : true}).selectOption('Feb');
    await page.getByLabel('Year', {exact : true}).selectOption('1905');

    
});