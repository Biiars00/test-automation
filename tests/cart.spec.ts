import { test, expect } from '@playwright/test';
import { CartActions } from '../src/actions/cartActions';
import { LoginActions } from '../src/actions/loginActions';

let cartActions: CartActions;
let loginActions: LoginActions;

test.beforeEach(async ({ page }) => {
    cartActions = new CartActions(page);
    loginActions = new LoginActions(page);

    await loginActions.navigateToAccessUrl();
    await loginActions.validateUserName();
    await loginActions.validatePassword();
    await loginActions.loginButton();
    await expect(page).toHaveURL('/inventory.html');
})

test.describe('Carrinho de compras', () => {
  test('Acessa a página de carrinho de compras', async ({ page }) => {
    await cartActions.navigateToCart();
  
    await cartActions.clickButtonShoppingCart();
    await expect(page).toHaveURL('/cart.html')
  });
})
