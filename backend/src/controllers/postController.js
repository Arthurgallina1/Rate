const File = require('../model/File');

module.exports = {

    /**
    @route POST user/auth
    @desc Auth user login
    @access Public
    */
    async store(req, res){
        
        // console.log(req)
        const {  userId, duration, title, description, path } = req.body;
        console.log(req.body)     
        const file = await File.create({
            userId,
            file: path,
            path: path,
            duration,
            title,
            description

        })
        return res.json(file)
        
    }
}


