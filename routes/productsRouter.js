import { Router } from 'express';
import {
  getReviewsByProductId,
  getBikesSortedBy,
  getAccessoriesSortedBy,
} from '../db/queries.js';

export const productsRouter = Router();

// Valid argument values
const validCategories = ['bikes', 'accessories'];
const validSorts = ['default', 'price', 'popularity', 'added', 'rating'];
const validDirections = ['asc', 'desc'];

productsRouter.get('/:category/:id/reviews', async (req, res) => {
  const { category, id } = req.params;

  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  try {
    const reviews = await getReviewsByProductId(category, id);
    return res.json(reviews);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Sorted data
productsRouter.get('/:category/sorted', async (req, res) => {
  const { category } = req.params;
  const { by, direction = 'desc' } = req.query;

  // Validate arguments
  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  if (!by) {
    return res.status(400).json({ error: 'Missing sort option (by)' });
  }

  if (!validSorts.includes(by)) {
    return res.status(400).json({ error: 'Invalid sort option' });
  }

  if (by === 'price' && direction && !validDirections.includes(direction)) {
    return res.status(400).json({ error: 'Invalid direction' });
  }

  // Get the requested data with validated arguments
  try {
    if (category === 'bikes') {
      return res.json(await getBikesSortedBy(by, direction));
    }
    if (category === 'accessories') {
      return res.json(await getAccessoriesSortedBy(by, direction));
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }

  // Unhandled category
  return res.status(400).json({ error: 'Unhandled category' });
});
