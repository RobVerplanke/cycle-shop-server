import { Router } from 'express';
import {
  getReviewsByProductId,
  getBikesSortedBy,
  getAccessoriesSortedBy,
} from '../db/queries.js';

export const productsRouter = Router();

// Valid argument values
const validCategories = ['bike', 'accessory'];
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
  const rawSearch =
    typeof req.query.search === 'string' ? req.query.search.trim() : undefined;
  const search = rawSearch && rawSearch.length > 0 ? rawSearch : undefined;

  if (search && search.length < 2) {
    return res
      .status(400)
      .json({ error: 'Search term too short (minimum 2 characters)' });
  }

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

  try {
    if (category === 'bike') {
      return res.json(await getBikesSortedBy(by, direction, search));
    }
    if (category === 'accessory') {
      return res.json(await getAccessoriesSortedBy(by, direction, search));
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }

  return res.status(400).json({ error: 'Unhandled category' });
});
