# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpoapi.spec.js >> loginpo
- Location: tests\loginpoapi.spec.js:3:1

# Error details

```
TypeError: LoginPage is not a constructor
```

# Test source

```ts
  1  | const {LoginPage}=require('@playwright/test');
  2  | export class Objectmanager{
  3  |     constructor(page){
  4  |         this.page=page;
> 5  |         this.LoginPage=new LoginPage(this.page)
     |                        ^ TypeError: LoginPage is not a constructor
  6  |     }
  7  |     async LoginPO(){
  8  |         return this.LoginPage;
  9  |     }
  10 | 
  11 | 
  12 | }
  13 | module.exports={Objectmanager}
```