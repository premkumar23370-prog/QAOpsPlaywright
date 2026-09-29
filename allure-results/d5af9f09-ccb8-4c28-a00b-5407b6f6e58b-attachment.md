# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasic.spec.js >> Login >> Designer
- Location: tests\UIbasic.spec.js:19:11

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#cs_switchmenu')

```

# Test source

```ts
  1  | const {test, expect}= require('@playwright/test');
  2  | const {loginFix1}=require('../Utils/fixture');
  3  | //const { use } = require('react');
  4  | test.describe.only('Login',()=>{
  5  | test('First playwright',async({browser})=>
  6  | {
  7  |     const context=await browser.newContext();
  8  |     const page=await context.newPage();
  9  |     await page.goto("https://release.chainsys.com/appplatform/core/userlogin/launch");
  10 |     await page.locator('input#userName').fill('preedewmdevqa');
  11 |      await page.locator('input#password').fill('Welcomewewe#2');
  12 |      await page.locator('xpath=(//*[@title="Login"])[1]').click();
  13 |      
  14 |      console.log(await page.locator('xpath=//*[@id="invalidMsg"]').textContent());
  15 |       await expect(page.locator('xpath=//*[@id="invalidMsg"]')).toContainText('Invalid Username Or Password.');
  16 |     
  17 | });
  18 | 
  19 | loginFix1.only('Designer',async({loginRelQA,page})=>{
> 20 |     await page.locator('#cs_switchmenu').click();
     |                                          ^ Error: locator.click: Target page, context or browser has been closed
  21 |     await page.pause();
  22 | 
  23 | })
  24 | 
  25 | });
  26 | test('page',async({page})=>
  27 |     
  28 | {
  29 | await page.goto("https://google.com")
  30 | console.log(await page.title());
  31 | await expect(page).toHaveTitle('Google');
  32 | }); 
  33 | 
  34 | test('Login page',async({browser,page})=>
  35 | {
  36 |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  37 |    /* const email=await page.locator('input#userEmail');
  38 |     const pass=await page.locator('input#userPassword')
  39 |     await page.locator('.text-reset').click();
  40 |     await page.locator('input#firstName').fill("Prem");
  41 |     await page.locator('input#lastName').fill("kumar");
  42 |     await email.fill("premkumar814@gmail.com");
  43 |     await page.locator('input#userMobile').fill("7010041536");
  44 |     await pass.fill("Premkumar@33");
  45 |     await page.locator('input#confirmPassword').fill("Premkumar@33");
  46 |     console.log(await page.locator('xpath=//*[text()=" I am 18 year or Older "]').textContent());
  47 |     await page.locator("[type='checkbox']").click();
  48 |     await page.locator('input#login').click();
  49 |     await page.locator('xpath=//*[text()="Login"]').click();
  50 |     console.log(await page.locator('xpath=//*[text()="Forgot password?"]').textContent());*/
  51 |     await page.locator('input#userEmail').fill("premkumar814@gmail.com");
  52 |     await page.locator('input#userPassword').fill("Premkumar@33");
  53 |     await page.locator('input#login').click();
  54 |     //console.log(await page.locator['//*[text()="*Email is required"]'].textContent());
  55 |     //console.log(await page.locator('xpath=//*[text()="ADIDAS ORIGINAL"]').textContent());
  56 |    
  57 |     const prod =await page.locator("div.card");
  58 |     //await prod.first().waitFor();
  59 |     const count=await prod.count();
  60 |     console.log(count);
  61 |     for(let i=0; i<=count; i++){
  62 |         console.log(await prod.nth(i).locator("b").textContent());
  63 |         if(await prod.nth(i).locator("b").textContent()==='ZARA COAT 3'){
  64 |             console.log(i); 
  65 |             await prod.nth(i).locator('text= Add To Cart').click();
  66 |              //await page.pause();
  67 |             break;
  68 |           
  69 | 
  70 |         }
  71 | 
  72 |     
  73 |        }
  74 | 
  75 |        
  76 | 
  77 |  
  78 | 
  79 | 
  80 | 
  81 | 
  82 | 
  83 |      
  84 | 
  85 | });
```