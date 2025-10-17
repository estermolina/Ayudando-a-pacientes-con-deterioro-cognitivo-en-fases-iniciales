# 📍 DÓNDE ESTÁ TODO - Guía Visual

## 🎯 Rutas Completas de tu Proyecto

### 📂 En tu Computadora (Local)

```
C:\Users\ester\OneDrive - Universidad de Castilla-La Mancha\Escritorio\
└── CognitivaCare\                                    ← Carpeta principal
    │
    ├── backend\                                      ← Backend (Ya existe)
    │   ├── server.js
    │   ├── package.json
    │   ├── .env
    │   └── node_modules\
    │
    └── frontend\                                     ← Frontend (Crear aquí)
        ├── src\
        │   ├── components\                           ← COPIAR AQUÍ desde Figma Make
        │   ├── App.tsx
        │   ├── main.tsx
        │   ├── data\
        │   ├── services\
        │   ├── styles\
        │   └── types\
        ├── index.html
        ├── package.json
        ├── vite.config.ts
        └── tsconfig.json
```

---

## 📥 Desde la Descarga de Figma Make

Cuando descargues el ZIP de Figma Make, verás:

```
cognitivacare-download.zip
└── (descomprimir)
    ├── components\              ← ¡ESTA CARPETA ES LA QUE NECESITAS!
    │   ├── screens\
    │   ├── exercises\
    │   ├── ui\
    │   ├── figma\
    │   ├── AppLayout.tsx
    │   ├── AppSidebar.tsx
    │   └── ...
    │
    ├── App.tsx                  ← NO copiar (ya está en /frontend/src/)
    ├── main.tsx                 ← NO copiar (ya está en /frontend/src/)
    ├── data\                    ← NO copiar (ya está en /frontend/src/)
    ├── services\                ← NO copiar (ya está en /frontend/src/)
    ├── styles\                  ← NO copiar (ya está en /frontend/src/)
    ├── types\                   ← NO copiar (ya está en /frontend/src/)
    ├── package.json             ← NO copiar (ya está en /frontend/)
    ├── vite.config.ts           ← NO copiar (ya está en /frontend/)
    └── ...
```

---

## ✂️ Qué Copiar y Dónde

### ✅ COPIAR ESTO:

```
DESDE:  cognitivacare-download/components/
        ↓
HACIA:  C:\Users\ester\OneDrive - Universidad de Castilla-La Mancha\Escritorio\CognitivaCare\frontend\src\components\
```

### ❌ NO COPIAR (Ya están creados):

```
❌ App.tsx
❌ main.tsx
❌ data/
❌ services/
❌ styles/
❌ types/
❌ package.json
❌ vite.config.ts
❌ tsconfig.json
❌ index.html
```

---

## 🖱️ Cómo Copiar (Paso a Paso Visual)

### Opción 1: Arrastar y Soltar

1. **Descomprimir** el ZIP descargado de Figma Make
2. **Abrir** la carpeta descomprimida
3. **Buscar** la carpeta `components`
4. **Arrastrar** la carpeta `components` hacia:
   ```
   C:\...\CognitivaCare\frontend\src\
   ```
5. **Verificar** que quede así:
   ```
   frontend\src\components\
   ```

### Opción 2: Copiar y Pegar

1. **Descomprimir** el ZIP
2. **Clic derecho** en la carpeta `components`
3. **Copiar** (Ctrl+C)
4. **Navegar** a:
   ```
   C:\Users\ester\OneDrive - Universidad de Castilla-La Mancha\Escritorio\CognitivaCare\frontend\src\
   ```
5. **Pegar** (Ctrl+V)

### Opción 3: Comando de Windows (CMD)

```cmd
xcopy "C:\Users\ester\Downloads\cognitivacare-download\components" "C:\Users\ester\OneDrive - Universidad de Castilla-La Mancha\Escritorio\CognitivaCare\frontend\src\components\" /E /I /H /Y
```

---

## ✅ Verificar que Está Correcto

Después de copiar, tu carpeta `frontend` debe verse así:

