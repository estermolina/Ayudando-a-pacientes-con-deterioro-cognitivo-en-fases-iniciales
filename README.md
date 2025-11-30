# 🧠 CognitivaCare

> **Aplicación web de estimulación cognitiva para pacientes con deterioro cognitivo en fases iniciales**
> **Trabajo fin de Grado** de la intensificación de **Ingeniería del Software** desarrollado por **Ester Molina García**

## 📋 Descripción

**CognitivaCare** es una aplicación diseñada para ayudar a pacientes con deterioro cognitivo leve a ejercitar su mente a través de diferentes actividades. La aplicación incluye ejercicios de memoria, atención, lenguaje, funciones ejecutivas y percepción. Además, permite a los familiares realizar un seguimiento y evolución mediante un panel de resultados.


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
- TypeScript - Lenguaje de programación
- React 18 - Framework UI
- Vite - Herramienta de construcción y desarrollo
- Tailwind CSS v4 - Hoja de estilos
- Shadcn/UI - Componentes UI
- Recharts - Gráficos panel de seguimiento

### Backend
- Node.js - Entorno de ejecución
- Express - Framework para la API
- MongoDB + Mongoose - Base de datos NoSQL
- JWT - Autenticación y sesión
- bcrypt - Encriptación de contraseñas

## 📁 Estructura del Proyecto

```
CognitivaCare/
├── backend/                     # Lógica del servidor (Puerto 5000)
│   ├── server.js                
│   ├── routes/                  # Endpoints API
│   ├── models/                  # Lógica de datos (Base de datos)
│   └── .env
├── end-to-end/
│   └── tests/
│        └──sistema.spec.ts   # Pruebas integrales (2E2) de la aplicación
└── frontend/                 # Lógica de la interfaz de usuario(Puerto 3000)
    └── index.html            # archivo HTML de entrada
    └── src/
        ├── main.tsx          # Punto de entrada React
        ├── App.tsx           # Componente principal
        ├── components/  
        ├── data/
        ├── services/          # llamadas API
        ├── styles/
        └── types/             # Estilos Tailwind CSS
```
        
## 🎯 Requisitos previos para instalación de la aplicación 
- Node.js v20+ (LTS)
- npm o yarn
- MongoDB Atlas
- Windows 10/11 o Linux/Mac

- ## 🔧 Configuración para utilizar la aplicación

### Backend
```
1. Crea archivo `.env` en `/backend/`:
MONGODB_URI=tu-uri-de-mongodb
JWT_SECRET=tu-clave-secreta
PORT=5000

2. Instala dependencias:
cd backend
npm install

3. Ejecuta:
npm run dev
````
### Frontend
```
1. Instala dependencias:
cd frontend
npm install

2. Ejecuta:
npm run dev
```

## 🎮 Uso

1. Abre http://localhost:3000
2. Regístrate con tu email
3. Selecciona una de las áreas cognitivas
4. Selecciona un ejercicio
5. Completa el ejercicio
6. Revisa tus resultados en el dashboard


## 🤝 Autor
Este proyecto fue desarrollado como Trabajo Fin de Grado (TFG) en la Universidad de Castilla-La Mancha por **Ester Molina García**


**Desarrollado para mejorar la calidad de vida de nuestros mayores❤️**
