import {test, expect} from '@playwright/test';

test('TC-1 Open Browser', async({page}) => {
   // await page.pause();
});

test('TC-2 Launch the ERP App', async({page}) => {
    await page.goto("http://webapp.qedgetech.com/login.php");
    //await page.pause();
});

