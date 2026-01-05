import {Router} from 'express';
import {generateWeeklyCoach} from "../services/aiCoach.service"

const router = Router();

router.post('/',  async (req, res) => {
    try {
        const userData = req.body;
        const result = await generateWeeklyCoach(userData);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'AI servisi çalıştırılamadı.' });
    }
});

export default router;