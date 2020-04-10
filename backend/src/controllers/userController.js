const connection = require('../utils/connection');
const User = require('../model/UserSchema');
const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const authConfig = require('../config/keys');

module.exports = {
  async index(req, res) {
    const users = await connection('users').select('*');

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

  //   if (!(await bcrypt.compare(password, user.password))) {
  //     return res.status(400).json({
  //       msg: 'Invalid password!',
  //       success: false,
  //     });
  //   }

  //   user.password = undefined;
  //   return res.json({
  //     user,
  //     token: jwt.sign({ id: user._id }, authConfig.secret, {
  //       expiresIn: 86400,
  //     }),
  //   });
  // },
};
