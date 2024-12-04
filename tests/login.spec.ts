import { test, expect } from '@playwright/test';

test('login form works with valid inputs', async ({ page }) => {
  await page.goto('https://hawaii-bites.vercel.app/login');
  await page.fill('input[name="email"]', 'test@hawaii.edu'); // Replace with actual form fields
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('https://hawaii-bites.vercel.app/home'); // Replace with the URL after login
});
