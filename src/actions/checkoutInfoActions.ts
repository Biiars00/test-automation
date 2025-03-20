import { Page } from '@playwright/test';
import configVariables from '../config/configVariables';

export class CheckoutInfoActions {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToCheckoutInfo() {
        await this.page.goto(configVariables.url + '/checkout-step-one.html');
    }

    async validateCheckoutFirstName(firstName: 'standard') {
        await this.page.locator('[data-test="firstName"]').fill(firstName)
    }

    async validateCheckoutLastName(lastName: 'user') {
        await this.page.locator('[data-test="lastName"]').fill(lastName)
    }

    async validateCheckoutPostalCode(postalCode: '00000-000') {
        await this.page.locator('[data-test="postalCode"]').fill(postalCode)
    }

    async invalidCheckoutFirstName(firstName: '') {
        await this.page.locator('[data-test="firstName"]').fill(firstName)
    }

    async invalidCheckoutLastName(lastName: '') {
        await this.page.locator('[data-test="lastName"]').fill(lastName)
    }

    async invalidCheckoutPostalCode(postalCode: '') {
        await this.page.locator('[data-test="postalCode"]').fill(postalCode)
    }

    async clickButtonToContinueCheckout() {
        await this.page.locator('[data-test="continue"]').click();
    }
}