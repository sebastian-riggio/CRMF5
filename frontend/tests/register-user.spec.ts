import { test, describe, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  //arrange
  await page.goto('http://localhost:5173/registeruser')
})

test.describe('Register user page', () => {
  // test.use({
  //   viewport: { width: 420, height: 1200 }
  //   // isMobile: true
  // })
  test('Display form title', async ({ page }) => {
    //Act
    const titleForm = await page.getByRole('heading', { name: /nuevo usuario/i})
    //Assert
    await expect(titleForm).toBeVisible();
    await expect(titleForm).toHaveCSS('font-weight', '600')
  })

  test('Display sub title',async ({page}) => {
    const subtitle = await page.getByText( /Vamos a darle el alta a un nuevo compañero de Factoria F5/i)

    await expect(subtitle).toBeVisible()
  })
})

test.describe('Form', () => {

  test('Name and lastname input',async ({page}) => {
    const nameLabel = await page.getByLabel(/nombre y apellidos:/i)
    const nameInput = await page.getByPlaceholder(/name here/i)

    await expect(nameLabel).toHaveText(/nombre y apellido:/i)
    await expect(nameInput).toHaveText(/name here:/i)


  })
})
