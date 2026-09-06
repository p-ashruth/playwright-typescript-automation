import {test, expect} from '@playwright/test';

test('Confirm', async({page}) => {
    await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/");

    // Playwright blocks any dialogs
    // Hence, use this method to show dialogs also
    page.once('dialog', async dialog => {
        // await dialog.accept();
        await dialog.dismiss();
        console.log(`Confirm message is ${dialog.message()}`);
    })

    await page.getByText('See a sample confirm', {exact : true}).click();
});

test('Pop-Ups', async({page}) => {
    await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/");

    // Playwright blocks any dialogs
    // Hence, use this method to show dialogs also
    page.once('dialog', async dialog => {
        await dialog.accept('Hello World');
        console.log(`Pop-Up message is ${dialog.message()}`);
        console.log(`Dialog is ${dialog.type()}`);
    })

    await page.getByText('See a sample prompt', {exact : true}).click();
});