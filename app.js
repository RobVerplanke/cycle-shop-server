import cors from 'cors';
import express from 'express';
import { productsRouter } from './routes/productsRouter.js';
import { reviewsRouter } from './routes/reviewsRouter.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Get product data
app.use('/products', productsRouter);

// Get or post reviews
app.use('/reviews', reviewsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
