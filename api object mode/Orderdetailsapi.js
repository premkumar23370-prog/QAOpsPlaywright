let orderPayload;
export class Orderdetailsapi{
  
    constructor(page){
        this.page=page;
        this.addcart=page.locator('.card-body').filter({ hasText: "ZARA COAT 3" }).getByRole('button', { name: "Add To Cart" });
        this.cart=page.getByRole("listitem").getByRole('button', { name: 'Cart ' });
        this.checkout=page.getByRole('button', { name: 'Checkout' });
        this.countrytab=page.getByPlaceholder("Select Country");
        this.india=page.getByRole('button', { name: 'India' }).nth(1);
        this.orderplacerd=page.locator('a').filter({ hasText: 'PLACE ORDER' })

    }
async orderplacing(token){
    // await page.goto('https://rahulshettyacademy.com/client/');
    await this.addcart.click();
    await this.cart.click();
    await this.checkout.waitFor();
    await this.checkout.click();
    await this.countrytab.pressSequentially("ind");
    await this.india.click();
    const mockpromise= this.ordermock();
     await this.orderplacerd.click();
     const mockpromise2=await mockpromise;
    await this.orderapi(token,orderPayload);

}
async ordermock(){
    await this.page.route('https://rahulshettyacademy.com/api/ecom/order/create-order',async route=>{
        orderPayload=route.request().postDataJSON();
        await route.fulfill({
            status:200,
            contentType: "application/json",
            body: JSON.stringify({
                message:"Order Placed Successfully"
            })
        });

    });
    return orderPayload;
      
      
    //await this.page.waitForRequest('https://rahulshettyacademy.com/api/ecom/order/create-order');


}
async orderapi(token1,orderPayload1){
   
   const orderRes= await this.page.request.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
        {
            data: orderPayload,
            headers:
            {
                'authorization': token1
            }
        }
    )
    const orderResjson=await orderRes.json();
    
    const orderId=await orderResjson.orders;
    console.log(orderId);
    return orderId

}

}
module.exports={Orderdetailsapi};
