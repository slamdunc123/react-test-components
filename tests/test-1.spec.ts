import { test, expect } from '@playwright/test';

test('has h1 on page', async ({ page }) => {
	await page.goto('http://localhost:5173/');
  const headingElement = await page.textContent('h1');
  expect(headingElement).toEqual('Vite + React');
	const headingElementCount = await page.locator('h1').count();
	expect(headingElementCount).toEqual(1);
});

test('has correct number of h2 elements on page', async ({ page }) => {
	await page.goto('http://localhost:5173/');
	const headingElements = await page.locator('h2').count();
	expect(headingElements).toEqual(6);
});

test('counter', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const headingElement = await page.textContent('h2');
  expect(headingElement).toEqual('Counter');
  const buttonElement = await page.getByRole('button', { name: 'count is' })
  await buttonElement.click();
  expect(buttonElement).toHaveText('count is 1');
  await buttonElement.click();
  expect(buttonElement).toHaveText('count is 2');

  });

