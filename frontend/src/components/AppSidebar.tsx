import { Brain, TrendingUp, LogOut, User as UserIcon, Home, Camera, BrainCog, Dumbbell } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
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
  // Profile image state and logic
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Load profile image from localStorage on mount or when user changes
  useEffect(() => {
    if (!user.email) return;
    
    const savedImage = localStorage.getItem(`profileImage_${user.email}`);
    if (savedImage) {
      setProfileImage(savedImage);
    } else {
      // Clear the image if no saved image for this user
      setProfileImage(null);
    }
  }, [user.email]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user.email) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Por favor selecciona un archivo de imagen válido');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('La imagen es demasiado grande. Por favor selecciona una imagen menor a 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setProfileImage(result);
      localStorage.setItem(`profileImage_${user.email}`, result);
    };
    reader.readAsDataURL(file);
  };

  const openFileSelector = () => {
    fileInputRef.current?.click();
  };
  
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
    <Sidebar className="bg-white border-r border-gray-200" collapsible="icon">
      <SidebarHeader className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <BrainCog className="w-8 h-8 text-white" />
          </div>
          <div className="min-w-0 group-data-[collapsible=icon]:hidden">
            <h2 className="text-purple-700 truncate">CognitivaCare</h2>
          </div>
        </div>
        
        {/* User Info */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:bg-transparent">
          <div className="flex items-center gap-3">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              {profileImage ? (
                <div className="relative group/photo w-20 h-20 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10 transition-all">
                  <img 
                    src={profileImage} 
                    alt="Foto de perfil" 
                    className="w-full h-full rounded-full object-cover border-3 border-purple-400"
                  />
                  <button
                    onClick={openFileSelector}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover/photo:opacity-100 transition-opacity"
                    aria-label="Cambiar foto de perfil"
                  >
                    <Camera className="w-6 h-6 text-white group-data-[collapsible=icon]:w-4 group-data-[collapsible=icon]:h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={openFileSelector}
                  className="w-20 h-20 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10 rounded-full border-3 border-dashed border-purple-400 flex items-center justify-center bg-white hover:bg-purple-100 transition-all"
                  aria-label="Subir foto de perfil"
                >
                  <Camera className="w-7 h-7 text-purple-600 group-data-[collapsible=icon]:w-5 group-data-[collapsible=icon]:h-5" />
                </button>
              )}
            </div>
            
            <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
              <p className="text-gray-900 truncate mb-2">{user.name}</p>
              <div className={`inline-flex px-3 py-1 rounded-full ${getRoleColor(user.type)}`}>
                <span className="text-sm">{getRoleLabel(user.type)}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
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
                  tooltip="Inicio"
                >
                  <Home className="w-5 h-5 mr-3" />
                  <span>Inicio</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => onNavigate('activities')}
                  className="h-12 px-4 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors"
                  tooltip="Actividades"
                >
                  <Dumbbell className="w-5 h-5 mr-3" />
                  <span>Actividades</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => onNavigate('results')}
                  className="h-12 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                  tooltip="Resultados"
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
              tooltip="Cerrar Sesión"
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