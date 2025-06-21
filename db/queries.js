import pool from './db.js';

// Dynamic queries that return a list of products in the given order

export async function getBikesSortedBy(sortBy, direction) {
  let orderBy = '';
  let selectRating = '';
  let joinReviews = '';
  let groupBy = 'GROUP BY b.id';

  if (sortBy === 'price') {
    const safeDirection = direction === 'desc' ? 'DESC' : 'ASC';
    // Sort by price in ascending or descending order
    orderBy = `ORDER BY b.price ${safeDirection}`;
  } else if (sortBy === 'popularity') {
    // Sort by popularity
    orderBy = 'ORDER BY b.sold DESC';
  } else if (sortBy === 'added') {
    // Sort by added date
    orderBy = 'ORDER BY b.added DESC';
  } else if (sortBy === 'rating') {
    // Sort by highest rating
    selectRating = ', COALESCE(AVG(r.rating), 0) AS average_rating';
    joinReviews = `LEFT JOIN reviews r ON r.item_id = b.id AND r.item_type = 'bike'`;
    orderBy = 'ORDER BY average_rating DESC';
  } else {
    // Default sortingoption
    orderBy = 'ORDER BY b.added DESC';
  }

  const { rows } = await pool.query(`
    SELECT 
      b.*
      ${selectRating}
    FROM bikes b
    ${joinReviews}
    ${groupBy}
    ${orderBy};
  `);

  return rows;
}

export async function getAccessoriesSortedBy(sortBy, direction) {
  let orderBy = '';
  let safeDirection = direction === 'desc' ? 'DESC' : 'ASC';

  if (sortBy === 'price') {
    // Sort by min price ascending/descending
    orderBy = `ORDER BY MIN(ap.price) ${safeDirection}`;
  } else if (sortBy === 'popularity') {
    // Popularity altijd DESC
    orderBy = 'ORDER BY a.sold DESC';
  } else if (sortBy === 'added') {
    // Added date altijd DESC
    orderBy = 'ORDER BY a.added DESC';
  } else if (sortBy === 'rating') {
    // Rating altijd DESC
    orderBy = 'ORDER BY avg_rating DESC';
  } else {
    // Default: added DESC
    orderBy = 'ORDER BY a.added DESC';
  }

  const { rows } = await pool.query(`
    SELECT 
      a.id,
      a.name,
      a.description,
      a.image_url,
      a.type,
      a.category,
      a.introduction,
      a.sold,
      a.added,
      COALESCE(AVG(r.rating), 0) AS avg_rating,
      json_agg(
        json_build_object(
          'id', ap.id,
          'price', ap.price,
          'size', ap.size
        ) ORDER BY ap.price ASC
      ) AS prices
    FROM accessories a
    JOIN accessory_prices ap ON ap.accessory_id = a.id
    LEFT JOIN reviews r ON r.item_id = a.id AND r.item_type = 'accessory'
    GROUP BY a.id
    ${orderBy};
  `);

  return rows;
}
