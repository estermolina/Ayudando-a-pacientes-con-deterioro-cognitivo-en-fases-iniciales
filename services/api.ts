// Configuración de la API
const API_URL = typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL 
  ? import.meta.env.VITE_API_URL 
  : 'http://localhost:5000/api';

// Helper para manejar respuestas
async function handleResponse(response: Response) {
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || data.message || 'Error en la petición');
  }
  
  return data;
}

// Helper para obtener el token
function getToken(): string | null {
  return localStorage.getItem('token');
}

// Helper para crear headers con autenticación
function getAuthHeaders(): HeadersInit {
  const token = getToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return headers;
}

// ==========================================
// AUTENTICACIÓN
// ==========================================

export const authAPI = {
  /**
   * Registrar un nuevo usuario
   */
  register: async (
    name: string, 
    email: string, 
    password: string, 
    type: 'patient' | 'family' | 'healthcare'
  ) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, type })
    });
    
    const data = await handleResponse(response);
    
    // Guardar token en localStorage
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    
    return data;
  },

  /**
   * Iniciar sesión
   */
  login: async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const data = await handleResponse(response);
    
    // Guardar token en localStorage
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    
    return data;
  },

  /**
   * Cerrar sesión
   */
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  /**
   * Verificar si hay una sesión activa
   */
  checkSession: () => {
    const token = getToken();
    const userStr = localStorage.getItem('user');
    
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        return { user, token };
      } catch (error) {
        return null;
      }
    }
    
    return null;
  }
};

// ==========================================
// RESULTADOS
// ==========================================

export const resultsAPI = {
  /**
   * Guardar un resultado de actividad
   */
  save: async (result: {
    userId: string;
    activityId: string;
    areaId: string;
    timeSpent: number;
    correctAnswers: number;
    incorrectAnswers: number;
    percentage: number;
    difficulty: 'facil' | 'medio' | 'dificil';
  }) => {
    const response = await fetch(`${API_URL}/results`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(result)
    });
    
    return handleResponse(response);
  },

  /**
   * Obtener todos los resultados de un usuario
   */
  getByUser: async (userId: string) => {
    const response = await fetch(`${API_URL}/results/user/${userId}`, {
      headers: getAuthHeaders()
    });
    
    return handleResponse(response);
  },

  /**
   * Obtener resultados por área cognitiva
   */
  getByArea: async (userId: string, areaId: string) => {
    const response = await fetch(`${API_URL}/results/user/${userId}/area/${areaId}`, {
      headers: getAuthHeaders()
    });
    
    return handleResponse(response);
  },

  /**
   * Obtener estadísticas del usuario
   */
  getStats: async (userId: string) => {
    const response = await fetch(`${API_URL}/results/user/${userId}/stats`, {
      headers: getAuthHeaders()
    });
    
    return handleResponse(response);
  }
};

// ==========================================
// ACTIVIDADES
// ==========================================

export const activitiesAPI = {
  /**
   * Obtener todas las actividades
   */
  getAll: async () => {
    const response = await fetch(`${API_URL}/activities`, {
      headers: getAuthHeaders()
    });
    
    return handleResponse(response);
  },

  /**
   * Obtener actividades por área
   */
  getByArea: async (areaId: string) => {
    const response = await fetch(`${API_URL}/activities/area/${areaId}`, {
      headers: getAuthHeaders()
    });
    
    return handleResponse(response);
  },

  /**
   * Obtener una actividad específica
   */
  getById: async (activityId: string) => {
    const response = await fetch(`${API_URL}/activities/${activityId}`, {
      headers: getAuthHeaders()
    });
    
    return handleResponse(response);
  }
};

// ==========================================
// USUARIOS
// ==========================================

export const usersAPI = {
  /**
   * Obtener perfil del usuario
   */
  getProfile: async (userId: string) => {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      headers: getAuthHeaders()
    });
    
    return handleResponse(response);
  },

  /**
   * Actualizar perfil del usuario
   */
  updateProfile: async (userId: string, data: { name?: string; email?: string }) => {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    
    return handleResponse(response);
  }
};

// Exportar configuración para poder cambiarla desde fuera si es necesario
export const apiConfig = {
  getBaseUrl: () => API_URL,
  setBaseUrl: (url: string) => {
    // Esta función permitiría cambiar la URL base si es necesario
    console.log('Para cambiar la URL base, modifica VITE_API_URL en .env');
  }
};
