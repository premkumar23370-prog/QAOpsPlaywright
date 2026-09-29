# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwrightpractice.spec.js >> api
- Location: tests\playwrightpractice.spec.js:36:6

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.ng-star-inserted').nth(1)
Expected: " You have No Orders to show at this time."
Received: " You have No Orders to show at this time. Please Visit Back Us "

Call log:
  - Expect "toHaveText" with timeout 50000ms
  - waiting for locator('.ng-star-inserted').nth(1)
    12 × locator resolved to <div _ngcontent-chn-c38="" class="mt-4 ng-star-inserted">…</div>
       - unexpected value " You have No Orders to show at this time. Please Visit Back Us "

```

```yaml
- text: You have No Orders to show at this time. Please Visit Back Us
```

# Test source

```ts
  1  | const {test,request,expect}=require('@playwright/test');
  2  | const { promises } = require('node:dns');
  3  | const loginPayload = { userEmail: "premkumar814@gmail.com", userPassword: "Premkumar@33" };
  4  | const FakeData={data:[],message:"No Orders"};
  5  | 
  6  | test('Practice',async({page})=>{
  7  | await page.goto("https://testautomationpractice.blogspot.com/");
  8  | await page.getByPlaceholder("Enter Name").fill("Premkumar");
  9  | await Promise.all([
  10 | 
  11 | page.waitForResponse(Response=>
  12 | Response.url().includes('playwrightpractice.html')&&
  13 | Response.status()==200
  14 | ),
  15 | await page.getByRole('link',{name:'PlaywrightPractice'}).click()
  16 | ]);
  17 | await expect(page.locator("div.card p strong")).toContainText('important');
  18 | const str=await page.locator("div.card p").nth(0).textContent();
  19 | console.log(str);
  20 | 
  21 | const arr1=await str.split("contains");
  22 | console.log(arr1);
  23 | const arr2=arr1[1].split(" ")[2];
  24 | console.log(arr2);
  25 | 
  26 | page.on('dialog',async dialog=>{
  27 |     console.log(await dialog.message());
  28 |     await dialog.accept();
  29 | });
  30 | await page.locator('#alertBtn').first().click();
  31 | 
  32 | 
  33 | 
  34 | });
  35 | 
  36 | test.only('api',async({request,page})=>{
  37 |    // const ApiContext=await request.newContext();
  38 |     const res=await request.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
  39 |         data : loginPayload
  40 |     })
  41 |     const resjson=await res.json();
  42 |     const token=resjson.token;
  43 |     console.log(token);
  44 | 
  45 |     await page.addInitScript(value=>{
  46 |          window.localStorage.setItem('token',value)
  47 |     },token);
  48 | 
  49 |     await page.goto('https://rahulshettyacademy.com/client/');
  50 |     await Promise.all([
  51 |      
  52 |      page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*',async(route)=>{
  53 |         route.fulfill({
  54 |             status:200,
  55 |             contentType:'application/json',
  56 |             body: JSON.stringify(FakeData)
  57 | 
  58 |     })
  59 |     }),
  60 |     page.getByRole('button',{name:'  ORDERS'}).click(),
  61 | ]);
  62 |     
  63 |    // await page.pause();
> 64 |     await expect(page.locator('.ng-star-inserted').nth(1)).toHaveText(' You have No Orders to show at this time.');
     |                                                            ^ Error: expect(locator).toHaveText(expected) failed
  65 |     
  66 | 
  67 | 
  68 | 
  69 |     
  70 | 
  71 | 
  72 | })
```