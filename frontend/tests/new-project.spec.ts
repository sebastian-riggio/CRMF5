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
  test('Name input', async ({ page }) => {
    const nameLabel = page.getByLabel('Nombre del Proyecto')
    await expect(nameLabel).toBeVisible()

    const nameInput = page.getByPlaceholder(/Nombre del proyecto/i)
    await expect(nameInput).toBeVisible()
  })

  test('Name project that can be written', async ({ page }) => {
    await page.type('[data-testid=project-input]', 'Bootcamp P7 - Mixta')

    const inputValue = await page.getAttribute('[data-testid=project-input]', 'value')
    await expect(inputValue).toBe('Bootcamp P7 - Mixta')
  })
})

test.describe('Department or management center input test', () => {
  test('Department or management center input', async ({ page }) => {
    const departamentLabel = page.getByText('Centro gestor')
    await expect(departamentLabel).toBeVisible()
  })
})

test.describe('Responsible input test', () => {
  test('Responsible input', async ({ page }) => {
    const responsibleLabel = page.getByText('Responsable de F5')
    await expect(responsibleLabel).toBeVisible()

    const responsibleInput = page.getByPlaceholder(/persona responsable Factoria F5/i)
    await expect(responsibleInput).toBeVisible()
  })
  test('Responsible that can be written', async ({ page }) => {
    await page.type('[data-testid=responsable-input]', 'Raúl García')

    const inputValue = await page.getAttribute('[data-testid=responsable-input]', 'value')
    await expect(inputValue).toBe('Raúl García')
  })
})

test.describe('Months of duration input test', () => {
  test('Months of duration input', async ({ page }) => {
    const monthsLabel = page.getByText('Meses Duración')
    await expect(monthsLabel).toBeVisible()

    const monthsInput = page.getByLabel(/Meses Duración/i)
    await expect(monthsInput).toBeVisible()
  })

  test('Months of duration that can be written', async ({ page }) => {
    await page.type('[data-testid=month-input]', '2 meses')

    const inputValue = await page.getAttribute('[data-testid=month-input]', 'value')
    expect(inputValue).toBe('')
  })
})

test.describe('Project budget input test', () => {
  test('Project budget input', async ({ page }) => {
    const budgetLabel = page.getByText('Presupuesto del proyecto')
    await expect(budgetLabel).toBeVisible()

    const budgetInput = page.getByLabel('Presupuesto del proyecto')
    await expect(budgetInput).toBeVisible()
  })

  test('Project budget that can be written', async ({ page }) => {
    await page.type('[data-testid=project-budget-input]', '200 €')

    const inputValue = await page.getAttribute('[data-testid=project-budget-input]', 'value')
    await expect(inputValue).toBe('')
  })
})

test.describe('Factoria budget input test', () => {
  test('Factoria budget input', async ({ page }) => {
    const budgetFactLabel = page.getByText('Presupuesto de Factoria F5')
    await expect(budgetFactLabel).toBeVisible()

    const budgetFactInput = page.getByLabel('Presupuesto de Factoria F5')
    await expect(budgetFactInput).toBeVisible()
  })

  test('Factoria budget that can be written', async ({ page }) => {
    await page.type('[data-testid=factoria-budget-input]', '200 €')

    const inputValue = await page.getAttribute('[data-testid=factoria-budget-input]', 'value')
    expect(inputValue).toBe('200 €')
  })
})

test.describe('Buttons test', () => {
  test('Create button', async ({ page }) => {
    const button = await page.getByRole('button', { name: /Crear/i })
    await expect(button).toBeVisible()
    await button.click()
    // await expect(page).toHaveURL('http://localhost:5173/allprojects')
  })

  test('Cancel button', async ({ page }) => {
    const button = await page.getByRole('button', { name: /Cancelar/i })
    await expect(button).toBeVisible()
    await button.click()
    // await expect(page).toHaveURL('http://localhost:5173/allprojects')
  })
})
