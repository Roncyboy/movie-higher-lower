import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlInfo = "http://localhost:3000/info";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Home Page', () => {
    test('Header area', async ({ page }) => {
        await page.goto(urlHome);
    });
    
    test('Game area', async ({ page }) => {
        await page.goto(urlHome);
    });
});

