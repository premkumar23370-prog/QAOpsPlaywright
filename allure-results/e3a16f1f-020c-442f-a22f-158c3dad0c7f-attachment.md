# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasic.spec.js >> Login >> Designer
- Location: tests\UIbasic.spec.js:20:11

# Error details

```
Error: locator.fill: value: expected string, got number
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
                - textbox [active] [ref=e68]: affiliate0
              - generic [ref=e69]:
                - generic [ref=e70]: Registration Number
                - textbox [ref=e71]
            - generic [ref=e72]:
              - generic [ref=e73]:
                - generic [ref=e74]: Autority
                - radiogroup [ref=e76]:
                  - generic [ref=e78]:
                    - radio "RTO" [ref=e81] [cursor=pointer]
                    - generic [ref=e84] [cursor=pointer]: RTO
                  - generic [ref=e86]:
                    - radio "DO" [ref=e89] [cursor=pointer]
                    - generic [ref=e92] [cursor=pointer]: DO
              - generic [ref=e93]:
                - generic [ref=e94]: RTO
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - textbox [ref=e95]
                        - button "" [ref=e96]:
                          - emphasis [ref=e97]: 
              - generic [ref=e98]:
                - generic [ref=e99]: Address
                - textbox [ref=e100]
        - generic [ref=e106]:
          - generic [ref=e108]:
            - generic [ref=e109]:
              - generic [ref=e111]:
                - text: affliatelist
                - generic [ref=e112]: "|"
                - button "" [ref=e113] [cursor=pointer]:
                  - emphasis [ref=e114]: 
              - emphasis [ref=e118]: 
            - button "" [ref=e119] [cursor=pointer]:
              - emphasis [ref=e120]: 
              - generic:
                - emphasis
            - button "" [ref=e123] [cursor=pointer]:
              - emphasis [ref=e124]: 
            - button "" [ref=e127] [cursor=pointer]:
              - emphasis [ref=e128]: 
          - generic [ref=e132]:
            - paragraph [ref=e134]: Sorry, No Record Found
            - generic [ref=e135]:
              - grid [ref=e136]:
                - generic [ref=e137]:
                  - text: 
                  - generic [ref=e139]:
                    - columnheader "Action" [ref=e140]:
                      - generic [ref=e141]: Action
                      - text: 
                      - separator [ref=e142]
                    - columnheader "* Name  " [ref=e143]:
                      - generic [ref=e145]:
                        - generic [ref=e146]: "*"
                        - generic [ref=e147]: Name
                        - generic "Unique Field" [ref=e148]:
                          - emphasis [ref=e149] [cursor=pointer]: 
                      - generic [ref=e150]: 
                      - text: 
                      - separator [ref=e151]
                    - columnheader "Affiliater Name" [ref=e152]:
                      - generic [ref=e155]: Affiliater Name
                      - text: 
                      - separator [ref=e157]
                    - columnheader "Affiliate Description" [ref=e158]:
                      - generic [ref=e161]: Affiliate Description
                      - text: 
                      - separator [ref=e163]
                    - columnheader "Affiliate Number" [ref=e164]:
                      - generic [ref=e167]: Affiliate Number
                      - text: 
                      - separator [ref=e169]
              - generic:    
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
  27  |     await page.waitForLoadState('load');
  28  |     await Designer.designerAppSearch();
  29  |     //await page.waitForTimeout(5000);
  30  |    
  31  |     
  32  |     
  33  |     
  34  |   Promise.all([
  35  |     await page.waitForTimeout(10000),
  36  |     page.waitForSelector("#app-menu"),
  37  |     page.locator("#app-menu").click(),])
  38  |     await expect(page.locator("#MG_Affiliate_side_menu")).toBeVisible();
  39  |     await page.locator('#MG_Affiliate_side_menu').getByText('Affiliate').click();
  40  |     await page.locator('#MI_Affiliate_affiliatelist').click();
  41  |     await page.waitForLoadState('load');
  42  |     await page.locator('#affiliatelist_WEB_Grid_with_List_New_1').click();
  43  |     let count=0;
  44  |     let affiliatecount=`affiliate${count}`;
  45  |     await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$name_input"]').fill(affiliatecount);
  46  |     count++;
> 47  |     await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$registrationnumber_input"]').fill(count);
      |                                                                                                                            ^ Error: locator.fill: value: expected string, got number
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