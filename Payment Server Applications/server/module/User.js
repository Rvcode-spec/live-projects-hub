const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const User = 
sequelize.define("User", {
  user_id: { type: DataTypes.STRING(20), primaryKey: true },
  username: DataTypes.STRING(50),
  password: DataTypes.STRING(300),
  txn_pin: DataTypes.STRING(200),
  invalid_pin_count: { type: DataTypes.TINYINT, defaultValue: 0 },
  invalid_password_count: { type: DataTypes.TINYINT, defaultValue: 0 },
  category_code: DataTypes.STRING(10),
  user_type: DataTypes.STRING(20),
  first_name: DataTypes.STRING(50),
  last_name: DataTypes.STRING(100),
  msisdn: DataTypes.STRING(10),
  email_id: DataTypes.STRING(50),
  city: DataTypes.STRING(200),
  state: DataTypes.STRING(20),
  district: DataTypes.STRING(20),
  address: DataTypes.TEXT,
  pan: DataTypes.STRING(50),
  gst_number: DataTypes.STRING(50),
  aadhaar: DataTypes.STRING(50),
  pincode: DataTypes.STRING(20),
  parent_id: DataTypes.STRING(50),
  owner_id: DataTypes.STRING(20),
  thres_profile_id: DataTypes.STRING(20),
  join_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  modified_on: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  status: { type: DataTypes.STRING(100), defaultValue: "active" }
});
module.exports = User;