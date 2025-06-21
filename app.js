import cors from 'cors';
import express from 'express';
import { productsRouter } from './routes/productsRouter.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Use corresponding router
app.use('/products', productsRouter);

// Listen for requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
