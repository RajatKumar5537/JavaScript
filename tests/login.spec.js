import { test } from '@playwright/test';
import { LoginPage } from '../page/login'


test('test', async ({ page }) => {
    const login = new LoginPage(page)

    await login.gotoLoginPage()
    await login.login('tomsmith', 'SuperSecretPassword!')
    await login.logout()

});

