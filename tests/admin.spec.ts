import { test, expect } from '@playwright/test';

test.describe('Admin Dashboard Page', () => {
  test('should load the Admin Dashboard correctly', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/admin');
    await expect(page.locator('h1')).toHaveText('Admin Dashboard');
    await expect(page.locator('button')).toHaveCount(3); // Verify three buttons are present
  });

  test('should display "Manage Users" section', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/admin');
    await expect(page.locator('h2:has-text("Manage Users")')).toBeVisible();
  });

  test('should display "Consolidated Menu Directory" button', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/admin');
    await expect(page.locator('button:has-text("View Full Menu Directory")')).toBeVisible();
  });
});
