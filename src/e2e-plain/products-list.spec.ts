import { expect, test } from '@playwright/test';

test.describe('Products List Page', () => {
  test('check elements', async ({ page }) => {
    await page.goto('/#/products');

    await page.waitForURL('/#/products', { waitUntil: 'domcontentloaded' });

    await expect(page.getByTestId('product-tile')).toHaveCount(6);
  });
});
