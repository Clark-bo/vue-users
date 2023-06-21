import { test, expect } from '@playwright/test';
import { toHaveTextContent } from '@playwright/test';

test('addUsersToTheList', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').press('CapsLock');
  await page.getByLabel('Email:').fill('L');
  await page.getByLabel('Email:').press('CapsLock');
  await page.getByLabel('Email:').fill('Luis15@pemex.com');
  await page.getByLabel('Forename:').click();
  await page.getByLabel('Forename:').press('CapsLock');
  await page.getByLabel('Forename:').fill('L');
  await page.getByLabel('Forename:').press('CapsLock');
  await page.getByLabel('Forename:').fill('Luis');
  await page.getByLabel('Surname:').click();
  await page.getByLabel('Surname:').press('CapsLock');
  await page.getByLabel('Surname:').fill('A');
  await page.getByLabel('Surname:').press('CapsLock');
  await page.getByLabel('Surname:').fill('Alcantara');
  await page.getByRole('combobox', { name: 'Gender:' }).selectOption('Male');
  await page.getByRole('button', { name: 'Add/Edit User' }).click();
  expect(page).toHaveTextContent(/User successfully added/);
});
