# 🤖 Auto-Test-FDK-Jira-Xray

## Prehľad projektu
Tento repozitár implementuje robustné automatizované **End-to-End (E2E) testovanie** kritickej funkcionality prihlásenia do systému FDK pomocou frameworku **Playwright**. Hlavným cieľom je nastaviť **Kontinuálnu Integráciu (CI)** prostredníctvom **GitHub Actions** a automaticky reportovať výsledky testov (status PASS/FAIL) do nástroja **JIRA Xray** pre pokrytie testovacieho lístka **FDK-29**.

## ⚙️ 1. Lokálne Nastavenie a Konfigurácia
**Požiadavky:** Node.js (LTS verzia) a Playwright Browsers. **Inštalácia závislostí:** Najprv nainštalujte všetky balíčky a browsery príkazmi: `npm install` a `npx playwright install --with-deps`.

## ▶️ 2. Spustenie Testov
Pre lokálne spustenie všetkých testov (Headless) použite: `npx playwright test`. Pre ladenie a spustenie s grafickým rozhraním použite: `npx playwright test --ui`.

## ☁️ 3. CI/CD a Xray Integrácia
Workflow je spustený pri každom **push/Pull Requeste** na vetvy `main` a **Denne** pomocou CRON plánovania: **každý deň o 05:00 UTC**. Krok nahrávania výsledkov do JIRA Xray je definovaný s podmienkou **`if: always()`**, čo zabezpečí, že výsledok (`PASS` alebo `FAIL`) bude nahlásený do JIRA, aj keď testovací krok zlyhá. Vyžaduje GitHub Secrets: `XRAY_CLIENT_ID` a `XRAY_CLIENT_SECRET`.

## 📊 4. Reportovanie a Výsledky
Aktuálny status testov je viditeľný na záložke [GitHub Actions](https://github.com/ivanrac/Auto-Test-FDK-Jira-Xray/actions). Podrobné výsledky, históriu spustení a pokrytie testov sú dostupné priamo v lístku [FDK-29 v JIRA](<Váš Link na JIRA>).