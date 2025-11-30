import { test, expect } from '@playwright/test';

/**
 * Pruebas end-to-end que verifican el funcionamiento de la aplicación
 */

test.describe('Pruebas del sistema', () => {
  test('la aplicación carga correctamente', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    
    // Verificar elementos básicos de la página de bienvenida
    await expect(page.getByText('CognitivaCare')).toBeVisible();
    await expect(page.getByText('CognitivaCareTu compañero de')).toBeVisible();
    await expect (page.getByRole('button', { name: 'Iniciar Sesión' })).toBeVisible();
  });

  test('el flujo básico de registro funciona', async ({ page }) => {
    const timestamp = Date.now();
    const testEmail = `prueba-${timestamp}@test.com`;
    
    await page.goto('http://localhost:3000/');
    
    // Abrir modal de registro
    await page.getByRole('button', { name: '¿No tienes cuenta? Regístrate' }).click();
    await expect(page.getByText('CognitivaCareTu compañero de')).toBeVisible();
    
    // Llenar formulario básico
    await page.getByRole('textbox', { name: 'Nombre' }).click();
    await page.getByRole('textbox', { name: 'Nombre' }).fill('Smoke Test');
    await page.getByRole('button', { name: '👤 Paciente' }).click();
    await page.getByRole('textbox', { name: 'Correo Electrónico' }).click();
    await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill(testEmail);
    await page.getByRole('textbox', { name: 'Contraseña' }).click();
    await page.getByRole('textbox', { name: 'Contraseña' }).first().fill('test123');

    
    // Registrar
    await page.getByRole('button', { name: 'Registrarse' }).click();
    await page.waitForTimeout(2000);
    
    // Verificar que llega al dashboard
    await expect(page.getByText('Menú Principal')).toBeVisible();
  });

  test('puede navegar por las secciones principales', async ({ page }) => {
    // Crear usuario rápido
    const timestamp = Date.now();
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill(`estermolinagarcia@gmail.com`);
    await page.getByRole('textbox', { name: 'Contraseña' }).first().fill('123456');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
    await page.waitForTimeout(2000);
  
    // Ir a resultados
    await page.getByRole('button', { name: 'Resultados Consulta tu' }).click();
    await expect(page.getByRole('main').filter({ hasText: 'Resultados y ProgresoPuntuaci' })).toBeVisible();
    await expect (page.getByRole('heading', { name: 'Puntuación General' })).toBeVisible();
     await expect (page.getByRole('heading', { name: 'Resultados por Área Cognitiva' })).toBeVisible();
    
    // Volver al inicio
    await page.getByRole('button', { name: 'Inicio' }).click();
    await page.waitForTimeout(500);
    await expect(page.getByText('Menú Principal')).toBeVisible();
  });

  test('el sidebar es visible y funcional', async ({ page }) => {
   const timestamp = Date.now();
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill(`estermolinagarcia@gmail.com`);
    await page.getByRole('textbox', { name: 'Contraseña' }).first().fill('123456');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
    await page.waitForTimeout(2000);
    
    // Verificar sidebar
    await expect(page.getByText('CognitivaCareEster Molina')).toBeVisible();
    await expect (page.locator('div').filter({ hasText: /^CognitivaCare$/ }).first()).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^Menú PrincipalInicioActividadesResultados$/ }).first()).toBeVisible();
  });

  test('puede cerrar sesión', async ({ page }) => {
   const timestamp = Date.now();
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill(`estermolinagarcia@gmail.com`);
    await page.getByRole('textbox', { name: 'Contraseña' }).first().fill('123456');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
    await page.waitForTimeout(2000);
    
    // Cerrar sesión
    await page.getByRole('button', { name: 'Cerrar Sesión' }).click();
    await page.waitForTimeout(1000);
    
    // Verificar que vuelve a la pantalla de bienvenida
    await expect(page.getByText('CognitivaCareTu compañero de')).toBeVisible();
  });

  test('las 5 áreas cognitivas son visibles', async ({ page }) => {
   const timestamp = Date.now();
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill(`estermolinagarcia@gmail.com`);
    await page.getByRole('textbox', { name: 'Contraseña' }).first().fill('123456');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
    await page.waitForTimeout(2000);
    
    // Verificar las 5 áreas
    await page.getByRole('button', { name: 'Actividades Realiza' }).click();
    await expect(page.getByRole('button', { name: 'Memoria Memoria Ejercita tu' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Atención Atención Mejora tu' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Lenguaje Lenguaje Fortalece' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Funciones Ejecutivas' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Percepción Percepción Agudiza' })).toBeVisible();
  });

  test('puede entrar a un área cognitiva', async ({ page }) => {
   const timestamp = Date.now();
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill(`estermolinagarcia@gmail.com`);
    await page.getByRole('textbox', { name: 'Contraseña' }).first().fill('123456');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
    await page.waitForTimeout(2000);
    
    // Entrar en un área
    await page.getByRole('button', { name: 'Actividades Realiza' }).click();
    await page.waitForTimeout(500);
    
    // Verificar que muestra actividades
    await page.getByRole('button', { name: 'Memoria Memoria Ejercita tu' }).click();
    await expect(page.getByText('actividades disponiblesRecordar PalabrasMemoriza una lista de palabras y recué')).toBeVisible();
  });

  test('puede iniciar una actividad', async ({ page }) => {
   const timestamp = Date.now();
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill(`estermolinagarcia@gmail.com`);
    await page.getByRole('textbox', { name: 'Contraseña' }).first().fill('123456');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
    await page.waitForTimeout(2000);
    // Iniciar una actividad
    await page.getByRole('button', { name: 'Actividades Realiza' }).click();
    await page.getByRole('button', { name: 'Memoria Memoria Ejercita tu' }).click();
    await page.getByRole('button', { name: 'Recordar Palabras Recordar' }).click();
    // Verificar que inicia la actividad
    await expect(page.getByText('Volver al ListadoDetalle de la ActividadRecordar PalabrasMemoriza una lista de')).toBeVisible();
    await page.getByRole('button', { name: 'Iniciar Actividad' }).click();
    await expect(page.getByText('Instrucciones: Memoriza una')).toBeVisible();
});

  test('puede realizar una actividad y acabarla', async ({ page }) => {
   const timestamp = Date.now();
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill(`estermolinagarcia@gmail.com`);
    await page.getByRole('textbox', { name: 'Contraseña' }).first().fill('123456');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
    await page.waitForTimeout(2000);
    // Iniciar una actividad
    await page.getByRole('button', { name: 'Actividades Realiza' }).click();
    await page.getByRole('button', { name: 'Atención Atención Mejora tu' }).click();
    await page.getByRole('button', { name: 'Tachado de Letras Tachado de' }).click();
    // Verificar que inicia la actividad
    await expect(page.getByText('Volver al ListadoDetalle de la ActividadTachado de LetrasTacha todas las letras')).toBeVisible();
    await page.getByRole('button', { name: 'Iniciar Actividad' }).click();
    await expect(page.getByText('Instrucciones: Tacha todas')).toBeVisible();
    await expect(page.getByText('Nivel: MedioEncuentra y marca')).toBeVisible();
    //Verificar que puede completar la actividad
    await page.getByRole('button', { name: 'Finalizar' }).click();
    await expect(page.getByText('¡Actividad Completada!Tachado')).toBeVisible();
});

});