# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasic.spec.js >> Login >> Designer
- Location: tests\UIbasic.spec.js:20:11

# Error details

```
TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - img "Chainsys" [ref=e10]
    - paragraph [ref=e12]: Affiliate
  - img "Default User" [ref=e14]
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
  30  |     page.waitForLoadState('domcontentloaded');
> 31  |   Promise.all(
      |           ^ TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
  32  |     
  33  |     
  34  |      page.waitForSelector("#app-menu"),
  35  | 
  36  |      page.locator("#app-menu").click(),)
  37  |        
  38  |   await page.pause();
  39  | 
  40  | //await expect(page.locator("#MG_Affiliate_side_menu")).toBeVisible({timeout:5000});
  41  |     //await page.locator('#MG_Affiliate_side_menu').getByText('Affiliate').click()
  42  |     //await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
  43  |     
  44  | 
  45  |     
  46  | 
  47  |     //await page.pause();
  48  | 
  49  | })
  50  | 
  51  | });
  52  | test('page',async({page})=>
  53  |     
  54  | {
  55  | await page.goto("https://google.com")
  56  | console.log(await page.title());
  57  | await expect(page).toHaveTitle('Google');
  58  | }); 
  59  | 
  60  | test('Login page',async({browser,page})=>
  61  | {
  62  |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  63  |    /* const email=await page.locator('input#userEmail');
  64  |     const pass=await page.locator('input#userPassword')
  65  |     await page.locator('.text-reset').click();
  66  |     await page.locator('input#firstName').fill("Prem");
  67  |     await page.locator('input#lastName').fill("kumar");
  68  |     await email.fill("premkumar814@gmail.com");
  69  |     await page.locator('input#userMobile').fill("7010041536");
  70  |     await pass.fill("Premkumar@33");
  71  |     await page.locator('input#confirmPassword').fill("Premkumar@33");
  72  |     console.log(await page.locator('xpath=//*[text()=" I am 18 year or Older "]').textContent());
  73  |     await page.locator("[type='checkbox']").click();
  74  |     await page.locator('input#login').click();
  75  |     await page.locator('xpath=//*[text()="Login"]').click();
  76  |     console.log(await page.locator('xpath=//*[text()="Forgot password?"]').textContent());*/
  77  |     await page.locator('input#userEmail').fill("premkumar814@gmail.com");
  78  |     await page.locator('input#userPassword').fill("Premkumar@33");
  79  |     await page.locator('input#login').click();
  80  |     //console.log(await page.locator['//*[text()="*Email is required"]'].textContent());
  81  |     //console.log(await page.locator('xpath=//*[text()="ADIDAS ORIGINAL"]').textContent());
  82  |    
  83  |     const prod =await page.locator("div.card");
  84  |     //await prod.first().waitFor();
  85  |     const count=await prod.count();
  86  |     console.log(count);
  87  |     for(let i=0; i<=count; i++){
  88  |         console.log(await prod.nth(i).locator("b").textContent());
  89  |         if(await prod.nth(i).locator("b").textContent()==='ZARA COAT 3'){
  90  |             console.log(i); 
  91  |             await prod.nth(i).locator('text= Add To Cart').click();
  92  |              //await page.pause();
  93  |             break;
  94  |           
  95  | 
  96  |         }
  97  | 
  98  |     
  99  |        }
  100 | 
  101 |        
  102 | 
  103 |  
  104 | 
  105 | 
  106 | 
  107 | 
  108 | 
  109 |      
  110 | 
  111 | });
```