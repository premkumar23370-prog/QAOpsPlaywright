class APIUtils{
    //let reponse{};
    constructor(apiCotext,loginPayload){
        this.apiCotext=apiCotext;
        this.loginPayload=loginPayload;
    }
    
    async Login(){
          const loginResponse= await this.apiCotext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
               { data :this.loginPayload
        })
       // expect(loginResponse.ok()).toBeTruthy();
        const loginResponsejson=await loginResponse.json();
         const token=loginResponsejson.token;
         console.log('token '+ token);
         return token;
    }
    async Order(orderPayload){
         let response={};
        response.token=await this.Login();
         const orderResponse=await this.apiCotext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
    {
        data: orderPayload,
        headers:
        {
            'authorization': response.token,
            //'content-type': 'application/json',
        }
    }  
 )
  const orderResponsejson=await orderResponse.json();
  console.log(orderResponsejson);
   const orderId=await orderResponsejson.orders;
   response.orderId=orderId;
   console.log('order id '+response.orderId);
   console.log('token '+response.token)
  console.log('response '+response);
   return response;
  // console.log(orderId);
    }
}
module.exports={APIUtils};