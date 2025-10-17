import { Bell, Pill, Calendar, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

interface Reminder {
  id: string;
  title: string;
  time: string;
  icon: "pill" | "calendar" | "coffee";
  completed: boolean;
}

const reminders: Reminder[] = [
  { id: "1", title: "Tomar medicamento matutino", time: "09:00", icon: "pill", completed: true },
  { id: "2", title: "Ejercicio de memoria", time: "11:00", icon: "coffee", completed: false },
  { id: "3", title: "Cita con el doctor", time: "15:30", icon: "calendar", completed: false },
  { id: "4", title: "Medicamento de la tarde", time: "18:00", icon: "pill", completed: false },
];

const iconMap = {
  pill: Pill,
  calendar: Calendar,
  coffee: Coffee,
};

export function ReminderSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="w-6 h-6" />
          Recordatorios de Hoy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {reminders.map((reminder) => {
          const Icon = iconMap[reminder.icon];
          return (
            <div 
              key={reminder.id}
              className={`flex items-center gap-4 p-4 rounded-lg border ${
                reminder.completed ? 'bg-muted' : 'bg-white'
              }`}
            >
              <Checkbox 
                checked={reminder.completed}
                className="w-6 h-6"
              />
              <div className="bg-blue-100 p-2 rounded-lg">
                <Icon className="w-5 h-5 text-blue-700" />
              </div>
              <div className="flex-1">
                <p className={reminder.completed ? 'line-through text-muted-foreground' : ''}>
                  {reminder.title}
                </p>
                <p className="text-sm text-muted-foreground">{reminder.time}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
