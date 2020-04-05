const File = require('../model/File');

module.exports = {
  //craete post
  async storeImg(req, res) {
    const { info } = req.body;
    const post = await File.findOneAndUpdate(
      { _id: info },
      {
        path: `${process.env.APP_URL}/files/${req.file.filename}`,
        filename: req.file.filename,
      },
      { new: true, useFindAndModify: false }
    );
    return res.json(post);
  },

  async storePost(req, res) {
    const { userId, duration, title, description } = req.body;
    const file = await File.create({
      userId,
      duration,
      title,
      description,
    });
    return res.json(file);
  },

  async index(req, res) {
    const { userId } = req.body;

    const posts = await File.find();
    return res.json(posts);
  },

  async show(req, res) {
    const { postid } = req.params;

    const posts = await File.findById(postid);

    return res.json(posts);
  },

  async myposts(req, res) {
    const { userId } = req.body;

    const posts = await File.find({ userId });

    return res.json(posts);
  },
};
