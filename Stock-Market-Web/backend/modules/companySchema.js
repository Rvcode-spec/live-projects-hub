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
    console.error("❌ Error creating companies table:", err.message);
  }
};

// Add a company
const addCompany = async ({
  name,
  symbol,
  sector,
  current_price = 0,
  previous_close = 0,
  week_high = 0,
  week_low = 0,
  volume = "0",
  market_cap = "0",
  pe = 0,
  historical_data = []
}) => {
  previous_close = previous_close || current_price;

  const change = previous_close ? (current_price - previous_close) : 0;
  const change_percent = previous_close
    ? ((change / previous_close) * 100).toFixed(2)
    : 0;

  const query = `
    INSERT INTO companies (
      name, symbol, sector,
      current_price, change, change_percent,
      week_high, week_low, volume, market_cap, pe, historical_data
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
    RETURNING *
  `;

  const values = [
    name,
    symbol,
    sector,
    current_price,
    change,
    change_percent,
    week_high,
    week_low,
    volume,
    market_cap,
    pe,
    JSON.stringify(historical_data)
  ];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error("❌ Error inserting company:", err.message);
    throw err;
  }
};

// Generate random historical data
const generateRandomData = (days, basePrice, variance) => {
  const data = [];
  for (let i = 0; i < days; i++) {
    const price = +(basePrice + (Math.random() - 0.5) * variance).toFixed(2);
    data.push({ day: i + 1, price });
  }
  return data;
};

module.exports = {
  createCompanyTable,
  addCompany,
  generateRandomData
};
