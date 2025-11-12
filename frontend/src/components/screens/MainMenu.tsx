import { TrendingUp, Dumbbell } from 'lucide-react';

interface MainMenuProps {
  userName: string;
  onNavigate: (screen: 'activities' | 'results') => void;
}

export function MainMenu({ userName, onNavigate }: MainMenuProps) {
  const menuOptions = [
    {
      id: 'activities' as const,
      icon: Dumbbell,
      title: 'Actividades',
      description: 'Realiza ejercicios de estimulación cognitiva',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      hoverBorder: 'hover:border-purple-200'
    },
    {
      id: 'results' as const,
      icon: TrendingUp,
      title: 'Resultados',
      description: 'Consulta tu progreso y estadísticas',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      hoverBorder: 'hover:border-blue-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <div className="flex items-center gap-5">
          <div>
            <h1 className="text-purple-700 mb-2">¡Hola, {userName}!</h1>
            <p className="text-xl text-gray-600">Selecciona una opción para comenzar</p>
          </div>
        </div>
      </div>

      {/* Menu Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {menuOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onNavigate(option.id)}
            className={`${option.bgColor} rounded-3xl p-12 text-left hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-transparent ${option.hoverBorder} group`}
          >
            <div className={`w-32 h-32 bg-gradient-to-br ${option.color} rounded-3xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-shadow`}>
              <option.icon className="w-20 h-20 text-white" />
            </div>
            <h2 className="text-gray-900 mb-4">{option.title}</h2>
            <p className="text-xl text-gray-600">
              {option.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
