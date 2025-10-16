import { test } from './axe-fixtures';

test.describe('Cart Checkout Axe Developer Hub', () => {
  test('checkout flow from home page', async ({ page }) => {
    console.log(page.context().browser()?.browserType().name());
    await page.goto('/');


    await page.getByTestId('show-cart-dropdown').waitFor();
    await page.getByTestId('show-cart-dropdown').click();

    await page.waitForURL('/#/cart', { waitUntil: 'domcontentloaded' });

    await page.getByTestId('proceed-to-checkout').waitFor();
    await page.getByTestId('proceed-to-checkout').click();

    await page.waitForURL('/#/checkout', { waitUntil: 'domcontentloaded' });

    await page.getByTestId('proceed-to-payment').waitFor();
  });
});
