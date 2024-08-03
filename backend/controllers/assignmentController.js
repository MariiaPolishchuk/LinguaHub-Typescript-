const Assignment = require('../models/Assignment');

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAssignment = async (req, res) => {
  const { lessonId, question, options, correctAnswer } = req.body;
  const assignment = new Assignment({ lessonId, question, options, correctAnswer });

  try {
    const newAssignment = await assignment.save();
    res.status(201).json(newAssignment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateAssignment = async (req, res) => {
  try {
    const updatedAssignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAssignment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAssignment = async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Assignment deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
