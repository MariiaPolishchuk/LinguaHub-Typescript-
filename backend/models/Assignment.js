const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
  question: { type: String, required: true },
  options: [String],
  correctAnswer: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Assignment', assignmentSchema);
