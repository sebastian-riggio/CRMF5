import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/')
})

test.describe('Menubar', () => {
  test('Display isologo factoria', async ({ page }) => {
    const isologo = await page.getByAltText('isologo-f5')
    await expect(isologo).toBeVisible()
    await isologo.click()
    await expect(page).toHaveURL('http://localhost:5173/')
  })

  // test('Display "proyectos"', async ({ page }) => {
  //   // Espera a que el elemento "PROYECTOS" esté visible y haga clic en él
  //   const proyectosLink = await page.locator('a:has-text("PROYECTOS")');
  //   await expect(proyectosLink).toBeVisible();
  //   await proyectosLink.click();

  //   // Verifica que la URL haya cambiado al hacer clic en "PROYECTOS"
  //   await expect(page).toHaveURL('http://localhost:5173/allprojects');
  // });
})
