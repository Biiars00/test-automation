import { Page } from '@playwright/test';
import configVariables from '../config/configVariables';

export class CartActions {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToCart() {
        await this.page.goto(configVariables.url + '/cart.html');
    }

    async clickButtonShoppingCart() {
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }
}