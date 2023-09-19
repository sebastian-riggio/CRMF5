import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/newproject')
})

test.describe('New project page', () => {

    test('Display form title', async ({ page }) => {
      const titleForm = page.getByRole('heading', { name: /nuevo proyecto/i})
    
      await expect(titleForm).toBeVisible();
      })
  
    test('Display sub title', async ({ page }) => {
      const subtitle = page.getByText( /Vamos a dar comienzo a un nuevo proyecto. ¡Por favor asegurate de que todos los campos estén completos!/i)
  
      await expect(subtitle).toBeVisible()
    })
  })

  test.describe('Form new project', () => {
    test('Name input', async ({ page }) => {
      const nameLabel = page.getByLabel('Nombre del Proyecto')
      await expect(nameLabel).toBeVisible()
    
      const nameInput = page.getByPlaceholder(/Nombre del proyecto/i)
      await expect(nameInput).toBeVisible()
     })
    
     test('Department or management center input', async ({ page }) => {
      const departamentLabel = page.getByText('Centro gestor')
      await expect(departamentLabel).toBeVisible()
    
      const departamentInput = page.getByLabel('Selecciona el departamento de Factoria F5')
      await expect(departamentInput).toBeVisible()
      await departamentInput.click()
     })
    
     test('responsible input', async ({ page }) => {
      const responsibleLabel = page.getByText('Responsable F5')
      await expect(responsibleLabel).toBeVisible()
    
      const responsibleInput = page.getByPlaceholder(/persona responsable Factoria F5/i)
      await expect(responsibleInput).toBeVisible()
       })
    
       test('Months of duration input', async ({ page }) => {
        const monthsLabel = page.getByText('Meses Duración')
        await expect(monthsLabel).toBeVisible()
      
        const monthsInput = page.getByLabel(/Meses Duración/i)
        await expect(monthsInput).toBeVisible()
       })
    
       test('Project budget input', async ({ page }) => {
        const budgetLabel = page.getByText('Presupuesto proyecto')
        await expect(budgetLabel).toBeVisible()
      
        const budgetInput = page.getByPlaceholder(/presupuesto proyecto/i)
        await expect(budgetInput).toBeVisible()
         })
    
      test('Factoria budget input', async ({ page }) => {
        const budgetFactLabel = page.getByText('Presupuesto Factoria F5')
        await expect(budgetFactLabel).toBeVisible()
        
        const budgetFactInput = page.getByPlaceholder(/Presupuesto Factoria F5/i)
        await expect(budgetFactInput).toBeVisible()
         })
     })