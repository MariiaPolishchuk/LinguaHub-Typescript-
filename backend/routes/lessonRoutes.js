const express = require('express');
const lessonController = require('../controllers/lessonController');
const router = express.Router();

router.get('/lessons', lessonController.getLessons);
router.post('/lessons', lessonController.createLesson);
router.put('/lessons/:id', lessonController.updateLesson);
router.delete('/lessons/:id', lessonController.deleteLesson);

module.exports = router;
