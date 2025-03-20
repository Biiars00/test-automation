import { test, expect } from '@playwright/test';
import { LoginActions } from '../src/actions/loginActions';
import { CheckoutInfoActions } from '../src/actions/CheckoutInfoActions';

let loginActions: LoginActions;
let checkoutInfoActions: CheckoutInfoActions;

test.beforeEach(async ({ page }) => {
    loginActions = new LoginActions(page)
    checkoutInfoActions = new CheckoutInfoActions(page)

    await loginActions.navigateToAccessUrl();
    await loginActions.validateUserName();
    await loginActions.validatePassword();
    await loginActions.loginButton();
    await expect(page).toHaveURL('/inventory.html');
})

test.describe('Informações de Checkout', () => {
    test('Valida informações de checkout', async({ page }) => {
        await checkoutInfoActions.navigateToCheckoutInfo();

        await checkoutInfoActions.validateCheckoutFirstName('standard');
        await checkoutInfoActions.validateCheckoutLastName('user');
        await checkoutInfoActions.validateCheckoutPostalCode('00000-000');

        await checkoutInfoActions.clickButtonToContinueCheckout();
        await expect(page).toHaveURL('/checkout-step-two.html')
    })

    test('Informações de checkout inválidas', async({ page }) => {
        await checkoutInfoActions.navigateToCheckoutInfo();

        await checkoutInfoActions.invalidCheckoutFirstName('');
        await checkoutInfoActions.invalidCheckoutLastName('');
        await checkoutInfoActions.invalidCheckoutPostalCode('');

        await checkoutInfoActions.clickButtonToContinueCheckout();

        const emptyCheckoutInformationErrorText = page.getByText('Error: First Name is required')
        await expect(emptyCheckoutInformationErrorText).toBeVisible();
    })
})