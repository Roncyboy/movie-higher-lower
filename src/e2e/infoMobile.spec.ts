import { test, expect, devices } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlInfo = "http://localhost:3000/info";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.use({
    browserName: 'chromium',
    ...devices['iPhone 11 Pro'],
})

test.describe('Mobile Info Page', () => {
    test('Mobile Info', async ({ page }) => {
        await page.goto(urlInfo);
        const findH1 = page.locator('h1');
        await expect(findH1).toHaveText('Info');
        const Link = page.locator('Link');
        await expect(Link).toHaveAttribute('href', '/faviconHL.svg');
    });
});
