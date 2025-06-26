import pool from './db.js';

// Dynamic queries that return a list of products in the given order

// Bicycles
export async function getBikesSortedBy(sortBy, direction, search) {
  let orderBy = '';
  let selectRating = ', COALESCE(AVG(r.rating), 0) AS avg_rating';
  let joinReviews = `LEFT JOIN reviews r ON r.item_id = b.id AND r.item_type = 'bike'`;
  let groupBy = 'GROUP BY b.id';
  let values = [];
  let whereClause = '';

  if (search) {
    const searchTerm = `%${search.toLowerCase()}%`;
    values.push(searchTerm, searchTerm, searchTerm);
    whereClause = `
      WHERE
        LOWER(b.name) LIKE $1 OR
        LOWER(b.description) LIKE $2 OR
        LOWER(b.introduction) LIKE $3
    `;
  }

  const safeDirection = direction === 'asc' ? 'ASC' : 'DESC';

  if (sortBy === 'price') {
    orderBy = `ORDER BY b.price ${safeDirection}`;
  } else if (sortBy === 'popularity') {
    orderBy = 'ORDER BY b.sold DESC';
  } else if (sortBy === 'added') {
    orderBy = 'ORDER BY b.added DESC';
  } else if (sortBy === 'rating') {
    orderBy = 'ORDER BY avg_rating DESC';
  } else {
    orderBy = 'ORDER BY b.added DESC';
  }

  const query = `
    SELECT 
      b.*
      ${selectRating}
    FROM bikes b
    ${joinReviews}
    ${whereClause}
    ${groupBy}
    ${orderBy};
  `;

  const { rows } = await pool.query(query, values);

  return rows.map((row) => ({
    ...row,
    price: parseFloat(row.price),
  }));
}

// Accessories
export async function getAccessoriesSortedBy(sortBy, direction, search) {
  let orderBy = '';
  const safeDirection = direction === 'asc' ? 'ASC' : 'DESC';
  let values = [];
  let whereClause = '';

  if (search) {
    const searchTerm = `%${search.toLowerCase()}%`;
    values.push(searchTerm, searchTerm, searchTerm);
    whereClause = `
      WHERE
        LOWER(a.name) LIKE $1 OR
        LOWER(a.description) LIKE $2 OR
        LOWER(a.introduction) LIKE $3
    `;
  }

  if (sortBy === 'price') {
    orderBy = `ORDER BY MIN(ap.price) ${safeDirection}`;
  } else if (sortBy === 'popularity') {
    orderBy = 'ORDER BY a.sold DESC';
  } else if (sortBy === 'added') {
    orderBy = 'ORDER BY a.added DESC';
  } else if (sortBy === 'rating') {
    orderBy = 'ORDER BY avg_rating DESC';
  } else {
    orderBy = 'ORDER BY a.added DESC';
  }

  const query = `
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
    ${whereClause}
    GROUP BY a.id
    ${orderBy};
  `;

  const { rows } = await pool.query(query, values);

  return rows.map((row) => ({
    ...row,
    prices: row.prices.map((p) => ({
      ...p,
      price: parseFloat(p.price),
    })),
  }));
}

// Reviews
export async function getReviewsByProductId(category, productId) {
  if (!category || !productId) {
    throw new Error('Missing category or productId');
  }

  const { rows } = await pool.query(
    `
    SELECT
      r.id,
      r.rating,
      r.review,
      r.name,
      r.email
    FROM reviews r
    WHERE r.item_id = $1 AND r.item_type = $2
    ORDER BY r.added DESC
    LIMIT 50;
  `,
    [productId, category]
  );

  return rows;
}
