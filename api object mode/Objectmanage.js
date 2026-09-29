const {LoginPage}=require('../api object mode/LoginPage');
const {Orderdetailsapi}=require('../api object mode/Orderdetailsapi');

export class Objectmanager{
    constructor(page){
        this.page=page;
        this.LoginPage=new LoginPage(this.page);
        this.ODA=new Orderdetailsapi(this.page);
    }
     LoginPO(){
        return this.LoginPage;
    }
    OrderPO(){
        return this.ODA;
    }


}
module.exports={Objectmanager}