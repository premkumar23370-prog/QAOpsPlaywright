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
  16 |     
  17 |     const context=await browser.newContext();
  18 |     const page=await context.newPage();
> 19 |   await page.goto('https://www.makemytrip.com/');
     |              ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
  20 |   await page.locator('.commonModal__close').click();
  21 |   await page.getByText('Departure', { exact: true }).click();
  22 |   await page.locator('.todayPrice:visible').first().waitFor();
  23 | const prices = await page.locator('.todayPrice:visible').allTextContents();
  24 | const priceNumbers = prices.map(price =>
  25 |     Number(price.replace(/,/g, ''))
  26 | );
  27 | const count= priceNumbers.length;
  28 | console.log(prices);
  29 | console.log(count);
  30 | 
  31 | 
  32 | const cheapestPrice = Math.min(...priceNumbers);
  33 | for(let ch of priceNumbers){
  34 |     if(ch==cheapestPrice){
  35 |         console.log("cheaper "+cheapestPrice);
  36 | 
  37 |     }
  38 | }
  39 | 
  40 | 
  41 | 
  42 | 
  43 |    
  44 |   
  45 |      
  46 |   
  47 |    
  48 |     //const page=await makemytripContext.newPage();
  49 |    // await page.waitForURL('/flights/');
  50 |    // await page.locator('#departure').click();
  51 |     await page.pause();
  52 | 
  53 | 
  54 | 
  55 | })
```