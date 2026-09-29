const {test,expect}= require('@playwright/test');
const { POmanager } = require('../Object module/POmanager');
const { json } = require('node:stream/consumers');
const {customtest}= require('../Utils/testdata')
const LoginData= JSON.parse(JSON.stringify(require('../Utils/logindata.json')))
/*const { LoginPage } = require('./Object module/LoginPage');
const { dashboardpage } = require('./Object module/dasboardpage');
const { placeorder } = require('./Object module/placeorder');
const { orderhistory } = require('./Object module/orderhistory');*/
//cons
const email='premkumar814@gmail.com';
const password='Premkumar@33'
const productName='iphone 13 pro'
test.describe('@smoke Total enjoyment',()=>{
for(const user of LoginData)
  {
test(`Login using ${user.username}`,async ({page})=>{
    //test('Login using ',async ({page})=>{
    const Pom=new POmanager(page);
    const Loginpage=Pom.getLoginPage();
   
    await Loginpage.goTo();
    console.log(user.username,user.password);
    await Loginpage.validLogin(user.username,user.password);

    const dashboard=Pom.getDash();
    await dashboard.searchProduct(user.product);
    await dashboard.Navicart();
    
    const placeorderc=Pom.getPlaceOrder();
    const cleanOrderId=await placeorderc.orderPlaced(user.username);
    console.log(cleanOrderId);

    await page.locator('.em-spacer-1 label').first().click();
    await page.locator('.container table').waitFor();
    const orderHistory =Pom.getOrderHistory();
    await orderHistory.orderhistorycheck(cleanOrderId);






});

}
customtest('login via fixture', async({page,testDataOrder})=>{
    const Pom=new POmanager(page);
    const Loginpage=Pom.getLoginPage();
   
    await Loginpage.goTo();
    await Loginpage.validLogin(testDataOrder.username,testDataOrder.password);

    const dashboard=Pom.getDash();
    await dashboard.searchProduct(testDataOrder.product);
    await dashboard.Navicart();
    
    const placeorderc=Pom.getPlaceOrder();
    const cleanOrderId=await placeorderc.orderPlaced(testDataOrder.username);
    console.log(cleanOrderId);

    await page.locator('.em-spacer-1 label').first().click();
    await page.locator('.container table').waitFor();
    const orderHistory =Pom.getOrderHistory();
    await orderHistory.orderhistorycheck(cleanOrderId);



});
});