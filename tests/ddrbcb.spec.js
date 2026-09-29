const {test, expect}= require('@playwright/test');

test('ddrbcb',async({browser})=>
{

    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username= "premkumar";
    const pass="Welcome#1"
    await page.locator("#username").fill(username);
    await page.locator("#password").fill(pass);
    const rb=await page.locator("#usertype").last();
    await rb.click();
    await page.locator("#okayBtn").click();
    console.log(await rb.isChecked());
  //  await page.pause();

   await expect(rb).toBeChecked();
   const dropdown=await page.locator("select.form-control");
   await dropdown.selectOption("consult");
   const cb= await page.locator("#terms");
   await cb.click();
     const cbveri=await cb.isChecked();
     console.log(cbveri);
     //await cb.uncheck();
    // await page.pause();
    if(cbveri==true){
        await dropdown.selectOption("teach");
        await cb.uncheck();
       // console.log(cb);
        expect(await cb.isChecked()).toBeFalsy();
        console.log("Completed");
     }
     else{
        console.log("fails");
     }
     
    
});