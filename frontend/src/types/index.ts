export interface User {
  id?: string;
  name: string;
  email: string;
  type: 'patient' | 'family' | 'healthcare';
}

export interface CognitiveArea {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  imageUrl: string;
}

export interface Activity {
  id: string;
  areaId: string;
  name: string;
  description: string;
  estimatedTime: number; // en minutos
  cognitiveSkills: string[];
  imageUrl: string;
}

export interface ActivityResult {
  activityId: string;
  areaId: string;
  date: Date;
  timeSpent: number; // en segundos
  correctAnswers: number;
  incorrectAnswers: number;
  percentage: number;
  difficulty: 'facil' | 'medio' | 'dificil';
}

export interface ActivitySession {
  activity: Activity;
  difficulty: 'facil' | 'medio' | 'dificil';
  startTime: number;
  isPaused: boolean;
}
