# 🧠 CognitivaCare

**Aplicación web de estimulación cognitiva para pacientes con deterioro cognitivo leve**

---

## 📋 Descripción

CognitivaCare es una plataforma digital diseñada para ayudar a personas mayores y pacientes con deterioro cognitivo leve a ejercitar su mente a través de actividades interactivas. La aplicación incluye ejercicios de memoria, atención, lenguaje, funciones ejecutivas y percepción.

---

## ✨ Características Principales

### 🎯 5 Áreas Cognitivas
- **Memoria:** Recordar palabras, parejas de imágenes, secuencias numéricas
- **Atención:** Tachado de letras, encuentra las diferencias, patrones
- **Lenguaje:** Formar palabras, completar frases, categorías
- **Funciones Ejecutivas:** Ordenar pasos, laberintos, planificación
- **Percepción:** Figuras ocultas, rotación mental, colores y formas

### 🎮 Ejercicios Interactivos
- 7 ejercicios completamente funcionales
- 3 niveles de dificultad (fácil, medio, difícil)
- Feedback inmediato y motivacional
- Sistema de puntuación y tiempo

### 📊 Dashboard de Progreso
- Gráficos de evolución por área cognitiva
- Historial de resultados
- Estadísticas de rendimiento
- Tiempo dedicado a cada ejercicio

### 👤 Sistema de Usuarios
- Registro y login seguro
- Perfiles diferenciados (Paciente, Familiar, Profesional de salud)
- Gestión de sesión con JWT
- Datos persistentes en MongoDB

### 🎨 Diseño Inclusivo
- Botones grandes y espaciados
- Texto amplio y legible
- Colores vibrantes y contrastados
- Navegación intuitiva
- Optimizado para personas mayores

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Tailwind CSS v4** - Estilos
- **Shadcn/UI** - Componentes UI
- **Lucide React** - Iconos
- **Recharts** - Gráficos
- **Sonner** - Notificaciones toast

### Backend
- **Node.js** - Runtime
- **Express** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticación
- **bcrypt** - Encriptación de contraseñas

---

## 📁 Estructura del Proyecto

```
CognitivaCare/
│
├── backend/                    # Servidor Node.js + Express
│   ├── server.js              # Punto de entrada
│   ├── package.json           # Dependencias backend
│   └── .env                   # Variables de entorno
│
└── frontend/                   # Aplicación React
    ├── src/
    │   ├── App.tsx            # Componente principal
    │   ├── main.tsx           # Punto de entrada
    │   ├── components/        # Componentes React
    │   │   ├── screens/       # Pantallas
    │   │   ├── exercises/     # Ejercicios
    │   │   ├── ui/            # Componentes UI
    │   │   └── ...
    │   ├── data/              # Datos mock
    │   ├── services/          # API calls
    │   ├── styles/            # Estilos globales
    │   └── types/             # TypeScript types
    ├── index.html
    ├── package.json
    └── vite.config.ts
```

---

## 🚀 Instalación y Ejecución

### Requisitos Previos
- **Node.js v20+** (LTS recomendado)
- **npm** o **yarn**
- **MongoDB Atlas** (cuenta gratuita) o MongoDB local

### 1. Clonar el repositorio

```bash
git clone [URL_DEL_REPOSITORIO]
cd CognitivaCare
```

### 2. Configurar el Backend

```bash
cd backend
npm install

# Crear archivo .env con tus credenciales
echo "MONGODB_URI=tu-uri-de-mongodb" > .env
echo "JWT_SECRET=tu-secreto-jwt" >> .env
echo "PORT=5000" >> .env

# Ejecutar backend
npm run dev
```

### 3. Configurar el Frontend

```bash
cd ../frontend
npm install

# Ejecutar frontend
npm run dev
```

### 4. Abrir en el navegador

```
Frontend: http://localhost:3000
Backend API: http://localhost:5000/api
```

---

## 🎮 Uso de la Aplicación

### 1. Registro
- Accede a la pantalla de login
- Haz clic en "Regístrate"
- Completa los datos (nombre, email, contraseña, tipo de usuario)
- Confirma el registro

### 2. Navegación
- **Menú Principal:** Accede a actividades o resultados
- **Áreas Cognitivas:** Selecciona un área para ver ejercicios
- **Ejercicios:** Elige un ejercicio y nivel de dificultad
- **Resultados:** Consulta tu progreso y estadísticas

### 3. Realizar Ejercicios
- Lee las instrucciones
- Selecciona la dificultad
- Completa el ejercicio
- Revisa tus resultados
- Los datos se guardan automáticamente en MongoDB

---

## 📊 Ejercicios Disponibles

### Memoria
1. **Recordar Palabras** - Memoriza y recuerda una lista
2. **Parejas de Imágenes** - Encuentra las parejas coincidentes
3. **Secuencias Numéricas** - Repite secuencias de números

### Atención
4. **Tachado de Letras** - Encuentra y tacha letras específicas

### Lenguaje
5. **Formar Palabras** - Crea palabras con letras dadas
6. **Completar Frases** - Completa frases con la palabra correcta

### Funciones Ejecutivas
7. **Ordenar Pasos** - Organiza pasos en orden lógico

---

## 🔐 Seguridad

- ✅ Contraseñas encriptadas con bcrypt
- ✅ Autenticación con JWT
- ✅ Tokens en localStorage
- ✅ Headers de autorización en peticiones
- ✅ Validación de datos en backend
- ✅ CORS configurado

---

## 📈 Próximas Mejoras

### Corto Plazo
- [ ] Completar ejercicios de Percepción
- [ ] Agregar más ejercicios por área
- [ ] Mejorar gráficos del dashboard
- [ ] Notificaciones por email

### Mediano Plazo
- [ ] Panel para familiares/cuidadores
- [ ] Sistema de recordatorios
- [ ] Gamificación (insignias, rachas)
- [ ] Exportar resultados en PDF
- [ ] PWA (Progressive Web App)

### Largo Plazo
- [ ] IA para adaptar dificultad automáticamente
- [ ] Reconocimiento de voz
- [ ] Videollamadas con profesionales
- [ ] Integración con wearables
- [ ] Análisis predictivo de deterioro

---

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto fue desarrollado como parte de un Trabajo Fin de Grado (TFG).

---

## 👥 Autores

**Ester** - *Desarrollo completo* - Universidad de Castilla-La Mancha

---

## 🙏 Agradecimientos

- Figma Make por facilitar el prototipado inicial
- Shadcn/UI por los componentes de interfaz
- Unsplash por las imágenes
- Recharts por la librería de gráficos

---

## 📞 Contacto

Para preguntas o soporte:
- Email: [tu-email]
- Universidad: UCLM

---

## 🔗 Enlaces Útiles

- [Documentación de React](https://react.dev/)
- [Documentación de Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Shadcn/UI](https://ui.shadcn.com/)

---

**Nota Importante:** Esta aplicación NO reemplaza el diagnóstico o tratamiento médico profesional. Es una herramienta complementaria para estimulación cognitiva.

---

Desarrollado con ❤️ para mejorar la calidad de vida de personas mayores.
