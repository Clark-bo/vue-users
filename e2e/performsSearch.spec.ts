import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('Type the text here...').click();
  await page.getByPlaceholder('Type the text here...').fill('adrian');
  await expect(page).toHaveURL('http://localhost:5173/');
});