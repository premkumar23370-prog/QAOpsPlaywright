# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: getresreq.spec.js >> getresreq
- Location: tests\getresreq.spec.js:14:1

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | const{test,request,expect}=require('@playwright/test');
  2  | 
  3  | const {fixlogin}=require('../Utils/fixture');
  4  | test.beforeAll(async()=>{
> 5  | page.on('response',response=>{
     |  ^ ReferenceError: page is not defined
  6  | 
  7  |     if(response.url().includes("/api/login")){
  8  |         console.log(response.postDataJSON());
  9  |     }
  10 | })
  11 | 
  12 | });
  13 | 
  14 | fixlogin('getresreq',async({login,page})=>{
  15 | 
  16 |    page.on('request', request => {
  17 |     console.log("Method:", request.method());
  18 |     console.log("URL:", request.url());
  19 | }) 
  20 | 
  21 |     
  22 | });
```