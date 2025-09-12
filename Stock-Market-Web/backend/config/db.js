const { Pool, types } = require("pg");
require("dotenv").config();

// Parse NUMERIC (OID 1700) as float
types.setTypeParser(1700, (val) => (val === null ? null : parseFloat(val)));
// (optional) Parse BIGINT (OID 20) as int
types.setTypeParser(20, (val) => (val === null ? null : parseInt(val, 10)));

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
});

// Test connection
pool.connect()
  .then(client => {
    console.log("✅ Database connected:", client.database);
    client.release();
  })
  .catch(err => {
    console.error("❌ Database connection error:", err.message);
  });

module.exports = pool;


