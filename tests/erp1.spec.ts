import { test, expect } from '@playwright/test';

test('My first recorded test ', async ({ page }) => {
  await page.goto('http://webapp.qedgetech.com/login.php');
  await page.getByRole('textbox', { name: 'User Name' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('master');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.pause();
});