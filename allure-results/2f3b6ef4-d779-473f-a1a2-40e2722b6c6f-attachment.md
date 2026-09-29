# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasic.spec.js >> Login >> Designer
- Location: tests\UIbasic.spec.js:20:11

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#MG_Affiliate_side_menu')
Expected: visible
Received: hidden

Call log:
  - Expect "toBeVisible" with timeout 50000ms
  - waiting for locator('#MG_Affiliate_side_menu')
    - waiting for" https://release.chainsys.com/apps/switcher" navigation to finish...
    - navigated to "https://release.chainsys.com/apps/switcher"
    31 × locator resolved to <mat-list-item color="light" detail="false" aria-disabled="false" id="MG_Affiliate_side_menu" _ngcontent-ng-c2942857069="" class="mat-mdc-list-item mdc-list-item menu-list-header fadeIn animated mat-mdc-list-item-single-line mdc-list-item--with-one-line ng-star-inserted">…</mat-list-item>
       - unexpected value "hidden"

```

```yaml
- button "":
  - emphasis: 
- img "App Logo"
- paragraph: Affiliate
- button "UserImg Org Logo":
  - emphasis:
    - img "UserImg"
  - img "Org Logo"
- img "notification-img"
- text: "1"
- img "switcher-img"
- img "View Runtime Exceptions"
- text: V 0.1
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
  27  |     await page.waitForLoadState('load');
  28  |     await Designer.designerAppSearch();
  29  |     //await page.waitForTimeout(5000);
  30  |    
  31  |     
  32  |     
  33  |     
  34  |   Promise.all([
  35  |     //await page.waitForTimeout(10000),
  36  |     page.waitForSelector("#app-menu"),
  37  |     page.locator("#app-menu").click(),])
> 38  |     await expect(page.locator("#MG_Affiliate_side_menu")).toBeVisible();
      |                                                           ^ Error: expect(locator).toBeVisible() failed
  39  |     await page.locator('#MG_Affiliate_side_menu').getByText('Affiliate').click();
  40  |     await page.locator('#MI_Affiliate_affiliatelist').click();
  41  |     await page.waitForLoadState('load');
  42  |     await page.locator('#affiliatelist_WEB_Grid_with_List_New_1').click();
  43  |     let count=0;
  44  |     let affiliatecount=`affiliate${count}`;
  45  |     await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$name_input"]').fill(affiliatecount);
  46  |     count++;
  47  |     await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$registrationnumber_input"]').fill(count);
  48  |     await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$autority_input_do-input"]').click();
  49  | 
  50  | 
  51  | 
  52  | 
  53  |      
  54  |     
  55  |     //await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
  56  |     
  57  | 
  58  |     
  59  | 
  60  |     //await page.pause();
  61  | 
  62  | })
  63  | 
  64  | });
  65  | test('page',async({page})=>
  66  |     
  67  | {
  68  | await page.goto("https://google.com")
  69  | console.log(await page.title());
  70  | await expect(page).toHaveTitle('Google');
  71  | }); 
  72  | 
  73  | test('Login page',async({browser,page})=>
  74  | {
  75  |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  76  |    /* const email=await page.locator('input#userEmail');
  77  |     const pass=await page.locator('input#userPassword')
  78  |     await page.locator('.text-reset').click();
  79  |     await page.locator('input#firstName').fill("Prem");
  80  |     await page.locator('input#lastName').fill("kumar");
  81  |     await email.fill("premkumar814@gmail.com");
  82  |     await page.locator('input#userMobile').fill("7010041536");
  83  |     await pass.fill("Premkumar@33");
  84  |     await page.locator('input#confirmPassword').fill("Premkumar@33");
  85  |     console.log(await page.locator('xpath=//*[text()=" I am 18 year or Older "]').textContent());
  86  |     await page.locator("[type='checkbox']").click();
  87  |     await page.locator('input#login').click();
  88  |     await page.locator('xpath=//*[text()="Login"]').click();
  89  |     console.log(await page.locator('xpath=//*[text()="Forgot password?"]').textContent());*/
  90  |     await page.locator('input#userEmail').fill("premkumar814@gmail.com");
  91  |     await page.locator('input#userPassword').fill("Premkumar@33");
  92  |     await page.locator('input#login').click();
  93  |     //console.log(await page.locator['//*[text()="*Email is required"]'].textContent());
  94  |     //console.log(await page.locator('xpath=//*[text()="ADIDAS ORIGINAL"]').textContent());
  95  |    
  96  |     const prod =await page.locator("div.card");
  97  |     //await prod.first().waitFor();
  98  |     const count=await prod.count();
  99  |     console.log(count);
  100 |     for(let i=0; i<=count; i++){
  101 |         console.log(await prod.nth(i).locator("b").textContent());
  102 |         if(await prod.nth(i).locator("b").textContent()==='ZARA COAT 3'){
  103 |             console.log(i); 
  104 |             await prod.nth(i).locator('text= Add To Cart').click();
  105 |              //await page.pause();
  106 |             break;
  107 |           
  108 | 
  109 |         }
  110 | 
  111 |     
  112 |        }
  113 | 
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
  124 | });
```