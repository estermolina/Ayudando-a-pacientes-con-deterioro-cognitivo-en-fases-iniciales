import { useState } from 'react';
import { Button } from '../ui/button';

interface TachadoLetrasProps {
  difficulty: 'facil' | 'medio' | 'dificil';
  onComplete: (correct: number, incorrect: number) => void;
}

export function TachadoLetras({ difficulty, onComplete }: TachadoLetrasProps) {
  const targetLetter = 'A';
  const gridSize = difficulty === 'facil' ? 6 : difficulty === 'medio' ? 8 : 10;
  const totalLetters = gridSize * gridSize;
  
  const [letters] = useState(() => {
    const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letterArray = [];
    const targetCount = Math.floor(totalLetters * 0.3);
    
    for (let i = 0; i < targetCount; i++) {
      letterArray.push(targetLetter);
    }
    
    for (let i = targetCount; i < totalLetters; i++) {
      letterArray.push(allLetters[Math.floor(Math.random() * allLetters.length)]);
    }
    
    return letterArray.sort(() => Math.random() - 0.5);
  });

  const [clicked, setClicked] = useState<Set<number>>(new Set());
  const totalTargets = letters.filter(l => l === targetLetter).length;

  const handleLetterClick = (index: number) => {
    const newClicked = new Set(clicked);
    if (clicked.has(index)) {
      newClicked.delete(index);
    } else {
      newClicked.add(index);
    }
    setClicked(newClicked);
  };

  const handleFinish = () => {
    let correct = 0;
    let incorrect = 0;
    
    clicked.forEach(index => {
      if (letters[index] === targetLetter) {
        correct++;
      } else {
        incorrect++;
      }
    });
    
    const missed = totalTargets - correct;
    incorrect += missed;
    
    onComplete(correct, incorrect);
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-gray-900 mb-4">Encuentra y marca todas las letras "{targetLetter}"</h3>
        <div className="flex justify-center gap-8 text-xl">
          <span>Marcadas: {clicked.size}</span>
          <span>Total de "{targetLetter}": {totalTargets}</span>
        </div>
      </div>

      <div 
        className="grid gap-2 mb-8 mx-auto max-w-4xl"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {letters.map((letter, index) => (
          <button
            key={index}
            onClick={() => handleLetterClick(index)}
            className={`aspect-square rounded-lg text-2xl transition-all ${
              clicked.has(index)
                ? 'bg-purple-500 text-white line-through'
                : 'bg-white border-2 border-gray-300 hover:border-purple-400'
            }`}
          >
            {letter}
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
