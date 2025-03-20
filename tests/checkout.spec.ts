import { test, expect } from '@playwright/test';
import { LoginActions } from '../src/actions/loginActions';
import { CheckoutActions } from '../src/actions/checkoutActions';

let loginActions: LoginActions;
let checkoutActions: CheckoutActions;

test.beforeEach(async ({ page }) => {
    loginActions = new LoginActions(page)
    checkoutActions = new CheckoutActions(page)

    await loginActions.navigateToAccessUrl();
    await loginActions.validateUserName();
    await loginActions.validatePassword();
    await loginActions.loginButton();
    await expect(page).toHaveURL('/inventory.html');
})

test.describe('Checkout', () => {
    test('Acessar Página de Checkout', async({ page }) => {
        await checkoutActions.navigateToCheckout();

        await checkoutActions.clickCheckoutButton();
        await expect(page).toHaveURL('/checkout-step-one.html')
    })
})