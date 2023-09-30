import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/registeruser')
})

test.describe('Register user page', () => {
  test('Display form title', async ({ page }) => {
    const titleForm = page.getByRole('heading', { name: 'Nuevo Usuario'})

    await expect(titleForm).toBeVisible()
  })

  test('Display sub title', async ({ page }) => {
    const subtitle = page.getByText('Completar los datos del nuevo usuario del Factoria F5')

    await expect(subtitle).toBeVisible()
  })
})

test.describe('Name input test', () => {
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

  test('Name and lastname that can be written', async ({ page }) => {
    await page.type('[data-testid=nombre-input]', 'John Doe')

    const inputValue = await page.getAttribute('[data-testid=nombre-input]', 'value')
    await expect(inputValue).toBe('John Doe')
  })
})

test.describe('Department or management center input test', () => {
  test('Department or management center input', async ({ page }) => {
    const departamentLabel = page.getByText('Departamento o centro gestor')
    await expect(departamentLabel).toBeVisible()

    const departamentInput = page.getByLabel(/Departamento o centro gestor/i)
    await expect(departamentInput).toBeVisible()
    await departamentInput.click()
  })
})

test.describe('Work area input test', () => {
  test('Work area input', async ({ page }) => {
    const workLabel = page.getByText('Área de trabajo en Factoria F5')
    await expect(workLabel).toBeVisible()

    const workInput = page.getByPlaceholder(/Área de trabajo/i)
    await expect(workInput).toBeVisible()
  })

  test('Work area that can be written', async ({ page }) => {
    await page.type('[data-testid=work-area-input]', 'Recursos humanos')

    const inputValue = await page.getAttribute('[data-testid=work-area-input]', 'value')
    expect(inputValue).toBe('Recursos humanos')
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
  test('Email input', async ({ page }) => {
    const emailLabel = page.getByText('Correo electrónico')
    await expect(emailLabel).toBeVisible()

    const emailInput = page.getByPlaceholder(/Correo electrónico/i)
    await expect(emailInput).toBeVisible()
  })


  test('Email that can be written', async ({ page }) => {
    await page.type('[data-testid=email-input]', 'johndoe@example.com')

    const inputValue = await page.getAttribute('[data-testid=email-input]', 'value')
    expect(inputValue).toBe('johndoe@example.com')
  })
})


test.describe('Phone input test', () => {
  test('Phone input', async ({ page }) => {
    const phoneLabel = page.getByText('Teléfono de contacto')
    await expect(phoneLabel).toBeVisible()

    const phoneInput = page.getByPlaceholder(/telefono/i)
    await expect(phoneInput).toBeVisible()
  })

  test('Phone that can be written', async ({ page }) => {
    await page.type('[data-testid=phone-input]', '123456789')

    const inputValue = await page.getAttribute('[data-testid=phone-input]', 'value')
    expect(inputValue).toBe('123456789')
  })
})

test.describe('Buttons test', () => {
  test('Create button', async ({ page }) => {
    const button = await page.getByRole('button', { name: /Crear/i })
    await expect(button).toBeVisible()
    await button.click()
    // await expect(page).toHaveURL('http://localhost:5173/home')
  })

  test('Cancel button', async ({ page }) => {
    const button = await page.getByRole('button', { name: /Cancelar/i })
    await expect(button).toBeVisible()
    await button.click()
    // await expect(page).toHaveURL('http://localhost:5173/home')
  })
})
