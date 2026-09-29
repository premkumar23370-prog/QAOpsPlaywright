# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpoapi.spec.js >> loginpo premkumar814@gmail.com
- Location: tests\loginpoapi.spec.js:6:1

# Error details

```
ReferenceError: ordermock is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: ZARA COAT 3
      - generic [ref=e34]: $ 11500
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4542 9931 9292 2293
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01" [selected]
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16" [selected]
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30"
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: premkumar814@gmail.com
            - textbox [ref=e81]: premkumar814@gmail.com
            - textbox "Select Country" [ref=e84]: India
            - generic [ref=e86] [cursor=pointer]: Place Order
```

# Test source

```ts
  1  | let orderPayload;
  2  | export class Orderdetailsapi{
  3  |   
  4  |     constructor(page){
  5  |         this.page=page;
  6  |         this.addcart=page.locator('.card-body').filter({ hasText: "ZARA COAT 3" }).getByRole('button', { name: "Add To Cart" });
  7  |         this.cart=page.getByRole("listitem").getByRole('button', { name: 'Cart ' });
  8  |         this.checkout=page.getByRole('button', { name: 'Checkout' });
  9  |         this.countrytab=page.getByPlaceholder("Select Country");
  10 |         this.india=page.getByRole('button', { name: 'India' }).nth(1);
  11 |         this.orderplacerd=page.locator('a').filter({ hasText: 'PLACE ORDER' })
  12 | 
  13 |     }
  14 | async orderplacing(token){
  15 |     // await page.goto('https://rahulshettyacademy.com/client/');
  16 |     await this.addcart.click();
  17 |     await this.cart.click();
  18 |     await this.checkout.waitFor();
  19 |     await this.checkout.click();
  20 |     await this.countrytab.pressSequentially("ind");
  21 |     await this.india.click();
> 22 |     await ordermock();
     |     ^ ReferenceError: ordermock is not defined
  23 |     await orderapi(token,orderPayload);
  24 | 
  25 | }
  26 | async ordermock(){
  27 |     await this.page.route('https://rahulshettyacademy.com/api/ecom/order/create-order',async route=>{
  28 |         orderPayload=route.request().postDataJSON();
  29 |         await route.fulfill({
  30 |             status:200,
  31 |             contentType: "application/json",
  32 |             body: JSON.stringify({
  33 |                 message:"Order Placed Successfully"
  34 |             })
  35 |         });
  36 | 
  37 |     });
  38 |     return orderPayload;
  39 |       
  40 |       
  41 |     //await this.page.waitForRequest('https://rahulshettyacademy.com/api/ecom/order/create-order');
  42 | 
  43 | 
  44 | }
  45 | async orderapi(token1,orderPayload1){
  46 |     await this.orderplacerd.click();
  47 |    const orderRes= await this.page.request.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
  48 |         {
  49 |             data: orderPayload,
  50 |             headers:
  51 |             {
  52 |                 'authorization': token1
  53 |             }
  54 |         }
  55 |     )
  56 |     const orderResjson=await orderRes.json();
  57 |     const orderId=await orderResjson.orders;
  58 |     return orderId
  59 | 
  60 | }
  61 | 
  62 | }
  63 | module.exports={Orderdetailsapi};
  64 | 
```