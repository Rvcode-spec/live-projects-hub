const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const dbPool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

dbPool.on('connect', () => {
  console.log("✅ Database connected successfully");
});

dbPool.on('error', (err) => {
  console.error("❌ Database connection error:", err);
});
 

module.exports = dbPool;
