import { test, expect } from '@playwright/test';
import { LogoutActions } from '../src/actions/logoutActions';
import { LoginActions } from '../src/actions/loginActions';

let loginActions: LoginActions;
let logoutActions: LogoutActions;

test.beforeEach(async ({ page }) => {
    loginActions = new LoginActions(page);
    logoutActions = new LogoutActions(page);

    await loginActions.navigateToAccessUrl();
    await loginActions.validateUserName();
    await loginActions.validatePassword();
    await loginActions.loginButton();
    await expect(page).toHaveURL('/inventory.html');
})

test.describe('Logout', () => {
  test('Sair da página', async ({ page }) => {
    await logoutActions.navigateToLogout();

    await logoutActions.openMenuBurguer();
    await logoutActions.clickLogout();
    await expect(page).toHaveURL('/');
  });
})
