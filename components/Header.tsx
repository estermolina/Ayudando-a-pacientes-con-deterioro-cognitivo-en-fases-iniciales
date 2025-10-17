import { Brain, Menu } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-lg p-2">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-primary">CognitivaCare</h1>
              <p className="text-sm text-muted-foreground">Apoyo cognitivo diario</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#funcionalidades" className="text-foreground hover:text-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#recursos" className="text-foreground hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>
          
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
