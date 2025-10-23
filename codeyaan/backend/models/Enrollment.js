const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  roleInCourse: { type: String, enum: ['student','ta','observer'], default: 'student' },
  grade: { type: Number, default: null }
}, { timestamps: true });

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
