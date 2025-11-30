import { CognitiveArea, Activity, ActivityResult } from '../types';

export const cognitiveAreas: CognitiveArea[] = [
  {
    id: 'memoria',
    name: 'Memoria',
    icon: 'Brain',
    color: 'bg-purple-500',
    description: 'Ejercita tu capacidad de recordar información',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBicmFpbiUyMHB1enpsZXxlbnwxfHx8fDE3NjAxOTg1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'atencion',
    name: 'Atención',
    icon: 'Target',
    color: 'bg-blue-500',
    description: 'Mejora tu capacidad de concentración y enfoque',
    imageUrl: 'https://www.fundacionfass.org/wp-content/uploads/2024/03/La-estimulacion-cognitiva-en-las-personas-mayores-1500x750.jpg'
  },
  {
    id: 'lenguaje',
    name: 'Lenguaje',
    icon: 'MessageCircle',
    color: 'bg-green-500',
    description: 'Fortalece tus habilidades de comunicación',
    imageUrl: 'https://i.pinimg.com/736x/ca/c5/1f/cac51fae1b72fdf10ec91aaf080f1703.jpg'
  },
  {
    id: 'funciones-ejecutivas',
    name: 'Funciones Ejecutivas',
    icon: 'Puzzle',
    color: 'bg-orange-500',
    description: 'Desarrolla tu planificación y resolución de problemas',
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpYyUyMHRoaW5raW5nJTIwY2hlc3N8ZW58MXx8fHwxNzYwMTk4NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'percepcion',
    name: 'Percepción',
    icon: 'Eye',
    color: 'bg-pink-500',
    description: 'Agudiza tu percepción visual y espacial',
    imageUrl: 'https://ecoembesempleo.es/web/app/uploads/2020/04/AdobeStock_273858049.jpeg'
  }
];

