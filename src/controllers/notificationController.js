const Notification  = require('../model/NotificationSchema');

module.exports = {
    async index(req, res) {
        const {userId} = req.body;
        const notifications = await Notification.find({
            userId,
        });

        return res.json(notifications)

    },
    async store(req, res) {
        const { userId, content } = req.body;
        const notification = await Notification.create({
            userId,
            content
        })

        return res.json(notification);
    },

    async update(req, res) {
        const notification = await Notification.findByIdAndUpdate(
            req.params.id,
            { read: true },
            { new: true }
        );

        return res.json(notification)
    }
    // async update(req, res) {
    //     // const notification = await Notification.findById(req.params.id);

    //     const notification = await Notification.findByIdAndUpdate(
    //         req.params.id,
    //         { read: true },
    //         { new: true }
    //     );

    //     return res.json(notification)
    // }
}

