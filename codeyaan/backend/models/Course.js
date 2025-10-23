const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // staff who created it
  department: String, // attribute used by ABAC
  visibility: { type: String, enum: ['public','department','private'], default: 'public' },
  metadata: { type: Object, default: {} }
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
