import {test, expect} from '@playwright/test';

test('Date Picker', async({page}) => {
    await page.goto("https://jqueryui.com/datepicker/");

    // Hard coded date
    const iframe = page.frameLocator('[class="demo-frame"]');
    await iframe.locator('[class="hasDatepicker"]').fill('08/02/2005');

    // Select dynamically
    await iframe.locator('[class="hasDatepicker"]').click();
    await iframe.locator('.ui-state-default.ui-state-highlight').click();
});