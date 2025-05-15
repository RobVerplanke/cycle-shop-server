import pool from './db.js';

export async function getAllBikes() {
  const { rows } = await pool.query('SELECT * FROM bikes');
  return rows;
}

export async function getAllAccessories() {
  const { rows } = await pool.query('SELECT * FROM accessories');
  return rows;
}

export async function getAllAccessoryPrices() {
  const { rows } = await pool.query('SELECT * FROM accessory_prices');
  return rows;
}
