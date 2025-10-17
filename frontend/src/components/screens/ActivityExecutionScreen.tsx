import { useState, useEffect } from 'react';
import { Pause, Play, X, Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button';
import { ActivitySession } from '../../types';
import { Alert, AlertDescription } from '../ui/alert';

// Import ejercicios específicos
import { RecordarPalabras } from '../exercises/RecordarPalabras';
import { ParejasImagenes } from '../exercises/ParejasImagenes';
import { SecuenciasNumericas } from '../exercises/SecuenciasNumericas';
import { TachadoLetras } from '../exercises/TachadoLetras';
import { FormarPalabras } from '../exercises/FormarPalabras';
import { CompletarFrases } from '../exercises/CompletarFrases';
import { OrdenarPasos } from '../exercises/OrdenarPasos';

interface ActivityExecutionScreenProps {
  session: ActivitySession;
  onComplete: (timeSpent: number, correct: number, incorrect: number) => void;
  onExit: () => void;
}

export function ActivityExecutionScreen({ session, onComplete, onExit }: ActivityExecutionScreenProps) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleExerciseComplete = (correct: number, incorrect: number) => {
    onComplete(elapsedTime, correct, incorrect);
  };

  // Renderizar el ejercicio específico según el ID de la actividad
  const renderExercise = () => {
    const activityId = session.activity.id;
    
    switch (activityId) {
      case 'mem-1':
        return <RecordarPalabras difficulty={session.difficulty} onComplete={handleExerciseComplete} />;
      case 'mem-2':
        return <ParejasImagenes difficulty={session.difficulty} onComplete={handleExerciseComplete} />;
      case 'mem-3':
        return <SecuenciasNumericas difficulty={session.difficulty} onComplete={handleExerciseComplete} />;
      case 'ate-2':
        return <TachadoLetras difficulty={session.difficulty} onComplete={handleExerciseComplete} />;
      case 'len-1':
        return <FormarPalabras difficulty={session.difficulty} onComplete={handleExerciseComplete} />;
      case 'len-3':
        return <CompletarFrases difficulty={session.difficulty} onComplete={handleExerciseComplete} />;
      case 'fun-3':
        return <OrdenarPasos difficulty={session.difficulty} onComplete={handleExerciseComplete} />;
      default:
        // Para actividades que aún no tienen ejercicio específico
        return (
          <div className="text-center p-12">
            <h3 className="text-gray-900 mb-4">Ejercicio en desarrollo</h3>
            <p className="text-xl text-gray-600 mb-8">
              Este ejercicio específico está en desarrollo. 
              Por ahora, puedes completarlo manualmente.
            </p>
            <Button
              onClick={() => handleExerciseComplete(1, 0)}
              size="lg"
              className="h-16 text-2xl bg-gradient-to-r from-green-500 to-green-600"
            >
              Marcar como Completado
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex flex-col">
      {/* Top Bar - Instructions */}
      <div className="bg-white shadow-sm p-6">
        <div className="max-w-7xl mx-auto">
          <Alert className="border-blue-200 bg-blue-50">
            <AlertDescription className="text-xl text-blue-900">
              <strong>Instrucciones:</strong> {session.activity.description}. 
              Responde cada pregunta seleccionando la opción correcta.
            </AlertDescription>
          </Alert>
          
          <div className="flex gap-4 mt-4">
            <Button
              onClick={() => setIsPaused(!isPaused)}
              variant="outline"
              size="lg"
              className="h-14 px-6 text-xl"
            >
              {isPaused ? (
                <>
                  <Play className="w-6 h-6 mr-2" />
                  Reanudar
                </>
              ) : (
                <>
                  <Pause className="w-6 h-6 mr-2" />
                  Pausar Tiempo
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Exercise Area */}
      <div className="flex-1 flex items-center justify-center p-6 overflow-y-auto">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="mb-6">
            <div className="flex justify-center">
              <div className="px-6 py-2 bg-purple-100 rounded-full">
                <span className="text-xl text-purple-700">
                  Nivel: {session.difficulty === 'facil' ? 'Fácil' : session.difficulty === 'medio' ? 'Medio' : 'Difícil'}
                </span>
              </div>
            </div>
          </div>

          {/* Renderizar ejercicio específico */}
          {isPaused ? (
            <div className="text-center py-20">
              <h2 className="text-gray-900 mb-4">Ejercicio en Pausa</h2>
              <p className="text-2xl text-gray-600">Presiona "Reanudar" para continuar</p>
            </div>
          ) : (
            renderExercise()
          )}
        </div>
      </div>

      {/* Bottom Bar - Timer and Actions */}
      <div className="bg-white shadow-lg p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Timer */}
          <div className="flex items-center gap-4">
            {showTimer && (
              <div className="bg-purple-100 px-8 py-4 rounded-2xl">
                <p className="text-3xl text-purple-700">{formatTime(elapsedTime)}</p>
              </div>
            )}
            <Button
              onClick={() => setShowTimer(!showTimer)}
              variant="ghost"
              size="lg"
              className="h-14 px-6"
            >
              {showTimer ? (
                <>
                  <EyeOff className="w-6 h-6 mr-2" />
                  <span className="text-xl">Ocultar Reloj</span>
                </>
              ) : (
                <>
                  <Eye className="w-6 h-6 mr-2" />
                  <span className="text-xl">Mostrar Reloj</span>
                </>
              )}
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={onExit}
              variant="outline"
              size="lg"
              className="h-14 px-6 text-xl"
            >
              <X className="w-6 h-6 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
