import {test, expect} from '@playwright/test';

test('My first Test', async({page}) => {
    await page.goto('https://www.google.com/')

    await page.getByRole('combobox', { name: 'Search' }).fill('hello world');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    // await page.getByRole("link", {name : 'Playwright by Testers Talk'}).first().click();
});

