import { useState } from 'react';
import { Button } from '../ui/button';

interface CompletarFrasesProps {
  difficulty: 'facil' | 'medio' | 'dificil';
  onComplete: (correct: number, incorrect: number) => void;
}

export function CompletarFrases({ difficulty, onComplete }: CompletarFrasesProps) {
  const sentences = {
    facil: [
      { text: 'El cielo es de color ___', options: ['azul', 'verde', 'rojo', 'amarillo'], correct: 0 },
      { text: 'Los pájaros ___', options: ['nadan', 'vuelan', 'corren', 'saltan'], correct: 1 },
      { text: 'El sol sale por el ___', options: ['norte', 'sur', 'este', 'oeste'], correct: 2 },
      { text: 'La nieve es ___', options: ['caliente', 'fría', 'dulce', 'salada'], correct: 1 },
    ],
    medio: [
      { text: 'La capital de España es ___', options: ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'], correct: 1 },
      { text: 'El órgano que bombea sangre es el ___', options: ['pulmón', 'hígado', 'corazón', 'riñón'], correct: 2 },
      { text: 'El instrumento para medir el tiempo es el ___', options: ['termómetro', 'barómetro', 'reloj', 'calendario'], correct: 2 },
      { text: 'Los dientes sirven para ___', options: ['ver', 'oír', 'masticar', 'oler'], correct: 2 },
    ],
    dificil: [
      { text: 'El proceso de convertir agua en vapor se llama ___', options: ['condensación', 'evaporación', 'precipitación', 'solidificación'], correct: 1 },
      { text: 'El autor de Don Quijote es ___', options: ['Lope de Vega', 'Cervantes', 'Quevedo', 'Góngora'], correct: 1 },
      { text: 'La fotosíntesis la realizan las ___', options: ['animales', 'hongos', 'plantas', 'bacterias'], correct: 2 },
      { text: 'El planeta más cercano al Sol es ___', options: ['Venus', 'Mercurio', 'Marte', 'Tierra'], correct: 1 },
    ]
  };

  const questions = sentences[difficulty];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
    
    const isCorrect = index === currentQuestion.correct;
    
    if (isCorrect) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 >= questions.length) {
        onComplete(isCorrect ? correct + 1 : correct, isCorrect ? incorrect : incorrect + 1);
      } else {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      }
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-xl text-gray-600">Pregunta {currentIndex + 1} de {questions.length}</p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 mb-8">
        <h3 className="text-gray-900 text-center mb-12">{currentQuestion.text}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => {
            let buttonClass = 'p-8 rounded-2xl border-4 transition-all text-2xl ';
            
            if (showFeedback) {
              if (index === currentQuestion.correct) {
                buttonClass += 'border-green-500 bg-green-100 text-green-700';
              } else if (index === selectedAnswer) {
                buttonClass += 'border-red-500 bg-red-100 text-red-700';
              } else {
                buttonClass += 'border-gray-200 bg-gray-50 text-gray-400';
              }
            } else {
              buttonClass += 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50';
            }

            return (
              <button
                key={index}
                onClick={() => !showFeedback && handleAnswer(index)}
                disabled={showFeedback}
                className={buttonClass}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-8 text-xl">
        <span className="text-green-600">✓ Aciertos: {correct}</span>
        <span className="text-red-600">✗ Fallos: {incorrect}</span>
      </div>
    </div>
  );
}
