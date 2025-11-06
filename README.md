# 🧠 CognitivaCare

> Aplicación web de estimulación cognitiva para pacientes con deterioro cognitivo en fases iniciales
> Trabajo fin de Grado de la intensificación de Ingeniería del Software desarrollado por Ester Molina García

## ✨ Características
- 🧠 **5 Áreas Cognitivas** - Memoria, Atención, Lenguaje, Funciones Ejecutivas y Percepción
- 🎮 **7 Ejercicios** - Con 3 niveles de dificultad cada uno
- 📊 **Panel de seguimiento** - Gráficos de progreso y estadísticas
- 👤 **Sistema de Usuarios** - Registro, login y perfiles
- 💾 **Base de Datos** - Mediante MongoDB
- 🎨 **Diseño Inclusivo** - Optimizado para personas mayores
- 📱 **Responsive** - Funciona desde ordenador, tablet y móvil

## 🛠️ Tecnologías utilizadas
### Frontend
- React 18 + TypeScript como lenguajes
- Vite como herramienta de construcción y desarrollo
- Tailwind CSS v4 como framework de CSS 
- Shadcn/UI para componentes UI
- Recharts para el panel de seguimiento

### Backend
- Node.js + Express como entorno y framework para la API
- MongoDB + Mongoose como base de datos NoSQL
- JWT para autenticación y sesión
- bcrypt como encriptación de contraseñas
- 
## 📁 Estructura del Proyecto
CognitivaCare/
├── backend/          # lógica de la aplicación (Puerto 5000)
│   └── server.js
└── frontend/         # (Puerto 3000)
  └── index.html      
    └── src/
        ├── App.tsx   # lógica de navegación principal
        ├── components/ 
        ├── data/
        ├── services/
        ├── styles/
        └── types/
        └── main.tsx   # punto de entrada

## 🎯 Requisitos para 
- Node.js v20+ (LTS)
- npm o yarn
- MongoDB Atlas (cuenta gratuita) o local
- Windows 10/11 o Linux/Mac

- ## 🔧 Configuración para utilizar la aplicación

### Backend

1. Crea archivo `.env` en `/backend/`:
MONGODB_URI=tu-uri-de-mongodb
JWT_SECRET=tu-clave-secreta
PORT=5000

2. Instala dependencias:
cd backend
npm install

3. Ejecuta:
npm run dev

### Frontend

1. Instala dependencias:
cd frontend
npm install

2. Ejecuta:
npm run dev


## 🎮 Uso

1. Abre http://localhost:3000
2. Regístrate con tu email
3. Selecciona una de las áreas cognitivas
4. Selecciona un ejercicio
5. Completa el ejercicio
6. Revisa tus resultados en el dashboard


## 🤝 Autor
Este proyecto fue desarrollado como Trabajo Fin de Grado (TFG) en la Universidad de Castilla-La Mancha por **Ester Molina García**


**Desarrollado con ❤️ para mejorar la calidad de vida de nuestros mayores**
