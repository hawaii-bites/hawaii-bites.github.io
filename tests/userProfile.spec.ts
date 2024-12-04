import { test, expect } from '@playwright/test';

test.describe('User Profile Page', () => {
  test('should load the User Profile page', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/user-profile');
    await expect(page.locator('h1')).toHaveText(/John Doe/); // Replace with actual name if dynamic
  });

  test('should allow editing the user profile', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/user-profile');
    await page.click('button:has-text("Edit")'); // Click the first edit button
    await page.fill('input[type="text"]', 'Jane');
    await page.click('button:has-text("Save")');
    await expect(page.locator('p')).toContainText('Jane'); // Verify update
  });

  test('should display preferences checkboxes', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/user-profile');
    const checkboxes = page.locator('input[type="checkbox"]');
    await expect(checkboxes).toHaveCount(20); // Ensure all checkboxes are present
  });

  test('should save preferences successfully', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/user-profile');
    await page.check('input[value="Entree"]'); // Check the Entree preference
    await page.click('button:has-text("Save Preferences")');
    await expect(page.locator('text=Preferences saved successfully!')).toBeVisible();
  });
});
