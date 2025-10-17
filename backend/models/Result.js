import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  activityId: { type: String, required: true },
  areaId: { type: String, required: true },
  timeSpent: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  incorrectAnswers: { type: Number, required: true },
  percentage: { type: Number, required: true },
  difficulty: { type: String, enum: ['facil', 'medio', 'dificil'], required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Result', resultSchema);