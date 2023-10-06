import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/registeruser')
})

test.describe('Register user page', () => {
  test('Display form title', async ({ page }) => {
    const titleForm = page.getByText('Nuevo Usuario')

    await expect(titleForm).toBeVisible()
  })

  test('Display sub title', async ({ page }) => {
    const subtitle = page.getByText(/Completar los datos del nuevo usuario de Factoria F5/i)

    await expect(subtitle).toBeVisible()
  })
})

test.describe('Name input test', () => {
  test('Name and lastname input and that can be written', async ({ page }) => {
    const inputValue = page.getByLabel('Nombre y Apellido')
    const callInput = page.getByPlaceholder(/Nombre y Apellido/i)
    await expect(callInput).toBeVisible()
    await inputValue.fill('John Done')
    await expect(inputValue).toHaveValue('John Done')
  })
})

test.describe('Department or management center test', () => {
  test('Department or management center input', async ({ page }) => {
    const departamentLabel = page.getByText('Departamento o centro gestor')
    await expect(departamentLabel).toBeVisible()

    const departamentInput = page.getByLabel(/Departamento o centro gestor/i)
    await expect(departamentInput).toBeVisible()
    await departamentInput.click()
  })
})

test.describe('Work area test', () => {
  test('Work area input and that can be written', async ({ page }) => {
    const inputValue = page.getByLabel('Área de trabajo en Factoria F5')
    const callInput = page.getByPlaceholder(/Área de trabajo/i)
    await expect(callInput).toBeVisible()
    await inputValue.fill('F5 Comunicación')
    await expect(inputValue).toHaveValue('F5 Comunicación')
  })
})

test.describe('Date input test', () => {
  test('Date input', async ({ page }) => {
    const dateLabel = page.getByText('Fecha inicio de actividad')
    await expect(dateLabel).toBeVisible()

    const dateInput = page.getByLabel(/Fecha inicio de actividad/i)
    await expect(dateInput).toBeVisible()
    await dateInput.click()
  })
})

test.describe('Email input test', () => {
  test('Email  input and that can be written', async ({ page }) => {
    const inputValue = page.getByLabel('Correo electrónico')
    const callInput = page.getByPlaceholder(/Correo electrónico/i)
    await expect(callInput).toBeVisible()
    await inputValue.fill('johndone@example.com')
    await expect(inputValue).toHaveValue('johndone@example.com')
  })
})

test.describe('Phone input test', () => {
  test('Phone input  input and that can be written', async ({ page }) => {
    const inputValue = page.getByLabel('Teléfono de contacto')
    const callInput = page.getByPlaceholder(/telefono/i)
    await expect(callInput).toBeVisible()
    await inputValue.fill('123456789')
    await expect(inputValue).toHaveValue('123456789')
  })
})

test.describe('Buttons test', () => {
  test('Create button', async ({ page }) => {
    const button = page.getByRole('button', { name: /Crear/i })
    await expect(button).toBeVisible()
    await button.click()
    // await expect(page).toHaveURL('http://localhost:5173/')
  })

  test('Cancel button', async ({ page }) => {
    const button = page.getByRole('button', { name: /Cancelar/i })
    await expect(button).toBeVisible()
    await button.click()
    // await expect(page).toHaveURL('http://localhost:5173/')
  })
})
