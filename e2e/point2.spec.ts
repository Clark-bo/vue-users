import { test, expect } from '@playwright/test';

test('performsSearch', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const searchInput = await page.$('input[placeholder="Type the text here..."]');
  if (!searchInput) {
    throw new Error('El elemento de entrada de búsqueda no se encontró en la página.');
  }

  await searchInput.click();
  await searchInput.fill('ale');
  await searchInput.press('Enter');
  await searchInput.fill('ad');
  await searchInput.press('Enter');
  await searchInput.fill('oo');
  await searchInput.press('Enter');

  expect(searchInput).not.toBe('oo');

});
