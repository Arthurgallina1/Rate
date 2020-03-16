// const User = require('../model/UserSchema');
module.exports = {

    /**
    @route POST user/auth
    @desc Auth user login
    @access Public
    */
    async store(req, res){
        
        const { originalname: name, filename: path } = req.file;
        
        // const file = await File.create({
        //     name,
        //     path,

        // })
        return res.json(req.file)
        
    }
}


