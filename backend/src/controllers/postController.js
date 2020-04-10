const Post = require('../model/Post');
const User = require('../model/UserSchema');
const Notification = require('../model/NotificationSchema');

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

    //Notifications
    const user = await User.findById({ _id: userId });

    const Notifications = await Promise.all(
      user.followers.map(async (follower) => {
        const content = `Your friend ${user.name} needs your RATE!`;
        const notification = await Notification.create({
          content,
          userId: follower,
          read: false,
        });
      })
    );

    return res.json(newFile);
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
