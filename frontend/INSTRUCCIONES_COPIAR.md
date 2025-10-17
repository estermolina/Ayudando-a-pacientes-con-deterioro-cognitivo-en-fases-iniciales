# 📋 Instrucciones para Copiar los Componentes

## ✅ Lo que ya está creado:

La carpeta `frontend/` ya tiene:
- ✅ `package.json`
- ✅ `vite.config.ts`
- ✅ `tsconfig.json`
- ✅ `index.html`
- ✅ `.gitignore`
- ✅ `src/main.tsx`
- ✅ `src/App.tsx`
- ✅ `src/types/index.ts`
- ✅ `src/data/mockData.ts`
- ✅ `src/services/api.ts`
- ✅ `src/styles/globals.css`

## 📁 Lo que necesitas copiar manualmente:

Desde Figma Make, descarga toda la carpeta `components/` y cópiala a `frontend/src/components/`

### Estructura final debe ser:

```
frontend/
├── src/
│   ├── components/              ← COPIAR AQUÍ la carpeta /components de Figma Make
│   │   ├── AppLayout.tsx
│   │   ├── AppSidebar.tsx
│   │   ├── EmergencyContact.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── Header.tsx
│   │   ├── ReminderSection.tsx
│   │   ├── exercises/
│   │   │   ├── CompletarFrases.tsx
│   │   │   ├── FormarPalabras.tsx
│   │   │   ├── OrdenarPasos.tsx
│   │   │   ├── ParejasImagenes.tsx
│   │   │   ├── RecordarPalabras.tsx
│   │   │   ├── SecuenciasNumericas.tsx
│   │   │   └── TachadoLetras.tsx
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   ├── screens/
│   │   │   ├── ActivitiesListScreen.tsx
│   │   │   ├── ActivityDetailScreen.tsx
│   │   │   ├── ActivityExecutionScreen.tsx
│   │   │   ├── ActivityResultScreen.tsx
│   │   │   ├── CognitiveAreasScreen.tsx
│   │   │   ├── GlobalResultsScreen.tsx
│   │   │   ├── LoginScreen.tsx
│   │   │   └── MainMenu.tsx
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── ... (todos los archivos ui)
│   │       ├── utils.ts
│   │       └── use-mobile.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── data/
│   ├── services/
│   ├── styles/
│   └── types/
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🚀 Pasos para ejecutar:

### 1. Descargar desde Figma Make

En Figma Make, descarga el proyecto completo (botón de descarga).

### 2. Copiar la carpeta components

```bash
# En Windows (CMD o PowerShell):
xcopy "RUTA_DE_DESCARGA\components" "C:\Users\ester\OneDrive - Universidad de Castilla-La Mancha\Escritorio\CognitivaCare\frontend\src\components\" /E /I /H /Y
```

O simplemente arrastra la carpeta `components` desde el ZIP descargado a `frontend/src/`

### 3. Instalar dependencias

```bash
cd "C:\Users\ester\OneDrive - Universidad de Castilla-La Mancha\Escritorio\CognitivaCare\frontend"
npm install
```

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

Debería abrir en http://localhost:3000

---

## ⚠️ Importante

- La carpeta `components` DEBE estar dentro de `src/`
- NO copies `App.tsx`, `main.tsx`, `types/`, `data/`, `services/`, `styles/` porque ya están creados
- Solo copia la carpeta `components/` completa

## ✅ Verificar que funciona

Después de copiar y ejecutar `npm run dev`, deberías ver la pantalla de login de CognitivaCare.

Si ves errores de imports, verifica que la carpeta `components` esté en `frontend/src/components/` y no en `frontend/components/`.
