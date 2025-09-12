const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { createCompanyTable } = require('./modules/companySchema');

dotenv.config();

const server = express();

// CORS config
const corsOptions = {
  origin: [
    "https://stockvisionapp.netlify.app",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

server.use(cors(corsOptions));
server.options("/", cors(corsOptions)); // Preflight

server.use(express.json());

// Initialize DB table
createCompanyTable();

// Routes
const companyRoutes = require("./routes/companyRoutes");
server.use("/api", companyRoutes);

// Start server
const port = process.env.PORT || 9000;
server.listen(port, () => {
  console.log(`✅ Stock Server running on port ${port}`);
});
