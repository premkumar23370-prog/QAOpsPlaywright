import { Page, Locator } from '@playwright/test';

export class LogoutPage {

  readonly page: Page;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;
  readonly okButton: Locator;

  constructor(page: Page) {

    this.page = page;

    this.profileButton = page.locator('#appuserinfo');

    this.logoutButton = page.locator('#applogout');

    this.okButton = page.locator('#alert_action_Ok');
  }

  async logout(): Promise<void> {

    await this.profileButton.click();

    await this.logoutButton.click();

    await this.okButton.click();
  }
}