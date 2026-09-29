# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpoapi.spec.js >> loginpo
- Location: tests\loginpoapi.spec.js:3:1

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://rahulshettyacademy.com/client/", waiting until "load"

```

# Test source

```ts
  1  | 
  2  | 
  3  | export class LoginPage {
  4  |     constructor(page){
  5  |         this.page=page;
  6  | 
  7  |     }
  8  | 
  9  |     async Pagegoto(){
> 10 |         await this.page.goto('https://rahulshettyacademy.com/client/');
     |                         ^ Error: page.goto: Test ended.
  11 | 
  12 | 
  13 |     }
  14 |     async login(){
  15 | 
  16 |     }
  17 | 
  18 |     
  19 | }
  20 | module.exports={LoginPage};
```