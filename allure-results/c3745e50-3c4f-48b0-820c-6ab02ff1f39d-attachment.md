# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasic.spec.js >> Login >> Designer
- Location: tests\UIbasic.spec.js:20:11

# Error details

```
TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#MG_Affiliate_side_menu')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#MG_Affiliate_side_menu')

```

```yaml
- button "":
  - emphasis: 
- img "App Logo"
- paragraph: Affiliate
- button "Default-Avatar UserImg Org Logo":
  - emphasis:
    - img "Default-Avatar"
    - img "UserImg"
  - img "Org Logo"
- img "notification-img"
- text: "1"
- img "switcher-img"
- img "View Runtime Exceptions"
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
  29  |   Promise.all( 
  30  |     await page.waitForLoadState('domcontentloaded'),
  31  |     await page.waitForSelector("#app-menu"),
  32  | 
  33  |     await page.locator("#app-menu").click(),)
  34  |        
  35  |   
  36  | 
> 37  | await expect(page.locator("#MG_Affiliate_side_menu")).toBeVisible({timeout:5000});
      |                                                       ^ Error: expect(locator).toBeVisible() failed
  38  |     await page.locator('#MG_Affiliate_side_menu').getByText('Affiliate').click()
  39  |     await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
  40  |     
  41  | 
  42  |     
  43  | 
  44  |     //await page.pause();
  45  | 
  46  | })
  47  | 
  48  | });
  49  | test('page',async({page})=>
  50  |     
  51  | {
  52  | await page.goto("https://google.com")
  53  | console.log(await page.title());
  54  | await expect(page).toHaveTitle('Google');
  55  | }); 
  56  | 
  57  | test('Login page',async({browser,page})=>
  58  | {
  59  |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  60  |    /* const email=await page.locator('input#userEmail');
  61  |     const pass=await page.locator('input#userPassword')
  62  |     await page.locator('.text-reset').click();
  63  |     await page.locator('input#firstName').fill("Prem");
  64  |     await page.locator('input#lastName').fill("kumar");
  65  |     await email.fill("premkumar814@gmail.com");
  66  |     await page.locator('input#userMobile').fill("7010041536");
  67  |     await pass.fill("Premkumar@33");
  68  |     await page.locator('input#confirmPassword').fill("Premkumar@33");
  69  |     console.log(await page.locator('xpath=//*[text()=" I am 18 year or Older "]').textContent());
  70  |     await page.locator("[type='checkbox']").click();
  71  |     await page.locator('input#login').click();
  72  |     await page.locator('xpath=//*[text()="Login"]').click();
  73  |     console.log(await page.locator('xpath=//*[text()="Forgot password?"]').textContent());*/
  74  |     await page.locator('input#userEmail').fill("premkumar814@gmail.com");
  75  |     await page.locator('input#userPassword').fill("Premkumar@33");
  76  |     await page.locator('input#login').click();
  77  |     //console.log(await page.locator['//*[text()="*Email is required"]'].textContent());
  78  |     //console.log(await page.locator('xpath=//*[text()="ADIDAS ORIGINAL"]').textContent());
  79  |    
  80  |     const prod =await page.locator("div.card");
  81  |     //await prod.first().waitFor();
  82  |     const count=await prod.count();
  83  |     console.log(count);
  84  |     for(let i=0; i<=count; i++){
  85  |         console.log(await prod.nth(i).locator("b").textContent());
  86  |         if(await prod.nth(i).locator("b").textContent()==='ZARA COAT 3'){
  87  |             console.log(i); 
  88  |             await prod.nth(i).locator('text= Add To Cart').click();
  89  |              //await page.pause();
  90  |             break;
  91  |           
  92  | 
  93  |         }
  94  | 
  95  |     
  96  |        }
  97  | 
  98  |        
  99  | 
  100 |  
  101 | 
  102 | 
  103 | 
  104 | 
  105 | 
  106 |      
  107 | 
  108 | });
```