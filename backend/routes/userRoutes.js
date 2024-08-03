const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Примеры маршрутов для работы с пользователями
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router;
