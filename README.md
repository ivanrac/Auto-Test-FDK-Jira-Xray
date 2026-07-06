# Auto-Test-FDK-Jira-Xray

Automatizovaný testovací projekt vytvorený pomocou **Playwright** na testovanie webovej aplikácie **FDK**.

Projekt demonštruje kompletný proces automatizovaného UI testovania vrátane:

- ✅ Playwright UI Automation
- ✅ GitHub Actions (CI/CD)
- ✅ GitHub Secrets
- ✅ Jira + Xray integrácie
- ✅ JUnit XML Report
- ✅ E-mailových notifikácií pri zlyhaní
- ✅ Screenshotov, videí a Trace pri páde testu

---

# Architektúra projektu

```
                 Developer Push
                        │
                        ▼
                GitHub Actions
                        │
        ┌───────────────┼────────────────┐
        │               │                │
        ▼               ▼                ▼
 Install Dependencies  Run Tests   Upload Artifacts
        │               │                │
        ▼               ▼                ▼
 Playwright Tests   JUnit Report   Screenshot/Video/Trace
        │
        ▼
  Xray REST API
        │
        ▼
 Jira Test Execution
```

---

# Použité technológie

| Technológia | Použitie |
|-------------|----------|
| Playwright | UI Automation |
| JavaScript | Test Scripts |
| GitHub Actions | Continuous Integration |
| GitHub Secrets | Bezpečné uloženie prihlasovacích údajov |
| Jira | Test Management |
| Xray | Test Execution Reporting |
| REST API | Import výsledkov do Xray |
| JUnit XML | Report výsledkov |
| SMTP | E-mailové notifikácie |

---

# Funkcionalita

Projekt aktuálne obsahuje automatizovaný test:

- úspešné prihlásenie používateľa
- overenie úspešného loginu
- overenie domovskej stránky
- automatické generovanie JUnit reportu
- odoslanie výsledkov do Jira Xray
- odoslanie e-mailu pri zlyhaní testu
- automatické ukladanie screenshotov
- automatické ukladanie videa
- automatické ukladanie Playwright Trace

---

# Štruktúra projektu

```
Auto-Test-FDK-Jira-Xray
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── data
│   └── users.js
│
├── tests
│   └── valid_login.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# GitHub Secrets

Projekt nepoužíva prihlasovacie údaje uložené priamo v zdrojových súboroch.

Použité GitHub Secrets:

```
FDK_LOGIN_USERNAME
FDK_LOGIN_PASSWORD

XRAY_CLIENT_ID
XRAY_CLIENT_SECRET

MAIL_SERVER
MAIL_PORT
MAIL_USERNAME
MAIL_PASSWORD
```

Testovacie údaje sa načítavajú zo súboru:

```
data/users.js
```

ktorý používa environment premenné:

```javascript
process.env.FDK_LOGIN_USERNAME
process.env.FDK_LOGIN_PASSWORD
```

---

# Spustenie projektu

Inštalácia balíkov

```bash
npm ci
```

Inštalácia Playwright browserov

```bash
npx playwright install
```

Spustenie testov

```bash
npx playwright test
```

Spustenie Playwright UI

```bash
npx playwright test --ui
```

Otvorenie HTML reportu

```bash
npx playwright show-report
```

---

# GitHub Actions Workflow

Workflow sa spúšťa:

- Push
- Pull Request
- Manual Run (`workflow_dispatch`)
- Daily Cron Job

Pipeline vykonáva:

1. Checkout projektu
2. Inštaláciu závislostí
3. Inštaláciu Playwright browserov
4. Spustenie Playwright testov
5. Upload screenshotov, videa a trace
6. Odoslanie e-mailu pri chybe
7. Upload JUnit reportu do Jira Xray

---

# Diagnostika zlyhania testu

Pri zlyhaní testu sa automaticky ukladajú:

- Screenshot
- Video
- Playwright Trace
- JUnit XML Report

Tieto artefakty výrazne uľahčujú analýzu zlyhaných testov v GitHub Actions.

---

# Xray integrácia

Výsledky Playwright testov sa generujú vo formáte:

```
playwright-results/results.xml
```

a následne sa pomocou REST API automaticky importujú do **Jira Xray** ako Test Execution.

---

# Implementovaný test

| Test Case | Popis |
|------------|-------|
| FDK-29 | Úspešné prihlásenie s platnými údajmi |

---

# Čo som sa pri projekte naučil

- Playwright UI Automation
- GitHub Actions (CI/CD)
- GitHub Secrets
- Jira + Xray integrácia
- REST API komunikácia
- JUnit XML reporty
- Debugging pomocou Screenshot, Video a Trace
- Automatické notifikácie e-mailom
- Diagnostika zlyhaných testov v CI pipeline

---

# Autor

**Ivan Rac**

Projekt bol vytvorený ako ukážka praktických znalostí automatizovaného testovania pomocou Playwright a integrácie testov do CI/CD pipeline s Jira Xray.
