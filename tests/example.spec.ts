import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://hawaii-bites.vercel.app/login'); // Update with your deployed URL
  await expect(page).toHaveTitle(/Hawaii Bites/); // Replace with the actual title of your login page
});
