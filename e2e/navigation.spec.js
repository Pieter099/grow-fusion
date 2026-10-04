const { test, expect } = require('@playwright/test');

test.describe('GrowFusion navigation', () => {
  test('Navigates between the main homepage sections', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'About Us' }).click();

    await expect(page).toHaveURL(/#about$/);
    await expect(
      page.getByRole('heading', { name: 'About Grow Fusion' })
    ).toBeVisible();

    await page.getByRole('link', { name: 'Farm Info' }).click();

    await expect(page).toHaveURL(/#main$/);
    await expect(
      page.getByRole('heading', { name: 'Farming Information' })
    ).toBeVisible();

    await page.getByRole('link', { name: 'Contacts' }).click();

    await expect(page).toHaveURL(/#contact$/);
    await expect(
      page.getByRole('heading', { name: 'Contact Us' })
    ).toBeVisible();
  });

  test('navigates to the Sign Up page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Sign Up' }).click();

    await expect(page).toHaveURL(/signup$/);
    await expect(
      page.getByRole('heading', { name: 'Create Your GrowFusion Account!' })
    ).toBeVisible();

    await expect(
      page.getByRole('heading', { name: 'Grow Smarter with GrowFusion' })
    ).toBeVisible();
  });
}); 