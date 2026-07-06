// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Prečítajte si dokumentáciu Playwright: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests', // Tvoje testy sú v zložke 'tests'
  /* Maximálna doba trvania testu. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximálna doba pre očakávané príkazy.
     */
    timeout: 5000
  },
  
  // ------------------------------------------------------------------
  // TENTO RIADOK SME ODSTRÁNILI: globalSetup: require.resolve('./global-setup'),
  // ------------------------------------------------------------------

  /* Povedz Playwrightu, kde má ukladať výsledky testov. */
  outputDir: 'playwright-results/',

  /* KLÚČOVÁ ZMENA PRE XRAY: Nastavenie Reportérov */
  reporter: [
    ['list'],
    ['junit', { outputFile: 'playwright-results/results.xml' }] // Pre Xray
  ],
  
  /* Spoločné nastavenia pre všetky projekty. */
 use: {
  baseURL: 'https://fdk.cz/',

  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'retain-on-failure',
},

  /* Konfigurácia pre rôzne prehliadače. */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
