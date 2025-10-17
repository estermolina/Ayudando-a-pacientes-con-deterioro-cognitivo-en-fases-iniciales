import { Phone, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function EmergencyContact() {
  return (
    <Card className="bg-red-50 border-red-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-red-900">
          <Phone className="w-6 h-6" />
          Contacto de Emergencia
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between p-4 bg-white rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-red-100 p-2 rounded-full">
              <User className="w-5 h-5 text-red-700" />
            </div>
            <div>
              <p className="text-red-900">Dr. María García</p>
              <p className="text-sm text-muted-foreground">Médico de cabecera</p>
            </div>
          </div>
          <Button variant="destructive" size="lg">
            Llamar
          </Button>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-white rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-red-100 p-2 rounded-full">
              <User className="w-5 h-5 text-red-700" />
            </div>
            <div>
              <p className="text-red-900">Ana Martínez</p>
              <p className="text-sm text-muted-foreground">Familiar</p>
            </div>
          </div>
          <Button variant="destructive" size="lg">
            Llamar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
