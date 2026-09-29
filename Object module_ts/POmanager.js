const { LoginPage } = require('./LoginPage');
const { dashboardpage } = require('./dasboardpage');
const { placeorder } = require('./placeorder');
const { orderhistory } = require('./orderhistory');
class POmanager{

    constructor(page){
        this.page=page;
        this.LoginPage=new LoginPage(this.page);
        this.dashboardpage=new dashboardpage(this.page);
        this.placeorder=new placeorder(this.page);
        this.orderhistory=new orderhistory(this.page);


    }

    getLoginPage(){
        return this.LoginPage;
    }
    getDash(){
        return this.dashboardpage;
    }
    getPlaceOrder(){
        return this.placeorder;
    }
    getOrderHistory(){
        return this.orderhistory;
    }
}
module.exports={POmanager};