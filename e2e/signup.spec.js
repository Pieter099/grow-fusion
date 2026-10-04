const { test, expect } = require('@playwright/test');

test.describe('GrowFusion Sign Up', () => {
  test('allows a user to complete the signup form', async ({ page }) => {
    await page.goto('/signup');

    await expect(
      page.getByRole('heading', {
        name: 'Create Your GrowFusion Account!',
      })
    ).toBeVisible();

    const usernameInput = page.getByLabel('Username:');
    const emailInput = page.getByLabel('Email:');
    const passwordInput = page.getByLabel('Password:');

    await usernameInput.fill('TestUser');
    await emailInput.fill('test@example.com');
    await passwordInput.fill('SecurePassword123');

    await expect(usernameInput).toHaveValue('TestUser');
    await expect(emailInput).toHaveValue('test@example.com');
    await expect(passwordInput).toHaveValue('SecurePassword123');

    await expect(
      page.getByRole('button', {
        name: 'Register',
      })
    ).toBeVisible();
  });

  test('prevents submission when required fields are empty', async ({
    page,
  }) => {
    await page.goto('/signup');

    const usernameInput = page.getByLabel('Username:');
    const emailInput = page.getByLabel('Email:');
    const passwordInput = page.getByLabel('Password:');

    await expect(usernameInput).toHaveAttribute('required', '');
    await expect(emailInput).toHaveAttribute('required', '');
    await expect(passwordInput).toHaveAttribute('required', '');

    await page.getByRole('button', {
      name: 'Register',
    }).click();

    await expect(usernameInput).toBeFocused();
  });

  test('returns to the homepage using the Home button', async ({ page }) => {
    await page.goto('/signup');

    await page.getByRole('button', {
      name: 'Home',
    }).click();

    await expect(page).toHaveURL(/\/$/);

    await expect(
      page.getByRole('heading', {
        name: 'GrowFusion',
        exact: true,
      })
    ).toBeVisible();
  });
});