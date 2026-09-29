const base=require('@playwright/test');
//const { use } = require('react');
const LoginPayload={userEmail: "ravimohan@k.com", userPassword: "Premkumar@33"};
//const test = require('node:test');

exports.loginFix1=base.test.extend({
    loginRelQA:async({page},use)=>{
        await page.goto("https://release.chainsys.com/appplatform/core/userlogin/launch");
    await page.locator('input#userName').fill('premkumar.s@releaseqa.com');
     await page.locator('input#password').fill('Welcome#1');
     await page.locator('xpath=(//*[@title="Login"])[1]').click();
     //await waitForEvent('dialoge');
     page.on('dialog',async dialog=>{
        await dialog.accept();
     })
     await use(page);

    }
});
exports.fixlogin=base.test.extend({
    login: async({page},use)=>{
          page.on('response',response=>{
    

    if(response.url().includes("/auth/login")){
        console.log(response.status());
    }
})
        await page.goto("https://rahulshettyacademy.com/client");
        await page.locator("#userEmail").fill("ravimohan@k.com");
        await page.locator("#userPassword").fill("Premkumar@33");
        await page.getByRole('button', { name: 'Login' }).click();
      
        await use(page);



    }
});
exports.apilogin=base.test.extend({
    api: async({page,request},use)=>{
       // const apiContext= await request.newContext();
        const logindetail=await request.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
            data:LoginPayload,
        }
        
        );
        const ljson=await logindetail.json();
        const token=ljson.token;

        await page.addInitScript(value=>{window.localStorage.setItem('token',value)},token)
        await page.goto("https://rahulshettyacademy.com/client");
        await use(page);
        

    }
})
exports.expect=base.expect;