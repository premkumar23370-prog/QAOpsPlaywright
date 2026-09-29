# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasic.spec.js >> Login >> Designer
- Location: tests\UIbasic.spec.js:20:11

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#app-menu')
    - waiting for" https://release.chainsys.com/apps/pfm_apps/2/104888/index.html" navigation to finish...
    - navigated to "https://release.chainsys.com/apps/pfm_apps/2/104888/index.html"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - img "animated" [ref=e10]
  - text: 
```

# Test source

```ts
  1  | const {test, expect}= require('@playwright/test');
  2  | const {loginFix1}=require('../Utils/fixture');
  3  | const {RelPOManager}=require('../Object module/RelPOManager')
  4  | //const { use } = require('react');
  5  | test.describe.only('Login',()=>{
  6  | test('First playwright',async({browser})=>
  7  | {
  8  |     const context=await browser.newContext();
  9  |     const page=await context.newPage();
  10 |     await page.goto("https://release.chainsys.com/appplatform/core/userlogin/launch");
  11 |     await page.locator('input#userName').fill('preedewmdevqa');
  12 |      await page.locator('input#password').fill('Welcomewewe#2');
  13 |      await page.locator('xpath=(//*[@title="Login"])[1]').click();
  14 |      
  15 |      console.log(await page.locator('xpath=//*[@id="invalidMsg"]').textContent());
  16 |       await expect(page.locator('xpath=//*[@id="invalidMsg"]')).toContainText('Invalid Username Or Password.');
  17 |     
  18 | });
  19 | 
  20 | loginFix1.only('Designer',async({loginRelQA,page})=>{
  21 |     let appname='Affiliate';
  22 |     
  23 |     await expect(page).toHaveTitle('Chainsys Platform');
  24 |     
  25 |     const RelPOManager2=new RelPOManager(page,appname)
  26 |     const Designer=RelPOManager2.designerFunction();
  27 |     await Designer.designerAppSearch();
> 28 |     await page.locator("#app-menu").click();
     |                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  29 |     await page.locator("#MG_Affiliate_side_menu").click();
  30 |     await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
  31 | 
  32 |     
  33 | 
  34 |     //await page.pause();
  35 | 
  36 | })
  37 | 
  38 | });
  39 | test('page',async({page})=>
  40 |     
  41 | {
  42 | await page.goto("https://google.com")
  43 | console.log(await page.title());
  44 | await expect(page).toHaveTitle('Google');
  45 | }); 
  46 | 
  47 | test('Login page',async({browser,page})=>
  48 | {
  49 |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  50 |    /* const email=await page.locator('input#userEmail');
  51 |     const pass=await page.locator('input#userPassword')
  52 |     await page.locator('.text-reset').click();
  53 |     await page.locator('input#firstName').fill("Prem");
  54 |     await page.locator('input#lastName').fill("kumar");
  55 |     await email.fill("premkumar814@gmail.com");
  56 |     await page.locator('input#userMobile').fill("7010041536");
  57 |     await pass.fill("Premkumar@33");
  58 |     await page.locator('input#confirmPassword').fill("Premkumar@33");
  59 |     console.log(await page.locator('xpath=//*[text()=" I am 18 year or Older "]').textContent());
  60 |     await page.locator("[type='checkbox']").click();
  61 |     await page.locator('input#login').click();
  62 |     await page.locator('xpath=//*[text()="Login"]').click();
  63 |     console.log(await page.locator('xpath=//*[text()="Forgot password?"]').textContent());*/
  64 |     await page.locator('input#userEmail').fill("premkumar814@gmail.com");
  65 |     await page.locator('input#userPassword').fill("Premkumar@33");
  66 |     await page.locator('input#login').click();
  67 |     //console.log(await page.locator['//*[text()="*Email is required"]'].textContent());
  68 |     //console.log(await page.locator('xpath=//*[text()="ADIDAS ORIGINAL"]').textContent());
  69 |    
  70 |     const prod =await page.locator("div.card");
  71 |     //await prod.first().waitFor();
  72 |     const count=await prod.count();
  73 |     console.log(count);
  74 |     for(let i=0; i<=count; i++){
  75 |         console.log(await prod.nth(i).locator("b").textContent());
  76 |         if(await prod.nth(i).locator("b").textContent()==='ZARA COAT 3'){
  77 |             console.log(i); 
  78 |             await prod.nth(i).locator('text= Add To Cart').click();
  79 |              //await page.pause();
  80 |             break;
  81 |           
  82 | 
  83 |         }
  84 | 
  85 |     
  86 |        }
  87 | 
  88 |        
  89 | 
  90 |  
  91 | 
  92 | 
  93 | 
  94 | 
  95 | 
  96 |      
  97 | 
  98 | });
```