import { ArrowLeft, TrendingUp, Award, Calendar, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { ActivityResult, CognitiveArea } from '../../types';
import { Card } from '../ui/card';

interface GlobalResultsScreenProps {
  results: ActivityResult[];
  areas: CognitiveArea[];
  onBack: () => void;
}

export function GlobalResultsScreen({ results, areas }: GlobalResultsScreenProps) {
  // Calculate average by area
  const getAreaAverage = (areaId: string) => {
    const areaResults = results.filter(r => r.areaId === areaId);
    if (areaResults.length === 0) return 0;
    const sum = areaResults.reduce((acc, r) => acc + r.percentage, 0);
    return Math.round(sum / areaResults.length);
  };

  // Calculate overall average
  const overallAverage = results.length > 0
    ? Math.round(results.reduce((acc, r) => acc + r.percentage, 0) / results.length)
    : 0;

  // Get recent activities
  const recentActivities = [...results]
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 5);

  const getStatusColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-orange-600';
  };

  const getStatusText = (percentage: number) => {
    if (percentage >= 80) return 'Excelente';
    if (percentage >= 60) return 'Bien';
    return 'Necesita práctica';
  };

  // Función para el tiempo formateado
    const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Función para el tiempo total empleado
    const formatTotalTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${mins}m ${secs}s`;
    } else if (mins > 0) {
      return `${mins}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

// Calculate total time spent
  const totalTimeSpent = results.reduce((acc, r) => acc + r.timeSpent, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-purple-700">Resultados y Progreso</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 mt-8">
        {/* Overall Score */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-purple-500 to-blue-500 text-white">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center backdrop-blur">
              <Award className="w-14 h-14" />
            </div>
            <div className="flex-1">
              <h2 className="text-white mb-2">Puntuación General</h2>
              <p className="text-2xl opacity-90 mb-4">
                Promedio de todas las actividades realizadas
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-xl opacity-75 mb-1">Porcentaje</p>
                  <div className="flex items-center gap-3">
                    <span className="text-6xl">{overallAverage}%</span>
                    <TrendingUp className="w-12 h-12" />
                  </div>
                </div>
                <div className="h-20 w-px bg-white opacity-30"></div>
                <div>
                  <p className="text-xl opacity-75 mb-1">Tiempo Total</p>
                  <div className="flex items-center gap-3">
                    <Clock className="w-10 h-10 opacity-90" />
                    <span className="text-5xl">{formatTotalTime(totalTimeSpent)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

      {/* Results by Cognitive Area */}
      <div className="mb-12">
        <h2 className="text-gray-900 mb-6">Resultados por Área Cognitiva</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map(area => {
            const average = getAreaAverage(area.id);
            const areaResults = results.filter(r => r.areaId === area.id);
            
            return (
              <Card key={area.id} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-gray-900 mb-2">{area.name}</h3>
                    <p className="text-lg text-gray-600">
                      {areaResults.length} actividad{areaResults.length !== 1 ? 'es' : ''} realizada{areaResults.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <div className={`${area.color} w-16 h-16 rounded-xl shadow-md`}></div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl text-gray-600">Promedio</span>
                    <span className={`text-4xl ${getStatusColor(average)}`}>
                      {average}%
                    </span>
                  </div>
                  <Progress value={average} className="h-4" />
                </div>
                
                <p className={`text-lg ${getStatusColor(average)}`}>
                  Estado: <span className="font-medium">{getStatusText(average)}</span>
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Activities */}
      {recentActivities.length > 0 && (
        <div>
          <h2 className="text-gray-900 mb-6">Actividades Recientes</h2>
          <Card className="overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-900">Fecha</th>
                    <th className="px-6 py-4 text-left text-gray-900">Área</th>
                    <th className="px-6 py-4 text-left text-gray-900">Dificultad</th>
                    <th className="px-6 py-4 text-left text-xl text-gray-900">Tiempo</th>
                    <th className="px-6 py-4 text-left text-gray-900">Aciertos</th>
                    <th className="px-6 py-4 text-left text-gray-900">Porcentaje</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentActivities.map((result, index) => {
                    const area = areas.find(a => a.id === result.areaId);
                    return (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            <span className="text-lg text-gray-900">
                              {result.date.toLocaleDateString('es-ES')}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className="text-lg text-gray-900">{area?.name}</span>
                        </td>
                        <td className="px-6 py-5">
                          <span className={`inline-flex px-3 py-1.5 rounded-full text-sm ${
                            result.difficulty === 'facil' ? 'bg-green-100 text-green-700' :
                            result.difficulty === 'medio' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {result.difficulty === 'facil' ? 'Fácil' : 
                             result.difficulty === 'medio' ? 'Medio' : 'Difícil'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-lg text-gray-900">
                             {formatTime(result.timeSpent)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-lg text-gray-900">
                            {result.correctAnswers}/{result.correctAnswers + result.incorrectAnswers}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-2xl ${getStatusColor(result.percentage)}`}>
                            {result.percentage}%
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {recentActivities.length === 0 && (
        <Card className="p-12 text-center">
          <Award className="w-20 h-20 text-gray-300 mx-auto mb-4" />
          <h3 className="text-gray-900 mb-2">No hay resultados aún</h3>
          <p className="text-xl text-gray-600">
            Comienza a realizar actividades para ver tu progreso aquí
          </p>
        </Card>
      )}
      </main>
    </div>
  );
}
