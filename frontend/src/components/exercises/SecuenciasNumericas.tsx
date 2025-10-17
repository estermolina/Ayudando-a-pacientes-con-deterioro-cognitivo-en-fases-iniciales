import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface SecuenciasNumericasProps {
  difficulty: 'facil' | 'medio' | 'dificil';
  onComplete: (correct: number, incorrect: number) => void;
}

export function SecuenciasNumericas({ difficulty, onComplete }: SecuenciasNumericasProps) {
  const [phase, setPhase] = useState<'show' | 'input'>('show');
  const [sequence, setSequence] = useState<number[]>([]);
  const [userInput, setUserInput] = useState('');
  const [currentRound, setCurrentRound] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [showTime, setShowTime] = useState(3);

  const rounds = difficulty === 'facil' ? 3 : difficulty === 'medio' ? 5 : 7;
  const seqLength = difficulty === 'facil' ? 3 : difficulty === 'medio' ? 4 : 5;

  useEffect(() => {
    generateNewSequence();
  }, []);

  useEffect(() => {
    if (phase === 'show' && showTime > 0) {
      const timer = setTimeout(() => setShowTime(showTime - 1), 1000);
      return () => clearTimeout(timer);
    } else if (showTime === 0 && phase === 'show') {
      setPhase('input');
      setShowTime(3);
    }
  }, [showTime, phase]);

  const generateNewSequence = () => {
    const newSeq = Array.from({ length: seqLength }, () => Math.floor(Math.random() * 9) + 1);
    setSequence(newSeq);
    setPhase('show');
    setUserInput('');
  };

  const handleSubmit = () => {
    const userNumbers = userInput.split('').map(Number);
    const isCorrect = JSON.stringify(userNumbers) === JSON.stringify(sequence);
    
    if (isCorrect) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }

    if (currentRound + 1 >= rounds) {
      onComplete(isCorrect ? correct + 1 : correct, isCorrect ? incorrect : incorrect + 1);
    } else {
      setCurrentRound(currentRound + 1);
      setTimeout(generateNewSequence, 1500);
    }
  };

  if (phase === 'show') {
    return (
      <div className="text-center">
        <div className="mb-8">
          <div className="text-5xl text-purple-600 mb-4">{showTime}</div>
          <h3 className="text-gray-900 mb-4">Memoriza estos números</h3>
          <p className="text-xl text-gray-600">Ronda {currentRound + 1} de {rounds}</p>
        </div>
        <div className="flex justify-center gap-4">
          {sequence.map((num, index) => (
            <div key={index} className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-4xl text-white">{num}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-gray-900 mb-4">Escribe la secuencia que viste</h3>
      <p className="text-xl text-gray-600 mb-8">Ronda {currentRound + 1} de {rounds}</p>
      
      <Input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value.replace(/[^0-9]/g, '').slice(0, seqLength))}
        placeholder="Escribe los números"
        className="h-20 text-4xl text-center mb-8"
        maxLength={seqLength}
        autoFocus
      />
      
      <div className="flex gap-4">
        <Button
          onClick={handleSubmit}
          disabled={userInput.length !== seqLength}
          size="lg"
          className="flex-1 h-16 text-2xl bg-gradient-to-r from-green-500 to-green-600"
        >
          Confirmar
        </Button>
      </div>
      
      <div className="mt-8 flex justify-center gap-8">
        <div className="text-xl">
          <span className="text-green-600">✓ Aciertos: {correct}</span>
        </div>
        <div className="text-xl">
          <span className="text-red-600">✗ Fallos: {incorrect}</span>
        </div>
      </div>
    </div>
  );
}
