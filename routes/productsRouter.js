import { Router } from 'express';
import {
  getAllBikes,
  getAllAccessories,
  getAllAccessoryPrices,
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
