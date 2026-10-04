const { test, expect } = require('@playwright/test');

test('GrowFusion homepage loads correctly', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'GrowFusion' })
  ).toBeVisible();
});