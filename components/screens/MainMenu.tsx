import { Brain, TrendingUp } from 'lucide-react';

interface MainMenuProps {
  userName: string;
  onNavigate: (screen: 'activities' | 'results') => void;
}

export function MainMenu({ userName, onNavigate }: MainMenuProps) {
  const menuOptions = [
    {
      id: 'activities' as const,
      icon: Brain,
      title: 'Actividades',
      description: 'Realiza ejercicios de estimulación cognitiva',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'results' as const,
      icon: TrendingUp,
      title: 'Resultados',
      description: 'Consulta tu progreso y estadísticas',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <Brain className="w-9 h-9 text-white" />
            </div>
            <div>
              <h1 className="text-purple-700">¡Hola, {userName}!</h1>
              <p className="text-xl text-muted-foreground">Selecciona una opción para comenzar</p>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Options */}
      <main className="max-w-7xl mx-auto p-6 mt-12">
        <div className="grid md:grid-cols-2 gap-8">
          {menuOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNavigate(option.id)}
              className={`${option.bgColor} rounded-3xl p-8 text-left hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-transparent hover:border-white`}
            >
              <div className={`w-24 h-24 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <option.icon className="w-14 h-14 text-white" />
              </div>
              <h2 className="text-gray-900 mb-3">{option.title}</h2>
              <p className="text-2xl text-gray-600">
                {option.description}
              </p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
