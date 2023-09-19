import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/')
})

test.describe('Login', () => {
  test('Display isologo factoria', async ({ page }) => {
    const isologo = await page.getByAltText('isologo-f5')
    await expect(isologo).toBeVisible()
  })
})

test.describe('Form Login "Cuenta" ', () => {
  test('Display form title', async ({ page }) => {
    const titleForm = await page.getByRole('heading', { name: /Iniciar sesión/i })
    await expect(titleForm).toBeVisible()
  })

  test('Display sub title', async ({ page }) => {
    const subtitle = await page.getByText(/ Inicie sesión con su email y contraseña para acceder al sistema./i)
    await expect(subtitle).toBeVisible
  })

  test('email input', async ({ page }) => {
    const emailLabel = await page.waitForSelector('label[for="email"]')
    const emailInput = await page.waitForSelector('input#email')

    const labelText = await emailLabel.innerText()
    const inputValue = await emailInput.getAttribute('placeholder')

    expect(labelText).toBe('Email')
    expect(inputValue).toBe('example@mail.com')
  })

  test('Display button "entrar" ', async ({ page }) => {
    const button = await page.getByRole('button', { name: /Entrar/i })
    await expect(button).toBeVisible()
    await button.click()
    await expect(page).toHaveURL('http://localhost:5173/home')
  })
})


// REVISAR PORQUE NO PASAN LOS TEST AL HACER CLICK EN CONTRASEÑA!!!! 

// test.describe('Form Login "Constraseña" ', () => {
//   test('Display form title', async ({ page }) => {
//     const passwordButton = page.getByRole('button', {name: /Contraseña/i }); 
//     await passwordButton.click()

//     const title = await page.getByRole('heading', { name: '¿Olvidó su contraseña?' })
//     await expect(title).toBeVisible({ timeout: 10000 })
//       })

//   test('Display sub title', async ({ page }) => {
//     const subtitle = await page.getByText(/ Le ofrecemos la opción de recuperar su contraseña de forma sencilla y segura. Para ello, ingrese su dirección de correo electrónico y le enviaremos un mensaje con las instrucciones necesarias./i)
//     await expect(subtitle).toBeVisible
//   })

//   test('email input', async ({ page }) => {
//     const emailLabel = await page.waitForSelector('label[for="email"]')
//     const emailInput = await page.waitForSelector('input#email')

//     const labelText = await emailLabel.innerText()
//     const inputValue = await emailInput.getAttribute('placeholder')

//     expect(labelText).toBe('Email')
//     expect(inputValue).toBe('example@mail.com')
//   })

//   test('Display button "recuperar contrseña" ', async ({ page }) => {
//     const button = await page.getByRole('button', { name: /recuperar contraseña/i })
//     await expect(button).toBeVisible()
//     await button.click()
//     await page.goto('http://localhost:5173/notfound')
//   })
// })
