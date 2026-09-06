import {test, expect} from '@playwright/test';
test('Checking Screenshots', async({page}) => {
    // Go to URL
    await page.goto("https://www.google.com");

    // Element Screenshot
    await page.locator('#LS8OJ').screenshot({path : './screenshots/element_screenshot.png'})

    // Page Screenshot
    await page.screenshot({path : './screenshots/page_screenshot.png'});

    // Full Page Screenshot
    await page.screenshot({path : './screenshots/fullpage_screenshots.png', fullPage : true});
});