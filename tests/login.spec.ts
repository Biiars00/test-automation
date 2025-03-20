import { test, expect } from '@playwright/test';
import { LoginActions } from '../src/actions/loginActions'

let loginActions: LoginActions;

test.beforeEach(async ({ page }) => {
  loginActions = new LoginActions(page);
})

test.describe('Login', () => {
  test('Login com credenciais válidas', async ({ page }) => {
    await loginActions.navigateToAccessUrl();

    await loginActions.validateUserName();
    await loginActions.validatePassword();
    await loginActions.loginButton();

    await expect(page).toHaveURL('/inventory.html');
  });
  
  test('Login com credenciais inválidas', async ({ page }) => {
    await loginActions.navigateToAccessUrl();
    
    await loginActions.invalidUserName();
    await loginActions.invalidPassword();
    await loginActions.loginButton();

    const invalidCredentialsErrorText = page.getByText('Epic sadface: Username and password do not match any user in this service')
    await expect(invalidCredentialsErrorText).toBeVisible();
  });

  test('Login com credenciais vazias', async ({ page }) => {
    await loginActions.navigateToAccessUrl();
    
    await loginActions.emptyLabelUsername();
    await loginActions.emptyLabelPassword();
    await loginActions.loginButton();

    const emptyCredentialsErrorText = page.getByText('Epic sadface: Username is required')
    await expect(emptyCredentialsErrorText).toBeVisible();
  });
})
