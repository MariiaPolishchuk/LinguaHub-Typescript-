const Lesson = require('../models/Lesson');

exports.getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createLesson = async (req, res) => {
  const { title, description, content } = req.body;
  const lesson = new Lesson({ title, description, content });

  try {
    const newLesson = await lesson.save();
    res.status(201).json(newLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateLesson = async (req, res) => {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteLesson = async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lesson deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
