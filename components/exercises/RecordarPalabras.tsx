import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface RecordarPalabrasProps {
  difficulty: 'facil' | 'medio' | 'dificil';
  onComplete: (correct: number, incorrect: number) => void;
}

export function RecordarPalabras({ difficulty, onComplete }: RecordarPalabrasProps) {
  const [phase, setPhase] = useState<'memorize' | 'recall'>('memorize');
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [correctWords, setCorrectWords] = useState<string[]>([]);
  const [wordList, setWordList] = useState<string[]>([]);

  const allWords = [
    'CASA', 'PERRO', 'ÁRBOL', 'LIBRO', 'MESA', 'SILLA', 'VENTANA', 'PUERTA',
    'COCHE', 'FLOR', 'AGUA', 'PAN', 'SOL', 'LUNA', 'ESTRELLA', 'RELOJ'
  ];

  const wordCount = difficulty === 'facil' ? 4 : difficulty === 'medio' ? 6 : 8;

  useEffect(() => {
    const shuffled = [...allWords].sort(() => Math.random() - 0.5);
    const toMemorize = shuffled.slice(0, wordCount);
    setCorrectWords(toMemorize);
    
    const distractors = shuffled.slice(wordCount, wordCount + wordCount);
    const allOptions = [...toMemorize, ...distractors].sort(() => Math.random() - 0.5);
    setWordList(allOptions);
  }, []);

  useEffect(() => {
    if (phase === 'memorize' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && phase === 'memorize') {
      setPhase('recall');
    }
  }, [timeLeft, phase]);

  const handleWordClick = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter(w => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleFinish = () => {
    const correct = selectedWords.filter(w => correctWords.includes(w)).length;
    const incorrect = selectedWords.filter(w => !correctWords.includes(w)).length + 
                      correctWords.filter(w => !selectedWords.includes(w)).length;
    onComplete(correct, incorrect);
  };

  if (phase === 'memorize') {
    return (
      <div className="text-center">
        <Card className="p-12 mb-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="mb-6">
            <div className="text-6xl text-purple-600 mb-4">{timeLeft}</div>
            <h3 className="text-gray-900 mb-4">Memoriza estas palabras</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {correctWords.map((word, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-3xl text-gray-900">{word}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-gray-900 mb-6 text-center">
        Selecciona las palabras que recuerdas ({selectedWords.length} seleccionadas)
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {wordList.map((word, index) => (
          <button
            key={index}
            onClick={() => handleWordClick(word)}
            className={`p-6 rounded-2xl border-4 transition-all text-2xl ${
              selectedWords.includes(word)
                ? 'border-purple-500 bg-purple-100'
                : 'border-gray-200 bg-white hover:border-purple-300'
            }`}
          >
            {word}
          </button>
        ))}
      </div>
      <Button
        onClick={handleFinish}
        size="lg"
        className="w-full h-16 text-2xl bg-gradient-to-r from-green-500 to-green-600"
      >
        Finalizar
      </Button>
    </div>
  );
}
