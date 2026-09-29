# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasic.spec.js >> Login >> Designer
- Location: tests\UIbasic.spec.js:19:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#cs_switchmenu')
    - waiting for" https://release.chainsys.com/appplatform/core/userlogin/launch" navigation to finish...
    - navigated to "https://release.chainsys.com/appplatform/core/userlogin/launch"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e7]:
        - img [ref=e9]
        - heading "Build, Deploy, and Scale Applications with Ease." [level=2] [ref=e10]
        - paragraph [ref=e11]: Building the Application.
        - list [ref=e12]:
          - listitem [ref=e13]: 7000+ templates to effortlessly integrate with applications.
          - listitem [ref=e14]: RAD framework for swift app creation in minutes.
          - listitem [ref=e15]: No-code, security, and scalability for modern solutions.
        - link "Learn more" [ref=e16] [cursor=pointer]:
          - /url: https://www.chainsys.com/smart-app-builder
      - generic [ref=e19]:
        - img [ref=e21]
        - heading "Achieve enterprise-wide data governance and quality." [level=2] [ref=e22]
        - paragraph [ref=e23]: Filters the data in efficent way.
        - list [ref=e24]:
          - listitem [ref=e25]: Helping you quickly and effectively improve data quality.
          - listitem [ref=e26]: 70% of execs delay decisions due to data unavailability or quality.
          - listitem [ref=e27]: 50% of orgs say they can do more in data security and GRC.
        - link "Learn more" [ref=e28] [cursor=pointer]:
          - /url: https://www.chainsys.com/datazap
      - generic [ref=e31]:
        - img [ref=e33]
        - heading "Deliver Impact Through Data Mastery." [level=2] [ref=e34]
        - paragraph [ref=e35]: Analytics, Security, Cataloging & Data Science in Blink of an AI.
        - list [ref=e36]:
          - listitem [ref=e37]: 3000+ Visualization & Analytics Templates.
          - listitem [ref=e38]: 10,000+ pre-built templates for major Enterprise Applications.
          - listitem [ref=e39]: Ensure top-notch data in your data lake.
        - link "Learn more" [ref=e40] [cursor=pointer]:
          - /url: https://www.chainsys.com/datazense
      - generic [ref=e43]:
        - img [ref=e45]
        - heading "Your Data, Your Rules." [level=2] [ref=e46]
        - paragraph [ref=e47]: Filters the data in efficent way
        - list [ref=e48]:
          - listitem [ref=e49]: Swift Execution of Data Quality Strategies.
          - listitem [ref=e50]: Realize Data Consciousness.
          - listitem [ref=e51]: Built-in Data Quality Platform.
        - link "Learn more" [ref=e52] [cursor=pointer]:
          - /url: https://www.chainsys.com/datazen
      - generic [ref=e55]:
        - img [ref=e57]
        - heading "Unleashing Next-Gen Automation Power." [level=2] [ref=e58]
        - paragraph [ref=e59]: Accelerate Automation, Ensure Quality, and Boost Productivity.
        - list [ref=e60]:
          - listitem [ref=e61]: Optimize operations with seamless automation.
          - listitem [ref=e62]: Adapt and automate with unmatched flexibility.
          - listitem [ref=e63]: Accelerate processes with instant playbacks.
        - link "Learn more" [ref=e64] [cursor=pointer]:
          - /url: https://www.chainsys.com/smart-bots
    - list [ref=e65]:
      - listitem [ref=e66]
      - listitem [ref=e67]
      - listitem [ref=e68]
      - listitem [ref=e70]
      - listitem [ref=e71]
  - generic [ref=e72]:
    - img "Chain-sys platform" [ref=e74]
    - generic [ref=e76]:
      - heading "Sign in to Smart Data Platform" [level=2] [ref=e77]
      - generic [ref=e78]: Username
      - textbox "Username" [active] [ref=e79]
      - generic [ref=e80]: Password
      - generic [ref=e81]:
        - textbox "Password" [ref=e82]
        - emphasis [ref=e83] [cursor=pointer]: 򬄹
        - text: 򬅁
      - link "Forgot password?" [ref=e85] [cursor=pointer]:
        - /url: "#"
      - generic "Login" [ref=e86] [cursor=pointer]: Sign in
