const{test,expect, chromium}=require('@playwright/test');


test('make my trip',async({browser})=>{
    
    const context=await browser.newContext();
    const page=await context.newPage();
  await page.goto('https://www.makemytrip.com/');
  await page.locator('.commonModal__close').click();
  await page.getByText('Departure', { exact: true }).click();
  await page.locator('.todayPrice:visible').first().waitFor();
const prices = await page.locator('.todayPrice:visible').allTextContents();
const priceNumbers = prices.map(price =>
    Number(price.replace(/,/g, ''))
);
const count= priceNumbers.length;
console.log(prices);
console.log(count);
const cheapestPrice = Math.min(...priceNumbers);
console.log(cheapestPrice);
for(let i=0;i<count;i++){
    if(priceNumbers[i]===cheapestPrice){
        
        console.log("cheaper "+cheapestPrice);
        await page.locator('.todayPrice:visible').nth(i).click();
         break;
         

    }
}




   
  
     
  
   
    //const page=await makemytripContext.newPage();
   // await page.waitForURL('/flights/');
   // await page.locator('#departure').click();
    //await page.pause();



})