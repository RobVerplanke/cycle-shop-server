import express from 'express';
import rateLimit from 'express-rate-limit';
import { createReview } from '../db/queries.js';

const reviewLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Max. 5 reviews per 15 min per IP
  message: 'Too many reviews submitted, please try again later.',
});

const router = express.Router();

router.post('/reviews', reviewLimiter, createReview);

export default router;
