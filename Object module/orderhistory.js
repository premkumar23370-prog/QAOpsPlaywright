const { count } = require("node:console");

class orderhistory{
    constructor (page){
        this.page=page;
        this.allOrderId=page.locator('table.ng-star-inserted tbody th');
        this.row=page.locator('table.ng-star-inserted tbody tr');

    }
    async orderhistorycheck(cleanOrderId){
        const orderidcount=await this.allOrderId.count();
        for(let i=0;i<orderidcount; ++i){
            if(await this.allOrderId.nth(i).textContent()==cleanOrderId){
                console.log(await this.allOrderId.nth(i).textContent())
                await this.row.nth(i).getByRole('button').nth(0).click();
                break;


            }
        }
        

        

    }


}

module.exports={orderhistory};