```

# Test source

```ts
  1  | const {test, expect}= require('@playwright/test');
  2  | const {loginFix1}=require('../Utils/fixture');
  3  | //const { use } = require('react');
  4  | test.describe.only('Login',()=>{
  5  | test('First playwright',async({browser})=>
  6  | {
  7  |     const context=await browser.newContext();
  8  |     const page=await context.newPage();
  9  |     await page.goto("https://release.chainsys.com/appplatform/core/userlogin/launch");
  10 |     await page.locator('input#userName').fill('preedewmdevqa');
  11 |      await page.locator('input#password').fill('Welcomewewe#2');
  12 |      await page.locator('xpath=(//*[@title="Login"])[1]').click();
  13 |      
  14 |      console.log(await page.locator('xpath=//*[@id="invalidMsg"]').textContent());
  15 |       await expect(page.locator('xpath=//*[@id="invalidMsg"]')).toContainText('Invalid Username Or Password.');
  16 |     
  17 | });
  18 | 
  19 | loginFix1('Designer',async({loginRelQA,page})=>{
> 20 |     await page.locator('#cs_switchmenu').click();
     |                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 |     await page.pause();
  22 | 
  23 | })
  24 | 
  25 | });
  26 | test('page',async({page})=>
  27 | {
  28 | await page.goto("https://google.com")
  29 | console.log(await page.title());
  30 | await expect(page).toHaveTitle('Google');
  31 | }); 
  32 | 
  33 | test('Login page',async({browser,page})=>
  34 | {
  35 |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  36 |    /* const email=await page.locator('input#userEmail');
  37 |     const pass=await page.locator('input#userPassword')
  38 |     await page.locator('.text-reset').click();
  39 |     await page.locator('input#firstName').fill("Prem");
  40 |     await page.locator('input#lastName').fill("kumar");
  41 |     await email.fill("premkumar814@gmail.com");
  42 |     await page.locator('input#userMobile').fill("7010041536");
  43 |     await pass.fill("Premkumar@33");
  44 |     await page.locator('input#confirmPassword').fill("Premkumar@33");
  45 |     console.log(await page.locator('xpath=//*[text()=" I am 18 year or Older "]').textContent());
  46 |     await page.locator("[type='checkbox']").click();
  47 |     await page.locator('input#login').click();
  48 |     await page.locator('xpath=//*[text()="Login"]').click();
  49 |     console.log(await page.locator('xpath=//*[text()="Forgot password?"]').textContent());*/
  50 |     await page.locator('input#userEmail').fill("premkumar814@gmail.com");
  51 |     await page.locator('input#userPassword').fill("Premkumar@33");
  52 |     await page.locator('input#login').click();
  53 |     //console.log(await page.locator['//*[text()="*Email is required"]'].textContent());
  54 |     //console.log(await page.locator('xpath=//*[text()="ADIDAS ORIGINAL"]').textContent());
  55 |    
  56 |     const prod =await page.locator("div.card");
  57 |     //await prod.first().waitFor();
  58 |     const count=await prod.count();
  59 |     console.log(count);
  60 |     for(let i=0; i<=count; i++){
  61 |         console.log(await prod.nth(i).locator("b").textContent());
  62 |         if(await prod.nth(i).locator("b").textContent()==='ZARA COAT 3'){
  63 |             console.log(i); 
  64 |             await prod.nth(i).locator('text= Add To Cart').click();
  65 |              //await page.pause();
  66 |             break;
  67 |           
  68 | 
  69 |         }
  70 | 
  71 |     
  72 |        }
  73 | 
  74 |        
  75 | 
  76 |  
  77 | 
  78 | 
  79 | 
  80 | 
  81 | 
  82 |      
  83 | 
  84 | });
```