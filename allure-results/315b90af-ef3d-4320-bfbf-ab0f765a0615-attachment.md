# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasic.spec.js >> Login >> Designer
- Location: tests\UIbasic.spec.js:20:11

# Error details

```
TimeoutError: page.waitForSelector: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('#app-menu') to be visible
    - waiting for" https://release.chainsys.com/apps/switcher" navigation to finish...
    - navigated to "https://release.chainsys.com/apps/switcher"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - img "Chainsys" [ref=e10]
    - paragraph [ref=e12]: Affiliate
  - img "Default User" [ref=e14]
```

# Test source

```ts
  1   | const {test, expect}= require('@playwright/test');
  2   | const {loginFix1}=require('../Utils/fixture');
  3   | const {RelPOManager}=require('../Object module/RelPOManager')
  4   | //const { use } = require('react');
  5   | test.describe.only('Login',()=>{
  6   | test('First playwright',async({browser})=>
  7   | {
  8   |     const context=await browser.newContext();
  9   |     const page=await context.newPage();
  10  |     await page.goto("https://release.chainsys.com/appplatform/core/userlogin/launch");
  11  |     await page.locator('input#userName').fill('preedewmdevqa');
  12  |      await page.locator('input#password').fill('Welcomewewe#2');
  13  |      await page.locator('xpath=(//*[@title="Login"])[1]').click();
  14  |      
  15  |      console.log(await page.locator('xpath=//*[@id="invalidMsg"]').textContent());
  16  |       await expect(page.locator('xpath=//*[@id="invalidMsg"]')).toContainText('Invalid Username Or Password.');
  17  |     
  18  | });
  19  | 
  20  | loginFix1.only('Designer',async({loginRelQA,page})=>{
  21  |     let appname='Affiliate';
  22  |     
  23  |     await expect(page).toHaveTitle('Chainsys Platform');
  24  |     
  25  |     const RelPOManager2=new RelPOManager(page,appname)
  26  |     const Designer=RelPOManager2.designerFunction();
  27  |     await Designer.designerAppSearch();
  28  |     
> 29  |   Promise.allSettled( await page.waitForSelector("#app-menu",{timeout:5000}),
      |                                  ^ TimeoutError: page.waitForSelector: Timeout 5000ms exceeded.
  30  | 
  31  |     await page.locator("#app-menu").click(),)
  32  |        
  33  |   
  34  | 
  35  | await expect(page.locator("#MG_Affiliate_side_menu")).toBeVisible({timeout:5000});
  36  |     await page.locator('#MG_Affiliate_side_menu').getByText('Affiliate').click()
  37  |     await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
  38  |     
  39  | 
  40  |     
  41  | 
  42  |     //await page.pause();
  43  | 
  44  | })
  45  | 
  46  | });
  47  | test('page',async({page})=>
  48  |     
  49  | {
  50  | await page.goto("https://google.com")
  51  | console.log(await page.title());
  52  | await expect(page).toHaveTitle('Google');
  53  | }); 
  54  | 
  55  | test('Login page',async({browser,page})=>
  56  | {
  57  |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  58  |    /* const email=await page.locator('input#userEmail');
  59  |     const pass=await page.locator('input#userPassword')
  60  |     await page.locator('.text-reset').click();
  61  |     await page.locator('input#firstName').fill("Prem");
  62  |     await page.locator('input#lastName').fill("kumar");
  63  |     await email.fill("premkumar814@gmail.com");
  64  |     await page.locator('input#userMobile').fill("7010041536");
  65  |     await pass.fill("Premkumar@33");
  66  |     await page.locator('input#confirmPassword').fill("Premkumar@33");
  67  |     console.log(await page.locator('xpath=//*[text()=" I am 18 year or Older "]').textContent());
  68  |     await page.locator("[type='checkbox']").click();
  69  |     await page.locator('input#login').click();
  70  |     await page.locator('xpath=//*[text()="Login"]').click();
  71  |     console.log(await page.locator('xpath=//*[text()="Forgot password?"]').textContent());*/
  72  |     await page.locator('input#userEmail').fill("premkumar814@gmail.com");
  73  |     await page.locator('input#userPassword').fill("Premkumar@33");
  74  |     await page.locator('input#login').click();
  75  |     //console.log(await page.locator['//*[text()="*Email is required"]'].textContent());
  76  |     //console.log(await page.locator('xpath=//*[text()="ADIDAS ORIGINAL"]').textContent());
  77  |    
  78  |     const prod =await page.locator("div.card");
  79  |     //await prod.first().waitFor();
  80  |     const count=await prod.count();
  81  |     console.log(count);
  82  |     for(let i=0; i<=count; i++){
  83  |         console.log(await prod.nth(i).locator("b").textContent());
  84  |         if(await prod.nth(i).locator("b").textContent()==='ZARA COAT 3'){
  85  |             console.log(i); 
  86  |             await prod.nth(i).locator('text= Add To Cart').click();
  87  |              //await page.pause();
  88  |             break;
  89  |           
  90  | 
  91  |         }
  92  | 
  93  |     
  94  |        }
  95  | 
  96  |        
  97  | 
  98  |  
  99  | 
  100 | 
  101 | 
  102 | 
  103 | 
  104 |      
  105 | 
  106 | });
```