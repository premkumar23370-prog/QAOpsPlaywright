# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasic.spec.js >> Login >> Designer
- Location: tests\UIbasic.spec.js:19:11

# Error details

```
ReferenceError: waitForEvent is not defined
```

# Page snapshot

```yaml
- banner [ref=e2]:
  - banner [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5] [cursor=pointer]:
        - img "menu" [ref=e6]
        - text: 
      - link "Logo" [ref=e7] [cursor=pointer]:
        - /url: "#"
        - img "Logo" [ref=e9]
    - list [ref=e10]:
      - listitem [ref=e11]:
        - generic [ref=e12]:
          - link "premkumar.s@releaseqa.com" [ref=e14] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "premkumar.s@releaseqa.com" [ref=e15]
          - img [ref=e17] [cursor=pointer]
      - text: 
      - listitem [ref=e18]:
        - img "Aari" [ref=e20] [cursor=pointer]
      - listitem [ref=e21]:
        - generic "Chat Assistance" [ref=e22] [cursor=pointer]:
          - generic [ref=e23]: 򭝉
      - listitem [ref=e24]:
        - link "򬐕" [ref=e25] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e26]:
        - link "򬐸" [ref=e27] [cursor=pointer]:
          - /url: https://docs.chainsys.com
          - generic [ref=e28]: 򬐸
      - listitem [ref=e29]:
        - link "򬉆" [ref=e30] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e31]: 򬉆
        - generic:
          - list
          - link "see all notifications..":
            - /url: /appconnect/appplatform/notification/launch;CSPSID=9E62DD3450CF72CE85F70C190767C79A.tomcat2
          - text: 򬐖
```

# Test source

```ts
  1  | const base=require('@playwright/test');
  2  | //const { use } = require('react');
  3  | const LoginPayload={userEmail: "ravimohan@k.com", userPassword: "Premkumar@33"};
  4  | //const test = require('node:test');
  5  | 
  6  | exports.loginFix1=base.test.extend({
  7  |     loginRelQA:async({page},use)=>{
  8  |         await page.goto("https://release.chainsys.com/appplatform/core/userlogin/launch");
  9  |     await page.locator('input#userName').fill('premkumar.s@releaseqa.com');
  10 |      await page.locator('input#password').fill('Welcome#1');
  11 |      await page.locator('xpath=(//*[@title="Login"])[1]').click();
> 12 |      await waitForEvent('dialoge');
     |      ^ ReferenceError: waitForEvent is not defined
  13 |      page.on('dialog',async dialog=>{
  14 |         await dialog.accept();
  15 |      })
  16 |      await use(page);
  17 | 
  18 |     }
  19 | });
  20 | exports.fixlogin=base.test.extend({
  21 |     login: async({page},use)=>{
  22 |           page.on('response',response=>{
  23 |     
  24 | 
  25 |     if(response.url().includes("/auth/login")){
  26 |         console.log(response.status());
  27 |     }
  28 | })
  29 |         await page.goto("https://rahulshettyacademy.com/client");
  30 |         await page.locator("#userEmail").fill("ravimohan@k.com");
  31 |         await page.locator("#userPassword").fill("Premkumar@33");
  32 |         await page.getByRole('button', { name: 'Login' }).click();
  33 |       
  34 |         await use(page);
  35 | 
  36 | 
  37 | 
  38 |     }
  39 | });
  40 | exports.apilogin=base.test.extend({
  41 |     api: async({page,request},use)=>{
  42 |        // const apiContext= await request.newContext();
  43 |         const logindetail=await request.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
  44 |             data:LoginPayload,
  45 |         }
  46 |         
  47 |         );
  48 |         const ljson=await logindetail.json();
  49 |         const token=ljson.token;
  50 | 
  51 |         await page.addInitScript(value=>{window.localStorage.setItem('token',value)},token)
  52 |         await page.goto("https://rahulshettyacademy.com/client");
  53 |         await use(page);
  54 |         
  55 | 
  56 |     }
  57 | })
  58 | exports.expect=base.expect;
```