const express = require('express');
const assignmentController = require('../controllers/assignmentController');
const router = express.Router();

router.get('/assignments', assignmentController.getAssignments);
router.post('/assignments', assignmentController.createAssignment);
router.put('/assignments/:id', assignmentController.updateAssignment);
router.delete('/assignments/:id', assignmentController.deleteAssignment);

module.exports = router;
