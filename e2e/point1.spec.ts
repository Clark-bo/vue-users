import { test, expect } from '@playwright/test';

test('hasTitle', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('#app').click();
  await expect(page).toHaveURL('http://localhost:5173/');
});