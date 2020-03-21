const File = require('../model/File');

module.exports = {
    
    /**
    @route POST post/rate
    @desc Save rating/comment on a rate
    @access Auth
    */
    async store(req, res) {
        const {postId, comment, userId,rate} = req.body;

        const newRate = Object.assign({
            userId,
            rate,
            comment
        });
        const post = await File.findOne({ _id: postId });
        post.votes.push(newRate);
        post.save();
        // console.log(post.votes)

        return res.json(post)

    }
}