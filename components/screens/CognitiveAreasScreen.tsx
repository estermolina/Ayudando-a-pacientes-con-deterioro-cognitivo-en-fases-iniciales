import { ArrowLeft, Brain, Target, MessageCircle, Puzzle, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { CognitiveArea } from '../../types';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CognitiveAreasScreenProps {
  areas: CognitiveArea[];
  onSelectArea: (areaId: string) => void;
  onBack: () => void;
}

const iconMap: Record<string, any> = {
  Brain,
  Target,
  MessageCircle,
  Puzzle,
  Eye
};

export function CognitiveAreasScreen({ areas, onSelectArea }: CognitiveAreasScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-purple-700">Áreas Cognitivas</h1>
        </div>
      </header>

      {/* Areas Grid */}
      <main className="max-w-7xl mx-auto p-6 mt-8">
        <p className="text-2xl text-center text-gray-600 mb-12">
          Selecciona el área que deseas ejercitar
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => {
            const Icon = iconMap[area.icon];
            return (
              <button
                key={area.id}
                onClick={() => onSelectArea(area.id)}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={area.imageUrl}
                    alt={area.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 right-4 w-16 h-16 ${area.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-9 h-9 text-white" />
                  </div>
                </div>
                
                <div className="p-6 text-left">
                  <h2 className="text-gray-900 mb-2">{area.name}</h2>
                  <p className="text-xl text-gray-600">
                    {area.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
