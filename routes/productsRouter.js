import { Router } from 'express';

export const productsRouter = Router();

// Get products
productsRouter.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Mountainbike X1',
      category: 'Mountain',
      description: 'Robuuste fiets voor elk terrein',
      image: '/images/mountainbike.jpg',
    },
  ]);
});
