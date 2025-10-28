const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const dbPool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

dbPool.on('connect', () => {
  console.log("✅ Database connected successfully");
});

dbPool.on('error', (err) => {
  console.error("❌ Database connection error:", err);
});
 

module.exports = dbPool;
