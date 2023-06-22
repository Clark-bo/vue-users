import { test, expect } from '@playwright/test';

test('deleteUserFromTheList', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const deleteButton = await page.getByRole('row', { name: 'adrian12@pemex.com Adrián Aviles Male Edit Delete' }).getByRole('button', { name: 'Delete' });
  await deleteButton.click();

  await page.waitForSelector('[role="row"]', { state: 'detached' });
  const row = await page.$('[role="row"]');
  
  if (row === null) {
    expect(row).toBeNull();
  } else {
     // Código adicional en caso de que la fila no se haya eliminado correctamente
    const deleteButtonAgain = await page.getByRole('row', { name: 'adrian12@pemex.com Adrián Aviles Male Edit Delete' }).getByRole('button', { name: 'Delete' });
    await deleteButtonAgain.click();

    await page.waitForSelector('[role="row"]', { state: 'detached' });
    const newRow = await page.$('[role="row"]');
  
    expect(newRow).toBeNull();
  }
});
