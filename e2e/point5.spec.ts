import { test, expect } from '@playwright/test';

test('addsAndUpdatesAuserInTheList', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('carlos15@pemex.com');
  await page.getByLabel('Forename:').click();
  await page.getByLabel('Forename:').press('CapsLock');
  await page.getByLabel('Forename:').fill('C');
  await page.getByLabel('Forename:').press('CapsLock');
  await page.getByLabel('Forename:').fill('Carlos');
  await page.getByLabel('Surname:').click();
  await page.getByLabel('Surname:').press('CapsLock');
  await page.getByLabel('Surname:').fill('S');
  await page.getByLabel('Surname:').press('CapsLock');
  await page.getByLabel('Surname:').fill('Santos');
  await page.getByRole('combobox', { name: 'Gender:' }).selectOption('Male');
  await page.getByRole('button', { name: 'Add/Edit User' }).click();
  await page.getByRole('row', { name: 'carlos15@pemex.com Carlos Santos Male Edit Delete' }).getByRole('button', { name: 'Edit' }).click();
  await page.getByLabel('Forename:').dblclick();
  await page.getByLabel('Forename:').fill('Clark');
  
  const emailValue = await page.$eval('#users-table tbody tr td[data-label="Email"]', element => element.textContent);
  const forenameValue = await page.$eval('#users-table tbody tr td[data-label="Forename"]', element => element.textContent);
  const surnameValue = await page.$eval('#users-table tbody tr td[data-label="Surname"]', element => element.textContent);
  
  expect(emailValue).toBe('carlos15@pemex.com');
  expect(forenameValue).toBe('Clark');
  expect(surnameValue).toBe('Santos');
});
