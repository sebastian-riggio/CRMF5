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

test.describe('Name input test', () => {
  test('Name call input and that can be written', async ({ page }) => {
    const inputValue = page.getByLabel('Título de convocatoria')
    const callInput = page.getByPlaceholder(/título de convocatoria/i)
    await expect(callInput).toBeVisible()
    await inputValue.fill('P8 Bootcamp Mixto')
    await expect(inputValue).toHaveValue('P8 Bootcamp Mixto')
  })
})

test.describe('theme input test', () => {
  test('Theme input and that can be written', async ({ page }) => {
    const themeValue = page.getByLabel('Temática')
    const themeInput = page.getByPlaceholder(/Temática/i)
    await expect(themeInput).toBeVisible()
    await themeValue.fill('Educación online')
    await expect(themeValue).toHaveValue('Educación online')
  })
})

test.describe('Calling input test', () => {
  test('Calling entity input and that can be written', async ({ page }) => {
    const callingValue = page.getByLabel('Entidad convocante')
    const callingInput = page.getByPlaceholder(/Entidad convocante/i)
    await expect(callingInput).toBeVisible()
    await callingValue.fill('Ayuntamiento Barcelona')
    await expect(callingValue).toHaveValue('Ayuntamiento Barcelona')
  })
})

test.describe('Departament input test', () => {
  test('Departament input and that can be written', async ({ page }) => {
    const callingValue = page.getByLabel('Departamento o centro gestor')
    const callingInput = page.getByPlaceholder(/Departamento o centro gestor/i)
    await expect(callingInput).toBeVisible()
    await callingValue.fill('F5- Barcelona')
    await expect(callingValue).toHaveValue('F5- Barcelona')
  })
})

test.describe('link to official publication input test', () => {
  test('Link to official publication input and that can be written', async ({ page }) => {
    const linkValue = page.getByLabel('Enlace a publicación oficial')
    const linkInput = page.getByLabel('Enlace a publicación oficial')
    await expect(linkInput).toBeVisible()
    await linkValue.fill('http://localhost5000')
    await expect(linkValue).toHaveValue('http://localhost5000')
  })
})

test.describe('Link to call bases input test', () => {
  test('Link to call bases input and that can be written', async ({ page }) => {
    const linkValue = page.getByLabel('Enlace a bases de convocatoria')
    const linkInput = page.getByLabel('Enlace a bases de convocatoria')
    await expect(linkInput).toBeVisible()
    await linkValue.fill('http://localhost5000')
    await expect(linkValue).toHaveValue('http://localhost5000')
  })
})

test.describe('Specific lines input test', () => {
  test('Specific lines input and that can be written', async ({ page }) => {
    const linesValue = page.getByLabel('Líneas específicas de trabajo')
    const linesInput = page.getByLabel('Líneas específicas de trabajo')
    await expect(linesInput).toBeVisible()
    await linesValue.fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
    await expect(linesValue).toHaveValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
  })
})

test.describe('Entities addressed input test', () => {
  test('Entities addressed input and that can be written', async ({ page }) => {
    const linesValue = page.getByLabel('Entidades a la que se dirige')
    const linesInput = page.getByLabel('Entidades a la que se dirige')
    await expect(linesInput).toBeVisible()
    await linesValue.fill('Entidades publicas')
    await expect(linesValue).toHaveValue('Entidades publicas')
  })
})

test.describe('Date input test', () => {
  test('Opening date input', async ({ page }) => {
    const openDateLabel = page.getByText('Fecha de apertura')
    await expect(openDateLabel).toBeVisible()

    const openDateInput = page.getByLabel('Fecha de apertura')
    await expect(openDateInput).toBeVisible()
    await openDateInput.click()
  })

  test('Deadline input', async ({ page }) => {
    const deadDateLabel = page.getByText('Fecha de cierre')
    await expect(deadDateLabel).toBeVisible()

    const deadDateInput = page.getByLabel('Fecha de cierre')
    await expect(deadDateInput).toBeVisible()
    await deadDateInput.click()
  })

  test('Resolution deadline input', async ({ page }) => {
    const resolutionDateLabel = page.getByText('Fecha límite de resolución ')
    await expect(resolutionDateLabel).toBeVisible()

    const resolutionDateInput = page.getByLabel('Fecha límite de resolución ')
    await expect(resolutionDateInput).toBeVisible()
    await resolutionDateInput.click()
  })
})

test.describe('Maximun execution period input test', () => {
  test('Maximum execution period input and that can be written', async ({ page }) => {
    const executionValue = page.getByLabel('Período máximo de ejecución')
    const executionInput = page.getByPlaceholder(/Período máximo de ejecución/i)
    await expect(executionInput).toBeVisible()
    await executionValue.fill('3')
    await expect(executionValue).toHaveValue('3')
  })
})

test.describe('Mandatory external audit  input test', () => {
  test('Mandatory external audit input', async ({ page }) => {
    const auditLabel = page.getByText('Auditoría externa obligatoria')
    await expect(auditLabel).toBeVisible()
  })
})

test.describe('Maximum requestable budget input test', () => {
  test('Maximum execution period input and that can be written', async ({ page }) => {
    const budgetValue = page.getByLabel('Presupuesto máximo solicitable')
    const budgetInput = page.getByPlaceholder(/€/i)
    await expect(budgetInput).toBeVisible()
    await budgetValue.fill('30€')
    await expect(budgetValue).toHaveValue('30€')
  })
})

test.describe('Information of interest input test', () => {
  test('Information of interest input and that can be written', async ({ page }) => {
    const infoValue = page.getByLabel('Información de interés')
    const infoInput = page.getByLabel('Información de interés')
    await expect(infoInput).toBeVisible()
    await infoValue.fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
    await expect(infoValue).toHaveValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
  })
})

test.describe('Attach files input test', () => {
  test('Technical memory input', async ({ page }) => {
    const memoryLabel = page.getByText('Memoria técnica')
    await expect(memoryLabel).toBeVisible()

    const memoryInput = page.locator('[data-testid="file-memory"]')
    await expect(memoryInput).toBeVisible()
  })

  test('Budget input', async ({ page }) => {
    const budgetDocLabel = page.getByText('Modelo Presupuesto')
    await expect(budgetDocLabel).toBeVisible()

    const budgetDocInput = page.locator('[data-testid="file-budget"]')
    await expect(budgetDocInput).toBeVisible()
  })

  test('Application form input', async ({ page }) => {
    const formLabel = page.getByText('Formulario solicitud')
    await expect(formLabel).toBeVisible()

    const formInput = page.locator('[data-testid="file-application-form"]')
    await expect(formInput).toBeVisible()
  })

  test('Other documentation input', async ({ page }) => {
    const documentLabel = page.getByText('Otra documentación')
    await expect(documentLabel).toBeVisible()

    const documentInput = page.locator('[data-testid="file-other-docs"]')
    await expect(documentInput).toBeVisible()
  })
})

test.describe('Buttons test', () => {
  test('Create button', async ({ page }) => {
    const button = await page.getByRole('button', { name: /Crear/i })
    await expect(button).toBeVisible()
    await button.click()
    // await expect(page).toHaveURL('http://localhost:5173/allcalls')
  })

  test('Cancel button', async ({ page }) => {
    const button = await page.getByRole('button', { name: /Cancelar/i })
    await expect(button).toBeVisible()
    await button.click()
    // await expect(page).toHaveURL('http://localhost:5173/allcalls')
  })
})
