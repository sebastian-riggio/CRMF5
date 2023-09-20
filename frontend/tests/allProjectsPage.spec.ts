import { test, describe, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/allprojects')
})

test.describe('All projects page', () => {
  test('Displays title', async ({ page }) => {
    const title = await page.getByRole('heading', { name: /nuestros proyectos/i })
    await expect(title).toBeVisible()
  })

  test('Displays table with 10 rows', async ({ page }) => {
    const tableProjects = await page.locator('table#allProjectsTable tbody')
    const trs = await tableProjects.locator('tr')
    await expect(trs).toHaveCount(10)
    console.log(trs)
  })

  test('Pagination buttons', async ({ page }) => {
    const prevBtn = await page.getByRole('button', { name: 'Previous' })

    await expect(prevBtn).toBeDisabled()
  })

  test('Search input',async ({ page }) => {
    const inputSearch = await page.getByRole('textbox', { name: /filter emails/i })
    await inputSearch.fill('later')
    
    await expect(inputSearch).toHaveValue('later')
  })
})
