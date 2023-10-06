import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/newproject')
})

test.describe('New project page', () => {
  test('Display form title', async ({ page }) => {
    const titleForm = page.getByRole('heading', { name: /nuevo proyecto/i })

    await expect(titleForm).toBeVisible()
  })

  // test('Display toast for starting a new project', async ({ page }) => {
  //   const toast = await page.waitForSelector('.toast')
  //   expect(toast).toBeVisible()
  //   const toastText = await toast.innerText()
  //   expect(toastText).toContain('¡Esta por crear un nuevo proyecto!')
  //   expect(toastText).toContain('Por favor asegúrate de que todos los campos estén completos.')
  // })
})

test.describe('Name input test', () => {
  test('Name input and that can be written', async ({ page }) => {
    const inputValue = page.getByLabel('Nombre del Proyecto')
    await inputValue.fill('Bootcamp P7 - Mixta')
    await expect(inputValue).toHaveValue('Bootcamp P7 - Mixta')
  })
})

test.describe('Department or management center input test', () => {
  test('Department or management center input', async ({ page }) => {
    const departamentLabel = page.getByText('Centro gestor')
    await expect(departamentLabel).toBeVisible()
  })
})

test.describe('Responsible input test', () => {
  test('Responsible input and that can be written', async ({ page }) => {
    const inputValue = page.getByLabel('Responsable de F5')
    const responsibleInput = page.getByPlaceholder(/persona responsable Factoria F5/i)
    await expect(responsibleInput).toBeVisible()
    await inputValue.fill('Raúl García')
    await expect(inputValue).toHaveValue('Raúl García')
  })
})

test.describe('Months of duration input test', () => {
  test('Months of duration input and that can be written', async ({ page }) => {
    const inputValue = page.getByLabel('Meses Duración')
    const monthsInput = page.getByPlaceholder(/Meses Duración/i)
    await expect(monthsInput).toBeVisible()
    await inputValue.fill('2')
    await expect(inputValue).toHaveValue('2')
  })
})

test.describe('Project budget input test', () => {
  test('Project budget input and that can be written', async ({ page }) => {
    const inputValue = page.getByLabel('Presupuesto del proyecto')
    const budgetInput = page.getByLabel('Presupuesto del proyecto')
    await expect(budgetInput).toBeVisible()
    await inputValue.fill('200')
    await expect(inputValue).toHaveValue('200')
  })
})

test.describe('Factoria budget input test', () => {
  test('Factoria budget input and that can be written', async ({ page }) => {
    const inputValue = page.getByLabel('Presupuesto de Factoria F5')
    const budgetInput = page.getByLabel('Presupuesto de Factoria F5')
    await expect(budgetInput).toBeVisible()
    await inputValue.fill('200')
    await expect(inputValue).toHaveValue('200')
  })
})

test.describe('Buttons test', () => {
  test('Create button', async ({ page }) => {
    const button = page.getByRole('button', { name: /Crear/i })
    await expect(button).toBeVisible()
    await button.click()
    // await expect(page).toHaveURL('http://localhost:5173/allprojects')
  })

  test('Cancel button', async ({ page }) => {
    const button = page.getByRole('button', { name: /Cancelar/i })
    await expect(button).toBeVisible()
    await button.click()
    // await expect(page).toHaveURL('http://localhost:5173/allprojects')
  })
})
