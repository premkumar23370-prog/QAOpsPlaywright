import { Page, Locator } from '@playwright/test';

export class LoginPage {

    private readonly page: Page;
    private readonly usernameField: Locator;
    private readonly passwordField: Locator;
    private readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByRole('textbox', { name: 'Username' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.signInButton = page.getByText('Sign in', { exact: true });
    }

    async gotoLoginPage() {
        await this.page.goto('https://release.chainsys.com/appplatform/core/userlogin/launch');
    }

    async login(username: string, password: string) {

        await this.usernameField.fill(username);
        await this.usernameField.press('Tab');
        await this.passwordField.fill(password);

       this.page.on('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.accept().catch(() => {});
        });

        await this.signInButton.click();
    }

}