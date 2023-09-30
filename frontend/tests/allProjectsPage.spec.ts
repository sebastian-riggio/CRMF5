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
      const prevBtn = page.locator('[data-testid=previous-page-button]')
      await expect(prevBtn).toBeVisible()
    })

    test('Back buttons', async ({ page }) => {
      const prevBtn = page.locator('[data-testid=next-page-button]')
      await expect(prevBtn).toBeVisible()
    })
  })

  test.describe('Search test', () => {
    test('Search input', async ({ page }) => {
      const inputSearch = page.getByRole('textbox', { name: /Filtrar Centro-Gestor.../i })
      await inputSearch.fill('later')

      await expect(inputSearch).toHaveValue('later')
    })
  })
})
