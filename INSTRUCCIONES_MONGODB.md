# 🗄️ Instrucciones para Conectar a MongoDB

## 📋 Requisitos Previos

- Node.js instalado (v16 o superior)
- MongoDB instalado localmente O cuenta en MongoDB Atlas (gratis)

---

## 🚀 Opción 1: MongoDB Atlas (Cloud - Recomendado)

### **Paso 1: Crear cuenta gratuita**
1. Ve a https://www.mongodb.com/cloud/atlas
2. Crea una cuenta gratuita
3. Crea un nuevo cluster (selecciona el plan FREE)
4. Espera 3-5 minutos mientras se crea

### **Paso 2: Configurar acceso**
1. En "Database Access" → Añade un usuario con contraseña
2. En "Network Access" → Añade tu IP (o 0.0.0.0/0 para permitir todas)
3. Copia la cadena de conexión (Connection String)

### **Paso 3: Obtener tu URI de conexión**
La URI tendrá este formato:
```
mongodb+srv://<usuario>:<password>@cluster0.xxxxx.mongodb.net/cognitivacare
```

---

## 💻 Opción 2: MongoDB Local

### **Instalar MongoDB Community Edition**

**Windows:**
1. Descarga desde: https://www.mongodb.com/try/download/community
2. Ejecuta el instalador
3. MongoDB se instalará como servicio en: `mongodb://localhost:27017`

**Mac (con Homebrew):**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux (Ubuntu):**
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongodb
```

---

## 🛠️ Configurar el Backend

### **1. Crear carpeta del backend**
```bash
mkdir backend
cd backend
```

### **2. Inicializar proyecto Node.js**
```bash
npm init -y
```

### **3. Instalar dependencias**
```bash
npm install express mongoose cors dotenv bcrypt jsonwebtoken
npm install --save-dev nodemon
```

### **4. Modificar package.json**
Añade `"type": "module"` y los scripts:

```json
{
  "name": "cognitivacare-backend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "bcrypt": "^5.1.1",
    "jsonwebtoken": "^9.0.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### **5. Crear archivo .env**
```bash
touch .env
```

**Contenido del .env:**
```env
# MongoDB URI
# Para Atlas: mongodb+srv://usuario:password@cluster0.xxxxx.mongodb.net/cognitivacare
# Para local: mongodb://localhost:27017/cognitivacare
MONGODB_URI=mongodb://localhost:27017/cognitivacare

# Puerto del servidor
PORT=5000

# Secret para JWT (cambia esto por una cadena aleatoria)
JWT_SECRET=mi_super_secreto_cambiar_en_produccion_12345
```

---

## 📁 Estructura del Backend

Crea esta estructura de carpetas:

```
backend/
├── server.js
├── .env
├── package.json
├── models/
│   ├── User.js
│   └── Result.js
└── routes/
    ├── auth.js
    └── results.js
```

---

## 📄 Archivos del Backend

### **server.js**
```javascript
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error MongoDB:', err));

// Rutas
import authRoutes from './routes/auth.js';
import resultsRoutes from './routes/results.js';

app.use('/api/auth', authRoutes);
app.use('/api/results', resultsRoutes);

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API CognitivaCare funcionando' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
```

### **models/User.js**
```javascript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['patient', 'family', 'healthcare'], 
    default: 'patient' 
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
```

### **models/Result.js**
```javascript
import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  activityId: { type: String, required: true },
  areaId: { type: String, required: true },
  timeSpent: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  incorrectAnswers: { type: Number, required: true },
  percentage: { type: Number, required: true },
  difficulty: { type: String, enum: ['facil', 'medio', 'dificil'], required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Result', resultSchema);
```

### **routes/auth.js**
```javascript
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Registro
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, type } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({ name, email, password: hashedPassword, type });
    await user.save();
    
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'secret-key',
      { expiresIn: '7d' }
    );
    
    res.status(201).json({
      user: { id: user._id, name: user.name, email: user.email, type: user.type },
      token
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
    
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
    
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'secret-key',
      { expiresIn: '7d' }
    );
    
    res.json({
      user: { id: user._id, name: user.name, email: user.email, type: user.type },
      token
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
```

### **routes/results.js**
```javascript
import express from 'express';
import Result from '../models/Result.js';

const router = express.Router();

// Guardar resultado
router.post('/', async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener resultados de un usuario
router.get('/user/:userId', async (req, res) => {
  try {
    const results = await Result.find({ userId: req.params.userId })
      .sort({ date: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
```

---

## ▶️ Ejecutar el Backend

### **1. Iniciar MongoDB (si es local)**
Ya debe estar corriendo como servicio. Si no:
```bash
# Windows: Abre "Servicios" y busca MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongodb
```

### **2. Iniciar el servidor backend**
```bash
cd backend
npm run dev
```

Deberías ver:
```
🚀 Servidor corriendo en http://localhost:5000
✅ Conectado a MongoDB
```

---

## 🌐 Configurar el Frontend

### **1. Crear archivo .env en la carpeta del frontend**
```env
VITE_API_URL=http://localhost:5000/api
```

### **2. Reiniciar el frontend**
El frontend ahora se conectará automáticamente al backend.

---

## ✅ Probar la Conexión

### **1. Probar la API directamente**
Abre http://localhost:5000/api/health en el navegador.

Deberías ver:
```json
{
  "status": "ok",
  "message": "API CognitivaCare funcionando"
}
```

### **2. Probar registro desde el frontend**
1. Abre la aplicación frontend
2. Haz clic en "Regístrate"
3. Completa el formulario
4. Si todo funciona, serás redirigido al menú principal

### **3. Verificar en MongoDB**
**MongoDB Compass** (GUI recomendada):
1. Descarga: https://www.mongodb.com/try/download/compass
2. Conéctate a `mongodb://localhost:27017`
3. Ve a la base de datos `cognitivacare`
4. Verás las colecciones `users` y `results`

**O usa el shell:**
```bash
mongosh
use cognitivacare
db.users.find()
```

---

## 🐛 Solución de Problemas

### **Error: "Cannot connect to MongoDB"**
- Verifica que MongoDB esté corriendo
- Verifica la URI en el archivo `.env`
- Si usas Atlas, verifica que tu IP esté en la whitelist

### **Error: "CORS blocked"**
- Asegúrate de tener `app.use(cors())` en server.js

### **Error: "Token invalid"**
- Cierra sesión y vuelve a iniciar
- Verifica que JWT_SECRET sea el mismo en .env

### **Frontend no se conecta**
- Verifica que VITE_API_URL esté en el .env del frontend
- Reinicia el servidor de desarrollo del frontend

---

## 📊 Datos de Ejemplo

Para insertar usuarios de prueba:

```javascript
// En mongosh o en un script
use cognitivacare

db.users.insertOne({
  name: "Usuario de Prueba",
  email: "test@example.com",
  password: "$2b$10$abcdefghijklmnopqrstuvwxyz", // contraseña hasheada
  type: "patient",
  createdAt: new Date()
})
```

---

## 🎉 ¡Listo!

Tu aplicación CognitivaCare ahora está conectada a MongoDB y lista para guardar:
- ✅ Usuarios (pacientes, familiares, personal sanitario)
- ✅ Resultados de actividades
- ✅ Historial y estadísticas

Los datos persistirán incluso después de recargar la página.
