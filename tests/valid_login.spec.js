import { test, expect } from '@playwright/test';
// Importujeme dáta z tvojho konfiguračného súboru
import { validUser } from '../data/users.js'; 

test('FDK-29: Uspesne prihlasenie s platnymi udajmi', async ({ page }) => {
    
    // --- Krok 1: Navigácia a kliknutie ---
    await page.goto('https://fdk.cz/'); 
    
    // OPRAVA STRIKTNÉHO SELEKTORA (Krok 19)
    // Použijeme presný selektor, ktorý obsahuje kľúč a text 'Přihlásit'
    await page.getByRole('link', { name: '🔑 Přihlásit', exact: true }).click(); 
    
    // Očakávaný Výsledok (Overenie 1): Zobrazí sa prihlasovací formulár
    // Overíme, že je viditeľné pole so selektorom '#id_username'
    await expect(page.locator('#id_username')).toBeVisible(); 

    // --- Krok 2: Zadanie Dát a prihlásenie ---
    
    // Zadáme hodnotu 'Ivan' (login_email) do poľa s presným ID 'id_username'
    await page.locator('#id_username').fill(validUser.login_email); 
    
    // Zadáme hodnotu hesla do poľa s presným ID 'id_password'
    await page.locator('#id_password').fill("UrciteNesprávneHeslo123456XyZ"); 
    
    // Kliknutie na tlačidlo prihlásenia
    await page.getByRole('button', { name: 'Přihlášení' }).click();

    // --- Krok 3: Overenie úspechu ---
    // Očakávaný Výsledok: Zobrazenie personalizovanej uvítacej hlavičky "Vítejte, Ivan!"
    
    // Overíme, že sa na stránke nachádza hlavička, ktorá je personalizovaná
    await expect(page.locator('h1.page-title:has-text("Vítejte, Ivan!")')).toBeVisible(); 
    
    // Bonusové overenie URL:
    await expect(page).toHaveURL('https://fdk.cz/');
});
