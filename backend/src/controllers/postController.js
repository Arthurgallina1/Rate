const Post = require('../model/Post');
const User = require('../model/UserSchema');
const Notification = require('../model/NotificationSchema');
const connection = require('../utils/connection');

module.exports = {
  //craete post

  async store(req, res) {
    const { title, duration, description, userId } = req.body;
    const file = req.file;
    const newFile = await Post.create({
      userId,
      duration,
      title,
      description,
      filename: file.filename,
      path: `${process.env.APP_URL}/files/${file.filename}`,
    });

    // Notifications
    // Get every follower
    const following = await connection('friendship')
      .select(
        'users.id',
        'friendship',
        'followed_id',
        'following_id',
        'name',
        'email',
        'username'
      )
      .join('users', { 'users.id': 'following_id' })
      .where('followed_id', userId);

    const user = await connection('users')
      .select('name')
      .where('id', userId)
      .first();

    const Notifications = await Promise.all(
      following.map(async (follower) => {
        const content = `Your friend ${user.name} needs your RATE!`;
        const notification = await Notification.create({
          content,
          userId: follower.id,
          read: false,
        });
      })
    );

    return res.json(newFile);
  },

  async storemulti(req, res) {
    const { title, duration, description, userId } = req.body;
    const files = req.files;

    const pathArray = files.map(
      (file) => `${process.env.APP_URL}/files/${file.filename}`
    );
    const newPost = await Post.create({
      userId,
      duration,
      title,
      description,
      filename: files[0].filename,
      path: pathArray,
    });

    // Notifications
    // Get every follower
    const following = await connection('friendship')
      .select(
        'users.id',
        'friendship',
        'followed_id',
        'following_id',
        'name',
        'email',
        'username'
      )
      .join('users', { 'users.id': 'following_id' })
      .where('followed_id', userId);

    const user = await connection('users')
      .select('name')
      .where('id', userId)
      .first();

    const Notifications = await Promise.all(
      following.map(async (follower) => {
        const content = `Your friend ${user.name} needs your RATE!`;
        const notification = await Notification.create({
          content,
          userId: follower.id,
          read: false,
        });
      })
    );

    return res.json(newPost);
  },

  async index(req, res) {
    const { userId } = req.body;

    const posts = await Post.find();
    return res.json(posts);
  },

  async show(req, res) {
    const { postid } = req.params;

    const posts = await Post.findById(postid);

    return res.json(posts);
  },

  async myposts(req, res) {
    const { userId } = req.body;

    const posts = await Post.find({ userId });

    return res.json(posts);
  },
};
