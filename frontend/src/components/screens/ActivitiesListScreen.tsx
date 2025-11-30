import { useState } from 'react';
import { ArrowLeft, Search, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Activity, CognitiveArea } from '../../types';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ActivitiesListScreenProps {
  area: CognitiveArea;
  activities: Activity[];
  onSelectActivity: (activityId: string) => void;
  onBack: () => void;
}

export function ActivitiesListScreen({ 
  area, 
  activities, 
  onSelectActivity, 
  onBack 
}: ActivitiesListScreenProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredActivities = activities.filter(activity =>
    activity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Button
              onClick={onBack}
              variant="outline"
              size="lg"
              className="h-14 px-6"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              <span className="text-xl">Volver a Áreas</span>
            </Button>
            <h1 className="text-purple-700">{area.name}</h1>
          </div>
          
          {/* Barra de búsqueda */}
          <div className="relative max-w-3xl w-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar actividad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-20 pr-6 h-20 text-2xl rounded-2xl"
            />
          </div>
        </div>
      </header>

      {/* Activities List */}
      <main className="max-w-7xl mx-auto p-6 mt-8">
        <p className="text-2xl text-gray-600 mb-8">
          {filteredActivities.length} actividad{filteredActivities.length !== 1 ? 'es' : ''} disponible{filteredActivities.length !== 1 ? 's' : ''}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <button
              key={activity.id}
              onClick={() => onSelectActivity(activity.id)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-left"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={activity.imageUrl}
                  alt={activity.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-gray-900 mb-3">{activity.name}</h3>
                <p className="text-lg text-gray-600 mb-4">
                  {activity.description}
                </p>
                
                <div className="flex items-center gap-2 text-purple-600">
                  <Clock className="w-6 h-6" />
                  <span className="text-xl">{activity.estimatedTime} minutos</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500">
              No se encontraron actividades con "{searchTerm}"
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
