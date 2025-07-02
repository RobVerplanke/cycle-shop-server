import cors from 'cors';
import express from 'express';
import { productsRouter } from './routes/productsRouter.js';
import reviewRouter from './routes/reviewRouter.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Use corresponding routers
app.use('/products', productsRouter);
app.use('/api', reviewRouter);

// Listen for requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
