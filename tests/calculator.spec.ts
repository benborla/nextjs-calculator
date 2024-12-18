import { test, expect } from '@playwright/test'

test.describe('Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('displays numbers when clicked', async ({ page }) => {
    await page.click('button:has-text("1")')
    await page.click('button:has-text("2")')
    await page.click('button:has-text("3")')
    
    const display = page.locator('[data-testid="calculator-display"]')
    await expect(display).toHaveText('123')
  })

  test('performs basic addition', async ({ page }) => {
    await page.click('button:has-text("5")')
    await page.click('button:has-text("+")')
    await page.click('button:has-text("3")')
    await page.click('button:has-text("=")')
    
    const display = page.locator('[data-testid="calculator-display"]')
    await expect(display).toHaveText('8')
  })

  test('performs basic subtraction', async ({ page }) => {
    await page.click('button:has-text("9")')
    await page.click('button:has-text("-")')
    await page.click('button:has-text("4")')
    await page.click('button:has-text("=")')
    
    const display = page.locator('[data-testid="calculator-display"]')
    await expect(display).toHaveText('5')
  })

  test('performs basic multiplication', async ({ page }) => {
    await page.click('button:has-text("6")')
    await page.click('button:has-text("×")')
    await page.click('button:has-text("7")')
    await page.click('button:has-text("=")')
    
    const display = page.locator('[data-testid="calculator-display"]')
    await expect(display).toHaveText('42')
  })

  test('performs basic division', async ({ page }) => {
    await page.click('button:has-text("8")')
    await page.click('button:has-text("÷")')
    await page.click('button:has-text("2")')
    await page.click('button:has-text("=")')
    
    const display = page.locator('[data-testid="calculator-display"]')
    await expect(display).toHaveText('4')
  })

  test('clears display when AC is clicked', async ({ page }) => {
    await page.click('button:has-text("1")')
    await page.click('button:has-text("2")')
    await page.click('button:has-text("AC")')
    
    const display = page.locator('[data-testid="calculator-display"]')
    await expect(display).toHaveText('0')
  })

  test('chains multiple operations', async ({ page }) => {
    await page.click('button:has-text("2")')
    await page.click('button:has-text("+")')
    await page.click('button:has-text("3")')
    await page.click('button:has-text("×")')
    await page.click('button:has-text("4")')
    await page.click('button:has-text("=")')
    
    const display = page.locator('[data-testid="calculator-display"]')
    await expect(display).toHaveText('20')
  })

  test('handles decimal numbers', async ({ page }) => {
    await page.click('button:has-text("1")')
    await page.click('button:has-text(".")')
    await page.click('button:has-text("5")')
    await page.click('button:has-text("×")')
    await page.click('button:has-text("2")')
    await page.click('button:has-text("=")')
    
    const display = page.locator('[data-testid="calculator-display"]')
    await expect(display).toHaveText('3')
  })

  test('handles negative numbers with +/-', async ({ page }) => {
    await page.click('button:has-text("5")')
    await page.click('button:has-text("+/-")')
    await page.click('button:has-text("×")')
    await page.click('button:has-text("3")')
    await page.click('button:has-text("=")')
    
    const display = page.locator('[data-testid="calculator-display"]')
    await expect(display).toHaveText('-15')
  })

  test('handles percentage calculations', async ({ page }) => {
    await page.click('button:has-text("100")')
    await page.click('button:has-text("%")')
    
    const display = page.locator('[data-testid="calculator-display"]')
    await expect(display).toHaveText('1')
  })

  test('handles division by zero', async ({ page }) => {
    await page.click('button:has-text("5")')
    await page.click('button:has-text("÷")')
    await page.click('button:has-text("0")')
    await page.click('button:has-text("=")')
    
    const display = page.locator('[data-testid="calculator-display"]')
    await expect(display).toHaveText('Error')
  })
})
