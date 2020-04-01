const multer = require('multer');
const { extname, resolve } = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, cb) => {
            let date = new Date
            return cb(null, 'a' +  date.getDay())
        }
    })
}