const express = require('express');
const authController = require('../controllers/authController')
const authMiddleware = require('../middlewares/auth')
const routes = express.Router();


routes.post('/user/register', authController.store);
routes.post('/user/auth', authController.auth);
routes.use(authMiddleware);
routes.get('/user/show', authController.index);

module.exports = routes;