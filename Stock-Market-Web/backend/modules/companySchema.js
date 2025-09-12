const pool = require("../config/db");
// Create companies table
const createCompanyTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS companies (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      symbol VARCHAR(20) UNIQUE NOT NULL,
      sector VARCHAR(50) NOT NULL,
      current_price NUMERIC(10,2) DEFAULT 0,
      change NUMERIC(10,2) DEFAULT 0,
      change_percent NUMERIC(5,2) DEFAULT 0,
      week_high NUMERIC(10,2) DEFAULT 0,
      week_low NUMERIC(10,2) DEFAULT 0,
      volume VARCHAR(20) DEFAULT '0',
      market_cap VARCHAR(20) DEFAULT '0',
      pe NUMERIC(10,2) DEFAULT 0,
      historical_data JSONB DEFAULT '[]'
    )
  `;
  try {
    await pool.query(query);
    console.log("✅ Companies table ready");
  } catch (err) {
    console.error("❌ Error creating companies table:", err);
  }
};

module.exports = {
  createCompanyTable,
};
