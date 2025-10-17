# 🧠 CognitivaCare

> Aplicación web de estimulación cognitiva para pacientes con deterioro cognitivo leve

[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.0-blue)](https://tailwindcss.com/)

---

## 🚀 Inicio Rápido

### 1️⃣ Descargar
Descarga este proyecto desde Figma Make (botón Download).

### 2️⃣ Copiar Components
Copia la carpeta `/components/` desde la descarga a `/frontend/src/components/`

### 3️⃣ Instalar
```bash
cd frontend
npm install
```

### 4️⃣ Ejecutar
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### 5️⃣ Abrir
```
http://localhost:3000
```

---

## 📚 Documentación Completa

| Archivo | Descripción |
|---------|-------------|
| [`PASOS_RAPIDOS.md`](./PASOS_RAPIDOS.md) | ⚡ Guía de inicio rápido (5 minutos) |
| [`DONDE_ESTA_TODO.md`](./DONDE_ESTA_TODO.md) | 📍 Guía visual de ubicaciones |
| [`INSTRUCCIONES_COMPLETAS.md`](./INSTRUCCIONES_COMPLETAS.md) | 📖 Guía detallada paso a paso |
| [`ESTRUCTURA_FINAL.md`](./ESTRUCTURA_FINAL.md) | 📁 Mapa completo de archivos |
| [`RESUMEN_COMPLETO.md`](./RESUMEN_COMPLETO.md) | 📊 Resumen de lo creado |
| [`README_PROYECTO.md`](./README_PROYECTO.md) | 📘 Documentación técnica |
| [`frontend/README.md`](./frontend/README.md) | ⚛️ Documentación del frontend |

**👉 Recomendado:** Empieza por [`PASOS_RAPIDOS.md`](./PASOS_RAPIDOS.md)

---

## ✨ Características

- 🧠 **5 Áreas Cognitivas** - Memoria, Atención, Lenguaje, Funciones Ejecutivas, Percepción
- 🎮 **7 Ejercicios Interactivos** - Con 3 niveles de dificultad cada uno
- 📊 **Dashboard Completo** - Gráficos de progreso y estadísticas
- 👤 **Sistema de Usuarios** - Registro, login y perfiles
- 💾 **Base de Datos** - MongoDB con datos persistentes
- 🎨 **Diseño Inclusivo** - Optimizado para personas mayores
- 📱 **Responsive** - Funciona en desktop, tablet y móvil

---

## 🛠️ Tecnologías

### Frontend
- React 18 + TypeScript
- Vite (Build tool)
- Tailwind CSS v4
- Shadcn/UI
- Recharts

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT
- bcrypt

---

## 📁 Estructura del Proyecto

```
CognitivaCare/
├── backend/          # API Node.js (Puerto 5000)
│   └── server.js
└── frontend/         # React App (Puerto 3000)
    └── src/
        ├── App.tsx
        ├── components/  ⚠️ Copiar desde descarga
        ├── data/
        ├── services/
        ├── styles/
        └── types/
```

---

## ⚠️ IMPORTANTE

La carpeta `components/` NO está incluida en la estructura base de `/frontend/`. 

**Debes copiarla manualmente** desde la descarga de Figma Make:

```
Descarga: /components/  →  Local: /frontend/src/components/
```

Ver [`DONDE_ESTA_TODO.md`](./DONDE_ESTA_TODO.md) para instrucciones visuales.

---

## 🎯 Requisitos

- Node.js v20+ (LTS)
- npm o yarn
- MongoDB Atlas (cuenta gratuita) o local
- Windows 10/11 o Linux/Mac

---

## 🔧 Configuración

### Backend

1. Crea archivo `.env` en `/backend/`:
```env
MONGODB_URI=tu-uri-de-mongodb
JWT_SECRET=tu-secreto-seguro
PORT=5000
```

2. Instala dependencias:
```bash
cd backend
npm install
```

3. Ejecuta:
```bash
npm run dev
```

### Frontend

1. (Opcional) Crea `.env` en `/frontend/`:
```env
VITE_API_URL=http://localhost:5000/api
```

2. Instala dependencias:
```bash
cd frontend
npm install
```

3. Ejecuta:
```bash
npm run dev
```

---

## 🎮 Uso

1. Abre http://localhost:3000
2. Regístrate con tu email
3. Explora las áreas cognitivas
4. Selecciona un ejercicio
5. Completa el ejercicio
6. Revisa tus resultados en el dashboard

---

## 📊 Ejercicios Disponibles

| Área | Ejercicio | Descripción |
|------|-----------|-------------|
| 🧠 Memoria | Recordar Palabras | Memoriza y recuerda listas |
| 🧠 Memoria | Parejas de Imágenes | Encuentra las parejas |
| 🧠 Memoria | Secuencias Numéricas | Repite números |
| 👁️ Atención | Tachado de Letras | Encuentra letras específicas |
| 🗣️ Lenguaje | Formar Palabras | Crea palabras con letras |
| 🗣️ Lenguaje | Completar Frases | Completa frases lógicamente |
| 🎯 Funciones Ejecutivas | Ordenar Pasos | Organiza pasos secuenciales |

---

## 🚨 Solución de Problemas

### "Cannot find module './components/...'"
→ La carpeta `components` no está copiada. Ver [`DONDE_ESTA_TODO.md`](./DONDE_ESTA_TODO.md)

### "Module not found" al hacer npm install
→ Ejecuta `npm install` en `/frontend/` y `/backend/`

### "Port 3000 already in use"
→ Cierra otras apps o cambia el puerto en `vite.config.ts`

### "Cannot connect to MongoDB"
→ Verifica tu `.env` en `/backend/` con la URI correcta

---

## 🤝 Contribución

Este proyecto fue desarrollado como Trabajo Fin de Grado (TFG) en la Universidad de Castilla-La Mancha.

---

## 📄 Licencia

Proyecto académico - UCLM 2025

---

## 👥 Autor

**Ester** - Universidad de Castilla-La Mancha

---

## 📞 Soporte

¿Problemas? Consulta la documentación:

1. [`PASOS_RAPIDOS.md`](./PASOS_RAPIDOS.md) - Inicio rápido
2. [`DONDE_ESTA_TODO.md`](./DONDE_ESTA_TODO.md) - Guía visual
3. [`INSTRUCCIONES_COMPLETAS.md`](./INSTRUCCIONES_COMPLETAS.md) - Guía completa

---

## 🙏 Agradecimientos

- Figma Make
- Shadcn/UI
- Unsplash
- Recharts
- Universidad de Castilla-La Mancha

---

<div align="center">

**Desarrollado con ❤️ para mejorar la calidad de vida de personas mayores**

[Comenzar](./PASOS_RAPIDOS.md) · [Documentación](./INSTRUCCIONES_COMPLETAS.md) · [Estructura](./ESTRUCTURA_FINAL.md)

</div>
