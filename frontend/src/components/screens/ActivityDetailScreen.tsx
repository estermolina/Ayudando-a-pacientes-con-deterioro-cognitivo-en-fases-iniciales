import { useState } from 'react';
import { ArrowLeft, Clock, Brain, Play, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Activity } from '../../types';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ActivityDetailScreenProps {
  activity: Activity;
  onStart: (difficulty: 'facil' | 'medio' | 'dificil') => void;
  onBack: () => void;
}

export function ActivityDetailScreen({ activity, onStart, onBack }: ActivityDetailScreenProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<'facil' | 'medio' | 'dificil'>('medio');

  const difficulties = [
    { value: 'facil' as const, label: 'Fácil', color: 'bg-green-500', desc: 'Perfecto para empezar' },
    { value: 'medio' as const, label: 'Medio', color: 'bg-yellow-500', desc: 'Un reto equilibrado' },
    { value: 'dificil' as const, label: 'Difícil', color: 'bg-red-500', desc: 'Para expertos' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-6">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Button
            onClick={onBack}
            variant="outline"
            size="lg"
            className="h-14 px-6"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            <span className="text-xl">Volver al Listado</span>
          </Button>
          <h1 className="text-purple-700">Detalle de la Actividad</h1>
        </div>
      </header>

      {/* Activity Detail */}
      <main className="max-w-5xl mx-auto p-6 mt-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Image */}
          <div className="relative h-80">
            <ImageWithFallback
              src={activity.imageUrl}
              alt={activity.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            {/* Title */}
            <h2 className="text-gray-900 mb-4">{activity.name}</h2>
            
            {/* Description */}
            <p className="text-2xl text-gray-600 mb-8">
              {activity.description}
            </p>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Time */}
              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-7 h-7 text-purple-600" />
                  <h3 className="text-purple-900">Tiempo Estimado</h3>
                </div>
                <p className="text-2xl text-purple-700">{activity.estimatedTime} minutos</p>
              </div>

              {/* Cognitive Skills */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="w-7 h-7 text-blue-600" />
                  <h3 className="text-blue-900">Funciones que Estimula</h3>
                </div>
                <ul className="space-y-1">
                  {activity.cognitiveSkills.map((skill, index) => (
                    <li key={index} className="text-xl text-blue-700">• {skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Difficulty Selection */}
            <div className="mb-8">
              <h3 className="text-gray-900 mb-4">Selecciona el Nivel de Dificultad</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {difficulties.map((diff) => (
                  <button
                    key={diff.value}
                    onClick={() => setSelectedDifficulty(diff.value)}
                    className={`p-6 rounded-2xl border-4 transition-all ${
                      selectedDifficulty === diff.value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-12 h-12 ${diff.color} rounded-xl mb-3 mx-auto`}></div>
                    <h4 className="text-gray-900 mb-1">{diff.label}</h4>
                    <p className="text-lg text-gray-600">{diff.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={() => onStart(selectedDifficulty)}
                size="lg"
                className="flex-1 h-16 text-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                <Play className="w-7 h-7 mr-2" />
                Iniciar Actividad
              </Button>
              <Button
                onClick={onBack}
                variant="outline"
                size="lg"
                className="h-16 px-8 text-xl"
              >
                <X className="w-6 h-6 mr-2" />
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
