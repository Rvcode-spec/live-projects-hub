const express = require('express');
const router = express.Router();
const { addCompany, getCompanies, deleteAllCompanies } = require('../Controller/companyController');

// Get all companies
router.get('/companies', async (req, res) => {
  try {
    const companies = await getCompanies();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: "Error fetching companies", error: err.message });
  }
});

// Add new company
router.post('/company', async (req, res) => {
  try {
    const company = await addCompany(req.body);
    res.status(201).json({ message: "Company added", data: company });
  } catch (err) {
    res.status(500).json({ message: "Error adding company", error: err.message });
  }
});

// Delete all companies
router.delete('/delete', async (req, res) => {
  try {
    await deleteAllCompanies();
    res.json({ message: "All companies deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting companies", error: err.message });
  }
});

module.exports = router;
