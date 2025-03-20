import { Page } from '@playwright/test';
import configVariables from '../config/configVariables';

export class LogoutActions {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLogout() {
        await this.page.goto(configVariables.url + '/inventory.html');
    }

    async openMenuBurguer() {
        await this.page.locator('#react-burger-menu-btn').click();
    }

    async clickLogout() {
        await this.page.locator('[data-test="logout-sidebar-link"]').click();
    }
}