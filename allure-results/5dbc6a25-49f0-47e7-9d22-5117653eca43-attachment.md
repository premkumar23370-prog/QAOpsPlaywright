# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: makemytrip.spec.js >> make my trip
- Location: tests\makemytrip.spec.js:4:1

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
  2  | 
  3  | 
  4  | test('make my trip',async({browser})=>{
  5  |     
  6  |     const context=await browser.newContext();
  7  |     const page=await context.newPage();
> 8  |   await page.goto('https://www.makemytrip.com/');
     |              ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
  9  |   await page.locator('.commonModal__close').click();
  10 |   await page.getByText('Departure', { exact: true }).click();
  11 |   await page.locator('.todayPrice:visible').first().waitFor();
  12 | const prices = await page.locator('.todayPrice:visible').allTextContents();
  13 | const priceNumbers = prices.map(price =>
  14 |     Number(price.replace(/,/g, ''))
  15 | );
  16 | const count= priceNumbers.length;
  17 | console.log(prices);
  18 | console.log(count);
  19 | 
  20 | 
  21 | const cheapestPrice = Math.min(...priceNumbers);
  22 | console.log(cheapestPrice);
  23 | for(let i=0;i<count;i++){
  24 |     if(priceNumbers[i]===cheapestPrice){
  25 |         
  26 |         console.log("cheaper "+cheapestPrice);
  27 |        // console.log("indian"+ch.toLocaleString('en-IN'))
  28 |        
  29 | 
  30 |         await page.locator('.todayPrice:visible').nth(i).click();
  31 |          break;
  32 |          
  33 | 
  34 |     }
  35 | }
  36 | 
  37 | 
  38 | 
  39 | 
  40 |    
  41 |   
  42 |      
  43 |   
  44 |    
  45 |     //const page=await makemytripContext.newPage();
  46 |    // await page.waitForURL('/flights/');
  47 |    // await page.locator('#departure').click();
  48 |     await page.pause();
  49 | 
  50 | 
  51 | 
  52 | })
```