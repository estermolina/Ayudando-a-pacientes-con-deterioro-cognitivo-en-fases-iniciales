# ⚡ Pasos Rápidos - CognitivaCare

## 🎯 Para ejecutar el proyecto AHORA MISMO:

### 📥 1. Descargar desde Figma Make

En Figma Make, haz clic en el botón **"Download"** para descargar todo el código.

---

### 📂 2. Copiar la Carpeta Components

Después de descargar y descomprimir:

```
Desde la descarga: /components/
                    ↓
Copiar a: CognitivaCare/frontend/src/components/
```

**IMPORTANTE:** La carpeta `components` debe quedar en:
```
frontend/src/components/
```

---

### ⚙️ 3. Instalar Dependencias

Abre **CMD** o **PowerShell** y ejecuta:

```bash
# Frontend
cd "C:\Users\ester\OneDrive - Universidad de Castilla-La Mancha\Escritorio\CognitivaCare\frontend"
npm install

# Backend (si aún no lo hiciste)
cd ..\backend
npm install
```

---

### ▶️ 4. Ejecutar el Proyecto

#### Opción A: Usar el script automático (Windows)

Doble clic en:
```
start-dev.bat
```

Esto abrirá dos terminales:
- Una para el backend (puerto 5000)
- Una para el frontend (puerto 3000)

#### Opción B: Manualmente

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

---

### 🌐 5. Abrir en el Navegador

```
http://localhost:3000
```

---

## ✅ Checklist Rápido

- [ ] Descargar proyecto de Figma Make
- [ ] Copiar carpeta `components/` a `frontend/src/components/`
- [ ] Ejecutar `npm install` en frontend
- [ ] Ejecutar `npm install` en backend (si no lo hiciste)
- [ ] Iniciar backend (`npm run dev`)
- [ ] Iniciar frontend (`npm run dev`)
- [ ] Abrir http://localhost:3000
- [ ] Registrarte en la app
- [ ] ¡Empezar a usar CognitivaCare!

---

## 🐛 Si algo falla:

### ❌ Error: "Cannot find module"
```bash
cd frontend
npm install
```

### ❌ Error: "Port already in use"
Cierra otras aplicaciones que usen los puertos 3000 o 5000.

### ❌ Error: "MongoDB connection failed"
Verifica que tu archivo `.env` en backend tenga la URI correcta de MongoDB.

---

## 🎉 ¡Listo!

Tu aplicación CognitivaCare está funcionando completamente en local.

**Próximo paso:** Registra un usuario y empieza a probar los ejercicios.

---

Para más detalles, consulta:
- `/INSTRUCCIONES_COMPLETAS.md`
- `/README_PROYECTO.md`
- `/frontend/README.md`
