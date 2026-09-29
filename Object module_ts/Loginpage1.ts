import{test, expect, Page,Locator} from '@playwright/test';
export class LoginPage1{
    page:Page;
    userName:Locator;
    password:Locator;
    SignIn:Locator
    constructor(page:Page){
        this.page=page
        this.userName=page.locator("#userEmail");
        this.password=page.locator("#userPassword")
        this.SignIn=page.locator("[value='Login']");

    }
async goTo(){
    await this.page.goto("https://rahulshettyacademy.com/client/");
}
async Login(){
    const email="premkumar814@gmail.com";
    await this.userName.fill('premkumar814@gmail.com');
    await this.password.fill('Premkumar@33');
    await this.SignIn.click();
    await this.page.waitForURL('**/dash');
    return email;
}

}