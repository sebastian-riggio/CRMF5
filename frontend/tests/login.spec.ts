import { test, describe, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/login')
})

test.describe('Login', () => {
  test('Display form title', async ({ page }) => {
    const titleForm = await page.getByRole('heading', { name: /Iniciar sesión/i })
    await expect(titleForm).toBeVisible()
  })

  test('Display sub title', async ({ page }) => {
    const subtitle = await page.getByText(/ Inicie sesión con su email y contraseña para acceder al sistema./i)
    await expect(subtitle).toBeVisible
  })
})

// test.describe('Form Login', () => {
//   test('email input', async ({ page }) => {
//     const nameLabel = await page.getByLabel(/email/i)
//     const nameInput = await page.getByPlaceholder(/example@gmail.com/i)

//     await expect(nameLabel).toHaveValue(/email/i)
//     await expect(nameInput).toHaveText(/example@gmail.com/i)
//   })
// })
