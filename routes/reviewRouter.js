import express from 'express';
import createReview from '../db/queries';

const router = express.Router();

router.post('/reviews', createReview);

export default router;
