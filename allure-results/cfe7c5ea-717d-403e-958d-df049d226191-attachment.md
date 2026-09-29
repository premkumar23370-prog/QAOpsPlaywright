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
Error: expect(page).toHaveTitle(expected) failed

Expected: "Chainsys Platform"
Received: ""

Call log:
  - Expect "toHaveTitle" with timeout 50000ms
    2 × unexpected value ""
    - waiting for" https://release.chainsys.com/appconnect/core/cloudlogin/logoutinvalidsessions" navigation to finish...
    - navigated to "https://release.chainsys.com/appconnect/core/cloudlogin/logoutinvalidsessions"
    14 × unexpected value ""

```

```yaml
- banner:
  - banner:
    - img "menu"
    - link "Logo":
      - /url: "#"
      - img "Logo"
    - list:
      - listitem:
        - link "premkumar.s@releaseqa.com":
          - /url: javascript:void(0)
          - img "premkumar.s@releaseqa.com"
        - img
      - listitem:
        - img "Aari"
      - listitem: 򭝉
      - listitem:
        - link "򬐕":
          - /url: "#"
      - listitem:
        - link "򬐸":
          - /url: https://docs.chainsys.com
      - listitem:
        - link "򬉆":
          - /url: "#"
        - list
        - link "see all notifications..":
          - /url: /appconnect/appplatform/notification/launch
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
  21 |     let appname='affiliate';
  22 |     
> 23 |     await expect(page).toHaveTitle('Chainsys Platform');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  24 |     
  25 |     const RelPOManager2=new RelPOManager(page,appname)
  26 |     const Designer=RelPOManager2.designerFunction();
  27 |     await Designer.designerAppSearch();
  28 |     
  29 | 
  30 |     //await page.pause();
  31 | 
  32 | })
  33 | 
  34 | });
  35 | test('page',async({page})=>
  36 |     
  37 | {
  38 | await page.goto("https://google.com")
  39 | console.log(await page.title());
  40 | await expect(page).toHaveTitle('Google');
  41 | }); 
  42 | 
  43 | test('Login page',async({browser,page})=>
  44 | {
  45 |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  46 |    /* const email=await page.locator('input#userEmail');
  47 |     const pass=await page.locator('input#userPassword')
  48 |     await page.locator('.text-reset').click();
  49 |     await page.locator('input#firstName').fill("Prem");
  50 |     await page.locator('input#lastName').fill("kumar");
  51 |     await email.fill("premkumar814@gmail.com");
  52 |     await page.locator('input#userMobile').fill("7010041536");
  53 |     await pass.fill("Premkumar@33");
  54 |     await page.locator('input#confirmPassword').fill("Premkumar@33");
  55 |     console.log(await page.locator('xpath=//*[text()=" I am 18 year or Older "]').textContent());
  56 |     await page.locator("[type='checkbox']").click();
  57 |     await page.locator('input#login').click();
  58 |     await page.locator('xpath=//*[text()="Login"]').click();
  59 |     console.log(await page.locator('xpath=//*[text()="Forgot password?"]').textContent());*/
  60 |     await page.locator('input#userEmail').fill("premkumar814@gmail.com");
  61 |     await page.locator('input#userPassword').fill("Premkumar@33");
  62 |     await page.locator('input#login').click();
  63 |     //console.log(await page.locator['//*[text()="*Email is required"]'].textContent());
  64 |     //console.log(await page.locator('xpath=//*[text()="ADIDAS ORIGINAL"]').textContent());
  65 |    
  66 |     const prod =await page.locator("div.card");
  67 |     //await prod.first().waitFor();
  68 |     const count=await prod.count();
  69 |     console.log(count);
  70 |     for(let i=0; i<=count; i++){
  71 |         console.log(await prod.nth(i).locator("b").textContent());
  72 |         if(await prod.nth(i).locator("b").textContent()==='ZARA COAT 3'){
  73 |             console.log(i); 
  74 |             await prod.nth(i).locator('text= Add To Cart').click();
  75 |              //await page.pause();
  76 |             break;
  77 |           
  78 | 
  79 |         }
  80 | 
  81 |     
  82 |        }
  83 | 
  84 |        
  85 | 
  86 |  
  87 | 
  88 | 
  89 | 
  90 | 
  91 | 
  92 |      
  93 | 
  94 | });
```