import {test, describe, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:5173/allprojects')
})

  


  test.describe('All projects page', async () => {
    test('Displays title', async ({page}) => {
      const title = await page.getByRole('heading', {name: /nuestros proyectos/i})
      await expect(title).toBeVisible()
    })
  })