import express from 'express';
import Result from '../models/Result.js';

const router = express.Router();

// Guardar resultado
router.post('/', async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener resultados de un usuario
router.get('/user/:userId', async (req, res) => {
  try {
    const results = await Result.find({ userId: req.params.userId })
      .sort({ date: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;