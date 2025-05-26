import { Router } from 'express';
import {
  getAllBikes,
  getAllAccessories,
  getAllAccessoryPrices,
  getBikesByPriceAsc,
  getBikesByPriceDesc,
  getAccessoriesByPriceAsc,
  getAccessoriesByPriceDesc,
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

  if (category === 'bikes' && by === 'price') {
    if (direction === 'asc') return res.json(await getBikesByPriceAsc());
    if (direction === 'desc') return res.json(await getBikesByPriceDesc());
  }

  if (category === 'accessories' && by === 'price') {
    if (direction === 'asc') return res.json(await getAccessoriesByPriceAsc());
    if (direction === 'desc')
      return res.json(await getAccessoriesByPriceDesc());
  }

  res.status(400).json({ error: 'Invalid parameters' });
});
