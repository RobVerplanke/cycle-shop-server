#! /usr/bin/env node

import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const SQL = `
  INSERT INTO accessory_prices (accessory_id, size, price)
  VALUES
  (1, 'L', 27.00),
  (1, 'M', 30.00),
  (1, 'XL', 35.00);

  INSERT INTO accessory_prices (accessory_id, size, price)
  VALUES
  (2, 'L', 30.00),
  (2, 'M', 40.00),
  (2, 'XL', 50.00);

  INSERT INTO accessory_prices (accessory_id, size, price)
  VALUES
  (3, 'L', 25.00),
  (3, 'M', 28.00),
  (3, 'XL', 32.00);

  INSERT INTO accessory_prices (accessory_id, size, price)
  VALUES
  (4, 'L', 45.00),
  (4, 'M', 55.00),
  (4, 'XL', 65.00);

  INSERT INTO accessory_prices (accessory_id, size, price)
  VALUES
  (5, 'L', 30.00),
  (5, 'M', 35.00),
  (5, 'XL', 40.00);

  INSERT INTO accessory_prices (accessory_id, size, price)
  VALUES
  (6, 'L', 125.00),
  (6, 'M', 130.00),
  (6, 'XL', 135.00);

  INSERT INTO accessory_prices (accessory_id, size, price)
  VALUES
  (7, 'L', 135.00),
  (7, 'M', 145.00),
  (7, 'XL', 160.00);

  INSERT INTO accessory_prices (accessory_id, size, price)
  VALUES
  (8, 'L', 180.00),
  (8, 'M', 190.00),
  (8, 'XL', 200.00);

  INSERT INTO accessory_prices (accessory_id, size, price)
  VALUES
  (9, 'L', 200.00),
  (9, 'M', 215.00),
  (9, 'XL', 225.00);

  INSERT INTO accessory_prices (accessory_id, size, price)
  VALUES
  (10, 'L', 150.00),
  (10, 'M', 165.00),
  (10, 'XL', 175.00);
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main().catch((err) => {
  console.error('Error while seeding the database:', err);
  process.exit(1);
});

// INSERT INTO bikes (
//     type,
//     name,
//     introduction,
//     description,
//     price,
//     image_url
//   )
//   VALUES (
//     'bike',
//     'Kryo X26 MTB – Model K',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     350.00,
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-7.jpg'
//   );

//   INSERT INTO bikes (
//     type,
//     name,
//     introduction,
//     description,
//     price,
//     image_url
//   )
//   VALUES (
//     'bike',
//     'Kryo X26 MTB – Model X',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     350.00,
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-1.jpg'
//   );

//   INSERT INTO bikes (
//     type,
//     name,
//     introduction,
//     description,
//     price,
//     image_url
//   )
//   VALUES (
//     'bike',
//     'Kryo X26 MTB – Model Y',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     350.00,
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-5.jpg'
//   );

//   INSERT INTO bikes (
//     type,
//     name,
//     introduction,
//     description,
//     price,
//     image_url
//   )
//   VALUES (
//     'bike',
//     'Kryo X26 MTB – Model Z',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     350.00,
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-4.jpg'
//   );

//   INSERT INTO accessories (
//     type,
//     name,
//     introduction,
//     description,
//     image_url
//   )
//   VALUES (
//     'accessory',
//     'Bicycle Gloves Blue',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/accessories-4.jpg'
//   );

//   INSERT INTO accessories (
//     type,
//     name,
//     introduction,
//     description,
//     image_url
//   )
//   VALUES (
//     'accessory',
//     'Bicycle Gloves Gold',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/accessories-4.jpg'
//   );

//   INSERT INTO accessories (
//     type,
//     name,
//     introduction,
//     description,
//     image_url
//   )
//   VALUES (
//     'accessory',
//     'Bicycle Gloves Pink',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/accessories-5.jpg'
//   );

//   INSERT INTO accessories (
//     type,
//     name,
//     introduction,
//     description,
//     image_url
//   )
//   VALUES (
//     'accessory',
//     'Bicycle Gloves Red',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/accessories-3.jpg'
//   );

//   INSERT INTO accessories (
//     type,
//     name,
//     introduction,
//     description,
//     image_url
//   )
//   VALUES (
//     'accessory',
//     'Bicycle Gloves Yellow',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/accessories-6.jpg'
//   );

//   INSERT INTO accessories (
//     type,
//     name,
//     introduction,
//     description,
//     image_url
//   )
//   VALUES (
//     'accessory',
//     'Bicycle Helmet Blue',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-5.jpg'
//   );

//   INSERT INTO accessories (
//     type,
//     name,
//     introduction,
//     description,
//     image_url
//   )
//   VALUES (
//     'accessory',
//     'Bicycle Helmet Green',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-3.jpg'
//   );

//   INSERT INTO accessories (
//     type,
//     name,
//     introduction,
//     description,
//     image_url
//   )
//   VALUES (
//     'accessory',
//     'Bicycle Helmet Pink',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-1.jpg'
//   );

//   INSERT INTO accessories (
//     type,
//     name,
//     introduction,
//     description,
//     image_url
//   )
//   VALUES (
//     'accessory',
//     'Bicycle Helmet Red',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-4.jpg'
//   );

//   INSERT INTO accessories (
//     type,
//     name,
//     introduction,
//     description,
//     image_url
//   )
//   VALUES (
//     'accessory',
//     'Bicycle Helmet Sky Blue',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     'https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-2.jpg'
//   );

// INSERT INTO accessory_prices (accessory_id, size, price)
//   VALUES
//   (1, 'L', 27.00),
//   (1, 'M', 30.00),
//   (1, 'XL', 35.00);

//   INSERT INTO accessory_prices (accessory_id, size, price)
//   VALUES
//   (2, 'L', 30.00),
//   (2, 'M', 40.00),
//   (2, 'XL', 50.00);

//   INSERT INTO accessory_prices (accessory_id, size, price)
//   VALUES
//   (3, 'L', 25.00),
//   (3, 'M', 28.00),
//   (3, 'XL', 32.00);

//   INSERT INTO accessory_prices (accessory_id, size, price)
//   VALUES
//   (4, 'L', 45.00),
//   (4, 'M', 55.00),
//   (4, 'XL', 65.00);

//   INSERT INTO accessory_prices (accessory_id, size, price)
//   VALUES
//   (5, 'L', 30.00),
//   (5, 'M', 35.00),
//   (5, 'XL', 40.00);

//   INSERT INTO accessory_prices (accessory_id, size, price)
//   VALUES
//   (6, 'L', 125.00),
//   (6, 'M', 130.00),
//   (6, 'XL', 135.00);

//   INSERT INTO accessory_prices (accessory_id, size, price)
//   VALUES
//   (7, 'L', 135.00),
//   (7, 'M', 145.00),
//   (7, 'XL', 160.00);

//   INSERT INTO accessory_prices (accessory_id, size, price)
//   VALUES
//   (8, 'L', 180.00),
//   (8, 'M', 190.00),
//   (8, 'XL', 200.00);

//   INSERT INTO accessory_prices (accessory_id, size, price)
//   VALUES
//   (9, 'L', 200.00),
//   (9, 'M', 215.00),
//   (9, 'XL', 225.00);

//   INSERT INTO accessory_prices (accessory_id, size, price)
//   VALUES
//   (10, 'L', 150.00),
//   (10, 'M', 165.00),
//   (10, 'XL', 175.00);
