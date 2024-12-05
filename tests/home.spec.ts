import { test, expect } from '@playwright/test';

test('home page loads correctly', async ({ page }) => {
  await page.goto('https://hawaii-bites.vercel.app/');
  await expect(page.locator('h1')).toHaveText('Hawaii Bites'); // Replace with actual header text
});
