import { Trophy, Clock, CheckCircle, XCircle, ArrowLeft, Brain, Target, MessageCircle, Puzzle, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ActivityResultScreenProps {
  activityName: string;
  activityImageUrl: string;
  areaColor: string;
  areaIcon: string;
  timeSpent: number;
  correctAnswers: number;
  incorrectAnswers: number;
  percentage: number;
  onBackToList: () => void;
}

const iconMap: Record<string, any> = {
  Brain,
  Target,
  MessageCircle,
  Puzzle,
  Eye
};

export function ActivityResultScreen({
  activityName,
  activityImageUrl,
  areaColor,
  areaIcon,
  timeSpent,
  correctAnswers,
  incorrectAnswers,
  percentage,
  onBackToList
}: ActivityResultScreenProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} min ${secs} seg`;
  };

  const getMessage = () => {
    if (percentage >= 90) return '¡Excelente trabajo! 🌟';
    if (percentage >= 75) return '¡Muy bien! Sigue así 👏';
    if (percentage >= 60) return '¡Buen esfuerzo! 💪';
    return '¡Sigue practicando! 🎯';
  };

  const getColor = () => {
    if (percentage >= 90) return 'from-green-500 to-emerald-600';
    if (percentage >= 75) return 'from-blue-500 to-cyan-600';
    if (percentage >= 60) return 'from-yellow-500 to-orange-600';
    return 'from-orange-500 to-red-600';
  };

  const Icon = iconMap[areaIcon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className={`bg-gradient-to-r ${getColor()} p-12 text-center text-white`}>
          <div className="relative w-40 h-40 mx-auto mb-6">
            <ImageWithFallback
              src={activityImageUrl}
              alt={activityName}
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            {/* Badge with area icon */}
            <div className={`absolute -bottom-3 -right-3 ${areaColor} w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white`}>
              {Icon && <Icon className="w-9 h-9 text-white" />}
            </div>
          </div>
          <h1 className="text-white mb-3">¡Actividad Completada!</h1>
          <p className="text-3xl opacity-90">{activityName}</p>
        </div>


        {/* Results */}
        <div className="p-12">
          {/* Motivational Message */}
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">{getMessage()}</h2>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Time */}
            <div className="bg-purple-50 rounded-2xl p-6 text-center">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="text-purple-900 mb-2">Tiempo Empleado</h3>
              <p className="text-3xl text-purple-700">{formatTime(timeSpent)}</p>
            </div>

            {/* Correct */}
            <div className="bg-green-50 rounded-2xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-green-900 mb-2">Aciertos</h3>
              <p className="text-3xl text-green-700">{correctAnswers}</p>
            </div>

            {/* Incorrect */}
            <div className="bg-red-50 rounded-2xl p-6 text-center">
              <XCircle className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <h3 className="text-red-900 mb-2">Fallos</h3>
              <p className="text-3xl text-red-700">{incorrectAnswers}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-900">Porcentaje Obtenido</h3>
              <span className="text-4xl text-purple-700">{percentage}%</span>
            </div>
            <Progress value={percentage} className="h-8" />
          </div>

          {/* Action Button */}
          <Button
            onClick={onBackToList}
            size="lg"
            className="w-full h-16 text-2xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            <ArrowLeft className="w-7 h-7 mr-2" />
            Volver al Listado de Actividades
          </Button>
        </div>
      </div>
    </div>
  );
}
