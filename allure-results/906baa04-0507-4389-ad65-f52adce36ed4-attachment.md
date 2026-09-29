# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: getresreq.spec.js >> getresreq
- Location: tests\getresreq.spec.js:11:1

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
> 5  | page.on('request', request => {
     |  ^ ReferenceError: page is not defined
  6  |     console.log("Method:", request.method());
  7  |     console.log("URL:", request.url());
  8  | })
  9  | });
  10 | 
  11 | fixlogin('getresreq',async({login})=>{
  12 | 
  13 |     
  14 | 
  15 |     
  16 | });
```