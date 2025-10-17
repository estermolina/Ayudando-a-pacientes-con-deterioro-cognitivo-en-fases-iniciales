# ⚠️ IMPORTANTE: Copiar Componentes UI

## 🎯 **ACCIÓN REQUERIDA**

La carpeta `/components/ui/` contiene **46 archivos** de componentes ShadCN UI que son necesarios para que el frontend funcione correctamente.

---

## 📋 **OPCIÓN 1: Copiar Manualmente (RECOMENDADO)**

### **Pasos:**

1. **Descarga** la carpeta `/frontend/` completa desde Figma Make
2. En tu máquina local, **copia** la carpeta completa:
   ```powershell
   # Desde la raíz de Figma Make (descargado)
   Copy-Item -Recurse -Force ".\components\ui" ".\frontend\src\components\ui"
   ```

---

## 📋 **OPCIÓN 2: Script Automático**

### **Ejecuta este comando en PowerShell:**

```powershell
# Asegúrate de estar en la raíz del proyecto descargado de Figma Make
$source = ".\components\ui"
$destination = ".\frontend\src\components\ui"

# Crear directorio destino si no existe
New-Item -ItemType Directory -Force -Path $destination

# Copiar todos los archivos
Get-ChildItem -Path $source -File | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $destination -Force
    Write-Host "✓ Copiado: $($_.Name)" -ForegroundColor Green
}

Write-Host "`n✅ Todos los componentes UI han sido copiados exitosamente!" -ForegroundColor Cyan
```

---

## 📁 **Archivos que se copiarán (46 archivos):**

```
accordion.tsx           menubar.tsx
alert-dialog.tsx        navigation-menu.tsx
alert.tsx               pagination.tsx
aspect-ratio.tsx        popover.tsx
avatar.tsx              progress.tsx
badge.tsx               radio-group.tsx
breadcrumb.tsx          resizable.tsx
button.tsx              scroll-area.tsx
calendar.tsx            select.tsx
card.tsx                separator.tsx
carousel.tsx            sheet.tsx
chart.tsx               sidebar.tsx
checkbox.tsx            skeleton.tsx
collapsible.tsx         slider.tsx
command.tsx             sonner.tsx
context-menu.tsx        switch.tsx
dialog.tsx              table.tsx
drawer.tsx              tabs.tsx
dropdown-menu.tsx       textarea.tsx
form.tsx                toggle-group.tsx
hover-card.tsx          toggle.tsx
input-otp.tsx           tooltip.tsx
input.tsx               use-mobile.ts
label.tsx               utils.ts
```

---

## ✅ **Verificación**

Después de copiar, verifica que la estructura sea:

```
frontend/
└── src/
    └── components/
        ├── ui/                    ← 46 archivos aquí
        │   ├── button.tsx
        │   ├── card.tsx
        │   ├── input.tsx
        │   └── ... (43 más)
        ├── exercises/
        ├── screens/
        ├── figma/
        ├── AppLayout.tsx
        └── ...
```

---

## 🚀 **Después de Copiar:**

```powershell
cd frontend
npm install
npm run dev
```

**¡Listo!** 🎉
