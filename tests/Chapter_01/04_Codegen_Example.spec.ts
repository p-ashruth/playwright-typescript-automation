import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.locator('.ytSearchboxComponentInputBox').click();
  await page.getByRole('combobox', { name: 'Search' }).fill('testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Testers Talk @testerstalk•27.' }).click();
  await page.locator('#tabsContent').getByText('Videos', { exact: true }).click();
  await expect(page.getByText('Hi Friends Welcome to Testers').nth(1)).toBeVisible();
  await expect(page.locator('truncated-text')).toContainText('Hi Friends Welcome to Testers Talk channel, Myself Bakkappa N. I have been working as QA SDET Automation Test Lead over a almost decade. I like to share my knowledge & experience through this channel. Support this channel by Subscribing, Liking and sharing with friends and colleagues.');
});