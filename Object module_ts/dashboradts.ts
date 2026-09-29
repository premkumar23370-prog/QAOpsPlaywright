import{test, expect, Page,Locator} from '@playwright/test';
export class dashboardts{
page:Page;
products:Locator;
productText:Locator;
cart:Locator;
checkout:Locator;
constructor(page:Page){
    this.page=page;
    this.products=page.locator(".card-body");
    this.productText=page.locator(".card-body b");
    this.cart=page.locator('[routerlink*="/dashboard/cart"]');
        this.checkout=page.getByRole('button',{name: 'Checkout'});

}
async addCart(){
    const title=await this.productText.allTextContents();
    //console.log(title);
    await this.products.filter({hasText:"iphone 13 pro"}).getByRole('button',{name:"Add To Cart"}).click();

  
    
}
async NaviCart(){
    await this.cart.click();
    await this.checkout.click();
    //await this.page.waitForURL('**/order');
}
}