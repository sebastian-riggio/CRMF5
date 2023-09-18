import { test, describe, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/registeruser')
})

test.describe('Register user page', () => {

  test('Display form title', async ({ page }) => {
    const titleForm = await page.getByRole('heading', { name: /nuevo usuario/i})
  
    await expect(titleForm).toBeVisible();
    })

  test('Display sub title', async ({ page }) => {
    const subtitle = await page.getByText( /Completar los datos del nuevo usuario del Factoria F5/i)

    await expect(subtitle).toBeVisible()
  })
})

// test.describe('Form register new user', () => {
//   test('Name and lastname input', async ({ page }) => {
//     const nameLabel = await page.getByText(/nombre y apellido:/i)
//      const nameInput = await page.getByPlaceholder(/nombre y apellido/i)
     
//      await Promise.all([
//       expect(nameLabel).toBeVisible(),
//       expect(nameInput).toBeVisible(),
//     ]);
 
//      await nameInput.click()
//   });
// })



