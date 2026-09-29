# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: makemytrip.spec.js >> make my trip
- Location: tests\makemytrip.spec.js:15:1

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
  16 |     const context=await browser.newContext();
  17 |     const page=await context.newPage();
> 18 |     await page.goto('https://www.makemytrip.com/');
     |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
  19 |     await page.waitForURL('https://www.makemytrip.com/');
  20 |     const [popup]=await Promise.all([
  21 |     await page.locator('.menu_Flights').click(),
  22 |     await page.waitForEvent('popup'),
  23 |      await popup.getByPlaceholder('Enter Mobile Number').fill('7010041536'),
  24 | 
  25 |     ])
  26 |   
  27 |    
  28 |     //const page=await makemytripContext.newPage();
  29 |    // await page.waitForURL('/flights/');
  30 |     await page.locator('#departure').click();
  31 |     await page.pause();
  32 | 
  33 | 
  34 | 
  35 | })
```