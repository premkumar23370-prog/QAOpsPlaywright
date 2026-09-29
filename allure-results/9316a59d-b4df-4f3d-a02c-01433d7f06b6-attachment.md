# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasic.spec.js >> Login >> Designer
- Location: tests\UIbasic.spec.js:20:11

# Error details

```
Error: locator.fill: Unexpected token "$" while parsing css selector "#FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$name_input". Did you mean to CSS.escape it?
Call log:
  - waiting for #FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$name_input

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
  - generic [ref=e39]:
    - text: 
    - generic [ref=e40]:
      - generic [ref=e41]:
        - generic [ref=e43]: affiliatelist
        - generic [ref=e44]:
          - button " Search" [ref=e45]:
            - generic [ref=e46]:
              - emphasis [ref=e47]: 
              - generic [ref=e48]: Search
          - button " New" [ref=e51]:
            - generic [ref=e52]:
              - emphasis [ref=e53]: 
              - generic [ref=e54]: New
              - generic [ref=e55]:
                - emphasis
          - button " New" [active] [ref=e58]:
            - generic [ref=e59]:
              - emphasis [ref=e60]: 
              - generic [ref=e61]: New
              - generic [ref=e62]:
                - emphasis
      - generic [ref=e69]:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:    
        - generic [ref=e71]:
          - generic [ref=e72]:
            - generic [ref=e73]:
              - generic [ref=e75]:
                - text: list
                - generic [ref=e76]: "|"
                - button "" [ref=e77] [cursor=pointer]:
                  - emphasis [ref=e78]: 
              - emphasis [ref=e82]: 
            - button "" [ref=e85] [cursor=pointer]:
              - emphasis [ref=e86]: 
          - generic [ref=e90]:
            - generic [ref=e92]:
              - grid [ref=e93]:
                - generic [ref=e94]:
                  - text: 
                  - generic [ref=e96]:
                    - columnheader "SNo " [ref=e97] [cursor=pointer]:
                      - generic [ref=e100]: SNo
                      - generic [ref=e101]: 
                      - text: 
                      - separator [ref=e102]
                    - columnheader "Name" [ref=e103] [cursor=pointer]:
                      - generic [ref=e106]: Name
                      - text: 
                      - separator [ref=e108]
                    - columnheader "Address" [ref=e109] [cursor=pointer]:
                      - generic [ref=e112]: Address
                      - text: 
                      - separator [ref=e114]
                    - columnheader "Autority" [ref=e115] [cursor=pointer]:
                      - generic [ref=e118]: Autority
                      - text: 
                      - separator [ref=e120]
                    - columnheader "Registration Number" [ref=e121] [cursor=pointer]:
                      - generic [ref=e124]: Registration Number
                      - text: 
                      - separator [ref=e126]
                    - columnheader "RTO" [ref=e127] [cursor=pointer]:
                      - generic [ref=e130]: RTO
                      - text: 
                      - separator [ref=e132]
              - generic:    
            - paragraph [ref=e137]: Sorry, No Record Found
          - paragraph [ref=e139]: Sorry, No Record Found
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
  35  |      //page.waitForLoadState('domcontentloaded'),
  36  |     
  37  |      await page.waitForTimeout(10000),
  38  |      page.waitForSelector("#app-menu"),
  39  | 
  40  |      page.locator("#app-menu").click(),])
  41  |        
  42  |  //
  43  | 
  44  | await expect(page.locator("#MG_Affiliate_side_menu")).toBeVisible();
  45  | 
  46  |     await page.locator('#MG_Affiliate_side_menu').getByText('Affiliate').click();
  47  |        // await page.waitForTimeout(5000),
  48  |       // await expect(page.locator("#MG_Affiliate_side_menu")).toBeVisible({timeout:5000});
  49  |     await page.locator('#MI_Affiliate_affiliatelist').click();
  50  | 
  51  |      await page.waitForLoadState('load');
  52  |      await page.locator('#affiliatelist_WEB_Grid_with_List_New_1').click();
> 53  |      await page.locator('#FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$name_input').fill('Affiliate_1');
      |                                                                                                     ^ Error: locator.fill: Unexpected token "$" while parsing css selector "#FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$name_input". Did you mean to CSS.escape it?
  54  |      
  55  | 
  56  | 
  57  |      await page.pause();
  58  |     
  59  |     //await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
  60  |     
  61  | 
  62  |     
  63  | 
  64  |     //await page.pause();
  65  | 
  66  | })
  67  | 
  68  | });
  69  | test('page',async({page})=>
  70  |     
  71  | {
  72  | await page.goto("https://google.com")
  73  | console.log(await page.title());
  74  | await expect(page).toHaveTitle('Google');
  75  | }); 
  76  | 
  77  | test('Login page',async({browser,page})=>
  78  | {
  79  |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  80  |    /* const email=await page.locator('input#userEmail');
  81  |     const pass=await page.locator('input#userPassword')
  82  |     await page.locator('.text-reset').click();
  83  |     await page.locator('input#firstName').fill("Prem");
  84  |     await page.locator('input#lastName').fill("kumar");
  85  |     await email.fill("premkumar814@gmail.com");
  86  |     await page.locator('input#userMobile').fill("7010041536");
  87  |     await pass.fill("Premkumar@33");
  88  |     await page.locator('input#confirmPassword').fill("Premkumar@33");
  89  |     console.log(await page.locator('xpath=//*[text()=" I am 18 year or Older "]').textContent());
  90  |     await page.locator("[type='checkbox']").click();
  91  |     await page.locator('input#login').click();
  92  |     await page.locator('xpath=//*[text()="Login"]').click();
  93  |     console.log(await page.locator('xpath=//*[text()="Forgot password?"]').textContent());*/
  94  |     await page.locator('input#userEmail').fill("premkumar814@gmail.com");
  95  |     await page.locator('input#userPassword').fill("Premkumar@33");
  96  |     await page.locator('input#login').click();
  97  |     //console.log(await page.locator['//*[text()="*Email is required"]'].textContent());
  98  |     //console.log(await page.locator('xpath=//*[text()="ADIDAS ORIGINAL"]').textContent());
  99  |    
  100 |     const prod =await page.locator("div.card");
  101 |     //await prod.first().waitFor();
  102 |     const count=await prod.count();
  103 |     console.log(count);
  104 |     for(let i=0; i<=count; i++){
  105 |         console.log(await prod.nth(i).locator("b").textContent());
  106 |         if(await prod.nth(i).locator("b").textContent()==='ZARA COAT 3'){
  107 |             console.log(i); 
  108 |             await prod.nth(i).locator('text= Add To Cart').click();
  109 |              //await page.pause();
  110 |             break;
  111 |           
  112 | 
  113 |         }
  114 | 
  115 |     
  116 |        }
  117 | 
  118 |        
  119 | 
  120 |  
  121 | 
  122 | 
  123 | 
  124 | 
  125 | 
  126 |      
  127 | 
  128 | });
```