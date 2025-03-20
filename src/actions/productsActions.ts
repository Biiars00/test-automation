import { Page } from '@playwright/test';
import configVariables from "../config/configVariables";

export class ProductsActions {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToInventory() {
        await this.page.goto(configVariables.url + '/inventory.html');
    }

    async clickOnAddProductToCart(productName: string) {
        await this.page.locator(`[data-test="${productName}"]`).click();
    }

    async clickViewProductDetails(productId: number) {
        await this.page.locator(`[data-test="item-${productId}-title-link"]`).click();
    }

    async clickOnRemoveProductToCart(productName: string) {
        await this.page.locator(`[data-test="${productName}"]`).click();
    }

    async selectSortOption(option: string) {
        await this.page.locator('[data-test="product-sort-container"]').selectOption({ value: option })
    }

    async getProductNames() {
        const nameElements = await this.page.locator('.inventory_item_name').allTextContents();
        return nameElements.map(name => name.trim());
    }

    async getProductPrices() {
        const priceElements = await this.page.locator('.inventory_item_price').allTextContents();
        return priceElements.map(price => parseFloat(price.replace('$', '').trim()));
    }
}

