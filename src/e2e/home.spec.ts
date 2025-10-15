import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('check for components', async ({ page }) => {
    await page.goto('/');

    // Expect a page title
    await expect(page).toHaveTitle(/Demo Shop/);

    // Expect header
    await expect(page.locator('header')).toBeVisible();

    // Expect footer
    await expect(page.locator('footer')).toBeVisible();

    // Expect product slider
    await expect(page.getByTestId('product-slider')).toBeVisible();

    // Expect product banners
    await expect(page.getByTestId('product-banners')).toBeVisible();

    // Expect popular products
    await expect(page.getByTestId('popular-products')).toBeVisible();

    // Expect latest products
    await expect(page.getByTestId('latest-products')).toBeVisible();

    // Expect newsletter
    await expect(page.getByTestId('newsletter')).toBeVisible();
  });
});
