import { Brain, TrendingUp, LogOut, User as UserIcon, Home } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from './ui/sidebar';
import { User } from '../types';

interface AppSidebarProps {
  user: User;
  onNavigate: (destination: 'menu' | 'activities' | 'results') => void;
  onLogout: () => void;
}

export function AppSidebar({ user, onNavigate, onLogout }: AppSidebarProps) {
  const getRoleLabel = (type: User['type']) => {
    switch (type) {
      case 'patient':
        return '👤 Paciente';
      case 'family':
        return '👨‍👩‍👧 Familiar';
      case 'healthcare':
        return '🏥 Personal Sanitario';
    }
  };

  const getRoleColor = (type: User['type']) => {
    switch (type) {
      case 'patient':
        return 'bg-purple-100 text-purple-700';
      case 'family':
        return 'bg-blue-100 text-blue-700';
      case 'healthcare':
        return 'bg-green-100 text-green-700';
    }
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-6 border-b">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Brain className="w-7 h-7 text-white" />
          </div>
          <div className="min-w-0">
            <h3 className="text-purple-700 truncate">CognitivaCare</h3>
          </div>
        </div>
        
        {/* User Info */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <UserIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <p className="text-lg text-gray-900 truncate">{user.name}</p>
          </div>
          <div className={`inline-flex px-3 py-1 rounded-full text-sm ${getRoleColor(user.type)}`}>
            {getRoleLabel(user.type)}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg px-6 py-3">Menú Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => onNavigate('menu')}
                  className="h-14 text-lg hover:bg-purple-50"
                >
                  <Home className="w-6 h-6" />
                  <span>Inicio</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => onNavigate('activities')}
                  className="h-14 text-lg hover:bg-purple-50"
                >
                  <Brain className="w-6 h-6" />
                  <span>Actividades</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => onNavigate('results')}
                  className="h-14 text-lg hover:bg-blue-50"
                >
                  <TrendingUp className="w-6 h-6" />
                  <span>Resultados</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6 border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={onLogout}
              className="h-14 text-lg hover:bg-red-50 text-red-600"
            >
              <LogOut className="w-6 h-6" />
              <span>Cerrar Sesión</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
