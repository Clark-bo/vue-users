import { test, expect } from '@playwright/test';

test('hasFieldsToAddEditUsers', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  
  const emailField = await page.getByLabel('Email:');
  const forenameField = await page.getByLabel('Forename:');
  const surnameField = await page.getByLabel('Surname:');
  
  expect(emailField).not.toBeNull();
  expect(forenameField).not.toBeNull();
  expect(surnameField).not.toBeNull();
});
