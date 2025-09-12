const express = require("express");
const router = express.Router();
const pool = require("../config/db"); 
const { getCompanies, addCompany , deleteAllCompanies } = require("../modules/companySchema");
const generateRandomData = require("../utils/generateRandomData");

// GET all companies
router.get("/companies", async (req, res) => {
  try {
    const companies = await getCompanies();
    res.json(companies);
  } catch (err) {
    console.error("❌ Error fetching companies:", err);
    res.status(500).json({ 
      message: "Server error fetching companies", 
      error: err.message 
    });
  }
});

// DELETE all companies
router.delete("/delete", async (req, res) => {
  try {
    await deleteAllCompanies();
    res.json({ message: "All companies deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting companies:", err);
    res.status(500).json({ 
      message: "Server error deleting companies", 
      error: err.message 
    });
  }
});

// POST new company
router.post("/company", async (req, res) => {
  const {
    name,
    symbol,
    sector,
    current_price = 0,
    week_high = 0,
    week_low = 0,
    volume = "0",
    market_cap = "0",
    pe = 0,
    historical_data
  } = req.body;

  // Required fields check
  if (!name || !symbol || !sector) {
    return res.status(400).json({ message: "Name, symbol, and sector are required" });
  }

  try {
    const company = await addCompany({
      name,
      symbol,
      sector,
      current_price: Number(current_price) || 0,
      previous_close: Number(current_price) || 0, // safe default
      week_high: Number(week_high) || 0,
      week_low: Number(week_low) || 0,
      volume: volume?.toString() || "0",
      market_cap: market_cap?.toString() || "0",
      pe: Number(pe) || 0,
      historical_data: Array.isArray(historical_data) && historical_data.length > 0 
        ? historical_data 
        : generateRandomData(365, Number(current_price) || 0, 50)
    });

    res.status(201).json({ message: "Company added successfully", data: company });
  } catch (err) {
    console.error("❌ Error adding company:", err);
    res.status(500).json({ 
      message: "Server error adding company", 
      error: err.message 
    });
  }
});

module.exports = router;
