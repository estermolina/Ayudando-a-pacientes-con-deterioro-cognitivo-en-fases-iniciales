# CognitivaCare - Frontend

Aplicación web de estimulación cognitiva para pacientes con deterioro cognitivo leve.

## 🚀 Tecnologías

- **React 18** + **TypeScript**
- **Vite** (Build tool)
- **Tailwind CSS v4** (Estilos)
- **Shadcn/UI** (Componentes)
- **Lucide React** (Iconos)
- **Recharts** (Gráficos)
- **Sonner** (Notificaciones)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🌐 Configuración

El frontend se ejecuta en **http://localhost:3000** y se conecta al backend en **http://localhost:5000**.

### Variables de entorno (opcional)

Crea un archivo `.env` si quieres cambiar la URL del API:

```env
VITE_API_URL=http://localhost:5000/api
```

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx                # Entrada de la aplicación
│   ├── components/             # Componentes React
│   │   ├── screens/            # Pantallas de la aplicación
│   │   ├── exercises/          # Ejercicios cognitivos
│   │   ├── ui/                 # Componentes UI (Shadcn)
│   │   └── figma/              # Componentes especiales
│   ├── data/                   # Datos mock
│   ├── services/               # API calls
│   ├── styles/                 # Estilos globales
│   └── types/                  # TypeScript types
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🎮 Características

- ✅ Sistema de autenticación (login/registro)
- ✅ 5 áreas cognitivas con ejercicios específicos
- ✅ 7 ejercicios interactivos implementados
- ✅ Sistema de resultados y progreso
- ✅ Dashboard con gráficos
- ✅ Diseño adaptado para personas mayores
- ✅ Responsive design

## 🔗 Conexión con Backend

El frontend se comunica con el backend a través de:

- **Autenticación:** `/api/auth/register`, `/api/auth/login`
- **Resultados:** `/api/results` (POST, GET)
- **Usuarios:** `/api/users/:id`

## 📱 Puertos

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:5000

## 🛠️ Desarrollo

Para desarrollar localmente:

1. Asegúrate de que el backend esté corriendo en puerto 5000
2. Ejecuta `npm run dev` en esta carpeta
3. Abre http://localhost:3000

## 📝 Notas

- El proxy de Vite redirige automáticamente `/api/*` al backend
- Los tokens se guardan en `localStorage`
- Si el backend no está disponible, usa datos mock
