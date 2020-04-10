const Post = require('../model/Post');

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
