const connection = require('../utils/connection');
const User = require('../model/UserSchema');
const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const authConfig = require('../config/keys');

module.exports = {
  /**
    @route GET user/index/:following_id
    @desc Show all users 
    @access Auth'ed
    */
  async index(req, res) {
    const { following_id } = req.params;
    const users = await connection('users')
      .select(
        'users.id',
        'name',
        'email',
        'username',
        'friendship.createdAt',
        'friendship'
      )
      .leftJoin('friendship', function () {
        this.on({ 'users.id': 'friendship.followed_id' });
        this.andOn({ 'friendship.following_id': Number(following_id) });
      })
      .whereNot({ 'users.id': following_id });

    return res.json(users);
  },

  async store(req, res) {
    const { name, user, email, password } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) throw err;
        try {
          const [id] = await connection('users')
            .insert({
              name,
              username: user,
              email,
              password: hash,
            })
            .returning('id');
          // console.log({ id });
          return res.status(201).json({
            id,
            success: true,
          });
        } catch (err) {
          console.log(err);
          return res.json(err);
        }
      });
    });
  },

  /**
    @route POST user/auth
    @desc Auth user login
    @access Public
    */
  async auth(req, res) {
    const { username, password } = req.body;

    const user = await connection('users')
      .where('username', username)
      .select('id', 'name', 'email', 'username', 'password', 'createdAt')
      .first();
    if (!user) {
      return res.status(400).json({
        msg: 'User not found!',
        success: false,
      });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        msg: 'Invalid password!',
        success: false,
      });
    }

    user.password = undefined;

    return res.json({
      user,
      token: jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400,
      }),
    });
  },
  /**
    @route GET user/info/:id
    @desc Get user info
    @access Authenticated
    */

  async show(req, res) {
    const { id } = req.params;
    const user = await connection('users')
      .select(['id', 'name', 'email', 'username'])
      .where('id', id)
      .first();
    return res.status(200).json(user);
  },

  async update(req, res) {
    const { email, oldPassword, userId } = req.body;
    console.log(req.body);
    const file = req.file;
    console.log(file);

    // const user = await connection('users')
    //   .select('*')
    //   .where('id', Number(userId));

    // return res.json(user);

    // if(email !== user.email) {
    //     const userExists = await User.findOne({ where: { email }})
    //     if(userExists){
    //         return res.status(400).json({error: 'user already exists.'});
    //     }
    // }

    // if (oldPassword && !(await user.checkPassword(oldPassword))){
    //     return res.status(401).json({error: 'Password doesnt match!'});
    // }

    // await user.update(req.body);
    // const { id, name, avatar } = await User.findByPk(req.userId, {
    //     include: [
    //         {
    //             model: File,
    //             as: 'avatar',
    //             attributes: ['id', 'path', 'url']
    //         }

    //     ]
    // })

    // return res.json({
    //     id,
    //     name,
    //     email,
    //     avatar
    // })
  },
};
