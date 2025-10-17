import { ReactNode } from 'react';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { User } from '../types';

interface AppLayoutProps {
  user: User;
  children: ReactNode;
  onNavigate: (destination: 'menu' | 'activities' | 'results') => void;
  onLogout: () => void;
}

export function AppLayout({ user, children, onNavigate, onLogout }: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-gray-50">
        <AppSidebar user={user} onNavigate={onNavigate} onLogout={onLogout} />
        <div className="flex-1 flex flex-col w-full">
          {/* Mobile Menu Trigger */}
          <div className="sticky top-0 z-10 bg-white border-b p-4 lg:hidden flex items-center gap-3">
            <SidebarTrigger className="h-10 w-10" />
            <h2 className="text-purple-700">CognitivaCare</h2>
          </div>
          
          {/* Main Content */}
          <main className="flex-1 w-full">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
