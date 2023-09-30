import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/')
})

test.describe('Login', () => {
  test('Display isologo factoria', async ({ page }) => {
    const isologo = page.getByAltText('isologo-f5')
    await expect(isologo).toBeVisible()
  })
})

test.describe('Form Login "Cuenta" ', () => {
  test.describe('title test" ', () => {
    test('Display form title', async ({ page }) => {
      const titleForm = page.getByRole('heading', { name: /Iniciar sesión/i })
      await expect(titleForm).toBeVisible()
    })

    test('Display sub title', async ({ page }) => {
      const subtitle = page.getByText(/ Inicie sesión con su email y contraseña para acceder al sistema./i)
      await expect(subtitle).toBeVisible
    })
  })

  test.describe('Email input email', () => {
    test('email input', async ({ page }) => {
      const emailLabel = await page.waitForSelector('label[for="email"]')
      const emailInput = await page.waitForSelector('input#email')

      const labelText = await emailLabel.innerText()
      const inputValue = await emailInput.getAttribute('placeholder')

      expect(labelText).toBe('Email')
      expect(inputValue).toBe('example@mail.com')
    })

    test('Email that can be written', async ({ page }) => {
      await page.type('[data-testid=correo-input]', 'johndoe@example.com')

      const inputValue = await page.getAttribute('[data-testid=correo-input]', 'value')
      expect(inputValue).toBe('johndoe@example.com')
    })
  })

  test.describe('Button test', () => {
    test('Display button "entrar" ', async ({ page }) => {
      const button = page.getByRole('button', { name: /Entrar/i })
      await expect(button).toBeVisible()
      await button.click()
      // await expect(page).toHaveURL('http: localhost:5173/home')
    })
  })
})

test.describe('Form Login "Contraseña" ', () => {
  test.describe('title tests', () => {
    test('Display form title', async ({ page }) => {
      const passwordButton = page.getByRole('button', { name: 'Contraseña' })
      await passwordButton.click()

      const title = page.getByRole('heading', { name: '¿Olvidó su contraseña?' })
      await expect(title).toBeVisible({ timeout: 10000 })
    })

    test('Display sub title', async ({ page }) => {
      const subtitle = page.getByText(/ Le ofrecemos la opción de recuperar su contraseña de forma sencilla y segura. Para ello, ingrese su dirección de correo electrónico y le enviaremos un mensaje con las instrucciones necesarias./i)
      await expect(subtitle).toBeVisible
    })
  })

  test.describe('email tests', () => {
    test('email input', async ({ page }) => {
      const emailLabel = await page.waitForSelector('label[for="email"]')
      const emailInput = await page.waitForSelector('input#email')

      const labelText = await emailLabel.innerText()
      const inputValue = await emailInput.getAttribute('placeholder')

      expect(labelText).toBe('Email')
      expect(inputValue).toBe('example@mail.com')
    })

    test('Email that can be written', async ({ page }) => {
      await page.type('[data-testid=correo-recuperacion-input]', 'johndoe@example.com')

      const inputValue = await page.getAttribute('[data-testid=correo-input]', 'value')
      expect(inputValue).toBe('johndoe@example.com')
    })
  })
})

test.describe('button test ', () => {
  test('Display button "recuperar contrseña" ', async ({ page }) => {
    const button = page.getByRole('button', { name: /recuperar contraseña/i })
    await expect(button).toBeVisible()
    await button.click()
    await page.goto('http: localhost:5173/notfound')
  })
})
