import express from 'express';
import { createReview } from '../db/queries.js';

const router = express.Router();

router.post('/reviews', createReview);

export default router;
