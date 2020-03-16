const User = require('../model/UserSchema');
const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const authConfig = require('../config/keys')


module.exports = {

    // generateToken(params = {}){
    //     return jwt.sign(params, authConfig.secret, {
    //         expiresIn: 86400,
    //     })
    // },

     /**
    @route GET users/showAll
    @desc Register the user
    @access Public
    */
    async index(req,res){

        const allUsers = await User.find({});

        return res.json({allUsers, user: req.userId });

    },

    async show(req,res) {
        const { id } = req.params;
        const user = await User.findById(id);

        res.status(200).json({ user })
    },

    
    /**
    @route POST user/register
    @desc Register the user
    @access Public
    */
    async store(req,res){
        const {
                    name, 
                    username,
                    email, 
                    password, 
                   // confirm_password 
               } = req.body;

        // if(password !== confirm_password){
        //     return res.status(400).json({
        //         msg: "Password do not match!"
        //     });
        // }

        const userExists = await User.findOne({username: username});
        if(userExists){
            res.status(400).json({
                msg: 'Username already exists'
            });
        }

        const emailExists = await User.findOne({email: email});
        if(emailExists) {
            return res.status(400).json({
                msg: "Email is already registered."
            });
        }

        const newUser = new User({
            name,
            username,
            password,
            email
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err,hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save().then(user=> {
                    return res.status(201).json(
                        {
                            newUser,
                            token: jwt.sign({id: user._id}, authConfig.secret, {expiresIn: 86400}),
                            success: true,
                            msg: 'User sucessfully registered!'});
                    })
                

            })
        })   
    },

    /**
    @route POST user/auth
    @desc Auth user login
    @access Public
    */
    async auth(req, res){
        const {
            username,
            password
        } = req.body;

        const user = await User.findOne({username}).select('+password');
        
        if(!user) {
            return res.status(400).json({ 
                msg: "User not found!",
                success: false
            })
        }

        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).json({
                msg: "Invalid password!",
                success: false
            })
        }

        user.password = undefined;
        return res.json({ user, 
            token: jwt.sign({id: user._id}, authConfig.secret, {expiresIn: 86400})
        });


    }
}


