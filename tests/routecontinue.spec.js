const {test,expect}= require('@playwright/test')
test('@smoke routecontinue',async({page})=>{
     
    const email="premkumar814@gmail.com";
    const password="Premkumar@33";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill(password);
    await page.getByRole('Button',{name:"login"}).click();
    await page.locator(".card-body").first().waitFor();
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',
        route=>route.continue({url :"https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a3cd7f6378febeacdcc478d"})
    )
    await page.getByRole('button', { name: 'ORDERS' }).waitFor();
    await page.getByRole('button', { name: 'ORDERS' }).click();
    await page.locator('button:has-text("View")').first().click();
    //await page.pause();
    await expect(page.locator('.blink_me')).toHaveText('You are not authorize to view this order');
    

});