import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/newcall')
})

test.describe('New call page', () => {

  test('Display form title', async ({ page }) => {
    const titleForm = page.getByRole('heading', { name: /nueva convocatoria/i})
  
    await expect(titleForm).toBeVisible();
    })
})

test.describe('Form register new user', () => {
    test('Name input', async ({ page }) => {
      const nameLabel = page.getByLabel('Título de convocatoria')
      await expect(nameLabel).toBeVisible()
    
      const nameInput = page.getByPlaceholder('Nombre y Apellido')
      await expect(nameInput).toBeVisible()
     })



    })