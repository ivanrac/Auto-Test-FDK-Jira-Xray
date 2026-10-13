# FDK Playwright Automation

Automatizovaný UI testovací projekt vytvorený pomocou **Playwright** na testovanie webovej aplikácie **FDK**.

Projekt demonštruje praktický QA workflow od spustenia Playwright testov až po ich vykonanie v CI pomocou GitHub Actions a diagnostiku prípadných zlyhaní.

---

## Funkcionalita

Projekt aktuálne obsahuje automatizovaný test:

- úspešného prihlásenia používateľa s platnými údajmi
- overenia úspešného prihlásenia
- overenia správnej stránky po prihlásení

Test sa vykonáva v troch browseroch:

- Chromium
- Firefox
- WebKit

Pri zlyhaní testu sa ukladajú diagnostické artefakty:

- screenshot
- video
- Playwright Trace
- JUnit XML report

---

## Použité technológie

| Technológia | Použitie |
|---|---|
| Playwright | UI test automation |
| JavaScript | Automatizované testy |
| Node.js | Runtime prostredie |
| GitHub Actions | Continuous Integration |
| GitHub Secrets | Bezpečné credentials v CI |
| dotenv | Načítanie lokálnych environment variables |
| JUnit XML | Strojovo čitateľný test report |
| SMTP | E-mailová notifikácia pri zlyhaní |

---

## Štruktúra projektu

```text
Auto-Test-FDK-Jira-Xray/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── data/
│   └── users.js
│
├── tests/
│   └── valid_login.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

---

## Testovacie credentials

Prihlasovacie údaje nie sú uložené priamo v zdrojovom kóde.

### Lokálne prostredie

Lokálne sa používajú environment variables zo súboru `.env`:

```env
FDK_LOGIN_USERNAME=your_username
FDK_LOGIN_PASSWORD=your_password
```

Súbor `.env` je uvedený v `.gitignore` a nesmie byť commitnutý do repozitára.

`data/users.js` načítava hodnoty cez:

```javascript
process.env.FDK_LOGIN_USERNAME
process.env.FDK_LOGIN_PASSWORD
```

### GitHub Actions

V CI sa rovnaké environment variables získavajú z GitHub Secrets:

```text
FDK_LOGIN_USERNAME
FDK_LOGIN_PASSWORD
```

Lokálny `.env` súbor sa teda do GitHub repozitára neposiela.

---

## Inštalácia

Nainštalovanie dependencies:

```bash
npm ci
```

Nainštalovanie Playwright browserov:

```bash
npx playwright install
```

---

## Spustenie testov

Spustenie všetkých testov:

```bash
npm test
```

Spustenie iba login testu:

```bash
npm run test:login
```

Spustenie Playwright UI:

```bash
npx playwright test --ui
```

---

## GitHub Actions

CI workflow sa môže spustiť:

- pri push do `main` alebo `master`
- pri Pull Request do `main` alebo `master`
- manuálne pomocou `workflow_dispatch`
- automaticky podľa denného harmonogramu

Pipeline vykonáva:

1. checkout repozitára
2. nastavenie Node.js
3. inštaláciu dependencies
4. inštaláciu Playwright browserov
5. spustenie Playwright testov
6. uloženie Playwright artefaktov
7. odoslanie e-mailovej notifikácie pri zlyhaní

---

## Diagnostika zlyhaných testov

Pri zlyhaní testu je prvým miestom kontroly konkrétny **GitHub Actions run** a jeho logy.

Playwright zároveň uchováva:

- screenshot
- video
- Trace
- JUnit XML report

Typický postup analýzy:

```text
Test FAIL
   ↓
GitHub Actions log
   ↓
Screenshot / Video / Trace
   ↓
Identifikácia príčiny
   ↓
Oprava testu, konfigurácie alebo nahlásenie chyby aplikácie
```

Cieľom je rozlíšiť, či zlyhanie spôsobila testovaná aplikácia, automatizovaný test, testovacie dáta alebo CI prostredie.

---

## CI artefakty

Playwright konfigurácia používa:

```javascript
screenshot: 'only-on-failure'
video: 'retain-on-failure'
trace: 'retain-on-failure'
```

Výstupy testov sa ukladajú do:

```text
playwright-results/
```

a GitHub Actions ich uchováva ako artefakty konkrétneho workflow runu.

---

## Implementovaný test

| Test Case | Popis |
|---|---|
| FDK-29 | Úspešné prihlásenie s platnými údajmi |

Projekt bude postupne rozširovaný o ďalšie pozitívne a negatívne testovacie scenáre.

---

## Autor

**Ivan Rac**

Projekt slúži ako praktická ukážka automatizovaného UI testovania pomocou Playwright, práce s testovacími dátami, CI pipeline a diagnostiky zlyhaných automatizovaných testov.