 class Designer{
constructor(page,Appname){
    this.page=page;
    this.Appname=Appname;
    this.switchmenu= page.locator('#cs_switchmenu');
    this.application=page.locator('#cs_application');
    this.appsearch=page.locator('#cs_menusearch');
    this.app=page.locator(`//*[text()='${Appname}']`)
   
}
async designerAppSearch(){
    await this.switchmenu.click();
    await this.application.click();
    await this.appsearch.fill(this.Appname);
    await this.page.keyboard.press('Enter')
    await this.app.click();
    const appicon=this.page.locator('img.homepage-applogo.ng-star-inserted');
    await appicon.waitFor({state:'visible'});
}

}
module.exports={Designer};