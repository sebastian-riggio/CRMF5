import { test, expect } from '@playwright/test'

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

test.describe('Form register new user', () => {
test('Name and lastname input', async ({ page }) => {
  const nameLabel = page.getByLabel('Nombre y Apellido')
  await expect(nameLabel).toBeVisible()

  const nameInput = page.getByPlaceholder('Nombre y Apellido')
  await expect(nameInput).toBeVisible()
 })

 test('Department or management center input', async ({ page }) => {
  const departamentLabel = page.getByText('Departamento o centro gestor')
  await expect(departamentLabel).toBeVisible()

  const departamentInput = page.getByLabel(/Departamento o centro gestor/i)
  await expect(departamentInput).toBeVisible()
  await departamentInput.click()
 })

 test('Work area input', async ({ page }) => {
  const workLabel = page.getByText('Área de trabajo en Factoria F5')
  await expect(workLabel).toBeVisible()

  const workInput = page.getByPlaceholder(/Área de trabajo/i)
  await expect(workInput).toBeVisible()
   })

   test('Date input', async ({ page }) => {
    const dateLabel = page.getByText('Fecha inicio de actividad')
    await expect(dateLabel).toBeVisible()
  
    const dateInput = page.getByLabel(/Fecha inicio de actividad/i)
    await expect(dateInput).toBeVisible()
    await dateInput.click()
   })

   test('Email input', async ({ page }) => {
    const emailLabel = page.getByText('Correo electrónico')
    await expect(emailLabel).toBeVisible()
  
    const emailInput = page.getByPlaceholder(/Correo electrónico/i)
    await expect(emailInput).toBeVisible()
     })

  test('Phone input', async ({ page }) => {
    const phoneLabel = page.getByText('Teléfono de contacto')
    await expect(phoneLabel).toBeVisible()
    
    const phoneInput = page.getByPlaceholder(/telefono/i)
    await expect(phoneInput).toBeVisible()
     })
 })



