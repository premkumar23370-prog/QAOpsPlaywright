const {test, expect}= require('@playwright/test');

test('speciallocator',async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
     await page.goto("https://rahulshettyacademy.com/angularpractice/");
     await page.getByLabel('Check me out if you Love IceCreams!').click();
     await page.getByLabel('Gender').selectOption('Female')
     await page.getByPlaceholder('Password').fill("Premkumar");
     await page.getByRole('Button',{name: 'Submit'}).click();
     await page.getByRole('Link',{name: 'Shop'}).click();
     await page.locator('app-card').filter({hasText: 'Nokia Edge'}).getByRole('button').click();

});
test("assignmentspeciallocator",async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    const email="premkumar814@gmail.com";
    const password="Premkumar@33";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill(password);
    await page.getByRole('Button',{name:"login"}).click();
    await page.locator(".card-body").first().waitFor();
    await page.locator(".card-body").filter({hasText: "iphone 13 pro"}).getByRole('button',{name:"Add To Cart"}).click();
    await page.getByRole("listitem").getByRole('button',{name: "Cart"}).click();
    await page.getByText('IPHONE 13 PRO').waitFor();
    //await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    await expect(page.getByText('IPHONE 13 PRO')).toBeVisible();
    await page.getByRole("button",{name:'Checkout'}).click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.getByRole('button',{name: 'India'}).nth(1).click();
    //await page.getByRole('link',{name: 'PLACE ORDER'}).click();
    

    


    
   


  //  await page.pause();
    
});