const Post = require('../model/Post');

module.exports = {
  /**
    @route POST post/rate
    @desc Save rating/comment on a rate
    @access Auth
    */
  async store(req, res) {
    const { postId, comment, userId, rate } = req.body;

    const newRate = Object.assign({
      userId,
      rate,
      comment,
    });
    const post = await Post.findOne({ _id: postId });
    post.votes.push(newRate);
    post.save();
    // console.log(post.votes)

    return res.json(post);
  },

  /**
    @route GET post/index
    @desc Show all valid posts for user
    @access Auth
    */
  async index(req, res) {
    const { followerList } = req.body;
    console.log(req.body);

    const posts = await Post.find({
      userId: {
        $in: followerList,
      },
    });

    return res.json(posts);
  },
};
