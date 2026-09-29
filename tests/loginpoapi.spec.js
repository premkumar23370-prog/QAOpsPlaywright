const {test,expect,request}=require('@playwright/test');
const {Objectmanager}= require('../api object mode/Objectmanage');
const { json } = require('node:stream/consumers');
const testdata=JSON.parse(JSON.stringify(require('../Utils/logindata.json')));
for(const user of testdata){
test(`loginpo ${user.username}`,async({page,request})=>{
    const POM=new Objectmanager(page);
    const loginAccess=POM.LoginPO();
    
    await page.waitForURL();
    const token=await loginAccess.login(request,user.username,user.password);
  
    await loginAccess.setToken(token);
   // await page.waitForResponse();
   await loginAccess.Pagegoto(page);
   const OrderAccess=POM.OrderPO();
   await OrderAccess.orderplacing(token);
   await page.getByRole('button', { name: 'ORDERS' }).waitFor();
    await page.getByRole('button', { name: 'ORDERS' }).click();

   await page.pause();





    




})

}