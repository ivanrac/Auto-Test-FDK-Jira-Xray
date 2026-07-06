import { test, expect } from '@playwright/test';
import { validUser } from '../data/users.js';

test('FDK-29: Uspesne prihlasenie s platnymi udajmi', async ({ page }) => {
  if (!validUser.login_email || !validUser.login_password) {
    throw new Error('Chýbajú prihlasovacie údaje. Skontroluj GitHub Secrets: FDK_LOGIN_USERNAME a FDK_LOGIN_PASSWORD.');
  }

  await page.goto('https://fdk.cz/');

  await page.getByRole('link', { name: '🔑 Přihlásit', exact: true }).click();

  await expect(page.locator('#id_username')).toBeVisible();

  await page.locator('#id_username').fill(validUser.login_email);
  await page.locator('#id_password').fill(validUser.login_password);

  await page.getByRole('button', { name: 'Přihlášení' }).click();

  await expect(page.locator('h1.page-title:has-text("Vítejte, Ivan!")')).toBeVisible();

  await expect(page).toHaveURL('https://fdk.cz/');
});