export const activities: Activity[] = [
  // Memoria
  {
    id: 'mem-1',
    areaId: 'memoria',
    name: 'Recordar Palabras',
    description: 'Memoriza una lista de palabras y recuérdalas',
    estimatedTime: 3,
    cognitiveSkills: ['Memoria a corto plazo', 'Atención'],
    imageUrl: 'https://imagenes.elpais.com/resizer/v2/PK32I6HHW4GU7DAQZGKXNRUAZU.jpg?auth=702b43134739aa266e8911a515982bbf1600b5716f8d926eb895d89376a965bc&width=1960&height=1470&smart=true'
  },
  {
    id: 'mem-2',
    areaId: 'memoria',
    name: 'Parejas de Imágenes',
    description: 'Encuentra las parejas de tarjetas iguales',
    estimatedTime: 4,
    cognitiveSkills: ['Memoria visual', 'Concentración'],
    imageUrl: 'https://cdn2.spatial.io/assets/v1/static/external_games/dream-pet-link.jpeg'
  },
  {
    id: 'mem-3',
    areaId: 'memoria',
    name: 'Secuencias Numéricas',
    description: 'Recuerda y repite secuencias de números',
    estimatedTime: 3,
    cognitiveSkills: ['Memoria de trabajo', 'Atención auditiva'],
    imageUrl: 'https://img.freepik.com/fotos-premium/numeros-madera-colores_87742-4861.jpg?semt=ais_hybrid&w=740&q=80'
  },
  
  // Atención
  {
    id: 'ate-1',
    areaId: 'atencion',
    name: 'Encuentra las Diferencias',
    description: 'Identifica las diferencias entre dos imágenes similares',
    estimatedTime: 4,
    cognitiveSkills: ['Atención selectiva', 'Percepción visual'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5L4UsegUwj7d60J5Y1i5Rne6R0K4Y6d7p9A&s'
  },
  {
    id: 'ate-2',
    areaId: 'atencion',
    name: 'Tachado de Letras',
    description: 'Tacha todas las letras "A" que encuentres',
    estimatedTime: 2,
    cognitiveSkills: ['Atención sostenida', 'Velocidad de procesamiento'],
    imageUrl: 'https://images.unsplash.com/photo-1552321046-a54642dc0cb8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1255'
  },
  {
    id: 'ate-3',
    areaId: 'atencion',
    name: 'Sigue el Patrón',
    description: 'Identifica y continúa el patrón de colores',
    estimatedTime: 4,
    cognitiveSkills: ['Atención alternante', 'Razonamiento'],
    imageUrl: 'https://images.unsplash.com/photo-1511298341002-15d91b5d09b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870'
  },
  
  // Lenguaje
  {
    id: 'len-1',
    areaId: 'lenguaje',
    name: 'Formar Palabras',
    description: 'Forma palabras con las letras proporcionadas',
    estimatedTime: 3,
    cognitiveSkills: ['Fluidez verbal', 'Vocabulario'],
    imageUrl: 'https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470'
  },
  {
    id: 'len-2',
    areaId: 'lenguaje',
    name: 'Categorías',
    description: 'Nombra elementos de una categoría específica',
    estimatedTime: 3,
    cognitiveSkills: ['Fluidez semántica', 'Memoria semántica'],
    imageUrl: 'https://images.unsplash.com/photo-1608679627228-a8393e0f3fa5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470'
  },
  {
    id: 'len-3',
    areaId: 'lenguaje',
    name: 'Completar Frases',
    description: 'Completa las frases con la palabra correcta',
    estimatedTime: 2,
    cognitiveSkills: ['Comprensión verbal', 'Razonamiento'],
    imageUrl: 'https://images.unsplash.com/photo-1704793027939-10d2af64b717?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470'
  },
  
  // Funciones Ejecutivas
  {
    id: 'fun-1',
    areaId: 'funciones-ejecutivas',
    name: 'Torre de Hanoi',
    description: 'Mueve los discos siguiendo las reglas',
    estimatedTime: 5,
    cognitiveSkills: ['Planificación', 'Resolución de problemas'],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Tower_of_Hanoi.jpeg'
  },
  {
    id: 'fun-2',
    areaId: 'funciones-ejecutivas',
    name: 'Laberinto',
    description: 'Encuentra el camino de salida del laberinto',
    estimatedTime: 4,
    cognitiveSkills: ['Orientación espacial', 'Planificación'],
    imageUrl: 'https://content.cuerpomente.com/medio/2023/02/23/laberinto_3aa67995_1280x720.jpg'
  },
  {
    id: 'fun-3',
    areaId: 'funciones-ejecutivas',
    name: 'Ordenar Pasos',
    description: 'Ordena los pasos de una actividad cotidiana',
    estimatedTime: 4,
    cognitiveSkills: ['Secuenciación', 'Razonamiento lógico'],
    imageUrl: 'https://www.ozono21.com/blog/wp-content/uploads/2020/09/actividades_cotidianas_2.jpg'
  },
  
  // Percepción
  {
    id: 'per-1',
    areaId: 'percepcion',
    name: 'Figuras Ocultas',
    description: 'Encuentra las figuras escondidas en la imagen',
    estimatedTime: 3,
    cognitiveSkills: ['Percepción visual', 'Atención'],
    imageUrl: 'https://images.unsplash.com/photo-1632096936824-565d39f8e5eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870'
  },
  {
    id: 'per-2',
    areaId: 'percepcion',
    name: 'Rotación Mental',
    description: 'Identifica la figura rotada correctamente',
    estimatedTime: 4,
    cognitiveSkills: ['Orientación espacial', 'Percepción visual'],
    imageUrl: 'https://media.istockphoto.com/id/1477169982/es/foto/poliedros-de-diferentes-colores-s%C3%B3lidos-plat%C3%B3nicos-backgound-ilustraci%C3%B3n-3d.jpg?s=612x612&w=0&k=20&c=7BT55mswL1y7_uR0QSBjuwtAm7uoQBhM_EpT_lGorCw='
  },
  {
    id: 'per-3',
    areaId: 'percepcion',
    name: 'Colores y Formas',
    description: 'Clasifica elementos por color y forma',
    estimatedTime: 2,
    cognitiveSkills: ['Categorización', 'Atención selectiva'],
    imageUrl: 'https://www.niggli.ch/wp-content/uploads/2020/12/9783721208658_4_1.jpg'
  }
];

export const mockResults: ActivityResult[] = [
  {
    activityId: 'mem-1',
    areaId: 'memoria',
    date: new Date(2025, 9, 8),
    timeSpent: 540,
    correctAnswers: 8,
    incorrectAnswers: 2,
    percentage: 80,
    difficulty: 'medio'
  },
  {
    activityId: 'mem-2',
    areaId: 'memoria',
    date: new Date(2025, 9, 9),
    timeSpent: 780,
    correctAnswers: 12,
    incorrectAnswers: 0,
    percentage: 100,
    difficulty: 'facil'
  },
  {
    activityId: 'ate-1',
    areaId: 'atencion',
    date: new Date(2025, 9, 10),
    timeSpent: 600,
    correctAnswers: 7,
    incorrectAnswers: 3,
    percentage: 70,
    difficulty: 'medio'
  },
  {
    activityId: 'len-1',
    areaId: 'lenguaje',
    date: new Date(2025, 9, 10),
    timeSpent: 660,
    correctAnswers: 9,
    incorrectAnswers: 1,
    percentage: 90,
    difficulty: 'facil'
  },
  {
    activityId: 'fun-1',
    areaId: 'funciones-ejecutivas',
    date: new Date(2025, 9, 11),
    timeSpent: 840,
    correctAnswers: 1,
    incorrectAnswers: 0,
    percentage: 100,
    difficulty: 'dificil'
  }
];
