const { test, expect } = require('@playwright/test');

test('Grow Fusion homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page).getByRole('heading', { name: 'Grow Fusion' }).toBeVisible();
});