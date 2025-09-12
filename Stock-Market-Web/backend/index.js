const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const { createCompanyTable } = require("./modules/companySchema");

const server = express();

// ✅ CORS config
const corsOptions = {
  origin: [
    "https://stockvisionin.netlify.app", // production frontend
    "http://localhost:3000"              // local dev
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

server.use(cors(corsOptions));
server.options("/", cors(corsOptions));
server.use(express.json());

// ✅ Initialize DB table
createCompanyTable();

// ✅ Routes
const companyRoutes = require("./routes/companyRoutes");
server.use("/api", companyRoutes);

// ✅ Start server
const port = process.env.PORT || 9000;
server.listen(port, () => {
  console.log(`✅ Stock Server running on port ${port}`);
});
