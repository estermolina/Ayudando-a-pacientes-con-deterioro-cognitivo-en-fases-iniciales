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
    <Sidebar className="bg-white border-r border-gray-200">
      <SidebarHeader className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div className="min-w-0">
            <h2 className="text-purple-700 truncate">CognitivaCare</h2>
          </div>
        </div>
        
        {/* User Info */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <UserIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
            <p className="text-gray-900 truncate">{user.name}</p>
          </div>
          <div className={`inline-flex px-3 py-1.5 rounded-full ${getRoleColor(user.type)}`}>
            <span className="text-sm">{getRoleLabel(user.type)}</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 py-2 text-gray-500">Menú Principal</SidebarGroupLabel>
          <SidebarGroupContent className="px-3 mt-2">
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => onNavigate('menu')}
                  className="h-12 px-4 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors"
                >
                  <Home className="w-5 h-5 mr-3" />
                  <span>Inicio</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => onNavigate('activities')}
                  className="h-12 px-4 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors"
                >
                  <Brain className="w-5 h-5 mr-3" />
                  <span>Actividades</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => onNavigate('results')}
                  className="h-12 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                >
                  <TrendingUp className="w-5 h-5 mr-3" />
                  <span>Resultados</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6 border-t border-gray-200">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={onLogout}
              className="h-12 px-4 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span>Cerrar Sesión</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
