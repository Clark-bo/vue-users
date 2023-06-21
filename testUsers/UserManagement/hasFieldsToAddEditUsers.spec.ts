import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Forename:').click();
  await page.getByLabel('Surname:').click();
});