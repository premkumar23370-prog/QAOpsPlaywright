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
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
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
  - generic [ref=e41]: V 0.1
  - text: 
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
  29  |     
  30  |     
  31  |     
  32  |   Promise.all([
  33  |      //page.waitForLoadState('domcontentloaded'),
  34  |     
> 35  |      await page.waitForTimeout(10000),
      |                 ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  36  |      page.waitForSelector("#app-menu"),
  37  | 
  38  |      page.locator("#app-menu").click(),])
  39  |        
  40  |  //
  41  | 
  42  | await expect(page.locator("#MG_Affiliate_side_menu")).toBeVisible({timeout:5000});
  43  |     await page.locator('#MG_Affiliate_side_menu').getByText('Affiliate').click();
  44  |     await page.locator('MI_Affiliate_affiliatelist').click();
  45  |      await page.waitForTimeout(5000);
  46  |      await page.locator('affiliatelist_WEB_Grid_with_List_New_1').cllcik();
  47  | 
  48  | 
  49  |      await page.pause();
  50  |     
  51  |     //await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
  52  |     
  53  | 
  54  |     
  55  | 
  56  |     //await page.pause();
  57  | 
  58  | })
  59  | 
  60  | });
  61  | test('page',async({page})=>
  62  |     
  63  | {
  64  | await page.goto("https://google.com")
  65  | console.log(await page.title());
  66  | await expect(page).toHaveTitle('Google');
  67  | }); 
  68  | 
  69  | test('Login page',async({browser,page})=>
  70  | {
  71  |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  72  |    /* const email=await page.locator('input#userEmail');
  73  |     const pass=await page.locator('input#userPassword')
  74  |     await page.locator('.text-reset').click();
  75  |     await page.locator('input#firstName').fill("Prem");
  76  |     await page.locator('input#lastName').fill("kumar");
  77  |     await email.fill("premkumar814@gmail.com");
  78  |     await page.locator('input#userMobile').fill("7010041536");
  79  |     await pass.fill("Premkumar@33");
  80  |     await page.locator('input#confirmPassword').fill("Premkumar@33");
  81  |     console.log(await page.locator('xpath=//*[text()=" I am 18 year or Older "]').textContent());
  82  |     await page.locator("[type='checkbox']").click();
  83  |     await page.locator('input#login').click();
  84  |     await page.locator('xpath=//*[text()="Login"]').click();
  85  |     console.log(await page.locator('xpath=//*[text()="Forgot password?"]').textContent());*/
  86  |     await page.locator('input#userEmail').fill("premkumar814@gmail.com");
  87  |     await page.locator('input#userPassword').fill("Premkumar@33");
  88  |     await page.locator('input#login').click();
  89  |     //console.log(await page.locator['//*[text()="*Email is required"]'].textContent());
  90  |     //console.log(await page.locator('xpath=//*[text()="ADIDAS ORIGINAL"]').textContent());
  91  |    
  92  |     const prod =await page.locator("div.card");
  93  |     //await prod.first().waitFor();
  94  |     const count=await prod.count();
  95  |     console.log(count);
  96  |     for(let i=0; i<=count; i++){
  97  |         console.log(await prod.nth(i).locator("b").textContent());
  98  |         if(await prod.nth(i).locator("b").textContent()==='ZARA COAT 3'){
  99  |             console.log(i); 
  100 |             await prod.nth(i).locator('text= Add To Cart').click();
  101 |              //await page.pause();
  102 |             break;
  103 |           
  104 | 
  105 |         }
  106 | 
  107 |     
  108 |        }
  109 | 
  110 |        
  111 | 
  112 |  
  113 | 
  114 | 
  115 | 
  116 | 
  117 | 
  118 |      
  119 | 
  120 | });
```