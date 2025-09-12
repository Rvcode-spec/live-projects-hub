const { Pool, types } = require('pg');
require('dotenv').config();

// Numeric parser
types.setTypeParser(1700, val => (val === null ? null : parseFloat(val)));
types.setTypeParser(20, val => (val === null ? null : parseInt(val, 10)));

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  ssl: { rejectUnauthorized: false },
});

// Optional: Test connection without ending the pool
(async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Connection successful:', res.rows[0]);
    // DO NOT call pool.end() here
  } catch (err) {
    console.error('❌ DB Connection Failed:', err);
  }
})();

module.exports = pool;
