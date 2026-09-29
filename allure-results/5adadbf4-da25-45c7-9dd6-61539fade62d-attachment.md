# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: makemytrip.spec.js >> make my trip
- Location: tests\makemytrip.spec.js:15:1

# Error details

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "popup"
============================================================
```

# Test source

```ts
  1  | const{test,expect, chromium}=require('@playwright/test');
  2  | /*test.beforeAll(async({browser})=>{
  3  |    
  4  |    
  5  |         //await popup.waitForLoadState();
  6  |        
  7  | 
  8  | 
  9  | 
  10 |     await page.context.storageState({
  11 |         path:'makemytrip.json',
  12 |     })
  13 |     const makemytripContext=await browser.newContext({storageState:'makemytrip.json'});
  14 |     })*/
  15 | test('make my trip',async({browser})=>{
  16 |     
  17 |     const context=await browser.newContext();
  18 |     const page=await context.newPage();
  19 |   await page.goto('https://www.makemytrip.com/');
  20 |   await page.getByRole('textbox', { name: 'Enter Mobile Number' }).click();
  21 |   await page.getByRole('textbox', { name: 'Enter Mobile Number' }).fill('7010041536');
  22 |   await page.getByRole('button', { name: 'Continue' }).click()
  23 |    
  24 |     const [popup]=await Promise.all([
  25 |     await page.locator('.menu_Flights').click(),
> 26 |     await page.waitForEvent('popup'),
     |                ^ Error: page.waitForEvent: Target page, context or browser has been closed
  27 |     
  28 | 
  29 |     ])
  30 |      await popup.getByPlaceholder('Enter Mobile Number').fill('7010041536'),
  31 |   
  32 |    
  33 |     //const page=await makemytripContext.newPage();
  34 |    // await page.waitForURL('/flights/');
  35 |     await page.locator('#departure').click();
  36 |     await page.pause();
  37 | 
  38 | 
  39 | 
  40 | })
```