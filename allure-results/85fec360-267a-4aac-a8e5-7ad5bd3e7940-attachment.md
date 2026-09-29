# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: makemytrip.spec.js >> make my trip
- Location: tests\makemytrip.spec.js:2:1

# Error details

```
Error: page.waitForURL: Target page, context or browser has been closed
=========================== logs ===========================
waiting for navigation to "/flights/" until "load"
  navigated to "https://www.makemytrip.com/flights/"
============================================================
```

# Test source

```ts
  1  | const{test,expect, chromium}=require('@playwright/test');
  2  | test('make my trip',async({})=>{
  3  |     const browser=await chromium.launch();
  4  |     const context=await browser.newContext();
  5  |     const page=await context.newPage();
  6  |     await page.goto('https://www.makemytrip.com/');
  7  |     await page.waitForURL('https://www.makemytrip.com/');
  8  |     await page.locator('.menu_Flights').click();
> 9  |     await page.waitForURL('/flights/');
     |                ^ Error: page.waitForURL: Target page, context or browser has been closed
  10 |     await page.locator('#departure').click();
  11 |     await page.pause();
  12 | 
  13 | 
  14 | 
  15 | })
```