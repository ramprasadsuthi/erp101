import {test, expect} from '@playwright/test';
test.describe.configure({ mode: 'serial' });
test('Login', async({page}) => {
    await page.goto("http://webapp.qedgetech.com/login.php");
    await page.getByRole('textbox', { name: 'User Name' }).fill("admin");
    await page.getByRole('textbox', { name: 'Password' }).fill('master');
    await page.getByRole('button', { name: 'Login' }).click();
   // await page.pause();
});

test('Logout', async({page}) => {
    await page.goto("http://webapp.qedgetech.com/login.php");
    await page.getByRole('textbox', { name: 'User Name' }).fill("admin");
    await page.getByRole('textbox', { name: 'Password' }).fill('master');
    await page.getByRole('button', { name: 'Login' }).click();
   // await page.pause();
    await page.getByRole('link', { name: ' Logout' }).click();
    await page.pause();

})