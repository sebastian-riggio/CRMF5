import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/project/:id')
})

// test.describe('Project details page', () => {
//   test('Show form backend title', async ({ page }) => {
//   })
// })

test.describe('Project code test', () => {
  test('Project code title', async ({ page }) => {
    const nameLabel = page.getByText('Codigo de proyecto:')
    await expect(nameLabel).toBeVisible()
  })

//   test('Project code from backend', async ({ page }) => {
//   })
})

test.describe('Management Center test', () => {
  test('Management Center title', async ({ page }) => {
    const departamentLabel = page.getByText('Centro gestor:')
    await expect(departamentLabel).toBeVisible()
  })
//   test('Management Center from backend', async ({ page }) => {
//   })
})

test.describe('Responsible test', () => {
  test('Responsible title', async ({ page }) => {
    const departamentLabel = page.getByText('Responsable:')
    await expect(departamentLabel).toBeVisible()
  })
  //   test('Responsible from backend', async ({ page }) => {
  //   })
})

test.describe('Project duration test', () => {
  test('Project duration title', async ({ page }) => {
    const departamentLabel = page.getByText('Duracion de proyecto:')
    await expect(departamentLabel).toBeVisible()
  })
  //   test('Project duration from backend', async ({ page }) => {
  //   })
})

test.describe('Start date test', () => {
  test('Start date title', async ({ page }) => {
    const departamentLabel = page.getByText('Fecha de inicio:')
    await expect(departamentLabel).toBeVisible()
  })
  //   test('Start date from backend', async ({ page }) => {
  //   })
})

test.describe('Deadline test', () => {
  test('Deadline title', async ({ page }) => {
    const departamentLabel = page.getByText('Fecha de cierre:')
    await expect(departamentLabel).toBeVisible()
  })
  //   test('Deadline from backend', async ({ page }) => {
  //   })
})

test.describe('Overall budget test', () => {
  test('Overall budget title', async ({ page }) => {
    const departamentLabel = page.getByText('Presupuesto global:')
    await expect(departamentLabel).toBeVisible()
  })
  //   test('Overall budget from backend', async ({ page }) => {
  //   })
})

test.describe('Factoria Budget test', () => {
  test('Factoria budget title', async ({ page }) => {
    const departamentLabel = page.getByText('Presupuesto Factoria:')
    await expect(departamentLabel).toBeVisible()
  })
  //   test('Factoria budget from backend', async ({ page }) => {
  //   })
})

test.describe('Button test', () => {
  test('Display button "volver atras" ', async ({ page }) => {
    const button = page.getByTestId('go-back-input')
    await expect(button).toBeVisible()
    await button.click()
    await page.goto('http://localhost:5173/allprojects')
  })
})
