# 🚀 CognitivaCare - Instrucciones Completas para Ejecutar en Local

## 📊 Estructura Final del Proyecto

```
C:\Users\ester\...\Escritorio\CognitivaCare\
│
├── backend/                        (Ya existe ✅)
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── node_modules/
│
└── frontend/                       (Creado en Figma Make ✅)
    ├── src/
    │   ├── App.tsx                ✅ Ya creado
    │   ├── main.tsx               ✅ Ya creado
    │   ├── components/            ⚠️ NECESITA COPIARSE
    │   ├── data/                  ✅ Ya creado
    │   ├── services/              ✅ Ya creado
    ��   ├── styles/                ✅ Ya creado
    │   └── types/                 ✅ Ya creado
    ├── index.html                 ✅ Ya creado
    ├── package.json               ✅ Ya creado
    ├── vite.config.ts             ✅ Ya creado
    ├── tsconfig.json              ✅ Ya creado
    └── .gitignore                 ✅ Ya creado
```

---

## 📥 Paso 1: Descargar el Proyecto desde Figma Make

1. En Figma Make, haz clic en **"Download"** (botón de descarga)
2. Se descargará un archivo ZIP con todo el código
3. Descomprime el ZIP

---

## 📂 Paso 2: Copiar la Carpeta `frontend`

### Opción A: Copiar solo la carpeta `components`

Si ya tienes la carpeta `frontend` con los archivos base:

```bash
# En la raíz del proyecto descargado de Figma Make, copia:
/components/  →  CognitivaCare/frontend/src/components/
```

### Opción B: Copiar todo el `frontend`

Si prefieres copiar todo directamente:

```bash
# Copia toda la carpeta /frontend/ descargada a:
C:\Users\ester\OneDrive - Universidad de Castilla-La Mancha\Escritorio\CognitivaCare\frontend\
```

---

## ⚙️ Paso 3: Instalar Dependencias del Frontend

Abre **CMD** o **PowerShell**:

```bash
cd "C:\Users\ester\OneDrive - Universidad de Castilla-La Mancha\Escritorio\CognitivaCare\frontend"
npm install
```

Esto instalará todas las dependencias necesarias (~200MB).

---

## ▶️ Paso 4: Ejecutar el Proyecto

### Terminal 1 - Backend (Puerto 5000)

```bash
cd "C:\Users\ester\OneDrive - Universidad de Castilla-La Mancha\Escritorio\CognitivaCare\backend"
npm run dev
```

Deberías ver:
```
🚀 Servidor corriendo en http://localhost:5000
✅ Conectado a MongoDB
```

### Terminal 2 - Frontend (Puerto 3000)

```bash
cd "C:\Users\ester\OneDrive - Universidad de Castilla-La Mancha\Escritorio\CognitivaCare\frontend"
npm run dev
```

Deberías ver:
```
  VITE v6.0.11  ready in XXX ms

  ➜  Local:   http://localhost:3000/
```

---

## 🌐 Paso 5: Abrir en el Navegador

Abre tu navegador favorito y ve a:

```
http://localhost:3000
```

Deberías ver la pantalla de login de **CognitivaCare**.

---

## ✅ Verificar que Todo Funciona

### 1. Registro de Usuario

- Haz clic en **"Regístrate"**
- Completa el formulario:
  - Nombre: `Ester`
  - Email: `ester@test.com`
  - Contraseña: `123456`
  - Tipo: **Paciente**
- Click en **"Registrarse"**

### 2. Explorar la Aplicación

- Deberías ser redirigido al Menú Principal
- Prueba navegando a:
  - **Actividades** → Selecciona un área → Selecciona un ejercicio
  - **Mis Resultados** → Ver tus estadísticas

### 3. Verificar que se Guarda en MongoDB

En la terminal del backend deberías ver logs de las peticiones:

```
POST /api/auth/register
POST /api/results
GET /api/results/user/...
```

---

## 🐛 Solución de Problemas

### Error: "Cannot GET /"

**Solución:** Este error es NORMAL en `localhost:5000`. El backend es una API, no tiene interfaz visual. Usa `localhost:3000` para el frontend.

### Error: "Module not found"

**Solución:** 
```bash
cd frontend
npm install
```

### Error: "Port 3000 already in use"

**Solución:**
```bash
# Cambiar el puerto en vite.config.ts
server: {
  port: 3001,  // Cambiar a otro puerto
}
```

### Error de conexión al backend

**Solución:** Verifica que el backend esté corriendo en puerto 5000:
```bash
cd backend
npm run dev
```

### Error: "CORS blocked"

**Solución:** El backend ya tiene CORS configurado. Si sigue fallando, verifica que el backend tenga:
```javascript
app.use(cors());
```

---

## 📊 Comandos Útiles

### Frontend

```bash
# Desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

### Backend

```bash
# Desarrollo (con auto-reload)
npm run dev

# Producción
npm start
```

---

## 🎯 Puertos del Proyecto

| Servicio | Puerto | URL |
|----------|--------|-----|
| **Frontend** | 3000 | http://localhost:3000 |
| **Backend API** | 5000 | http://localhost:5000/api |
| **MongoDB** | 27017 | mongodb://localhost:27017 (o Atlas) |

---

## 🔗 Próximos Pasos

Una vez que todo funcione:

1. ✅ Prueba el registro y login
2. ✅ Completa algunos ejercicios
3. ✅ Verifica que los resultados se guardan en MongoDB
4. ✅ Explora el dashboard de resultados

### Mejoras Sugeridas

- 📊 Agregar más gráficos al dashboard
- 🎮 Crear más ejercicios cognitivos
- 📱 Mejorar diseño responsive
- 🔔 Sistema de notificaciones
- 👥 Panel para familiares/cuidadores

---

## 📧 Soporte

Si tienes algún problema, verifica:

1. ✅ Backend corriendo en puerto 5000
2. ✅ Frontend corriendo en puerto 3000
3. ✅ MongoDB conectado
4. ✅ Todas las dependencias instaladas (`npm install`)
5. ✅ No hay conflictos de puertos

---

¡Listo! Tu aplicación **CognitivaCare** debería estar funcionando completamente en local. 🎉
