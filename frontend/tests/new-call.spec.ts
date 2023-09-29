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
  test('Name input', async ({ page }) => {
    const nameLabel = page.getByLabel('Título de convocatoria')
    await expect(nameLabel).toBeVisible()

    const nameInput = page.getByPlaceholder(/título de convocatoria/i)
    await expect(nameInput).toBeVisible()
  })

  test('Name and lastname that can be written', async ({ page }) => {
    await page.type('[data-testid=titulo-input]', 'P8 Bootcamp Mixto')

    const inputValue = await page.getAttribute('[data-testid=titulo-input]', 'value')
    expect(inputValue).toBe('P8 Bootcamp Mixto')
  })
})

test.describe('theme input test', () => {
  test('Theme input', async ({ page }) => {
    const themeLabel = page.getByLabel('Temática')
    await expect(themeLabel).toBeVisible()

    const themeInput = page.getByPlaceholder(/Temática/i)
    await expect(themeInput).toBeVisible()
  })

  test('Theme that can be written', async ({ page }) => {
    await page.type('[data-testid=theme-input]', 'Educación online')

    const inputValue = await page.getAttribute('[data-testid=theme-input]', 'value')
    expect(inputValue).toBe('Educación online')
  })
})

test.describe('Calling input test', () => {
  test('Calling entity input', async ({ page }) => {
    const entityLabel = page.getByLabel('Entidad convocante')
    await expect(entityLabel).toBeVisible()

    const entityInput = page.getByPlaceholder(/Entidad convocante/i)
    await expect(entityInput).toBeVisible()
  })

  test('Calling that can be written', async ({ page }) => {
    await page.type('[data-testid=entidad-input]', 'Ayuntamiento Barcelona')

    const inputValue = await page.getAttribute('[data-testid=entidad-input]', 'value')
    expect(inputValue).toBe('Ayuntamiento Barcelona')
  })
})

test.describe('Departament input test', () => {
  test('Department or management center input', async ({ page }) => {
    const departamentLabel = page.getByText('Departamento o centro gestor')
    await expect(departamentLabel).toBeVisible()

    const departamentInput = page.getByPlaceholder(/Departamento o centro gestor/i)
    await expect(departamentInput).toBeVisible()
  })

  test('Department or management center that can be written', async ({ page }) => {
    await page.type('[data-testid=dpto-input]', 'F5- Barcelona')

    const inputValue = await page.getAttribute('[data-testid=dpto-input]', 'value')
    expect(inputValue).toBe('F5- Barcelona')
  })
})

test.describe('link to official publication input test', () => {
  test('Link to official publication input', async ({ page }) => {
    const linkLabel = page.getByText('Enlace a publicación oficial')
    await expect(linkLabel).toBeVisible()

    const linkInput = page.getByLabel('Enlace a publicación oficial')
    await expect(linkInput).toBeVisible()
  })

  test('Link to official publication that can be written', async ({ page }) => {
    await page.type('[data-testid=link-oficial-input]', 'http://localhost5000')

    const inputValue = await page.getAttribute('[data-testid=link-oficial-input]', 'value')
    expect(inputValue).toBe('http://localhost5000')
  })
})
test.describe('Link to call bases input test', () => {
  test('Link to call bases input', async ({ page }) => {
    const linkLabel = page.getByText('Enlace a bases de convocatoria')
    await expect(linkLabel).toBeVisible()

    const linkInput = page.getByLabel('Enlace a bases de convocatoria')
    await expect(linkInput).toBeVisible()
  })
  test('Link to call bases that can be written', async ({ page }) => {
    await page.type('[data-testid=link-bases-input]', 'http://localhost5000')

    const inputValue = await page.getAttribute('[data-testid=link-bases-input]', 'value')
    expect(inputValue).toBe('http://localhost5000')
  })
})

test.describe('Specific lines input test', () => {
  test('Specific lines of work input', async ({ page }) => {
    const linesLabel = page.getByText('Líneas específicas de trabajo')
    await expect(linesLabel).toBeVisible()

    const linesInput = page.getByLabel('Líneas específicas de trabajo')
    await expect(linesInput).toBeVisible()
  })

  test('Specific lines of work that can be written', async ({ page }) => {
    await page.type('[data-testid=lineas-input]', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')

    const inputValue = await page.getAttribute('[data-testid=lineas-input]', 'value')
    expect(inputValue).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
  })
})

test.describe('Entities addressed input test', () => {
  test('Entities addressed input', async ({ page }) => {
    const entitesLabel = page.getByText('Entidades a la que se dirige')
    await expect(entitesLabel).toBeVisible()

    const entitesInput = page.getByPlaceholder(/Entidades a las que se dirige/i)
    await expect(entitesInput).toBeVisible()
  })

  test('Entities addressed that can be written', async ({ page }) => {
    await page.type('[data-testid=entidad-especifica-input]', 'Entidades publicas')

    const inputValue = await page.getAttribute('[data-testid=entidad-especifica-input]', 'value')
    expect(inputValue).toBe('Entidades publicas')
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
  test('Maximum execution period input', async ({ page }) => {
    const periodLabel = page.getByText('Período máximo de ejecución')
    await expect(periodLabel).toBeVisible()

    const periodInput = page.getByPlaceholder(/Período máximo de ejecución/i)
    await expect(periodInput).toBeVisible()
  })

  test('Maximum execution period that can be written', async ({ page }) => {
    await page.type('[data-testid=maximo-input]', '3 meses')

    const inputValue = await page.getAttribute('[data-testid=maximo-input]', 'value')
    expect(inputValue).toBe('3 meses')
  })
})

test.describe('Mandatory external audit  input test', () => {
  test('Mandatory external audit input', async ({ page }) => {
    const auditLabel = page.getByText('Auditoría externa obligatoria')
    await expect(auditLabel).toBeVisible()
  })
})

test.describe('Maximum requestable budget input test', () => {
  test('Maximum requestable budget input', async ({ page }) => {
    const budgetLabel = page.getByText('Presupuesto máximo solicitable')
    await expect(budgetLabel).toBeVisible()

    const budgetInput = page.getByPlaceholder(/€/i)
    await expect(budgetInput).toBeVisible()
  })

  test('Maximum requestable budget that can be written', async ({ page }) => {
    await page.type('[data-testid=presu-input]', '30€')

    const inputValue = await page.getAttribute('[presu-input]', 'value')
    expect(inputValue).toBe('30€')
  })
})

test.describe('Information of interest input test', () => {
  test('Information of interest input', async ({ page }) => {
    const infoLabel = page.getByText('Información de interés')
    await expect(infoLabel).toBeVisible()

    const infoInput = page.getByLabel('Información de interés')
    await expect(infoInput).toBeVisible()
  })

  test('Information of interest that can be written', async ({ page }) => {
    await page.type('[data-testid=informacion-input]', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ')

    const inputValue = await page.getAttribute('[data-testid=informacion-input]', 'value')
    expect(inputValue).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ')
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
