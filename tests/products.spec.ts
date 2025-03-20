import { test, expect } from '@playwright/test';
import { ProductsActions } from '../src/actions/productsActions';
import { LoginActions } from '../src/actions/loginActions';

const productId = 4;
const productName = 'add-to-cart-sauce-labs-backpack';

let productsActions: ProductsActions;
let loginActions: LoginActions;

test.beforeEach(async ({ page }) => {
    productsActions = new ProductsActions(page)
    loginActions = new LoginActions(page)

    await loginActions.navigateToAccessUrl();
    await loginActions.validateUserName();
    await loginActions.validatePassword();
    await loginActions.loginButton();
    await expect(page).toHaveURL('/inventory.html');
})

test.describe('Produtos', () => {
    test('Adiciona um produto no carrinho', async ({ page }) => {
        await productsActions.navigateToInventory();

        await productsActions.clickOnAddProductToCart(productName);
        await expect(page).toHaveURL('/inventory.html');
    })

    test('Exibe detalhes do produto', async({ page }) => {
        await productsActions.navigateToInventory();

        await productsActions.clickViewProductDetails(productId);
        await expect(page).toHaveURL(`/inventory-item.html?id=${productId}`)
    })

    test('Remove um produto do carrinho', async ({ page }) => {
        await productsActions.navigateToInventory();

        await productsActions.clickOnRemoveProductToCart(productName);
        await expect(page).toHaveURL('/inventory.html');
    })

    test('Ordenar produtos por nomes de A-Z', async ({ page }) => {
        await productsActions.navigateToInventory();

        await productsActions.selectSortOption('az');
        const productNames = await productsActions.getProductNames();
        const sortedNames = [...productNames].sort((a, b) => a.localeCompare(b));
        expect(productNames).toEqual(sortedNames);

        await expect(page).toHaveURL('/inventory.html');
    })

    test('Ordenar produtos por nomes de Z-A', async ({ page }) => {
        await productsActions.navigateToInventory();

        await productsActions.selectSortOption('za');
        const productNames = await productsActions.getProductNames();
        const sortedNames = [...productNames].sort((a, b) => b.localeCompare(a));
        expect(productNames).toEqual(sortedNames);

        await expect(page).toHaveURL('/inventory.html');
    })

    test('Ordenar produtos por preços do menor para o maior', async ({ page }) => {
        await productsActions.navigateToInventory();

        await productsActions.selectSortOption('lohi');
        const productPrices = await productsActions.getProductPrices();
        const sortedPrices = [...productPrices].sort((a, b) => a - b);
        expect(productPrices).toEqual(sortedPrices);

        await expect(page).toHaveURL('/inventory.html');
    })

    test('Ordenar produtos por preços do maior para o menor', async ({ page }) => {
        await productsActions.navigateToInventory();

        await productsActions.selectSortOption('hilo');
        const productPrices = await productsActions.getProductPrices();
        const sortedPrices = [...productPrices].sort((a, b) => b - a);
        expect(productPrices).toEqual(sortedPrices);

        await expect(page).toHaveURL('/inventory.html');
    })
})