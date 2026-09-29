const { expect } = require("@playwright/test");


class placeorder{

    constructor(page){
        this.page=page;
        this.usernamecheckout=page.locator('.user__name input');
        this.placeoderB=page.locator('.action__submit');

    }

    async orderPlaced(email){
        const orderdUser=await this.usernamecheckout.first().inputValue();
        await expect(orderdUser).toEqual(email);
        await this.usernamecheckout.last().pressSequentially('India');
        await this.page.locator('.form-group button').nth(1).click();
        await this.placeoderB.click();
        //await this.page.pause();
        await expect(this.page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
        const orderId=await this.page.locator('label.ng-star-inserted').textContent();
        console.log(orderId);
        const cleanOrderId = orderId.replace(/\|/g, "").trim();
         // console.log(cleanOrderId);
          return cleanOrderId;
        
    
    //await this.page.pause();
        

    }
}
module.exports={placeorder};