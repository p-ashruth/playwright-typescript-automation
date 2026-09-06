import {test, expect} from '@playwright/test';

test('Visual Testing', async({page}) => {
    await page.goto("https://github.com/login");

    await expect(page).toHaveScreenshot('GithubScreenshot.png');

    await page.locator('[id="login_field"]').fill("Hello World");
    await expect(page).toHaveScreenshot('GithubScreenshotLogin.png');

});