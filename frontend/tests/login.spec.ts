import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/login')
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

  test.describe('Email input test', () => {
    test('Email input and that can be written', async ({ page }) => {
      const inputValue = page.getByLabel('Email')
      await inputValue.fill('johndoe@example.com')
      await expect(inputValue).toHaveValue('johndoe@example.com')
    })
  })

  test.describe('Button test', () => {
    test('Display button "entrar" ', async ({ page }) => {
      const button = page.getByRole('button', { name: /Entrar/i })
      await expect(button).toBeVisible()
      await button.click()
      // await expect(page).toHaveURL('http://localhost:5173/')
    })
  })
})

test.describe('Form Login "Contraseña" ', () => {
  test.describe('title tests', () => {
    test('Password button', async ({ page }) => {
      const passwordButton = page.getByRole('button', { name: 'Contraseña' })
      await passwordButton.click()
    })

    test('Display form title', async ({ page }) => {
      const title = page.getByText('¿Olvidó su contraseña?')
      await expect(title).toBeVisible()
    })

    test('Display sub title', async ({ page }) => {
      const subtitle = page.getByText(/ Le ofrecemos la opción de recuperar su contraseña de forma sencilla y segura. Para ello, ingrese su dirección de correo electrónico y le enviaremos un mensaje con las instrucciones necesarias./i)
      await expect(subtitle).toBeVisible
    })
  })

  test.describe('email tests', () => {
    test('Email input and that can be written', async ({ page }) => {
      const inputValue = page.getByLabel('Email')
      await inputValue.fill('johndoe@example.com')
      await expect(inputValue).toHaveValue('johndoe@example.com')
    })
  })
})

test('Display button "recuperar contrseña" ', async ({ page }) => {
  const button = page.getByRole('button', { name: /recuperar contraseña/i })
  await expect(button).toBeVisible()
  await button.click()
  // await page.goto('http://localhost:5173/notfound')
})
