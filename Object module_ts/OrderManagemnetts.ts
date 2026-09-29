import{test,expect,Page,Locator} from "@playwright/test";
export class orderManagmentts{
    
    page:Page;
    email:Locator;
    row:Locator;
    constructor(page:any){
        this.page=page;
        this.email= page.locator(".details__user input");
        this.row = page.locator('tbody tr');



    }
    async PlaceOrder(email:String){
        console.log(email);
        const IPemail=await this.email.first().inputValue();
        await expect(IPemail).toEqual(email);
        await this.email.last().pressSequentially('India');
        await this.page.locator('.form-group button').last().click();
        await this.page.locator("//a[text()='Place Order ']").click();
        await expect(this.page.locator(".hero-primary")).toHaveText(' Thankyou for the order. ');
       const orderId=await this.page.locator('td label').last().textContent();
       const cleanOrderId=orderId?.replace(/\|/g,"").trim();
       console.log(cleanOrderId);
       return cleanOrderId;
      // await this.page.locator('td label').first().click
       


    }
    async OrderHistory(OrderIDMain:String){
        await this.page.locator('td label').first().click();
         const orderRow = this.row.filter({ hasText: OrderIDMain });

    await orderRow.getByRole('button', { name: 'View' }).click();

    }


}