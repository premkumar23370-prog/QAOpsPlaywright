const {test, expect, request}= require('@playwright/test');
const {APIUtils}=require('../Utils/APIUtils');
const loginPayload = {userEmail: "premkumar814@gmail.com", userPassword: "Premkumar@33"};
const orderPayload={orders: [{country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3"}]}
let response;
test.beforeAll(async()=>{

    const apiCotext= await request.newContext();
    const APIUtils2=new APIUtils(apiCotext,loginPayload);
    response=await APIUtils2.Order(orderPayload);

//http://localhost:8080/job/PlaywrightFramework/8/changes
})

test("assignmentspeciallocator",async({page})=>
{
   
    await page.addInitScript(value=>{
        window.localStorage.setItem('token',value);

    }, response.token);
    const email="premkumar814@gmail.com";
    const password="Premkumar@33";
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator('button[routerlink="/dashboard/myorders"]').click();
    await page.locator("tbody").waitFor();
    const rows=await page.locator("tbody tr");
    console.log(response.orderId);
    for(let i=0;i<await rows.count(); i++){
        const rowOrderId=await rows.nth(i).locator('th').textContent();
    
        if(response.orderId.includes(rowOrderId)){
            console.log("rowid"+rowOrderId);
            await rows.nth(i).locator('button').first().click();
            await page.pause();
            break;
            

        }
    }
    
});
// https://rahulshettyacademy.com/client/
   //const APIUtils=new APIUtils(apiCotext);
 /*await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill(password);
    await page.getByRole('Button',{name:"login"}).click();*/
    /*await page.locator(".card-body").first().waitFor();
    await page.locator(".card-body").filter({hasText: "iphone 13 pro"}).getByRole('button',{name:"Add To Cart"}).click();
    await page.getByRole("listitem").getByRole('button',{name: "Cart"}).click();
    await page.getByText('IPHONE 13 PRO').waitFor();
    //await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    await expect(page.getByText('IPHONE 13 PRO')).toBeVisible();
    await page.getByRole("button",{name:'Checkout'}).click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.getByRole('button',{name: 'India'}).nth(1).click();
    await page.getByRole('button',{name: 'PLACE ORDER'}).click();*/
       /* const loginResponse= await apiCotext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
       { data :loginPayload
})
expect(loginResponse.ok()).toBeTruthy();
const loginResponsejson=await loginResponse.json();
 token=loginResponsejson.token;*/

/* const orderResponse=await apiCotext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
    {
        data: orderPayload,
        headers:
        {
            'authorization': token,
            //'content-type': 'application/json',

        }
    }
   
 )
  const orderResponsejson=await orderResponse.json();
  console.log(orderResponsejson);
   orderId=orderResponsejson.orders[0];
   console.log(orderId);*/