const {test, expect}= require('@playwright/test');
let webContent
test.beforeAll(async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.getByPlaceholder('email@example.com').fill('premkumar814@gmail.com');
    await page.locator('#userPassword').fill('Premkumar@33')
    await page.getByRole('button',{name:'login'}).click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path:"state5.json"});
    webContent=await browser.newContext({storageState:'state5.json'});

    


})
test('storagestate',async()=>{

    const page= await webContent.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.getByRole('button',{name:'ORDERS'}).waitFor();
    await page.getByRole('button',{name:'ORDERS'}).click();
    // await page.pause();

   

});
test('storagestate2',async()=>{

    const page= await webContent.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.getByRole("listitem").getByRole('button',{name:'Cart '}).waitFor();
    await page.getByRole("listitem").getByRole('button',{name:'Cart '}).click();
    await page.pause();

   

});