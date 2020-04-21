const express = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');
const authController = require('../controllers/authController');
const friendController = require('../controllers/friendController');
const friendshipController = require('../controllers/friendshipController');
const dashboardController = require('../controllers/dashboardController');
const postController = require('../controllers/postController');
const notificationController = require('../controllers/notificationController');
const rateController = require('../controllers/rateController');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth');
const routes = express.Router();
const upload = multer(multerConfig);

routes.post('/post/storemulti',upload.array('file'),postController.storemulti); // prettier-ignore
routes.post('/user/test', userController.auth);
routes.post('/user/register', userController.store);
// routes.post('/user/auth', authController.auth);
routes.post('/user/auth', userController.auth);
routes.use(authMiddleware);
routes.get('/user/show', authController.index);
routes.get('/user/index/:following_id', userController.index);
routes.get('/user/info/:id', userController.show);
routes.post('/user/updateavatar', upload.single('file'), userController.updateavatar); // prettier-ignore
routes.post('/user/update', upload.single('file'), userController.update);
// routes.post('/add', friendshipController.store);
routes.get('/friendship/index/:following_id', friendshipController.index);
routes.get('/friendship/indexfollowers/:followed_id', friendshipController.indexFollower); // prettier-ignore
routes.post('/friendship/add', friendshipController.store);
routes.post('/friendship/remove', friendshipController.remove);
routes.get('/main/friends', friendController.index);
routes.post('/profile/:id/', friendController.store);
// routes.post('/post/create', postController.storePost);
routes.post('/post/store', upload.single('file'), postController.store);
routes.post('/post/getpost', postController.myposts);
routes.get('/post/index', postController.index);
routes.get('/post/show/:postid', postController.show);
routes.post('/rate/vote', rateController.store);
routes.post('/rate/index', rateController.index);
routes.post('/notifications/index', notificationController.index);
routes.post('/notifications/store', notificationController.store);
routes.put('/notifications/update/:id', notificationController.update);

routes.get('/dashboard/:id/', dashboardController.index);

module.exports = routes;
