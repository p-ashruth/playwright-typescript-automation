import{test, expect} from '@playwright/test';

test('Test 1', async({page}) => {
    await page.goto('https://github.com/login');
    
    await page.locator('[id="login_field"]').fill("iamrandom@github.com");
    await page.keyboard.press('Enter');
});

test('Test 2', async({page}) => {
    expect(true).toBe(true);
});

test('Test 3', async({page}) => {
    expect(true).toBe(true);
});