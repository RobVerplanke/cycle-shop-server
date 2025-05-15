import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
  });

  await client.connect();

  const result = await client.query('SELECT * FROM accessory_prices');
  console.log(result.rows);

  await client.end();
}

main();
