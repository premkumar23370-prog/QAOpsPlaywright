const {test,request,expect}=require('@playwright/test');
const Exceljs=require('exceljs');
const { promises } = require('node:dns');
const loginPayload = { userEmail: "premkumar814@gmail.com", userPassword: "Premkumar@33" };
const FakeData={data:[],message:"No Orders"};

test('Practice',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.getByPlaceholder("Enter Name").fill("Premkumar");
await Promise.all([

page.waitForResponse(Response=>
Response.url().includes('playwrightpractice.html')&&
Response.status()==200
),
await page.getByRole('link',{name:'PlaywrightPractice'}).click()
]);
await expect(page.locator("div.card p strong")).toContainText('important');
const str=await page.locator("div.card p").nth(0).textContent();
console.log(str);

const arr1=await str.split("contains");
console.log(arr1);
const arr2=arr1[1].split(" ")[2];
console.log(arr2);

page.on('dialog',async dialog=>{
    console.log(await dialog.message());
    await dialog.accept();
});
await page.locator('#alertBtn').first().click();



});

test('api',async({request,page})=>{
   // const ApiContext=await request.newContext();
    const res=await request.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
        data : loginPayload
    })
    const resjson=await res.json();
    const token=resjson.token;
    

    await page.addInitScript(value=>{
         window.localStorage.setItem('token',value)
    },token);

    await page.goto('https://rahulshettyacademy.com/client/');
    await Promise.all([
     
     page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*',async(route)=>{
        route.fulfill({
            status:200,
            contentType:'application/json',
            body: JSON.stringify(FakeData)

    })
    }),
    page.getByRole('button',{name:'  ORDERS'}).click(),
]);
    
   
    await expect(page.locator('.ng-star-inserted').nth(1)).toHaveText(' You have No Orders to show at this time. Please Visit Back Us');

})

test('upload download case',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html')
    const download= page.waitForEvent('download');
    
         await page.getByRole('button',{name:'download'}).click();
         const d1=await download;
         await d1.saveAs('C:/Users/ASUS/Downloads/download.xlsx');
         const workbook=new Exceljs.Workbook();
         await workbook.xlsx.readFile('C:/Users/ASUS/Downloads/download.xlsx');
         const worksheet=workbook.getWorksheet('Sheet1');
         worksheet.eachRow((row,rowNumber)=>{
            row.eachCell((cell,colNumber)=>{
                if(cell.value==='Mango'){
                   //cell.value='Dragon';
                   worksheet.getCell(rowNumber,colNumber+2).value=10000;
                    //await workbook.xlsx.writeFile('C:/Users/ASUS/Downloads/download.xlsx');
                }
            })

         })
         await workbook.xlsx.writeFile('C:/Users/ASUS/Downloads/download.xlsx');
         await page.locator('#fileinput').setInputFiles('C:/Users/ASUS/Downloads/download.xlsx');
         await page.pause();
         




        
       

        
    

});