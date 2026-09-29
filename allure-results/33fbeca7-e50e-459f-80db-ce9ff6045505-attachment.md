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
  28  |     //await page.waitForTimeout(5000);
  29  |    
  30  |     
  31  |     
  32  |     
  33  |   Promise.all([
  34  |      //page.waitForLoadState('domcontentloaded'),
  35  |     
> 36  |      await page.waitForTimeout(10000),
      |                 ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  37  |      page.waitForSelector("#app-menu"),
  38  | 
  39  |      page.locator("#app-menu").click(),])
  40  |        
  41  |  //
  42  | 
  43  | await expect(page.locator("#MG_Affiliate_side_menu")).toBeVisible({timeout:5000});
  44  |     await page.locator('#MG_Affiliate_side_menu').getByText('Affiliate').click();
  45  |     await page.locator('MI_Affiliate_affiliatelist').click();
  46  |      await page.waitForTimeout(5000);
  47  |      await page.locator('affiliatelist_WEB_Grid_with_List_New_1').click();
  48  | 
  49  | 
  50  |      await page.pause();
  51  |     
  52  |     //await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
  53  |     
  54  | 
  55  |     
  56  | 
  57  |     //await page.pause();
  58  | 
  59  | })
  60  | 
  61  | });
  62  | test('page',async({page})=>
  63  |     
  64  | {
  65  | await page.goto("https://google.com")
  66  | console.log(await page.title());
  67  | await expect(page).toHaveTitle('Google');
  68  | }); 
  69  | 
  70  | test('Login page',async({browser,page})=>
  71  | {
  72  |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  73  |    /* const email=await page.locator('input#userEmail');
  74  |     const pass=await page.locator('input#userPassword')
  75  |     await page.locator('.text-reset').click();
  76  |     await page.locator('input#firstName').fill("Prem");
  77  |     await page.locator('input#lastName').fill("kumar");
  78  |     await email.fill("premkumar814@gmail.com");
  79  |     await page.locator('input#userMobile').fill("7010041536");
  80  |     await pass.fill("Premkumar@33");
  81  |     await page.locator('input#confirmPassword').fill("Premkumar@33");
  82  |     console.log(await page.locator('xpath=//*[text()=" I am 18 year or Older "]').textContent());
  83  |     await page.locator("[type='checkbox']").click();
  84  |     await page.locator('input#login').click();
  85  |     await page.locator('xpath=//*[text()="Login"]').click();
  86  |     console.log(await page.locator('xpath=//*[text()="Forgot password?"]').textContent());*/
  87  |     await page.locator('input#userEmail').fill("premkumar814@gmail.com");
  88  |     await page.locator('input#userPassword').fill("Premkumar@33");
  89  |     await page.locator('input#login').click();
  90  |     //console.log(await page.locator['//*[text()="*Email is required"]'].textContent());
  91  |     //console.log(await page.locator('xpath=//*[text()="ADIDAS ORIGINAL"]').textContent());
  92  |    
  93  |     const prod =await page.locator("div.card");
  94  |     //await prod.first().waitFor();
  95  |     const count=await prod.count();
  96  |     console.log(count);
  97  |     for(let i=0; i<=count; i++){
  98  |         console.log(await prod.nth(i).locator("b").textContent());
  99  |         if(await prod.nth(i).locator("b").textContent()==='ZARA COAT 3'){
  100 |             console.log(i); 
  101 |             await prod.nth(i).locator('text= Add To Cart').click();
  102 |              //await page.pause();
  103 |             break;
  104 |           
  105 | 
  106 |         }
  107 | 
  108 |     
  109 |        }
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
  120 | 
  121 | });
```