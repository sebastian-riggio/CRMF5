import { test, } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/registeruser');

  await page.getByText('Nombre y Apellido').click();
  await page.getByPlaceholder('Nombre y Apellido').click();
  
  await page.getByText('Departamento o centro gestor').click();
  await page.getByLabel('Departamento o centro gestor').click();
 
  await page.getByText('Área de trabajo en Factoria F5').click();
  await page.getByPlaceholder('área de trabajo').click();
 
  await page.getByText('Fecha inicio de actividad').click();
  await page.getByLabel('Fecha inicio de actividad').click();
  
  await page.getByText('Correo electrónico').click();
  await page.getByPlaceholder('correo electrónico').click();
  
  await page.getByText('Teléfono de contacto').click();
  await page.getByPlaceholder('telefono').click();
});