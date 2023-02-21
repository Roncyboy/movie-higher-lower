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

test.describe('Mobile Home Page', () => {
    test('Game area', async ({ page }) => {
        await page.goto(urlHome);
        const h2 = page.locator('h2');
        await expect(h2).toHaveCount(5);
        const button = page.locator('button');
        await expect(button).toHaveCount(3);
    });
});

