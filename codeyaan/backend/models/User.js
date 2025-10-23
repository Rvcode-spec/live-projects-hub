const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin','staff','student'], default: 'student' },
  department: { type: String }, // example attribute for ABAC
  attributes: { type: Object, default: {} }, // flexible attributes (e.g., { isVerified: true, level: 'senior' })
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
