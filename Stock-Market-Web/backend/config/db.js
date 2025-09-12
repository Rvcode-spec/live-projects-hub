const { Pool, types } = require("pg");
require("dotenv").config();

// Parse NUMERIC (OID 1700) as float
types.setTypeParser(1700, (val) => (val === null ? null : parseFloat(val)));
// Parse BIGINT (OID 20) as int
types.setTypeParser(20, (val) => (val === null ? null : parseInt(val, 10)));

// Ensure port is number
const DB_PORT = parseInt(process.env.DB_PORT, 10);

// Determine SSL config
const sslConfig = process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false;

// Create the PostgreSQL pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  ssl: sslConfig,
});

// Test the connection immediately
(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("✅ Database Connected at:", res.rows[0].now);
  } catch (err) {
    console.error("❌ Database Connection Error:", err.message);
  }
})();

module.exports = pool;
