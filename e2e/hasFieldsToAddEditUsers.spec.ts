import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Forename:').click();
  await page.getByLabel('Surname:').click();
  await expect(page).toHaveURL('http://localhost:5173/');
});