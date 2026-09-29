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
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#mleaffiliatelist_WEB_Grid_with_List_Add Line_1')

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
  - generic [ref=e38]:
    - text: 
    - generic [ref=e39]:
      - generic [ref=e40]:
        - generic [ref=e41]:
          - text: 
          - generic [ref=e42]: mleaffiliatelist
        - button " Save" [ref=e44]:
          - generic [ref=e45]:
            - emphasis [ref=e46]: 
            - generic [ref=e47]: Save
            - generic [ref=e48]:
              - emphasis
      - generic [ref=e51]:
        - generic [ref=e54]:
          - generic [ref=e56]:
            - generic [ref=e58]: Affiliate
            - emphasis [ref=e60]: 
          - generic [ref=e61]:
            - generic [ref=e62]:
              - generic [ref=e63]:
                - generic [ref=e64]: SNo
                - textbox [ref=e65]
              - generic [ref=e66]:
                - generic [ref=e67]: Name
                - textbox [ref=e68]: affiliate0
              - generic [ref=e69]:
                - generic [ref=e70]: Registration Number
                - textbox [ref=e71]: "1"
            - generic [ref=e72]:
              - generic [ref=e73]:
                - generic [ref=e74]: Autority
                - radiogroup [ref=e76]:
                  - generic [ref=e78]:
                    - radio "RTO" [ref=e81] [cursor=pointer]
                    - generic [ref=e84] [cursor=pointer]: RTO
                  - generic [ref=e86]:
                    - radio "DO" [checked] [active] [ref=e89] [cursor=pointer]
                    - generic [ref=e93] [cursor=pointer]: DO
              - generic [ref=e94]:
                - generic [ref=e95]: Address
                - textbox [ref=e96]
        - generic [ref=e102]:
          - generic [ref=e104]:
            - generic [ref=e105]:
              - generic [ref=e107]:
                - text: affliatelist
                - generic [ref=e108]: "|"
                - button "" [ref=e109] [cursor=pointer]:
                  - emphasis [ref=e110]: 
              - emphasis [ref=e114]: 
            - button "" [ref=e115] [cursor=pointer]:
              - emphasis [ref=e116]: 
              - generic:
                - emphasis
            - button "" [ref=e119] [cursor=pointer]:
              - emphasis [ref=e120]: 
            - button "" [ref=e123] [cursor=pointer]:
              - emphasis [ref=e124]: 
          - generic [ref=e128]:
            - paragraph [ref=e130]: Sorry, No Record Found
            - generic [ref=e131]:
              - grid [ref=e132]:
                - generic [ref=e133]:
                  - text: 
                  - generic [ref=e135]:
                    - columnheader "Action" [ref=e136]:
                      - generic [ref=e137]: Action
                      - text: 
                      - separator [ref=e138]
                    - columnheader "* Name  " [ref=e139]:
                      - generic [ref=e141]:
                        - generic [ref=e142]: "*"
                        - generic [ref=e143]: Name
                        - generic "Unique Field" [ref=e144]:
                          - emphasis [ref=e145] [cursor=pointer]: 
                      - generic [ref=e146]: 
                      - text: 
                      - separator [ref=e147]
                    - columnheader "Affiliater Name" [ref=e148]:
                      - generic [ref=e151]: Affiliater Name
                      - text: 
                      - separator [ref=e153]
                    - columnheader "Affiliate Description" [ref=e154]:
                      - generic [ref=e157]: Affiliate Description
                      - text: 
                      - separator [ref=e159]
                    - columnheader "Affiliate Number" [ref=e160]:
                      - generic [ref=e163]: Affiliate Number
                      - text: 
                      - separator [ref=e165]
              - generic:    
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
  48 |     await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$autority_input_do-input"]').click();
  49 |     for(let i=1;i<=2;i++){
> 50 |     await page.locator('#mleaffiliatelist_WEB_Grid_with_List_Add Line_1').click();
     |                                                                           ^ Error: locator.click: Test timeout of 60000ms exceeded.
  51 |     }
  52 |     await page.locator('//*[@id="r0_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$affliatelist_par$$name"]').pressSequentially("ind");
  53 | 
  54 | 
  55 | 
  56 | 
  57 | 
  58 | 
  59 | 
  60 |      
  61 |     
  62 |     //await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
  63 |     
  64 | 
  65 |     
  66 | 
  67 |     await page.pause();
  68 | 
  69 | })
  70 | 
  71 | });
  72 | 
  73 | 
  74 | 
```