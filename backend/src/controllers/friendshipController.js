const User = require('../model/UserSchema');
const connection = require('../utils/connection');

module.exports = {
  /**
    @route GET friendship/index/:following_id
    @desc Getting all user's is following
    @access Auth'ed
    */
  async index(req, res) {
    const { following_id } = req.params;

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
      .join('users', { 'users.id': 'followed_id' })
      .where('following_id', following_id);

    return res.status(200).json(following);
  },

  /**
    @route GET friendship/followers/:followed_id
    @desc Getting all user's followers
    @access Auth'ed
    */
  async indexFollower(req, res) {
    const { followed_id } = req.params;

    const following = await connection('friendship')
      .select(
        'friendship.id',
        'friendship',
        'followed_id',
        'following_id',
        'name',
        'email',
        'username'
      )
      .join('users', { 'users.id': 'following_id' })
      .where('followed_id', followed_id);

    return res.status(200).json(following);
  },

  /**
    @route POST friendship/add
    @desc Follow user
    @access Auth'ed
    */
  /** 
      @TODO verify if friendship doesn't exists.
      */
  async store(req, res) {
    const { following_id, followed_id } = req.body;
    try {
      const [id] = await connection('friendship')
        .insert({
          following_id,
          followed_id,
        })
        .returning('id');
      return res.status(201).json({ id, success: true });
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  /**
    @route DELETE friendship/remove
    @desc Delete this friendship
    @access Auth'ed
    */
  async remove(req, res) {
    const { following_id, followed_id } = req.body;
    try {
      const respon = await connection('friendship')
        .where('friendship.following_id', following_id)
        .andWhere('friendship.followed_id', followed_id)
        .del();
      return res.status(204).json({ success: true });
    } catch (err) {
      console.log(err);
    }
  },
};
