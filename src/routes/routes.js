const express = require('express');
const authController = require('../controllers/authController')
const friendController = require('../controllers/friendController')
const dashboardController = require('../controllers/dashboardController')
const authMiddleware = require('../middlewares/auth')
const routes = express.Router();


routes.post('/user/register', authController.store);
routes.post('/user/auth', authController.auth);
routes.get('/user/show', authController.index);
routes.use(authMiddleware);


routes.get('/main/friends', friendController.index)
routes.post('/profile/:id/', friendController.store)

routes.get('/dashboard/:id/', dashboardController.index)

module.exports = routes;