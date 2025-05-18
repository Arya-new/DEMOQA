// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables', { timeout: 50000 });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.pause();
});

test('get started link', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables', { timeout: 50000 });
  await page.pause();
});
