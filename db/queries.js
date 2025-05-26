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

// Sorting data - Bicycles

export async function getBikesByPriceAsc() {
  const { rows } = await pool.query('SELECT * FROM bikes ORDER BY price ASC');
  return rows;
}

export async function getBikesByPriceDesc() {
  const { rows } = await pool.query('SELECT * FROM bikes ORDER BY price DESC');
  return rows;
}

// Sorting data - Accessories

export async function getAccessoriesByPriceAsc() {
  const { rows } = await pool.query(
    'SELECT * FROM accessories ORDER BY price ASC'
  );
  return rows;
}

export async function getAccessoriesByPriceDesc() {
  const { rows } = await pool.query(
    'SELECT * FROM accessories ORDER BY price DESC'
  );
  return rows;
}
