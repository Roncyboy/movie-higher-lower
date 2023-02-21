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
    ...devices['iPad Air'],
})

test.describe('Tablet Home Page', () => {
    test('Game area', async ({ page }) => {
        await page.goto(urlHome);
        const grid = page.locator('.grid');
        const checkGrid = await grid.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('display');
        });
        expect(checkGrid).toBe('grid');
        const checkGridSize = await grid.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('max-width');
        });
        expect(checkGridSize).toBe('800px');
    });
});


