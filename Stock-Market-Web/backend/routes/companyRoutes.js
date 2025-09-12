const express = require("express");
const router = express.Router();
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
  try {
    const company = await addCompany(req.body);
    res.status(201).json(company);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
