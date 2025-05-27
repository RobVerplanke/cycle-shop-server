import { Router } from 'express';
import {
  getAllBikes,
  getAllAccessories,
  getAllAccessoryPrices,
  getBikesByPriceAsc,
  getBikesByPriceDesc,
  getAccessoriesByPriceAsc,
  getAccessoriesByPriceDesc,
  getBikesByAddedDate,
  getAccessoriesByAddedDate,
  getAccessoriesByPolularity,
} from '../db/queries.js';

export const productsRouter = Router();

productsRouter.get('/bikes', async (req, res) => {
  const bikes = await getAllBikes();
  res.json(bikes);
});

productsRouter.get('/accessories', async (req, res) => {
  const accessories = await getAllAccessories();
  res.json(accessories);
});

productsRouter.get('/accessory-prices', async (req, res) => {
  const accessoryPrices = await getAllAccessoryPrices();
  res.json(accessoryPrices);
});

// Sorted data
productsRouter.get('/:category/sorted', async (req, res) => {
  const { category } = req.params;
  const { by, direction } = req.query;

  // Bikes
  if (category === 'bikes' && by === 'price') {
    if (direction === 'asc') return res.json(await getBikesByPriceAsc());
    if (direction === 'desc') return res.json(await getBikesByPriceDesc());
  }
  if (category === 'bikes' && by === 'added')
    return res.json(await getBikesByAddedDate());
  if (category === 'bikes' && by === 'popularity')
    return res.json(await getBikesByPolularity());

  // Accessories
  if (category === 'accessories' && by === 'price') {
    if (direction === 'asc') return res.json(await getAccessoriesByPriceAsc());
    if (direction === 'desc')
      return res.json(await getAccessoriesByPriceDesc());
  }

  if (category === 'accessories' && by === 'added')
    return res.json(await getAccessoriesByAddedDate());
  if (category === 'accessories' && by === 'popularity')
    return res.json(await getAccessoriesByPolularity());

  // Catch error
  res.status(400).json({ error: 'Invalid parameters' });
});
