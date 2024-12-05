import { test, expect } from '@playwright/test';

test('vendor dashboard loads correctly', async ({ page }) => {
  await page.goto('https://hawaii-bites.vercel.app/vendor');
  await expect(page.locator('h1')).toHaveText('Vendor Dashboard'); // Replace with actual header text
});
