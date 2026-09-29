
class logout{
    constructor(page){
        this.page=page;
        this.infoIcon=page.locator('#appuserinfo');
        this.logout=page.locator('#applogout');
        this.okBtn=page.locator('#alert_action_Ok');


    }

    async logout(){
        await this.infoIcon.click();
        await this.logout.click();
        await this.okBtn.click();
    }

}
module.exports={logout};