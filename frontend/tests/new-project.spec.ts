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
      const workLabel = page.getByText('Responsable F5')
      await expect(workLabel).toBeVisible()
    
      const workInput = page.getByPlaceholder(/persona responsable Factoria F5/i)
      await expect(workInput).toBeVisible()
       })
    
       test('Months of duration input', async ({ page }) => {
        const dateLabel = page.getByText('Meses Duración')
        await expect(dateLabel).toBeVisible()
      
        const dateInput = page.getByLabel(/Meses Duración/i)
        await expect(dateInput).toBeVisible()
       })
    
       test('Project budget input', async ({ page }) => {
        const emailLabel = page.getByText('Presupuesto proyecto')
        await expect(emailLabel).toBeVisible()
      
        const emailInput = page.getByPlaceholder(/presupuesto proyecto/i)
        await expect(emailInput).toBeVisible()
         })
    
      test('Factoria budget input', async ({ page }) => {
        const phoneLabel = page.getByText('Presupuesto Factoria F5')
        await expect(phoneLabel).toBeVisible()
        
        const phoneInput = page.getByPlaceholder(/Presupuesto Factoria F5/i)
        await expect(phoneInput).toBeVisible()
         })
     })