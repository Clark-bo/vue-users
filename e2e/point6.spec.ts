import { test, expect } from '@playwright/test';

test('deleteUserFromTheList', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('row', { name: 'adrian12@pemex.com Adrián Aviles Male Edit Delete' }).getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page).toHaveURL('http://localhost:5173/');
});