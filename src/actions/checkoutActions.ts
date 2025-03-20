import { Page } from '@playwright/test';
import configVariables from '../config/configVariables';

export class CheckoutActions {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToCheckout() {
        await this.page.goto(configVariables.url + '/cart.html');
    }

    async clickCheckoutButton() {
        await this.page.locator('[data-test="checkout"]').click();
    }
}