import { test, expect } from '@playwright/test';
import { validUser } from '../data/users.js';

test('LOGIN-02: Neuspesne prihlasenie s neplatnym heslom', async ({ page }) => {

    await page.goto("/");
    await page.getByRole('link', { name: '🔑 Přihlásit', exact: true }).click();
    await page.getByLabel('Uživatelské jméno').fill(validUser.login_email);
    await page.getByLabel('Heslo').fill('WrongPassword123!');
    await page.getByRole('button', { name: 'Přihlášení' }).click();

    await expect(page).toHaveURL('/prihlaseni/');

    await expect(page.getByText('Nesprávné uživatelské jméno nebo heslo.')).toBeVisible();
    

   



});