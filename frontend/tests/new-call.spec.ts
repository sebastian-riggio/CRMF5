import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/newcall')
})

test.describe('New call page', () => {
  test('Display form title', async ({ page }) => {
    const titleForm = page.getByRole('heading', {
      name: /nueva convocatoria/i
    })

    await expect(titleForm).toBeVisible()
  })
})

test.describe('Form register new user', () => {
  test('Name input', async ({ page }) => {
    const nameLabel = page.getByLabel('Título de convocatoria')
    await expect(nameLabel).toBeVisible()

    const nameInput = page.getByPlaceholder(/título de convocatoria/i)
    await expect(nameInput).toBeVisible()
  })

  test('Theme input', async ({ page }) => {
    const themeLabel = page.getByLabel('Temática')
    await expect(themeLabel).toBeVisible()

    const themeInput = page.getByPlaceholder(/Temática/i)
    await expect(themeInput).toBeVisible()
  })

  test('Calling entity input', async ({ page }) => {
    const entityLabel = page.getByLabel('Entidad convocante')
    await expect(entityLabel).toBeVisible()

    const entityInput = page.getByPlaceholder(/Entidad convocante/i)
    await expect(entityInput).toBeVisible()
  })

  test('Department or management center input', async ({ page }) => {
    const departamentLabel = page.getByText('Departamento o centro gestor')
    await expect(departamentLabel).toBeVisible()

    const departamentInput = page.getByPlaceholder(/Departamento o centro gestor/i)
    await expect(departamentInput).toBeVisible()
  })

  test('Link to official publication input', async ({ page }) => {
    const linkLabel = page.getByText('Enlace a publicación oficial')
    await expect(linkLabel).toBeVisible()

    const linkInput = page.locator('input[name="url"]')
    await expect(linkInput).toBeVisible()
  })

  test('Link to call bases input', async ({ page }) => {
    const linkLabel = page.getByText('Enlace a bases de convocatoria')
    await expect(linkLabel).toBeVisible()

    const linkInput = page.locator('input[name="urlbases"]')
    await expect(linkInput).toBeVisible()
  })

  test('Specific lines of work input', async ({ page }) => {
    const linesLabel = page.getByText('Líneas específicas de trabajo')
    await expect(linesLabel).toBeVisible()

    const linesInput = page.locator('textarea[name="texto"]')
    await expect(linesInput).toBeVisible()
  })

  test('Entities addressed input', async ({ page }) => {
    const entitesLabel = page.getByText('Entidades a la que se dirige')
    await expect(entitesLabel).toBeVisible()

    const entitesInput = page.getByPlaceholder(/Entidades a la que se dirige/i)
    await expect(entitesInput).toBeVisible()
  })

  test('Opening date input', async ({ page }) => {
    const dateLabel = page.getByText('Fecha de apertura')
    await expect(dateLabel).toBeVisible()

    const dateInput = page.getByPlaceholder(/Fecha de apertura/i)
    await expect(dateInput).toBeVisible()
    await dateInput.click()
  })

  test('Deadline input', async ({ page }) => {
    const dateLabel = page.getByText('Fecha de cierre')
    await expect(dateLabel).toBeVisible()

    const dateInput = page.getByPlaceholder(/Fecha de cierre/i)
    await expect(dateInput).toBeVisible()
    await dateInput.click()
  })

  test('Resolution deadline input', async ({ page }) => {
    const dateLabel = page.getByText('Fecha límite de resolución')
    await expect(dateLabel).toBeVisible()

    const dateInput = page.getByPlaceholder(/Fecha límite de resolución/i)
    await expect(dateInput).toBeVisible()
    await dateInput.click()
  })

  test('Maximum execution period input', async ({ page }) => {
    const periodLabel = page.getByText('Período máximo de ejecución')
    await expect(periodLabel).toBeVisible()

    const periodInput = page.getByPlaceholder(/Período máximo de ejecución/i)
    await expect(periodInput).toBeVisible()
  })

  test('Justification deadline input', async ({ page }) => {
    const dateLabel = page.getByText('Fecha límite de justificación')
    await expect(dateLabel).toBeVisible()

    const dateInput = page.getByPlaceholder(/Fecha límite de justificación/i)
    await expect(dateInput).toBeVisible()
    await dateInput.click()
  })

  test('Mandatory external audit input', async ({ page }) => {
    const auditLabel = page.getByText('Auditoría externa obligatoria')
    await expect(auditLabel).toBeVisible()
  })

  test('Maximum requestable budget input', async ({ page }) => {
    const budgetLabel = page.getByText('Presupuesto máximo solicitable')
    await expect(budgetLabel).toBeVisible()

    const budgetInput = page.getByPlaceholder(/€/i)
    await expect(budgetInput).toBeVisible()
  })

  test('Information of interest input', async ({ page }) => {
    const budgetLabel = page.getByText('Información de interés')
    await expect(budgetLabel).toBeVisible()

    const budgetInput = page.getByPlaceholder(/escriba aqui.../i)
    await expect(budgetInput).toBeVisible()
  })

  test('Technical memory input', async ({ page }) => {
    const memoryLabel = page.getByText('Memoria técnica')
    await expect(memoryLabel).toBeVisible()

    const memoryInput = page.getByPlaceholder(/seleccionar archivo/i)
    await expect(memoryInput).toBeVisible()
  })

  test('Budget input', async ({ page }) => {
    const budgetLabel = page.getByText('Presupuesto')
    await expect(budgetLabel).toBeVisible()

    const budgetInput = page.getByPlaceholder(/seleccionar archivo/i)
    await expect(budgetInput).toBeVisible()
  })

  test('Application form input', async ({ page }) => {
    const formLabel = page.getByText('Formulario solicitud')
    await expect(formLabel).toBeVisible()

    const formInput = page.getByPlaceholder(/seleccionar archivo/i)
    await expect(formInput).toBeVisible()
  })

  test('Other documentation input', async ({ page }) => {
    const documentLabel = page.getByText('Otra documentación')
    await expect(documentLabel).toBeVisible()

    const documentInput = page.getByPlaceholder(/seleccionar archivo/i)
    await expect(documentInput).toBeVisible()
  })
})
