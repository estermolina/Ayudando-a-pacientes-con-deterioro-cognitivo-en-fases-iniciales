import { useState } from 'react';
import { Button } from '../ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface OrdenarPasosProps {
  difficulty: 'facil' | 'medio' | 'dificil';
  onComplete: (correct: number, incorrect: number) => void;
}

export function OrdenarPasos({ difficulty, onComplete }: OrdenarPasosProps) {
  const tasks = {
    facil: [
      {
        title: 'Hacer un café',
        steps: ['Servir en la taza', 'Poner agua en la cafetera', 'Añadir café molido', 'Encender la cafetera'],
        correct: [1, 2, 3, 0]
      },
      {
        title: 'Lavarse las manos',
        steps: ['Secarse con toalla', 'Abrir el grifo', 'Enjabonarse', 'Enjuagar'],
        correct: [1, 2, 3, 0]
      }
    ],
    medio: [
      {
        title: 'Preparar una ensalada',
        steps: ['Servir en plato', 'Lavar verduras', 'Cortar ingredientes', 'Añadir aderezo', 'Mezclar todo'],
        correct: [1, 2, 3, 4, 0]
      },
      {
        title: 'Plantar una semilla',
        steps: ['Regar la tierra', 'Hacer un agujero', 'Cubrir con tierra', 'Poner la semilla', 'Preparar la maceta'],
        correct: [4, 2, 1, 3, 0]
      }
    ],
    dificil: [
      {
        title: 'Cambiar una rueda de coche',
        steps: ['Bajar el gato', 'Aflojar tornillos', 'Apretar tornillos nuevos', 'Levantar con gato', 'Quitar rueda vieja', 'Poner rueda nueva'],
        correct: [1, 3, 4, 5, 0, 2]
      }
    ]
  };

  const selectedTasks = tasks[difficulty];
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [currentSteps, setCurrentSteps] = useState(() => 
    [...selectedTasks[0].steps].sort(() => Math.random() - 0.5)
  );
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const currentTask = selectedTasks[currentTaskIndex];

  const moveStep = (index: number, direction: 'up' | 'down') => {
    const newSteps = [...currentSteps];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (swapIndex >= 0 && swapIndex < newSteps.length) {
      [newSteps[index], newSteps[swapIndex]] = [newSteps[swapIndex], newSteps[index]];
      setCurrentSteps(newSteps);
    }
  };

  const handleCheck = () => {
    const isCorrect = JSON.stringify(currentSteps) === JSON.stringify(
      currentTask.correct.map(i => currentTask.steps[i])
    );

    if (isCorrect) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }

    if (currentTaskIndex + 1 >= selectedTasks.length) {
      onComplete(isCorrect ? correct + 1 : correct, isCorrect ? incorrect : incorrect + 1);
    } else {
      setTimeout(() => {
        setCurrentTaskIndex(currentTaskIndex + 1);
        setCurrentSteps([...selectedTasks[currentTaskIndex + 1].steps].sort(() => Math.random() - 0.5));
      }, 1500);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-xl text-gray-600 mb-4">Actividad {currentTaskIndex + 1} de {selectedTasks.length}</p>
        <h3 className="text-gray-900 mb-4">Ordena los pasos para: {currentTask.title}</h3>
        <h2 className="text-1xl font-bold text-gray-800">⚠️Utiliza las flechas para mover cada paso hacia arriba o hacia abajo⚠️</h2>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 mb-8">
        <div className="space-y-3">
          {currentSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-md">
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => moveStep(index, 'up')}
                  disabled={index === 0}
                  className="p-2 rounded-lg bg-orange-100 hover:bg-orange-200 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowUp className="w-5 h-5 text-orange-600" />
                </button>
                <button
                  onClick={() => moveStep(index, 'down')}
                  disabled={index === currentSteps.length - 1}
                  className="p-2 rounded-lg bg-orange-100 hover:bg-orange-200 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowDown className="w-5 h-5 text-orange-600" />
                </button>
              </div>
              
              <div className="flex-1 flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center text-xl">
                  {index + 1}
                </div>
                <p className="text-xl text-gray-900">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        onClick={handleCheck}
        size="lg"
        className="w-full h-16 text-2xl bg-gradient-to-r from-green-500 to-green-600"
      >
        Comprobar Orden
      </Button>

      <div className="mt-6 flex justify-center gap-8 text-xl">
        <span className="text-green-600">✓ Aciertos: {correct}</span>
        <span className="text-red-600">✗ Fallos: {incorrect}</span>
      </div>
    </div>
  );
}
