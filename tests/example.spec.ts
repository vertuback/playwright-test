import { test, expect } from '@playwright/test';
require('dotenv').config();

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('@AUTH get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
test('check the env access', async ({ page }) => {
  console.log(process.env.BASE_URL_WITH_AUTH);
  await page.goto(process.env.BASE_URL_WITH_AUTH!);
  console.log(await page.title());
  await expect(page).toHaveTitle('Amazon.com. Spend less. Smile more.');
});
