const {test, expect, request}= require('@playwright/test');
const { promises } = require('node:dns');
const { beforeEach } = require('node:test');

test('ddrbcb',async({browser})=>
{

    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username= "premkumar";
    const pass="Welcome#1"
    await page.locator("#username").fill(username);
    await page.locator("#password").fill(pass);
    const rb=await page.locator("#usertype").last();
    await rb.click();
    await page.locator("#okayBtn").click();
    console.log(await rb.isChecked());
  //  await page.pause();

   await expect(rb).toBeChecked();
   const dropdown=await page.locator("select.form-control");
   await dropdown.selectOption("consult");
   const cb= await page.locator("#terms");
   await cb.click();
    

     
    
});
test('childpagesplit',async({browser})=>
{
const context= await browser.newContext();
const page= await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const downloadlink= page.locator('[href*="documents-request"]');
const [newPage]= await Promise.all([

    context.waitForEvent('page'),
    downloadlink.click(),
])
const text= await newPage.locator('p.red').textContent();
console.log(text);
const far=text.split('@');
const domain=far[1].split(" ")[0];
console.log(domain);
if(domain=="rahulshettyacademy.com"){
     await page.locator("#username").fill(domain);
     console.log('passed');
     await page.pause();
}
else{
    console.log("failed");
}


});