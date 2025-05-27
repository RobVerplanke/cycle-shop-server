import { Router } from 'express';
import { getAllReviews } from '../db/queries.js';

export const reviewsRouter = Router();

const reviews = [];

// GET
reviewsRouter.get('/', async (req, res) => {
  const reviews = await getAllReviews();
  res.json(reviews);
});

// POST
reviewsRouter.post('/', (req, res) => {
  const { productId, name, email, comment, rating } = req.body;

  if (!productId || !name || !email || !comment || !rating) {
    return res.status(400).json({ error: 'Incomplete review data' });
  }

  const newReview = {
    id: reviews.length + 1,
    productId,
    name,
    email,
    comment,
    rating,
    createdAt: new Date(),
  };

  reviews.push(newReview);
  res.status(201).json(newReview);
});
