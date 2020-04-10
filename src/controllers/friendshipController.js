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
            userToBeAdd.followers.push(currentUser._id);
            await userToBeAdd.save();

            return res.json(currentUser)

            
            } catch (err) {
                console.log(err);
                
            }
        },
    
        async remove(req, res) {
            try {   
                const { currentUserId, unfollowId } = req.body;
                const currentUser = await User.findById(currentUserId);
                const restList = currentUser.following.filter(id => {
                    let idString = JSON.stringify(id)   
                    const formatedId = idString.replace('"', '').replace('"', '');
                    return formatedId !== unfollowId
                })
                let updatedUser = await User.findOneAndUpdate({
                    _id: currentUserId
                }, { following : restList })                 

                return res.json(updatedUser)
            } catch (err) {

            }
        }
    }
