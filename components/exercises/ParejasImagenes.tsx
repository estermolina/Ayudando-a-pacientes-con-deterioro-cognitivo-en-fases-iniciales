import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

interface ParejasImagenesProps {
  difficulty: 'facil' | 'medio' | 'dificil';
  onComplete: (correct: number, incorrect: number) => void;
}

export function ParejasImagenes({ difficulty, onComplete }: ParejasImagenesProps) {
  const [cards, setCards] = useState<Array<{ id: number; emoji: string; isFlipped: boolean; isMatched: boolean }>>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);

  const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮'];
  const pairCount = difficulty === 'facil' ? 4 : difficulty === 'medio' ? 6 : 8;

  useEffect(() => {
    const selectedEmojis = emojis.slice(0, pairCount);
    const cardPairs = [...selectedEmojis, ...selectedEmojis]
      .map((emoji, index) => ({ id: index, emoji, isFlipped: false, isMatched: false }))
      .sort(() => Math.random() - 0.5);
    setCards(cardPairs);
  }, []);

  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2 || cards[index].isFlipped || cards[index].isMatched) {
      return;
    }

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped;
      
      if (cards[first].emoji === cards[second].emoji) {
        setTimeout(() => {
          const updatedCards = [...cards];
          updatedCards[first].isMatched = true;
          updatedCards[second].isMatched = true;
          setCards(updatedCards);
          setFlippedIndices([]);
          
          const newMatches = matches + 1;
          setMatches(newMatches);
          
          if (newMatches === pairCount) {
            setTimeout(() => onComplete(pairCount, moves - pairCount + 1), 500);
          }
        }, 1000);
      } else {
        setTimeout(() => {
          const updatedCards = [...cards];
          updatedCards[first].isFlipped = false;
          updatedCards[second].isFlipped = false;
          setCards(updatedCards);
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div className="text-2xl text-gray-700">Parejas encontradas: {matches}/{pairCount}</div>
        <div className="text-2xl text-gray-700">Intentos: {moves}</div>
      </div>
      
      <div className={`grid gap-4 ${pairCount <= 4 ? 'grid-cols-4' : pairCount <= 6 ? 'grid-cols-4' : 'grid-cols-4'}`}>
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            disabled={card.isFlipped || card.isMatched}
            className={`aspect-square rounded-2xl text-6xl flex items-center justify-center transition-all transform ${
              card.isFlipped || card.isMatched
                ? 'bg-white border-4 border-purple-500'
                : 'bg-gradient-to-br from-purple-500 to-blue-500 hover:scale-105'
            } ${card.isMatched ? 'opacity-50' : ''}`}
          >
            {card.isFlipped || card.isMatched ? card.emoji : '?'}
          </button>
        ))}
      </div>
    </div>
  );
}
