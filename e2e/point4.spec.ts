import { test, expect } from '@playwright/test';

test('addUsersToTheList', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.waitForLoadState('networkidle');

  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('luis17@pemex.com');
  await page.getByLabel('Forename:').click();
  await page.getByLabel('Forename:').fill('luis');
  await page.getByLabel('Surname:').click();
  await page.getByLabel('Surname:').fill('coria');
  await page.getByRole('combobox', { name: 'Gender:' }).selectOption('Male');
  await page.getByRole('button', { name: 'Add/Edit User' }).click();

  const userTextRegex = /luis17@pemex\.com luis coria Male Edit Delete/; // Expresión regular para coincidir con el texto del usuario agregado
  expect(page).toMatch(userTextRegex);
});

