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

// Bicycles - Sort by price
export async function getBikesByPriceAsc() {
  const { rows } = await pool.query('SELECT * FROM bikes ORDER BY price ASC');
  return rows;
}

export async function getBikesByPriceDesc() {
  const { rows } = await pool.query('SELECT * FROM bikes ORDER BY price DESC');
  return rows;
}

// Bicycles - Sort by popularity
export async function getBikesByPopularity() {
  const { rows } = await pool.query('SELECT * FROM bikes ORDER BY sold DESC');
  return rows;
}

// Bicycles - Sort by added date
export async function getBikesByAddedDate() {
  const { rows } = await pool.query('SELECT * FROM bikes ORDER BY added DESC');
  return rows;
}

// Accessories - Sort by price
export async function getAccessoriesByPriceAsc() {
  const { rows } = await pool.query(
    `SELECT 
  a.id,
  a.name,
  a.description,
  a.image_url,
  a.type,
  a.category,
  a.introduction,
  a.sold,
  a.added,
  json_agg(
    json_build_object(
      'id', ap.id,
      'price', ap.price,
      'size', ap.size
    ) ORDER BY ap.price ASC
  ) AS prices
FROM accessories a
JOIN accessory_prices ap ON ap.accessory_id = a.id
GROUP BY a.id, a.name, a.description, a.image_url, a.type, a.category, a.introduction, a.sold, a.added
ORDER BY MIN(ap.price) ASC;

    `
  );
  return rows;
}

export async function getAccessoriesByPriceDesc() {
  const { rows } = await pool.query(
    `SELECT 
  a.id,
  a.name,
  a.description,
  a.image_url,
  a.type,
  a.category,
  a.introduction,
  a.sold,
  a.added,
  json_agg(
    json_build_object(
      'id', ap.id,
      'price', ap.price,
      'size', ap.size
    ) ORDER BY ap.price ASC
  ) AS prices
FROM accessories a
JOIN accessory_prices ap ON ap.accessory_id = a.id
GROUP BY a.id, a.name, a.description, a.image_url, a.type, a.category, a.introduction, a.sold, a.added
ORDER BY MIN(ap.price) DESC;

    `
  );
  return rows;
}

// Accessories - Sort by popularity
export async function getAccessoriesByPopularity() {
  const { rows } = await pool.query(
    'SELECT * FROM accessories ORDER BY sold DESC'
  );
  return rows;
}

// Accessories - Sort by added date
export async function getAccessoriesByAddedDate() {
  const { rows } = await pool.query(
    'SELECT * FROM accessories ORDER BY added DESC'
  );
  return rows;
}
