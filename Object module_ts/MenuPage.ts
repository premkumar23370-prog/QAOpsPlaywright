import { Locator, Page } from '@playwright/test';

export class MenuPage {


    private readonly page: Page;
    private readonly switchMenu: Locator;
    private readonly applicationMenu: Locator;
    private readonly searchBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.switchMenu = page.getByRole('img', { name: 'menu' });
        this.applicationMenu = page.locator('#cs_application').getByText('Application');
        this.searchBox = page.getByRole('textbox', { name: 'Search here' });
    }

    async openMenu() {
        //await this.page.goto('https://release.chainsys.com/appconnect/core/cloudlogin/logoutinvalidsessions');
        /*await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(2000);
        await this.switchMenu.click();
        await this.applicationMenu.click(); */
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(2000);
        await this.switchMenu.waitFor({ state: 'visible' });
        await this.switchMenu.click();
        await this.applicationMenu.waitFor({ state: 'visible' });
        await this.applicationMenu.click();
    }

    async searchApplication(appName: string) {
        await this.searchBox.click();
        await this.searchBox.fill(appName);
        await this.searchBox.press('Enter');
        await this.page.getByText(appName).click();
        /*await Promise.all([
            this.page.waitForResponse(res => res.url().includes('commonFetch')),
            this.page.waitForResponse(res => res.url().includes('commonFetch'))
        ]);*/
       const appicon = this.page.locator('img.homepage-applogo.ng-star-inserted')
       await appicon.waitFor({ 'state': 'visible' });
    }

}