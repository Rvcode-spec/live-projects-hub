const express = require("express");
const router = express.Router();
const pool = require("../config/db");  // ✅ pool import
const { getCompanies, addCompany } = require("../modules/companySchema");

// GET /api/companies
router.get("/companies", async (req, res) => {
  try {
    const companies = await getCompanies();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// POST /api/companies
router.post("/companies", async (req, res) => {
  console.log("📩 POST /companies called. Body:", req.body);
  try {
    const newCompany = await addCompany(req.body);
    res.status(201).json(newCompany);
  } catch (err) {
    console.log("❌ API error:", err);
    res.status(500).json({
      message: "Server error",
      error: err.message,
      stack: err.stack
    });
  }
});

// ✅ Test DB Route
router.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "ok", time: result.rows[0].now });
  } catch (err) {
    console.error("❌ DB Test Error:", err);
    res.status(500).json({ status: "error", error: err.message });
  }
});

module.exports = router;
