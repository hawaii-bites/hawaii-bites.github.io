import { test, expect } from '@playwright/test';

test.describe('Foods Available Now Page', () => {
  test('should load the Foods Available Now page', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/foods-available-right-now');
    await expect(page.locator('h1')).toHaveText('Foods Available Right Now');
  });

  test('should display all food options', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/foods-available-right-now');
    const cards = page.locator('div[style*="boxShadow"]'); // Match cards by style
    await expect(cards).toHaveCount(10); // Check there are 10 food options
  });

  test('should display "Holoholo Bistro" details correctly', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/foods-available-right-now');
    const bistro = page.locator('h3:has-text("Holoholo Bistro")');
    await expect(bistro).toBeVisible();
    await expect(bistro.locator('~ p')).toHaveText('Food Truck Row');
  });
});
