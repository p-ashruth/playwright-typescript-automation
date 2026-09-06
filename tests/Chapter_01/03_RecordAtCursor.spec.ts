import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByText('Username or email address')).toBeVisible();
  await expect(page.getByText('Password', { exact: true })).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Password');
  await expect(page.getByRole('link', { name: 'Forgot password?' })).toBeVisible();
  await expect(page.locator('#forgot-password')).toContainText('Forgot password?');
});