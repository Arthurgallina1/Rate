const File = require('../model/File');

module.exports = {
  /**
    @route POST user/auth
    @desc Auth user login
    @access Public
    */
  async store(req, res) {
    // console.log(req)
    const { userId, duration, title, description, path } = req.body;
    console.log(req.body);
    const file = await File.create({
      userId,
      file: path,
      path: path,
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
