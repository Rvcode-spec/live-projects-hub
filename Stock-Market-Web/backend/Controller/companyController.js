const pool = require("../config/db");
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
  const change = previous_close ? (current_price - previous_close) : 0;
  const change_percent = previous_close
    ? parseFloat(((change / previous_close) * 100).toFixed(2))
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
    console.error("❌ Error inserting company:", err);
    throw err;
  }
};

const getCompanies = async () => {
  try {
    const result = await pool.query("SELECT * FROM companies ORDER BY id");
    return result.rows;
  } catch (err) {
    console.error("❌ Error fetching companies:", err);
    throw err;
  }
};

const deleteAllCompanies = async () => {
  try {
    await pool.query("DELETE FROM companies");
    await pool.query("ALTER SEQUENCE companies_id_seq RESTART WITH 1");
    console.log("✅ All companies deleted and sequence reset");
  } catch (err) {
    console.error("❌ Error deleting companies:", err);
    throw err;
  }
};

module.exports = {
  addCompany,
  getCompanies,
  deleteAllCompanies
};
