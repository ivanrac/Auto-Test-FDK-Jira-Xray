# 🚀 Auto-Test-FDK-Jira-Xray

Tento projekt implementuje automatizované end-to-end testovanie prihlásenia do FDK pomocou **Playwright**.
Hlavným cieľom je kontinuálna integrácia (CI) cez **GitHub Actions** a automatické nahrávanie výsledkov testov (JUnit XML report) do **JIRA Xray** pre pokrytie testovacieho lístka **FDK-29**.

---

## ⚙️ 1. Lokálne Nastavenie a Konfigurácia

### Požiadavky
* Node.js (LTS verzia)
* Playwright Browsers (inštalované v ďalšom kroku)

### Inštalácia závislostí
Pre lokálne spustenie testov najskôr nainštalujte všetky závislosti projektu:
```bash
npm install
npx playwright install --with-deps