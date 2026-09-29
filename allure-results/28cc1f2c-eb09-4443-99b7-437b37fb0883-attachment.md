# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: makemytrip.spec.js >> make my trip
- Location: tests\makemytrip.spec.js:2:1

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
  2  | test('make my trip',async({})=>{
  3  |     const browser=await chromium.launch();
  4  |     const context=await browser.newContext();
  5  |     const page=await context.newPage();
> 6  |     await page.goto('https://www.makemytrip.com/');
     |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
  7  |     await page.waitForURL('https://www.makemytrip.com/');
  8  |     //await page.locator('.menu_Flights').click();
  9  |    // await page.waitForURL('/flights/');
  10 |     await page.locator('#departure').click();
  11 |     await page.pause();
  12 | 
  13 | 
  14 | 
  15 | })
```