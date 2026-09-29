const {test, expect}= require('@playwright/test');

test('iframe',async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await page.locator('#hide-textbox').click();
//const text=page.locator('#displayed-text');

await expect(page.locator('#displayed-text')).toBeHidden();
     await page.locator('#show-textbox').click();
    await expect(page.locator('#displayed-text')).toBeVisible();


    await page.locator('#alertbtn').click();
    page.on('dialog',dialog => dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.locator('#mousehover').hover();
    await page.locator('[href*="#top"]').click();
    const iframe=await page.frameLocator('#courses-iframe');
    await iframe.locator('li a[href*="learning-path"]:visible').click();





});