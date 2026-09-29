# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: makemytrip.spec.js >> make my trip
- Location: tests\makemytrip.spec.js:24:1

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
Call log:
  - navigating to "https://www.makemytrip.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - heading "This site can’t be reached" [level=1] [ref=e7]
  - paragraph [ref=e8]:
    - text: The webpage at
    - strong [ref=e9]: https://www.makemytrip.com/
    - text: might be temporarily down or it may have moved permanently to a new web address.
  - generic [ref=e10]: ERR_HTTP2_PROTOCOL_ERROR
```

# Test source

```ts
  1  | const{test,expect, chromium}=require('@playwright/test');
  2  | test.beforeAll(async({browser})=>{
  3  |      const context=await browser.newContext();
  4  |     const page=await context.newPage();
> 5  |     await page.goto('https://www.makemytrip.com/');
     |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
  6  |     await page.waitForURL('https://www.makemytrip.com/');
  7  |     const [popup]=await Promise.all([
  8  |     await page.locator('.menu_Flights').click(),
  9  |     await page.waitForEvent('popup'),
  10 | 
  11 |     ])
  12 |   
  13 |    
  14 |         await popup.waitForLoadState();
  15 |         await popup.getByPlaceholder('Enter Mobile Number').fill('7010041536');
  16 | 
  17 | 
  18 | 
  19 |     await page.context.storageState({
  20 |         path:'makemytrip.json',
  21 |     })
  22 |     const makemytripContext=await browser.newContext({storageState:'makemytrip.json'});
  23 | })
  24 | test('make my trip',async({})=>{
  25 |    
  26 |     const page=await makemytripContext.ne
  27 |    // await page.waitForURL('/flights/');
  28 |     await makemytripContext.locator('#departure').click();
  29 |     await page.pause();
  30 | 
  31 | 
  32 | 
  33 | })
```