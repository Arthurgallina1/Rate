const File = require('../model/File');

module.exports = {

    /**
    @route POST user/auth
    @desc Auth user login
    @access Public
    */
    async store(req, res){
        
        const { originalname: fieldname, filename: path } = req.file;
        const { userId } = req.body;
        const { duration } = req.body;
        // const { , duration } = req.body;

        const file = await File.create({
            userId,
            file: fieldname,
            path,
            duration

        })
        return res.json(file)
        
    }
}


