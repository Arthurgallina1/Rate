const express = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');
const authController = require('../controllers/authController')
const friendController = require('../controllers/friendController')
const friendshipController = require('../controllers/friendshipController')
const dashboardController = require('../controllers/dashboardController');
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/auth')
const routes = express.Router();
const upload = multer({dest: '../../tmp/uploads'})

routes.post('/user/register', authController.store);
routes.post('/user/auth', authController.auth);
routes.use(authMiddleware);
routes.get('/user/show', authController.index);
routes.get('/user/info/:id', authController.show);
routes.post('/add', friendshipController.store);
routes.post('/user/remove', friendshipController.remove);
routes.get('/main/friends', friendController.index)
routes.post('/profile/:id/', friendController.store);
routes.post('/post/create', upload.single('file'), postController.store);

routes.get('/dashboard/:id/', dashboardController.index)

module.exports = routes;