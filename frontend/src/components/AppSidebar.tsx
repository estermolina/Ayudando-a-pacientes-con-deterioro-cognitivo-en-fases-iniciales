import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, LogOut, User as UserIcon, Home, Camera, BrainCog, Dumbbell } from 'lucide-react';
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
import { Button } from './ui/button';

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

     const fileInputRef = useRef<HTMLInputElement>(null);
    const [profileImage, setProfileImage] = useState<string | null>(null);
  
    console.log('RENDER - profileImage state:', profileImage ? 'Imagen cargada' : 'null', profileImage?.substring(0, 50));
  
    // Load profile image from localStorage
    useEffect(() => {
      const savedImage = localStorage.getItem('userProfileImage');
      console.log('useEffect - Cargando desde localStorage:', savedImage ? 'Encontrada' : 'No encontrada');
      if (savedImage) {
        setProfileImage(savedImage);
        console.log('useEffect - Estado actualizado con imagen desde localStorage');
      }
    }, []);
  
    // Handle image upload
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      console.log('Archivo seleccionado:', file);
      
      if (file) {
        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          alert('La imagen es demasiado grande. Por favor, selecciona una imagen menor a 5MB.');
          return;
        }
  
        // Check file type
        if (!file.type.startsWith('image/')) {
          alert('Por favor, selecciona un archivo de imagen válido.');
          return;
        }
  
        console.log('Leyendo archivo...');
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          console.log('Imagen convertida, longitud:', base64String.length);
          console.log('Primeros caracteres:', base64String.substring(0, 50));
          setProfileImage(base64String);
          localStorage.setItem('userProfileImage', base64String);
          console.log('Imagen guardada en estado y localStorage');
        };
        reader.onerror = (error) => {
          console.error('Error al leer el archivo:', error);
          alert('Error al cargar la imagen. Por favor, intenta con otra imagen.');
        };
        reader.readAsDataURL(file);
      }
    };
    
    // Handle click to open file selector
    const handleProfileClick = () => {
      fileInputRef.current?.click();
    };

  return (
    <Sidebar className="bg-white border-r border-gray-200">
      <SidebarHeader className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <BrainCog className="w-8 h-8 text-white" />
          </div>
          <div className="min-w-0">
            <h2 className="text-purple-700 truncate">CognitivaCare</h2>
          </div>
        </div>
        
        {/* User Info */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4">
          <div className="flex items-center gap-3">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              {profileImage ? (
                <div className="relative group w-20 h-20">
                  <img 
                    src={profileImage} 
                    alt="Foto de perfil" 
                    className="w-20 h-20 rounded-full object-cover border-3 border-purple-400"
                  />
                  <button
                    onClick={handleProfileClick}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Cambiar foto de perfil"
                  >
                    <Camera className="w-6 h-6 text-white" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleProfileClick}
                  className="w-20 h-20 rounded-full border-3 border-dashed border-purple-400 flex items-center justify-center bg-white hover:bg-purple-100 transition-colors"
                  aria-label="Subir foto de perfil"
                >
                  <Camera className="w-7 h-7 text-purple-600" />
                </button>
              )}
            </div>

            <div className="min-w-0 flex-1">
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
                  <Dumbbell className="w-5 h-5 mr-3" />
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
