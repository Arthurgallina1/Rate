const User = require('../model/UserSchema');


module.exports = {
    
    /**
    @route POST add
    @desc Add user with :id
    @access Public
    */
    async store(req, res) {
        
        try {
            const { currentUserId, userToBeAddId } = req.body;

            const currentUser = await User.findById(currentUserId);
            const userToBeAdd = await User.findById(userToBeAddId);
            

            if (!userToBeAdd) {
                return res.status(400).json({ error: 'Dev not exists' })
            }

            currentUser.following.push(userToBeAdd._id);
            await currentUser.save();

            return res.json(currentUser)

            
            } catch (err) {
                console.log(err);
                
            }
        }
    
    }