```
frontend\
├── src\
│   ├── components\              ✅ (62 archivos copiados)
│   │   ├── screens\
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── MainMenu.tsx
│   │   │   └── ...
│   │   ├── exercises\
│   │   │   ├── RecordarPalabras.tsx
│   │   │   └── ...
│   │   ├── ui\
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── figma\
│   │   │   └── ImageWithFallback.tsx
│   │   ├── AppLayout.tsx
│   │   ├── AppSidebar.tsx
│   │   └── ...
│   │
│   ├── App.tsx                  ✅ (Ya existía)
│   ├── main.tsx                 ✅ (Ya existía)
│   ├── data\                    ✅ (Ya existía)
│   ├── services\                ✅ (Ya existía)
│   ├── styles\                  ✅ (Ya existía)
│   └── types\                   ✅ (Ya existía)
│
├── index.html                   ✅ (Ya existía)
├── package.json                 ✅ (Ya existía)
├── vite.config.ts               ✅ (Ya existía)
└── tsconfig.json                ✅ (Ya existía)
```

---

## 🚨 Errores Comunes

### ❌ Error: "Cannot find module './components/..."

**Causa:** La carpeta `components` no está en el lugar correcto.

**Solución:** Verifica que esté en:
```
frontend\src\components\
```

NO en:
```
❌ frontend\components\
❌ frontend\src\src\components\
❌ src\components\
```

---

### ❌ Error: "Module not found: @/components/..."

**Causa:** El alias `@` no está configurado correctamente.

**Solución:** Verifica que `vite.config.ts` tenga:
```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
```

---

### ❌ Error: La carpeta components está vacía

**Causa:** Copiaste `.gitkeep` en lugar de los archivos.

**Solución:** Elimina la carpeta `components` y cópiala de nuevo desde la descarga de Figma Make, asegurándote de copiar TODO el contenido.

---

## 📂 Contenido Esperado de `components/`

Después de copiar, deberías tener aproximadamente:

```
components/
├── screens/ (8 archivos)
├── exercises/ (7 archivos)
├── ui/ (40 archivos)
├── figma/ (1 archivo)
├── AppLayout.tsx
├── AppSidebar.tsx
├── Header.tsx
├── FeatureCard.tsx
├── EmergencyContact.tsx
└── ReminderSection.tsx

TOTAL: ~62 archivos
```

---

## 🔍 Cómo Verificar en Windows Explorer

1. Abre **Explorador de Archivos**
2. Navega a:
   ```
   C:\Users\ester\OneDrive - Universidad de Castilla-La Mancha\Escritorio\CognitivaCare\frontend\src\
   ```
3. Deberías ver:
   ```
   📁 components
   📄 App.tsx
   📄 main.tsx
   📁 data
   📁 services
   📁 styles
   📁 types
   ```
4. Haz doble clic en `components`
5. Deberías ver:
   ```
   📁 exercises
   📁 figma
   📁 screens
   📁 ui
   📄 AppLayout.tsx
   📄 AppSidebar.tsx
   📄 EmergencyContact.tsx
   📄 FeatureCard.tsx
   📄 Header.tsx
   📄 ReminderSection.tsx
   ```

---

## 🎯 Resumen Visual

```
┌─────────────────────────────────────────────┐
│  FIGMA MAKE (Descargado)                    │
│  cognitivacare-download/                    │
│  └── components/  ← COPIAR                  │
└─────────────────────────────────────────────┘
                    │
                    │ COPIAR
                    ↓
┌─────────────────────────────────────────────┐
│  TU COMPUTADORA (Local)                     │
│  CognitivaCare/frontend/src/                │
│  └── components/  ← PEGAR AQUÍ              │
└─────────────────────────────────────────────┘
```

---

## ✅ Checklist Visual

Marca cuando completes cada paso:

- [ ] Descargar proyecto de Figma Make (botón Download)
- [ ] Descomprimir el ZIP
- [ ] Localizar carpeta `components` en la descarga
- [ ] Abrir carpeta destino: `CognitivaCare\frontend\src\`
- [ ] Copiar carpeta `components` completa
- [ ] Verificar que `components` tenga ~62 archivos
- [ ] NO copiar App.tsx, main.tsx, etc. (ya existen)
- [ ] Abrir CMD en `frontend\`
- [ ] Ejecutar `npm install`
- [ ] Ejecutar `npm run dev`
- [ ] Abrir http://localhost:3000

---

¡Sigue estos pasos visuales y tu proyecto funcionará perfectamente! 🎉
