import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlInfo = "http://localhost:3000/info";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Home Page Head', () => {
    test('Head', async ({ page }) => {
        await page.goto(urlHome);
        expect(await page.title()).toBe('Higher Lower on Times a Movie says Fuck');
        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', 'Higher Lower on movies that say fuck ranking')
    });
});