const User = require('../model/UserSchema');


module.exports = {
    
    /**
    @route GET main/friends
    @desc Show all user friends
    @access Public
    */
    async index(req, res) {
        const { userId } = req.query;
        

        const username = await User.findOne({ _id: userId });
        console.log(userId)
        return res.json({username, userId})

    },

    /**
    @route POST main/profile
    @desc Add friend through his profile
    @access Public
    */
    async store(req, res) {
        const { id } = req.params;
        const { currentUserId } = req.body;

        const targetFriend = await User.findById({ _id: id })
        const currentUser = await User.findById({ _id: currentUserId })

          //check if dev exists
          if (!targetFriend) {
            return res.status(400).json({ error: 'Friend does not exists' })
        }
        if(!currentUser.friends.includes(targetFriend._id)){
            currentUser.friends.push(targetFriend)
            await currentUser.save(); 
            
        } else {
            
            return res.json({ msg: 'Already your friend!'})
        }
        
        return res.json({ currentUser })

    }
}