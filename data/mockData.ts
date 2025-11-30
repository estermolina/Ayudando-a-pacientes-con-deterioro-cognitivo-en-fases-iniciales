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
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2N1cyUyMGF0dGVudGlvbiUyMHRhcmdldHxlbnwxfHx8fDE3NjAxOTg1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'lenguaje',
    name: 'Lenguaje',
    icon: 'MessageCircle',
    color: 'bg-green-500',
    description: 'Fortalece tus habilidades de comunicación',
    imageUrl: 'https://images.unsplash.com/photo-1519909089535-c493f2f1e522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxldHRlcnMlMjB3b3Jkc3xlbnwxfHx8fDE3NjAxOTg1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
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
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBicmFpbiUyMHB1enpsZXxlbnwxfHx8fDE3NjAxOTg1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export const activities: Activity[] = [
  // Memoria
  {
    id: 'mem-1',
    areaId: 'memoria',
    name: 'Recordar Palabras',
    description: 'Memoriza una lista de palabras y recuérdalas después',
    estimatedTime: 3,
    cognitiveSkills: ['Memoria a corto plazo', 'Atención'],
    imageUrl: 'https://images.unsplash.com/photo-1519909089535-c493f2f1e522?w=400'
  },
  {
    id: 'mem-2',
    areaId: 'memoria',
    name: 'Parejas de Imágenes',
    description: 'Encuentra las parejas de tarjetas iguales',
    estimatedTime: 4,
    cognitiveSkills: ['Memoria visual', 'Concentración'],
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400'
  },
  {
    id: 'mem-3',
    areaId: 'memoria',
    name: 'Secuencias Numéricas',
    description: 'Recuerda y repite secuencias de números',
    estimatedTime: 3,
    cognitiveSkills: ['Memoria de trabajo', 'Atención auditiva'],
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400'
  },
  
  // Atención
  {
    id: 'ate-1',
    areaId: 'atencion',
    name: 'Encuentra las Diferencias',
    description: 'Identifica las diferencias entre dos imágenes similares',
    estimatedTime: 4,
    cognitiveSkills: ['Atención selectiva', 'Percepción visual'],
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400'
  },
  {
    id: 'ate-2',
    areaId: 'atencion',
    name: 'Tachado de Letras',
    description: 'Tacha todas las letras "A" que encuentres',
    estimatedTime: 2,
    cognitiveSkills: ['Atención sostenida', 'Velocidad de procesamiento'],
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400'
  },
  {
    id: 'ate-3',
    areaId: 'atencion',
    name: 'Sigue el Patrón',
    description: 'Identifica y continúa el patrón de colores',
    estimatedTime: 4,
    cognitiveSkills: ['Atención alternante', 'Razonamiento'],
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400'
  },
  
  // Lenguaje
  {
    id: 'len-1',
    areaId: 'lenguaje',
    name: 'Formar Palabras',
    description: 'Forma palabras con las letras proporcionadas',
    estimatedTime: 3,
    cognitiveSkills: ['Fluidez verbal', 'Vocabulario'],
    imageUrl: 'https://images.unsplash.com/photo-1519909089535-c493f2f1e522?w=400'
  },
  {
    id: 'len-2',
    areaId: 'lenguaje',
    name: 'Categorías',
    description: 'Nombra elementos de una categoría específica',
    estimatedTime: 3,
    cognitiveSkills: ['Fluidez semántica', 'Memoria semántica'],
    imageUrl: 'https://images.unsplash.com/photo-1519909089535-c493f2f1e522?w=400'
  },
  {
    id: 'len-3',
    areaId: 'lenguaje',
    name: 'Completar Frases',
    description: 'Completa las frases con la palabra correcta',
    estimatedTime: 2,
    cognitiveSkills: ['Comprensión verbal', 'Razonamiento'],
    imageUrl: 'https://images.unsplash.com/photo-1519909089535-c493f2f1e522?w=400'
  },
  
  // Funciones Ejecutivas
  {
    id: 'fun-1',
    areaId: 'funciones-ejecutivas',
    name: 'Torre de Hanoi',
    description: 'Mueve los discos siguiendo las reglas',
    estimatedTime: 5,
    cognitiveSkills: ['Planificación', 'Resolución de problemas'],
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400'
  },
  {
    id: 'fun-2',
    areaId: 'funciones-ejecutivas',
    name: 'Laberinto',
    description: 'Encuentra el camino de salida del laberinto',
    estimatedTime: 4,
    cognitiveSkills: ['Orientación espacial', 'Planificación'],
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400'
  },
  {
    id: 'fun-3',
    areaId: 'funciones-ejecutivas',
    name: 'Ordenar Pasos',
    description: 'Ordena los pasos de una actividad cotidiana',
    estimatedTime: 4,
    cognitiveSkills: ['Secuenciación', 'Razonamiento lógico'],
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400'
  },
  
  // Percepción
  {
    id: 'per-1',
    areaId: 'percepcion',
    name: 'Figuras Ocultas',
    description: 'Encuentra las figuras escondidas en la imagen',
    estimatedTime: 3,
    cognitiveSkills: ['Percepción visual', 'Atención'],
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400'
  },
  {
    id: 'per-2',
    areaId: 'percepcion',
    name: 'Rotación Mental',
    description: 'Identifica la figura rotada correctamente',
    estimatedTime: 4,
    cognitiveSkills: ['Orientación espacial', 'Percepción visual'],
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400'
  },
  {
    id: 'per-3',
    areaId: 'percepcion',
    name: 'Colores y Formas',
    description: 'Clasifica elementos por color y forma',
    estimatedTime: 2,
    cognitiveSkills: ['Categorización', 'Atención selectiva'],
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400'
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
