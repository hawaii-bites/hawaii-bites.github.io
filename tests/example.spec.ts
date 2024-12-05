import { test, expect } from '@playwright/test';

test('home page loads correctly', async ({ page }) => {
  // Navigate to your homepage
  await page.goto('https://hawaii-bites.vercel.app/');
  
  // Verify the page contains the expected header or text
  await expect(page.locator('h1')).toHaveText('Hawaii Bites'); // Replace 'Hawaii Bites' with your actual homepage header text
});
