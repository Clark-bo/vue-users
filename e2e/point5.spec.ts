import { test, expect } from '@playwright/test';

test('addsAndUpdatesAUserInTheList', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('alejandra18@pemex.com');
  await page.getByLabel('Forename:').click();
  await page.getByLabel('Forename:').fill('alejandra');
  await page.getByLabel('Surname:').click();
  await page.getByLabel('Surname:').fill('rangel');
  await page.getByRole('combobox', { name: 'Gender:' }).selectOption('Female');
  await page.getByRole('button', { name: 'Add/Edit User' }).click();
  await page.getByRole('row', { name: 'alejandra18@pemex.com alejandra rangel Female Edit Delete' }).getByRole('button', { name: 'Edit' }).click();
  await page.getByLabel('Surname:').click();
  await page.getByLabel('Surname:').fill('leon');
  await page.getByRole('button', { name: 'Add/Edit User' }).click();

  const updatedSurname = await page.getByLabel('Surname:').inputValue();
  expect(updatedSurname).not.toBe('rangel');
});
