import { useState, useEffect } from 'react';
import { LoginScreen } from './components/screens/LoginScreen';
import { MainMenu } from './components/screens/MainMenu';
import { CognitiveAreasScreen } from './components/screens/CognitiveAreasScreen';
import { ActivitiesListScreen } from './components/screens/ActivitiesListScreen';
import { ActivityDetailScreen } from './components/screens/ActivityDetailScreen';
import { ActivityExecutionScreen } from './components/screens/ActivityExecutionScreen';
import { ActivityResultScreen } from './components/screens/ActivityResultScreen';
import { GlobalResultsScreen } from './components/screens/GlobalResultsScreen';
import { AppLayout } from './components/AppLayout';
import { User, ActivitySession, ActivityResult } from './types';
import { cognitiveAreas, activities } from './data/mockData';
import { authAPI, resultsAPI } from './services/api';
import { toast } from 'sonner';

type Screen = 
  | 'login' 
  | 'menu' 
  | 'cognitive-areas' 
  | 'activities-list' 
  | 'activity-detail' 
  | 'activity-execution'
  | 'activity-result'
  | 'global-results';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);
  const [currentSession, setCurrentSession] = useState<ActivitySession | null>(null);
  const [lastResult, setLastResult] = useState<{
    activityName: string;
    timeSpent: number;
    correctAnswers: number;
    incorrectAnswers: number;
    percentage: number;
  } | null>(null);
  const [results, setResults] = useState<ActivityResult[]>([]);
  const [isLoadingResults, setIsLoadingResults] = useState(false);

  // Verificar sesión al cargar la aplicación
  useEffect(() => {
    const session = authAPI.checkSession();
    if (session) {
      setUser(session.user);
      setToken(session.token);
      setCurrentScreen('menu');
    }
  }, []);

  // Cargar resultados cuando el usuario inicia sesión
  useEffect(() => {
    if (user?.id && token) {
      loadResults();
    }
  }, [user, token]);

  // Cargar resultados del usuario
  const loadResults = async () => {
    if (!user?.id) return;
    
    setIsLoadingResults(true);
    try {
      const data = await resultsAPI.getByUser(user.id);
      
      // Convertir las fechas de string a Date
      const resultsWithDates = data.map((r: any) => ({
        ...r,
        date: new Date(r.date)
      }));
      
      setResults(resultsWithDates);
    } catch (error: any) {
      console.error('Error cargando resultados:', error);
      // Si el backend no está disponible, usar datos mock
      toast.error('No se pudieron cargar los resultados. Usando datos locales.');
    } finally {
      setIsLoadingResults(false);
    }
  };

  // Handlers
  const handleLogin = (userData: User, authToken: string) => {
    setUser(userData);
    setToken(authToken);
    setCurrentScreen('menu');
    toast.success(`¡Bienvenido/a, ${userData.name}!`);
  };

  const handleLogout = () => {
    authAPI.logout();
    setUser(null);
    setToken(null);
    setResults([]);
    setCurrentScreen('login');
    toast.info('Sesión cerrada correctamente');
  };

  const handleNavigateFromMenu = (destination: 'activities' | 'results') => {
    if (destination === 'activities') {
      setCurrentScreen('cognitive-areas');
    } else if (destination === 'results') {
      setCurrentScreen('global-results');
    }
  };

  const handleSidebarNavigate = (destination: 'menu' | 'activities' | 'results') => {
    if (destination === 'menu') {
      setSelectedAreaId(null);
      setSelectedActivityId(null);
      setCurrentScreen('menu');
    } else if (destination === 'activities') {
      setCurrentScreen('cognitive-areas');
    } else if (destination === 'results') {
      setCurrentScreen('global-results');
    }
  };

  const handleSelectArea = (areaId: string) => {
    setSelectedAreaId(areaId);
    setCurrentScreen('activities-list');
  };

  const handleSelectActivity = (activityId: string) => {
    setSelectedActivityId(activityId);
    setCurrentScreen('activity-detail');
  };

  const handleStartActivity = (difficulty: 'facil' | 'medio' | 'dificil') => {
    const activity = activities.find(a => a.id === selectedActivityId);
    if (activity) {
      setCurrentSession({
        activity,
        difficulty,
        startTime: Date.now(),
        isPaused: false
      });
      setCurrentScreen('activity-execution');
    }
  };

  const handleCompleteActivity = async (timeSpent: number, correct: number, incorrect: number) => {
    if (!currentSession || !user?.id) return;
    
    const total = correct + incorrect;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    // Preparar resultado
    const newResult = {
      userId: user.id,
      activityId: currentSession.activity.id,
      areaId: currentSession.activity.areaId,
      timeSpent,
      correctAnswers: correct,
      incorrectAnswers: incorrect,
      percentage,
      difficulty: currentSession.difficulty
    };
    
    try {
      // Guardar en la base de datos
      await resultsAPI.save(newResult);
      
      // Recargar resultados desde el servidor
      await loadResults();
      
      toast.success('¡Resultado guardado correctamente!');
    } catch (error: any) {
      console.error('Error guardando resultado:', error);
      toast.error('No se pudo guardar el resultado en el servidor');
      
      // Guardar localmente si falla la conexión
      const localResult: ActivityResult = {
        ...newResult,
        date: new Date()
      };
      setResults(prev => [...prev, localResult]);
    }
    
    // Mostrar pantalla de resultados
    setLastResult({
      activityName: currentSession.activity.name,
      timeSpent,
      correctAnswers: correct,
      incorrectAnswers: incorrect,
      percentage
    });
    
    setCurrentSession(null);
    setCurrentScreen('activity-result');
  };

  const handleBackToActivitiesList = () => {
    setCurrentScreen('activities-list');
  };

  const handleBackToAreas = () => {
    setSelectedActivityId(null);
    setCurrentScreen('cognitive-areas');
  };

  const handleExitActivity = () => {
    setCurrentSession(null);
    setCurrentScreen('activities-list');
  };

  // Get current data
  const selectedArea = selectedAreaId 
    ? cognitiveAreas.find(a => a.id === selectedAreaId) 
    : null;
  
  const selectedActivity = selectedActivityId
    ? activities.find(a => a.id === selectedActivityId)
    : null;
  
  const areaActivities = selectedAreaId
    ? activities.filter(a => a.areaId === selectedAreaId)
    : [];

  // Render current screen
  if (currentScreen === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (!user) {
    return null;
  }

  // Screens that need layout (all except login and activity execution)
  if (currentScreen === 'activity-execution' && currentSession) {
    return (
      <ActivityExecutionScreen
        session={currentSession}
        onComplete={handleCompleteActivity}
        onExit={handleExitActivity}
      />
    );
  }

  return (
    <>
      <AppLayout
        user={user}
        onNavigate={handleSidebarNavigate}
        onLogout={handleLogout}
      >
      {currentScreen === 'menu' && (
        <MainMenu 
          userName={user.name} 
          onNavigate={handleNavigateFromMenu} 
        />
      )}

      {currentScreen === 'cognitive-areas' && (
        <CognitiveAreasScreen
          areas={cognitiveAreas}
          onSelectArea={handleSelectArea}
          onBack={() => {}}
        />
      )}

      {currentScreen === 'activities-list' && selectedArea && (
        <ActivitiesListScreen
          area={selectedArea}
          activities={areaActivities}
          onSelectActivity={handleSelectActivity}
          onBack={handleBackToAreas}
        />
      )}

      {currentScreen === 'activity-detail' && selectedActivity && (
        <ActivityDetailScreen
          activity={selectedActivity}
          onStart={handleStartActivity}
          onBack={handleBackToActivitiesList}
        />
      )}

      {currentScreen === 'activity-result' && lastResult && (
        <ActivityResultScreen
          activityName={lastResult.activityName}
          timeSpent={lastResult.timeSpent}
          correctAnswers={lastResult.correctAnswers}
          incorrectAnswers={lastResult.incorrectAnswers}
          percentage={lastResult.percentage}
          onBackToList={handleBackToActivitiesList}
        />
      )}

      {currentScreen === 'global-results' && (
        <GlobalResultsScreen
          results={results}
          areas={cognitiveAreas}
          onBack={() => {}}
        />
      )}
      </AppLayout>
    </>
  );
}