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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <h1 className="text-purple-700 mb-3">Áreas Cognitivas</h1>
        <p className="text-xl text-gray-600">Selecciona el área que deseas ejercitar</p>
      </div>

      {/* Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((area) => {
          const Icon = iconMap[area.icon];
          return (
            <button
              key={area.id}
              onClick={() => onSelectArea(area.id)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative h-56">
                <ImageWithFallback
                  src={area.imageUrl}
                  alt={area.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 right-4 w-20 h-20 ${area.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow`}>
                  <Icon className="w-11 h-11 text-white" />
                </div>
              </div>
              
              <div className="p-6 text-left">
                <h2 className="text-gray-900 mb-3">{area.name}</h2>
                <p className="text-lg text-gray-600">
                  {area.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
