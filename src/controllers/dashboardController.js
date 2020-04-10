const User = require('../model/UserSchema');

module.exports = {

    /** 
    @route GET dashboard
    @desc Get dashboard info from user
    @access Public
    */
    async index(req,res){
        const { id } = req.params;
        const userInfo = await User.findOne({ _id: id });

        return res.json( userInfo );
        

    },
}


