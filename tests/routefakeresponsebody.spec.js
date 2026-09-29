
const { test, expect, request } = require('@playwright/test');
const { APIUtils2, apiorder } = require('../Utils/APIUtils2');
//const {apiorder}=require('./Utils/');
const { appendFile } = require('node:fs');
const loginPayload = { userEmail: "premkumar814@gmail.com", userPassword: "Premkumar@33" };
const fakepayload = { data: [], message: "No Orders" };
let orderPayload;
let apiCotext
let response;
let token;
let route;
//let APIUtils3;


test.beforeAll(async () => {
    apiCotext = await request.newContext();
    const APIUtils3 = new APIUtils2(apiCotext, loginPayload);
    token = await APIUtils3.Login();

});
test('routefakeresponse', async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token)

    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('.card-body').filter({ hasText: "ZARA COAT 3" }).getByRole('button', { name: "Add To Cart" }).click();
    await page.getByRole("listitem").getByRole('button', { name: 'Cart ' }).click();
    await page.getByRole('button', { name: 'Checkout' }).waitFor();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.getByRole('button', { name: 'India' }).nth(1).click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/create-order", async route => {
        orderPayload = route.request().postDataJSON();

        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({
                message: "Order Placed Successfully"
            })
        });
      
    });

    const requestPromise = page.waitForRequest(
        "https://rahulshettyacademy.com/api/ecom/order/create-order"
    );
    await page.locator('a').filter({ hasText: 'PLACE ORDER' }).click();
    console.log('Token2' + token);


    console.log('op2 ', orderPayload);
    const apiorder1 = new apiorder(token, apiCotext);
    response = await apiorder1.Order(orderPayload);
    console.log('response', response);
   
    await page.getByRole('button', { name: 'ORDERS' }).waitFor();
    await page.getByRole('button', { name: 'ORDERS' }).click();

    //await page.pause();
    await page.locator('tbody').waitFor();
})
  //orderPayload=route.request().postDataJSON();

        // const orderPayload=JSON.stringify(request.postDataJSON());
        //console.log(orderres);

        //console.log('op '+ orderPayload);
        //await route.abort();

         /* await page.route('https://rahulshettyacademy.com/api/ecom/order/create-order',async route=>{
        const request2=await page.route.request.fetch(route.request());
        let body= JSON.stringify(fakepayload);
        route.fulfill(
            {
                response,
                body,
            }
        );

     });


    //await page.pause();*/

    
    //const request = await requestPromise;

    //orderPayload = request.postDataJSON();
        //console.log(await page.locator(".mt-4").textContent());