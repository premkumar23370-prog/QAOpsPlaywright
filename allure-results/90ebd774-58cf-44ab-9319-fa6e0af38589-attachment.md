# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasic.spec.js >> Login >> Designer
- Location: tests\UIbasic.spec.js:20:11

# Error details

```
TypeError: expect(100).toContain(100) // indexOf

Matcher error: expected value must be a string if received value is a string

Expected has type:  number
Expected has value: 100
Received has type:  string
Received has value: "100"
```

```
TypeError: expect(100).toContain(100) // indexOf

Matcher error: expected value must be a string if received value is a string

Expected has type:  number
Expected has value: 100
Received has type:  string
Received has value: "100"
```

```
TypeError: expect(100).toContain(100) // indexOf

Matcher error: expected value must be a string if received value is a string

Expected has type:  number
Expected has value: 100
Received has type:  string
Received has value: "100"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - generic [ref=e8]:
          - button [ref=e9] [cursor=pointer]:
            - emphasis [ref=e10]: 
          - img [ref=e11]
        - paragraph [ref=e13]: Affiliate
      - generic [ref=e16]:
        - button [ref=e17]:
          - emphasis [ref=e18] [cursor=pointer]:
            - img [ref=e23]
          - img [ref=e25]
        - generic [ref=e26] [cursor=pointer]:
          - img [ref=e27]
          - generic [ref=e28]: "1"
        - img [ref=e30] [cursor=pointer]
        - img [ref=e32] [cursor=pointer]
    - generic [ref=e38]:
      - text: 
      - generic [ref=e39]:
        - generic [ref=e40]:
          - generic [ref=e41]:
            - text: 
            - generic [ref=e42]: mleaffiliatelist
          - button [ref=e44]:
            - generic [ref=e45]:
              - emphasis [ref=e46]: 
              - generic [ref=e47]: Save
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
                      - radio [checked] [ref=e81] [cursor=pointer]
                      - generic [ref=e85] [cursor=pointer]: RTO
                    - generic [ref=e87]:
                      - radio [ref=e90] [cursor=pointer]
                      - generic [ref=e93] [cursor=pointer]: DO
                - generic [ref=e94]:
                  - generic [ref=e95]:
                    - text: RTO
                    - generic [ref=e96]: "*"
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - textbox [ref=e97]
                          - button [ref=e98]:
                            - emphasis [ref=e99]: 
                - generic [ref=e100]:
                  - generic [ref=e101]: Address
                  - textbox [ref=e102]
          - generic [ref=e104]:                 
    - text: 
  - dialog [ref=e109]:
    - generic [ref=e112]:
      - button "" [active] [ref=e113] [cursor=pointer]:
        - emphasis [ref=e114]: 
      - generic [ref=e117]:
        - generic [ref=e120]: RT details
        - generic [ref=e126]:
          - generic [ref=e128]:
            - generic [ref=e129]:
              - generic [ref=e130]:
                - generic [ref=e131]: "Items per page :"
                - combobox "50" [ref=e132]:
                  - generic [ref=e133] [cursor=pointer]:
                    - generic [ref=e135]: "50"
                    - img [ref=e138]
              - generic [ref=e140]:
                - generic [ref=e141]: "1"
                - generic [ref=e142]: "- 3"
                - generic [ref=e143]: of 3
              - generic [ref=e144]:
                - generic [ref=e145]: 1 /
                - generic [ref=e146]: 1 Page
              - button "":
                - emphasis: 
              - button "":
                - emphasis: 
            - button "" [ref=e147]:
              - emphasis [ref=e148]: 
          - generic [ref=e150]:
            - grid [ref=e151]:
              - generic [ref=e152]:
                - text: 
                - generic [ref=e154]:
                  - columnheader "RTO Num " [ref=e155]:
                    - generic [ref=e158]: RTO Num
                    - generic [ref=e159]: 
                    - text: 
                    - separator [ref=e160]
                  - columnheader "RTO Name" [ref=e161]:
                    - generic [ref=e164]: RTO Name
                    - text: 
                    - separator [ref=e166]
                  - columnheader "Rto Number" [ref=e167]:
                    - generic [ref=e170]: Rto Number
                    - text: 
                    - separator [ref=e172]
              - generic [ref=e175]:
                - row "1 RTO1 100" [ref=e176]:
                  - gridcell "1" [ref=e177]:
                    - generic "1" [ref=e178]
                  - gridcell "RTO1" [ref=e179]:
                    - generic "RTO1" [ref=e180]
                  - gridcell "100" [ref=e181]:
                    - generic "100" [ref=e182]
                - row "2 RTO2 100" [ref=e183]:
                  - gridcell "2" [ref=e184]:
                    - generic "2" [ref=e185]
                  - gridcell "RTO2" [ref=e186]:
                    - generic "RTO2" [ref=e187]
                  - gridcell "100" [ref=e188]:
                    - generic "100" [ref=e189]
                - row "3 RTO3 100" [ref=e190]:
                  - gridcell "3" [ref=e191]:
                    - generic "3" [ref=e192]
                  - gridcell "RTO3" [ref=e193]:
                    - generic "RTO3" [ref=e194]
                  - gridcell "100" [ref=e195]:
                    - generic "100" [ref=e196]
            - generic:    
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
  47 |     
  48 |     await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$registrationnumber_input"]').fill(String(count));
  49 |     await expect(page.locator('mat-card-title').filter({hasText:' affliatelist '}).nth(0)).toBeVisible();
  50 |     await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$autority_input_rto-input"]').click({timeout:5000});
  51 |      
  52 |     await expect(page.locator('span').filter({hasText:'*'}).nth(0)).toBeVisible();
  53 |      await expect(page.locator('mat-label').filter({hasText:'RTO'}).nth(0)).toBeVisible();
  54 |      await expect(page.locator('mat-card-title').filter({hasText:' affliatelist '}).nth(0)).toBeHidden();
  55 |      await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$rto_input"]').dblclick();
  56 |  await page.waitForTimeout(500);
  57 |      const rtonumbers=await page.locator('[id^="r"][id*="mleaffiliatelist_WEB_Grid_with_List_weblookup_rtodetails_DUMMY$$rtonumber"]').allTextContents();
  58 |     
  59 |      await expect(rtonumbers.length).toBeGreaterThan(0);
  60 |      for(const rtonumber of rtonumbers){
> 61 |       await expect.soft(rtonumber).toContain(100);
     |                                    ^ TypeError: expect(100).toContain(100) // indexOf
  62 |      }
  63 |     
  64 | 
  65 | 
  66 |     //for(let i=1;i<=2;i++){
  67 |    // await expect(page.locator('//button[@id="mleaffiliatelist_WEB_Grid_with_List_Add Line_1"]')).toBeVisible();
  68 |     //await page.locator('//button[@id="mleaffiliatelist_WEB_Grid_with_List_Add Line_1"]').click();
  69 |     //}
  70 |     //await page.locator('//*[@id="r0_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$affliatelist_par$$name"]').pressSequentially("ind");
  71 | 
  72 | 
  73 | 
  74 | 
  75 | 
  76 | 
  77 | 
  78 |      
  79 |     
  80 |     //await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
  81 |     
  82 | 
  83 |     
  84 | 
  85 |    await page.pause();
  86 | 
  87 | })
  88 | 
  89 | });
  90 | 
  91 | 
  92 | 
```