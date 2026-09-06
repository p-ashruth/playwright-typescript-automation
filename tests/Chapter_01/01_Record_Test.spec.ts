import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step('Navigating to page URL', async() => {
    await page.goto('https://github.com/');
  })
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('heyhello');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('heyhello');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
});