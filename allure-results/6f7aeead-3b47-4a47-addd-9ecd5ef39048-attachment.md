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

Locator:  locator('mat-card-title').filter({ hasText: ' affliatelist ' }).first()
Expected: visible
Received: hidden

Call log:
  - Expect "toBeVisible" with timeout 50000ms
  - waiting for locator('mat-card-title').filter({ hasText: ' affliatelist ' }).first()
    75 × locator resolved to <mat-card-title class="mat-mdc-card-title">…</mat-card-title>
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
- text: mleaffiliatelist
- button " Save":
  - emphasis: 
  - text: Save
  - emphasis
- text: Affiliate
- emphasis: 
- text: SNo
- textbox
- text: Name
- textbox: affiliate0
- text: Registration Number
- textbox: "1"
- text: Autority
- radiogroup:
  - radio "RTO" [checked]
  - text: RTO
  - radio "DO"
  - text: DO
- text: RTO *
- textbox
- button "":
  - emphasis: 
- text: Address
- textbox
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
  27 |     await page.waitForLoadState('load');
  28 |     await Designer.designerAppSearch();
  29 |     //await page.waitForTimeout(5000);
  30 |    
  31 |     
  32 |     
  33 |     
  34 |   Promise.all([
  35 |     await page.waitForTimeout(10000),
  36 |     page.waitForSelector("#app-menu"),
  37 |     page.locator("#app-menu").click(),])
  38 |     await expect(page.locator("#MG_Affiliate_side_menu")).toBeVisible();
  39 |     await page.locator('#MG_Affiliate_side_menu').getByText('Affiliate').click();
  40 |     await page.locator('#MI_Affiliate_affiliatelist').click();
  41 |     await page.waitForLoadState('load');
  42 |     await page.locator('#affiliatelist_WEB_Grid_with_List_New_1').click();
  43 |     let count=0;
  44 |     let affiliatecount=`affiliate${count}`;
  45 |     await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$name_input"]').fill(affiliatecount);
  46 |     count++;
  47 |     await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$registrationnumber_input"]').fill(String(count));
  48 |     await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$autority_input_rto-input"]').click({timeout:5000});
> 49 |      await expect(page.locator('mat-card-title').filter({hasText:' affliatelist '}).nth(0)).toBeVisible();
     |                                                                                             ^ Error: expect(locator).toBeVisible() failed
  50 |     await expect(page.locator('span').filter({hasText:'*'}).nth(0)).toBeVisible();
  51 |      await expect(page.locator('mat-label').filter({hasText:'RTO'}).nth(0)).toBeVisible();
  52 | 
  53 | 
  54 |     //for(let i=1;i<=2;i++){
  55 |    // await expect(page.locator('//button[@id="mleaffiliatelist_WEB_Grid_with_List_Add Line_1"]')).toBeVisible();
  56 |     //await page.locator('//button[@id="mleaffiliatelist_WEB_Grid_with_List_Add Line_1"]').click();
  57 |     //}
  58 |     //await page.locator('//*[@id="r0_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$affliatelist_par$$name"]').pressSequentially("ind");
  59 | 
  60 | 
  61 | 
  62 | 
  63 | 
  64 | 
  65 | 
  66 |      
  67 |     
  68 |     //await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
  69 |     
  70 | 
  71 |     
  72 | 
  73 |    // await page.pause();
  74 | 
  75 | })
  76 | 
  77 | });
  78 | 
  79 | 
  80 | 
```