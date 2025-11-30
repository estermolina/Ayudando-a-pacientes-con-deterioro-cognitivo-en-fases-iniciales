import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface FormarPalabrasProps {
  difficulty: 'facil' | 'medio' | 'dificil';
  onComplete: (correct: number, incorrect: number) => void;
}

export function FormarPalabras({ difficulty, onComplete }: FormarPalabrasProps) {
  const challenges = {
    facil: [
      { letters: 'OSCA', answer: 'COSA', hint: 'Objeto o elemento' },
      { letters: 'QPUEÑEO', answer: 'PEQUEÑO', hint: 'Opuesto a grande' },
      { letters: 'RPROE', answer: 'PERRO', hint: 'Mascota que ladra' },
      { letters: 'GAAU', answer: 'AGUA', hint: 'Líquido vital' },
    ],
    medio: [
      { letters: 'LIBOR', answer: 'LIBRO', hint: 'Se usa para leer' },
      { letters: 'VLNEZTANA', answer: 'VENTANA', hint: 'Deja pasar luz a la casa' },
      { letters: 'SLALIC', answer: 'SILLA', hint: 'Mueble para sentarse' },
      { letters: 'FALIMIA', answer: 'FAMILIA', hint: 'Grupo de parientes' },
    ],
    dificil: [
      { letters: 'RCORNUDERAOD', answer: 'ORDENADOR', hint: 'Dispositivo electrónico' },
      { letters: 'MIAOTVATINOC', answer: 'MOTIVACION', hint: 'Fuerza interior que impulsa a hacer algo' },
      { letters: 'OITUCNISOTC', answer: 'CONSTITUCION', hint: 'Ley que rige el sistema de gobierno de un país' },
      { letters: 'OSTMANIPE', answer: 'PENSAMIENTO', hint: 'Actividad mental' },
    ]
  };

  const words = challenges[difficulty];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const currentWord = words[currentIndex];

  const handleSubmit = () => {
    const isCorrect = userInput.toUpperCase() === currentWord.answer;
    
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 >= words.length) {
        onComplete(isCorrect ? correct + 1 : correct, isCorrect ? incorrect : incorrect + 1);
      } else {
        setCurrentIndex(currentIndex + 1);
        setUserInput('');
        setFeedback(null);
      }
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-xl text-gray-600 mb-4">Palabra {currentIndex + 1} de {words.length}</p>
        <h3 className="text-gray-900 mb-4">Ordena las letras para formar una palabra</h3>
            <h2 className="text-1xl font-bold text-gray-800">⚠️Pueden aparecer más letras de las necesarias⚠️</h2>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 mb-8">
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {currentWord.letters.split('').map((letter, index) => (
            <div key={index} className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border-2 border-purple-300">
              <span className="text-3xl text-purple-700">{letter}</span>
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <p className="text-xl text-gray-600">💡 Pista: {currentWord.hint}</p>
        </div>

        <Input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value.toUpperCase())}
          placeholder="Escribe la palabra aquí"
          className="h-20 text-3xl text-center mb-6"
          autoFocus
          disabled={feedback !== null}
        />

        {feedback && (
          <div className={`text-center text-2xl p-4 rounded-xl ${
            feedback === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {feedback === 'correct' ? '✓ ¡Correcto!' : `✗ Incorrecto. La palabra era: ${currentWord.answer}`}
          </div>
        )}
      </div>

      <Button
        onClick={handleSubmit}
        disabled={userInput.length === 0 || feedback !== null}
        size="lg"
        className="w-full h-16 text-2xl bg-gradient-to-r from-green-500 to-green-600"
      >
        Comprobar
      </Button>

      <div className="mt-6 flex justify-center gap-8 text-xl">
        <span className="text-green-600">✓ Aciertos: {correct}</span>
        <span className="text-red-600">✗ Fallos: {incorrect}</span>
      </div>
    </div>
  );
}
