import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/allprojects')
})

test.describe('All projects page', () => {
  test.describe('Title test', () => {
    test('Displays title', async ({ page }) => {
      const title = page.getByRole('heading', { name: /nuestros proyectos/i })
      await expect(title).toBeVisible()
    })
  })

  test.describe('Table project test', () => {
    test('Displays table with 10 rows', async ({ page }) => {
      const tableProjects = page.locator('table#allProjectsTable tbody')
      const trs = tableProjects.locator('tr')
      await expect(trs).toHaveCount(10)
      console.log(trs)
    })
  })

  test.describe('Buttons test', () => {
    test('Next buttons', async ({ page }) => {
      const sigBtn = page.getByRole('button', { name: /siguiente/i })
      await expect(sigBtn).toBeVisible()
      await sigBtn.click()
    })

    test('Back buttons', async ({ page }) => {
      const antBtn = page.getByRole('button', { name: 'Anterior' })
      await expect(antBtn).toBeVisible()
    })

    test('Go back button ', async ({ page }) => {
      const button = page.getByTestId('go-back-input')
      await expect(button).toBeVisible()
      await button.click()
      await page.goto('http://localhost:5173/')
    })
  })
})

test.describe('Search test', () => {
  test('Search input', async ({ page }) => {
    const inputSearch = page.getByRole('textbox', { name: /Buscar proyecto.../i })
    await inputSearch.fill('later')

    await expect(inputSearch).toHaveValue('later')
  })
})
