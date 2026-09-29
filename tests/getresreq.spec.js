const{test,request,expect}=require('@playwright/test');

const {fixlogin}=require('../Utils/fixture');
test.beforeAll(async()=>{


});

fixlogin('getresreq',async({login,page})=>{

   page.on('request', request => {
    console.log("Method:", request.method());
    console.log("URL:", request.url());
}) 

    
});