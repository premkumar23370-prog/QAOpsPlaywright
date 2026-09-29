class dashboardpage{

    constructor(page){
        this.product=page.locator('.card-body');
        this.productText= page.locator('.card-body b');
        this.page=page;
        this.cart=page.locator('[routerlink*="/dashboard/cart"]');
        this.checkout=page.getByRole('button',{name: 'Checkout'});

    }
    async searchProduct(productName){
       
       const title=await this.productText.allTextContents();
       const count=await this.product.count();

        for(let i=0;i<count;++i){
            if(await this.productText.nth(i).textContent()==productName){
                
                await this.product.nth(i).locator('text= Add To Cart').click();
               
            }
        }

    }
    async Navicart(){
        await this.cart.click();
        await this.checkout.click();


    }


}
module.exports={dashboardpage};