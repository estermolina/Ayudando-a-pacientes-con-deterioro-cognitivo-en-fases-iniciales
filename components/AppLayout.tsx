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
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar user={user} onNavigate={onNavigate} onLogout={onLogout} />
        <div className="flex-1 flex flex-col">
          <div className="sticky top-0 z-10 bg-white border-b p-4 lg:hidden">
            <SidebarTrigger className="h-12 w-12" />
          </div>
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
