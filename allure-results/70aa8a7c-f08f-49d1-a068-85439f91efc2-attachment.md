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
  - img "animated" [ref=e10]
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
  44  | 
  45  |     await page.locator('#MG_Affiliate_side_menu').getByText('Affiliate').click({timeout:5000});
  46  |        // await page.waitForTimeout(5000),
  47  |       // await expect(page.locator("#MG_Affiliate_side_menu")).toBeVisible({timeout:5000});
  48  |     await page.locator('#MI_Affiliate_affiliatelist').click();
  49  | 
  50  |      await page.waitForTimeout(5000);
  51  |      await page.locator('#affiliatelist_WEB_Grid_with_List_New_1').click();
  52  | 
  53  | 
  54  |      await page.pause();
  55  |     
  56  |     //await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
  57  |     
  58  | 
  59  |     
  60  | 
  61  |     //await page.pause();
  62  | 
  63  | })
  64  | 
  65  | });
  66  | test('page',async({page})=>
  67  |     
  68  | {
  69  | await page.goto("https://google.com")
  70  | console.log(await page.title());
  71  | await expect(page).toHaveTitle('Google');
  72  | }); 
  73  | 
  74  | test('Login page',async({browser,page})=>
  75  | {
  76  |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  77  |    /* const email=await page.locator('input#userEmail');
  78  |     const pass=await page.locator('input#userPassword')
  79  |     await page.locator('.text-reset').click();
  80  |     await page.locator('input#firstName').fill("Prem");
  81  |     await page.locator('input#lastName').fill("kumar");
  82  |     await email.fill("premkumar814@gmail.com");
  83  |     await page.locator('input#userMobile').fill("7010041536");
  84  |     await pass.fill("Premkumar@33");
  85  |     await page.locator('input#confirmPassword').fill("Premkumar@33");
  86  |     console.log(await page.locator('xpath=//*[text()=" I am 18 year or Older "]').textContent());
  87  |     await page.locator("[type='checkbox']").click();
  88  |     await page.locator('input#login').click();
  89  |     await page.locator('xpath=//*[text()="Login"]').click();
  90  |     console.log(await page.locator('xpath=//*[text()="Forgot password?"]').textContent());*/
  91  |     await page.locator('input#userEmail').fill("premkumar814@gmail.com");
  92  |     await page.locator('input#userPassword').fill("Premkumar@33");
  93  |     await page.locator('input#login').click();
  94  |     //console.log(await page.locator['//*[text()="*Email is required"]'].textContent());
  95  |     //console.log(await page.locator('xpath=//*[text()="ADIDAS ORIGINAL"]').textContent());
  96  |    
  97  |     const prod =await page.locator("div.card");
  98  |     //await prod.first().waitFor();
  99  |     const count=await prod.count();
  100 |     console.log(count);
  101 |     for(let i=0; i<=count; i++){
  102 |         console.log(await prod.nth(i).locator("b").textContent());
  103 |         if(await prod.nth(i).locator("b").textContent()==='ZARA COAT 3'){
  104 |             console.log(i); 
  105 |             await prod.nth(i).locator('text= Add To Cart').click();
  106 |              //await page.pause();
  107 |             break;
  108 |           
  109 | 
  110 |         }
  111 | 
  112 |     
  113 |        }
  114 | 
  115 |        
  116 | 
  117 |  
  118 | 
  119 | 
  120 | 
  121 | 
  122 | 
  123 |      
  124 | 
  125 | });
```