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
  - waiting for locator('affiliatelist_WEB_Grid_with_List_New_1')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - generic [ref=e7]:
      - generic [ref=e8]:
        - button "" [ref=e9] [cursor=pointer]:
          - emphasis [ref=e10]: 
        - img "App Logo" [ref=e11]
      - paragraph [ref=e13]: Affiliate
    - generic [ref=e16]:
      - button "UserImg Org Logo" [ref=e17]:
        - emphasis [ref=e18] [cursor=pointer]:
          - img "UserImg" [ref=e23]
        - img "Org Logo" [ref=e25]
      - generic [ref=e26] [cursor=pointer]:
        - img "notification-img" [ref=e27]
        - generic [ref=e28]: "1"
      - img "switcher-img" [ref=e30] [cursor=pointer]
      - img "View Runtime Exceptions" [ref=e32] [cursor=pointer]
  - generic [ref=e34]:
    - generic [ref=e40]:
      - generic [ref=e44] [cursor=pointer]:
        - button "" [ref=e45]:
          - emphasis [ref=e46]: 
        - generic [ref=e49]: Home
      - generic [ref=e50]:
        - generic [ref=e53] [cursor=pointer]:
          - button "" [ref=e54]:
            - emphasis [ref=e55]: 
          - generic [ref=e58]: Affiliate
          - button "" [ref=e59]:
            - emphasis [ref=e60]: 
        - generic [ref=e63]:
          - generic [ref=e68] [cursor=pointer]:
            - button "" [ref=e69]:
              - emphasis [ref=e70]: 
            - generic [ref=e73]: Affiliate
          - generic [ref=e78] [cursor=pointer]:
            - button "" [ref=e79]:
              - emphasis [ref=e80]: 
            - generic [ref=e83]: RTO
    - generic [ref=e90]: V 0.1
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
  28 |     await page.waitForSelector("#app-menu");
  29 |     await page.locator("#app-menu").click();
  30 |     await page.locator("#MG_Affiliate_side_menu").click();
> 31 |     await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
     |                                                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  32 | 
  33 |     
  34 | 
  35 |     //await page.pause();
  36 | 
  37 | })
  38 | 
  39 | });
  40 | test('page',async({page})=>
  41 |     
  42 | {
  43 | await page.goto("https://google.com")
  44 | console.log(await page.title());
  45 | await expect(page).toHaveTitle('Google');
  46 | }); 
  47 | 
  48 | test('Login page',async({browser,page})=>
  49 | {
  50 |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  51 |    /* const email=await page.locator('input#userEmail');
  52 |     const pass=await page.locator('input#userPassword')
  53 |     await page.locator('.text-reset').click();
  54 |     await page.locator('input#firstName').fill("Prem");
  55 |     await page.locator('input#lastName').fill("kumar");
  56 |     await email.fill("premkumar814@gmail.com");
  57 |     await page.locator('input#userMobile').fill("7010041536");
  58 |     await pass.fill("Premkumar@33");
  59 |     await page.locator('input#confirmPassword').fill("Premkumar@33");
  60 |     console.log(await page.locator('xpath=//*[text()=" I am 18 year or Older "]').textContent());
  61 |     await page.locator("[type='checkbox']").click();
  62 |     await page.locator('input#login').click();
  63 |     await page.locator('xpath=//*[text()="Login"]').click();
  64 |     console.log(await page.locator('xpath=//*[text()="Forgot password?"]').textContent());*/
  65 |     await page.locator('input#userEmail').fill("premkumar814@gmail.com");
  66 |     await page.locator('input#userPassword').fill("Premkumar@33");
  67 |     await page.locator('input#login').click();
  68 |     //console.log(await page.locator['//*[text()="*Email is required"]'].textContent());
  69 |     //console.log(await page.locator('xpath=//*[text()="ADIDAS ORIGINAL"]').textContent());
  70 |    
  71 |     const prod =await page.locator("div.card");
  72 |     //await prod.first().waitFor();
  73 |     const count=await prod.count();
  74 |     console.log(count);
  75 |     for(let i=0; i<=count; i++){
  76 |         console.log(await prod.nth(i).locator("b").textContent());
  77 |         if(await prod.nth(i).locator("b").textContent()==='ZARA COAT 3'){
  78 |             console.log(i); 
  79 |             await prod.nth(i).locator('text= Add To Cart').click();
  80 |              //await page.pause();
  81 |             break;
  82 |           
  83 | 
  84 |         }
  85 | 
  86 |     
  87 |        }
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
  98 | 
  99 | });
```