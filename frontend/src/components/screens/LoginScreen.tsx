import { useState } from 'react';
import { Brain, Mail, Lock, User as UserIcon, Loader2, BrainCog } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { authAPI } from '../../services/api';

interface LoginScreenProps {
  onLogin: (user: { id: string; name: string; email: string; type: 'patient' | 'family' | 'healthcare' }, token: string) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'patient' | 'family' | 'healthcare'>('patient');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (isRegistering) {
        // Registro
        const data = await authAPI.register(name, email, password, userType);
        localStorage.setItem('user', JSON.stringify(data.user));
        onLogin(data.user, data.token);
      } else {
        // Login
        const data = await authAPI.login(email, password);
        localStorage.setItem('user', JSON.stringify(data.user));
        onLogin(data.user, data.token);
      }
    } catch (err: any) {
      setError(err.message || 'Error al conectar con el servidor. Asegúrate de que el backend esté ejecutándose.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl mb-6 shadow-lg">
            <BrainCog className="w-14 h-14 text-white" />
          </div>
          <h1 className="text-purple-700 mb-3">CognitivaCare</h1>
          <p className="text-2xl text-muted-foreground">
            Tu compañero de estimulación cognitiva
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription className="text-lg">{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegistering && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xl">Nombre</Label>
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-14 h-16 text-xl"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xl">Tipo de Usuario</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setUserType('patient')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      userType === 'patient'
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <p className="text-lg">👤 Paciente</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType('family')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      userType === 'family'
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <p className="text-lg">👨‍👩‍👧 Familiar</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType('healthcare')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      userType === 'healthcare'
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <p className="text-lg">🏥 Personal Sanitario</p>
                  </button>
                </div>
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-xl">Correo Electrónico</Label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-14 h-16 text-xl"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-xl">Contraseña</Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-14 h-16 text-xl"
                required
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full h-16 text-2xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                {isRegistering ? 'Registrando...' : 'Iniciando...'}
              </>
            ) : (
              isRegistering ? 'Registrarse' : 'Iniciar Sesión'
            )}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-xl text-purple-600 hover:text-purple-800 underline"
          >
            {isRegistering 
              ? '¿Ya tienes cuenta? Inicia sesión' 
              : '¿No tienes cuenta? Regístrate'}
          </button>
        </div>
      </Card>
    </div>
  );
}
