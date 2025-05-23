import { Router } from 'express';
import {
  getAllBikes,
  getAllAccessories,
  getAllAccessoryPrices,
  getBikesByPriceAsc,
  getBikesByPriceDesc,
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

// Sorted data - Bicycles

productsRouter.get('/bikes/sorted', async (req, res) => {
  const { direction } = req.query;
  try {
    let bikes;

    if (direction === 'asc') {
      bikes = await getBikesByPriceAsc();
    } else if (direction === 'desc') {
      bikes = await getBikesByPriceDesc();
    } else {
      return res.status(400).json({ error: 'Invalid sort direction' });
    }

    res.json(bikes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});
