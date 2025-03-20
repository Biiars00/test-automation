import { Page } from '@playwright/test';
import configVariables from '../../src/config/configVariables'

export class LoginActions {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToAccessUrl() {
        await this.page.goto(configVariables.url);
    }

    async validateUserName() {
        await this.page.locator('[data-test="username"]').fill(configVariables.user);
    }

    async validatePassword() {
        await this.page.locator('[data-test="password"]').fill(configVariables.password);
    }

    async invalidUserName(user='test123') {
        await this.page.locator('[data-test="username"]').fill(user);
    }

    async invalidPassword(password='test123') {
        await this.page.locator('[data-test="password"]').fill(password);
    }

    async emptyLabelUsername(user='') {
        await this.page.locator('[data-test="username"]').fill(user);
    }

    async emptyLabelPassword(password='') {
        await this.page.locator('[data-test="password"]').fill(password);
    }

    async loginButton() {
        await this.page.locator('[data-test="login-button"]').click();
    }
}